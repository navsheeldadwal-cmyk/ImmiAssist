import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Sparkles,
  Bot,
  User,
  Copy,
  Check,
  RefreshCw,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  PhoneOff
} from 'lucide-react';
import { ChatMessage } from '../types';

interface AiNavigatorProps {
  initialPrompt?: string;
  lang: 'en' | 'es';
}

export const AiNavigator: React.FC<AiNavigatorProps> = ({ initialPrompt, lang }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome-msg',
      role: 'assistant',
      content:
        lang === 'en'
          ? `Welcome to the ImmiAssist Newcomer Navigator.\n\nYou can **type your questions or tap the microphone to speak aloud** in your preferred language (English, Spanish, Arabic, Tagalog, Vietnamese, etc.).\n\nI specialize in **free public school enrollment** and **healthcare clinics/Medi-Cal** across Riverside and San Bernardino counties. How can I assist you today?`
          : `Bienvenido al Navegador para Recién Llegados de ImmiAssist.\n\nPuede **escribir sus preguntas o tocar el micrófono para hablar en voz alta** en su idioma preferido (español, inglés, etc.).\n\nMe especializo en **inscripción escolar gratuita** y **clínicas de salud/Medi-Cal** en Riverside y San Bernardino. ¿Cómo puedo orientarle hoy?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedFollowUps:
        lang === 'en'
          ? [
              'Can my children attend school without an SSN or legal status?',
              'How do I apply for free Full-Scope Medi-Cal in California?',
              'Where is the nearest community health clinic in the Inland Empire?',
              'Can immigrant families receive WIC food support safely?'
            ]
          : [
              '¿Pueden mis hijos ir a la escuela sin SSN o documentos?',
              '¿Cómo solicito Medi-Cal Completo gratuito en California?',
              '¿Dónde encuentro una clínica comunitaria en el Inland Empire?',
              '¿Las familias inmigrantes pueden recibir WIC de forma segura?'
            ]
    }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [voiceAutoRead, setVoiceAutoRead] = useState(true);
  const [playingMessageId, setPlayingMessageId] = useState<string | null>(null);
  const [isHandsFreeCallMode, setIsHandsFreeCallMode] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // Handle incoming initial prompt
  useEffect(() => {
    if (initialPrompt && initialPrompt.trim().length > 0) {
      handleSendMessage(initialPrompt, false);
    }
  }, [initialPrompt]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      stopAudio();
      stopListening();
    };
  }, []);

  const stopAudio = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
      audioPlayerRef.current = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setPlayingMessageId(null);
  };

  // Web Speech recognition for voice input
  const toggleListening = () => {
    if (isListening) {
      stopListening();
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        lang === 'en'
          ? 'Voice speech recognition is not supported in this browser. Please type your message.'
          : 'El reconocimiento de voz no es compatible con este navegador. Por favor escriba su mensaje.'
      );
      return;
    }

    try {
      stopAudio();
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = lang === 'es' ? 'es-US' : 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        setInput(transcript);

        if (event.results[0].isFinal && transcript.trim().length > 1) {
          setIsListening(false);
          handleSendMessage(transcript, true);
        }
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {}
      recognitionRef.current = null;
    }
    setIsListening(false);
  };

  const toggleCallMode = () => {
    if (isHandsFreeCallMode) {
      setIsHandsFreeCallMode(false);
      stopListening();
      stopAudio();
    } else {
      setIsHandsFreeCallMode(true);
      setVoiceAutoRead(true);
      toggleListening();
    }
  };

  const handleSendMessage = async (textToSend?: string, wasSpoken = false) => {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    stopAudio();

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content
          })),
          userQuery: text
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned error ${response.status}`);
      }

      const data = await response.json();
      const rawReply = data.reply || '';

      // Extract follow-ups if present
      const followUps: string[] = [];
      const relatedMatch = rawReply.match(/(?:Related Questions|Preguntas Relacionadas|Follow-up Questions):\s*([\s\S]*)$/i);
      let cleanedReply = rawReply;

      if (relatedMatch && relatedMatch[1]) {
        const lines = relatedMatch[1].split('\n').filter((l: string) => l.trim().length > 0);
        for (const line of lines) {
          const cleanLine = line.replace(/^[-*•\d.]+\s*/, '').replace(/[?？]\s*$/, '?').trim();
          if (cleanLine.length > 5 && cleanLine.length < 120) {
            followUps.push(cleanLine);
          }
        }
        cleanedReply = rawReply.substring(0, relatedMatch.index).trim();
      }

      const botMessageId = `bot-${Date.now()}`;
      const botMessage: ChatMessage = {
        id: botMessageId,
        role: 'assistant',
        content: cleanedReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedFollowUps: followUps.length > 0 ? followUps.slice(0, 3) : undefined
      };

      setMessages((prev) => [...prev, botMessage]);

      // If voice auto-read is enabled or query was spoken or call mode is on
      if (voiceAutoRead || wasSpoken || isHandsFreeCallMode) {
        playSpokenAudio(botMessageId, cleanedReply);
      }
    } catch (err: any) {
      console.error('AI chat failed:', err);
      const errorMessage: ChatMessage = {
        id: `bot-err-${Date.now()}`,
        role: 'assistant',
        content:
          lang === 'en'
            ? 'I apologize, but I could not reach the server at this moment. You can contact Inland Counties Legal Services at (888) 245-4257 or dial 2-1-1 for immediate assistance.'
            : 'Lo siento, no pude conectar con el servidor en este momento. Puede llamar a Servicios Legales al (888) 245-4257 o marcar al 2-1-1.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  // Play audio response using Gemini TTS or Web Speech Synthesis
  const playSpokenAudio = async (messageId: string, text: string) => {
    if (playingMessageId === messageId) {
      stopAudio();
      return;
    }

    stopAudio();
    setPlayingMessageId(messageId);

    const cleanText = text.replace(/[*#_`]/g, '').slice(0, 700).trim();

    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: cleanText })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.audioBase64) {
          const audio = new Audio(`data:audio/wav;base64,${data.audioBase64}`);
          audioPlayerRef.current = audio;

          audio.onended = () => {
            setPlayingMessageId(null);
            audioPlayerRef.current = null;
            if (isHandsFreeCallMode) {
              toggleListening();
            }
          };

          audio.onerror = () => {
            fallbackBrowserSpeech(cleanText);
          };

          await audio.play();
          return;
        }
      }
      fallbackBrowserSpeech(cleanText);
    } catch {
      fallbackBrowserSpeech(cleanText);
    }
  };

  const fallbackBrowserSpeech = (cleanText: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.0;
      utterance.onend = () => {
        setPlayingMessageId(null);
        if (isHandsFreeCallMode) {
          toggleListening();
        }
      };
      utterance.onerror = () => setPlayingMessageId(null);
      window.speechSynthesis.speak(utterance);
    } else {
      setPlayingMessageId(null);
    }
  };

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    if (window.confirm(lang === 'en' ? 'Clear conversation history?' : '¿Borrar el historial?')) {
      stopAudio();
      setMessages([
        {
          id: 'welcome-msg-reset',
          role: 'assistant',
          content:
            lang === 'en'
              ? 'Conversation reset. Speak or type your questions about schools or healthcare in the Inland Empire!'
              : 'Conversación reiniciada. ¡Hable o escriba su pregunta sobre escuelas o salud en el Inland Empire!',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestedFollowUps: [
            lang === 'en'
              ? 'How to enroll children in school without SSN'
              : 'Cómo inscribir a niños en la escuela sin SSN',
            lang === 'en'
              ? 'Full-Scope Medi-Cal eligibility for undocumented adults'
              : 'Elegibilidad de Medi-Cal para adultos indocumentados',
            lang === 'en'
              ? 'Find free community clinics in Riverside or San Bernardino'
              : 'Clínicas comunitarias gratuitas en Riverside o San Bernardino'
          ]
        }
      ]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Top Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-5 mb-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-slate-900">
                  {lang === 'en' ? 'ImmiAssist Navigator' : 'Navegador ImmiAssist'}
                </h2>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  {lang === 'en' ? 'Voice & Text' : 'Voz y Texto'}
                </span>
              </div>
              <p className="text-xs text-slate-500">
                {lang === 'en'
                  ? 'Speak with your microphone or type in any language.'
                  : 'Hable por el micrófono o escriba en cualquier idioma.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Hands-Free Voice Call Simulation Toggle */}
            <button
              onClick={toggleCallMode}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isHandsFreeCallMode
                  ? 'bg-red-600 text-white animate-pulse'
                  : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300'
              }`}
              title={
                lang === 'en'
                  ? 'Start interactive voice call consultation'
                  : 'Iniciar llamada de consulta por voz'
              }
            >
              {isHandsFreeCallMode ? (
                <>
                  <PhoneOff className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'End Voice Call' : 'Terminar Llamada'}</span>
                </>
              ) : (
                <>
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'en' ? 'Voice Call Mode' : 'Modo Llamada'}</span>
                </>
              )}
            </button>

            {/* Auto Read Toggle */}
            <button
              onClick={() => {
                setVoiceAutoRead(!voiceAutoRead);
                if (voiceAutoRead) stopAudio();
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                voiceAutoRead
                  ? 'bg-slate-100 text-slate-800'
                  : 'bg-white text-slate-400 border border-slate-200'
              }`}
              title={
                lang === 'en'
                  ? 'Toggle automatic voice readout'
                  : 'Activar/desactivar lectura en voz alta'
              }
            >
              {voiceAutoRead ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-slate-700" />
                  <span className="hidden sm:inline">Voice ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Voice OFF</span>
                </>
              )}
            </button>

            {/* Reset */}
            <button
              onClick={handleClearChat}
              className="p-2 text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer border border-slate-200"
              title={lang === 'en' ? 'Reset conversation' : 'Reiniciar conversación'}
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Live Listening Indicator */}
        {isListening && (
          <div className="mt-3 p-2.5 bg-red-50 border border-red-200 rounded-xl flex items-center justify-between text-xs text-red-800 animate-pulse">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <Mic className="w-4 h-4 text-red-600" />
              <span className="font-semibold">
                {lang === 'en'
                  ? 'Listening... Speak in your language'
                  : 'Escuchando... Hable en su idioma'}
              </span>
            </div>
            <button
              onClick={stopListening}
              className="text-xs font-bold text-red-700 underline cursor-pointer"
            >
              {lang === 'en' ? 'Stop' : 'Detener'}
            </button>
          </div>
        )}
      </div>

      {/* Messages Scroll View */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-4 sm:p-6 min-h-[380px] max-h-[520px] overflow-y-auto space-y-4">
        {messages.map((message) => {
          const isUser = message.role === 'user';
          const isPlayingThis = playingMessageId === message.id;

          return (
            <div
              key={message.id}
              className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!isUser && (
                <div className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-sm ${
                  isUser
                    ? 'bg-slate-900 text-white rounded-tr-xs'
                    : 'bg-slate-50 text-slate-800 border border-slate-200 rounded-tl-xs'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1.5 opacity-75">
                  <span className="font-semibold">
                    {isUser ? (lang === 'en' ? 'You' : 'Usted') : 'ImmiAssist'}
                  </span>
                  <span>{message.timestamp}</span>
                </div>

                <div className="space-y-1 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content.split('\n').map((line, idx) => {
                    if (line.startsWith('* ') || line.startsWith('- ')) {
                      return (
                        <div key={idx} className="flex items-start gap-1.5 ml-1">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>{line.replace(/^[-*]\s*/, '')}</span>
                        </div>
                      );
                    }
                    return <p key={idx}>{line}</p>;
                  })}
                </div>

                {/* Assistant Audio & Copy Controls */}
                {!isUser && (
                  <div className="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => playSpokenAudio(message.id, message.content)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                          isPlayingThis
                            ? 'bg-amber-100 text-amber-900'
                            : 'bg-white hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        {isPlayingThis ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5 text-amber-700" />
                            <span>{lang === 'en' ? 'Stop Audio' : 'Detener'}</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5 text-slate-600" />
                            <span>{lang === 'en' ? 'Listen' : 'Escuchar'}</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => copyToClipboard(message.id, message.content)}
                        className="p-1 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                        title={lang === 'en' ? 'Copy text' : 'Copiar texto'}
                      >
                        {copiedId === message.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      {lang === 'en' ? 'California Law' : 'Leyes de CA'}
                    </span>
                  </div>
                )}

                {/* Suggested follow-up prompt chips */}
                {message.suggestedFollowUps && message.suggestedFollowUps.length > 0 && (
                  <div className="mt-3 pt-2 border-t border-slate-200/80 flex flex-col gap-1.5">
                    {message.suggestedFollowUps.map((question, qIdx) => (
                      <button
                        key={qIdx}
                        onClick={() => handleSendMessage(question, false)}
                        className="text-left text-xs bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center justify-between group"
                      >
                        <span>{question}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-slate-700 shrink-0 ml-1" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {isUser && (
                <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {loading && (
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-xs px-4 py-2.5 text-xs text-slate-600 flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-slate-500" />
              <span>
                {lang === 'en'
                  ? 'Preparing answer in your language...'
                  : 'Preparando respuesta en su idioma...'}
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Unified Voice & Text Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="mt-4"
      >
        <div
          className={`flex items-center rounded-2xl bg-white border shadow-xs transition-all p-1.5 ${
            isListening
              ? 'border-red-500 ring-2 ring-red-500/20'
              : 'border-slate-300 focus-within:border-slate-800 focus-within:ring-2 focus-within:ring-slate-900/10'
          }`}
        >
          {/* Mic Button */}
          <button
            type="button"
            onClick={toggleListening}
            className={`p-2.5 rounded-xl transition-all cursor-pointer shrink-0 mr-1 ${
              isListening
                ? 'bg-red-600 text-white animate-pulse'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
            title={
              lang === 'en'
                ? 'Tap to speak your question in any language'
                : 'Toque para hablar en cualquier idioma'
            }
          >
            {isListening ? (
              <MicOff className="w-5 h-5" />
            ) : (
              <Mic className="w-5 h-5 text-amber-700" />
            )}
          </button>

          {/* Text Input */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            placeholder={
              isListening
                ? lang === 'en'
                  ? 'Listening... Speak now'
                  : 'Escuchando... Hable ahora'
                : lang === 'en'
                ? 'Type or tap microphone to speak in any language...'
                : 'Escriba o toque el micrófono para hablar en cualquier idioma...'
            }
            className="w-full px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden disabled:bg-slate-50"
          />

          {/* Submit Send Button */}
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-white p-2.5 rounded-xl transition-all cursor-pointer shrink-0 ml-1"
            title={lang === 'en' ? 'Send' : 'Enviar'}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-2 text-center text-[11px] text-slate-500">
          {lang === 'en'
            ? 'Safe, confidential & multilingual: English, Español, Tiếng Việt, Tagalog, العربية'
            : 'Seguro, confidencial y multilingüe: English, Español, Tiếng Việt, Tagalog, العربية'}
        </div>
      </form>
    </div>
  );
};
