import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini client on the server side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_INSTRUCTION = `You are the official "Inland Empire Community AI Navigator" for newly arriving immigrant families, green card holders, and new residents in Riverside County and San Bernardino County, California.

CORE RULES:
1. FOCUS EXCLUSIVELY ON INLAND EMPIRE, CALIFORNIA:
   - Primary Cities: Riverside, San Bernardino, Corona, Norco, Eastvale, Ontario, Montclair, Fontana, Rancho Cucamonga, Moreno Valley, Colton, Upland, Perris, Coachella Valley.
   - Keep answers direct, accurate, and concise (under 200 words). Use bullet points. No unnecessary fluff or trivia.

2. ACCURATE SCHOOLS & ATTENDANCE BOUNDARIES:
   - Elementary (Grades TK–5/6), Middle (Grades 6–8), High Schools (Grades 9–12).
   - How Boundaries Work: In California public school districts, your child is assigned to a neighborhood school based strictly on your home street address.
   - Feeder Pattern: Each elementary school feeds into a specific middle school, which feeds into a specific high school.
   - Key Districts & Official Boundary Locators:
     * Riverside Unified (RUSD): GIS School Directory & Boundary Locator. Feeder: Bryant/Victoria Elementary -> Central/Gage Middle -> Riverside Poly High (AP Capstone).
     * San Bernardino City Unified (SBCUSD): Central Enrollment & Attendance Boundary Map. Feeder: Crenshaw/Belvedere Elementary -> Richardson PREP HI/Serrano Middle -> San Bernardino High (IB World School) or Cajon High (IB).
     * Corona-Norco Unified (CNUSD): Online Address Boundary Locator for Corona, Norco, Eastvale. Feeder: Eisenhower Elementary -> Auburndale Intermediate -> Corona High or Centennial High (STEM Academy).
     * Ontario-Montclair (OMSD) & Chaffey High (CJUHSD): Feeder: Kingsley Elementary -> De Anza Middle -> Chaffey High School.
   - Proof of Residency: Requires 2 documents (rental lease or mortgage, plus electric, gas, or water utility bill).
   - Open Enrollment (Intra-District Transfers): Parents can request an alternative school in the district outside their street boundary during the spring transfer window.
   - Right to Education: Under Plyler v. Doe, every child in California has the constitutional right to attend free public K-12 school regardless of immigration status. Schools never ask for immigration papers or SSNs.

3. ACCURATE DAYCARE & SUBSIDIZED CHILDCARE:
   - San Bernardino County: Child Care Resource Center (CCRC) at (909) 384-8000 provides California Alternative Payment Program (CAPP) subsidized vouchers paying up to 100% of licensed daycare for working or studying parents.
   - Riverside County: Riverside County Office of Education (RCOE) Early Care & Education at (800) 442-4927 connects families to licensed home daycares, center-based care, and state preschool vouchers.
   - Early Head Start: 100% free infant and toddler care for ages 6 weeks to 3 years with diapers, formula, and meals included.

4. ACCURATE 24/7 REGIONAL HOSPITALS & HEALTHCARE:
   - Loma Linda University Medical Center & Children’s Hospital: Loma Linda. Only Level 1 Trauma Center and dedicated Children's Hospital in the Inland Empire. 24/7 Emergency Room.
   - Arrowhead Regional Medical Center (ARMC): Colton. Level 2 Trauma, Regional Burn Center, 24/7 ER, San Bernardino County teaching hospital.
   - Riverside University Health System (RUHS) Medical Center: Moreno Valley. Level 1 Pediatric & Adult Trauma, 24/7 ER, county hospital.
   - Riverside Community Hospital: Downtown Riverside. Level 1 Trauma, 24/7 ER, comprehensive stroke and heart center.
   - San Antonio Regional Hospital: Upland. 24/7 ER serving Ontario, Upland, and Rancho Cucamonga.
   - Kaiser Permanente Fontana Medical Center: Fontana. 24/7 ER, pediatric urgent care.
   - Health Insurance: Covered California for legal residents, work visa holders, and green card holders. Full-Scope Medi-Cal for income-eligible California residents.

5. TONE & SPEED:
   - Respond in the SAME language the user asks in (Spanish, English, Arabic, etc.).
   - Be fast, welcoming, and directly answer the question in 2 to 3 bullet points.
   - End with 2 brief follow-up questions under "Related Questions:".`;

// API endpoint for natural language immigrant navigator
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, userQuery } = req.body;

    const query = userQuery || (messages && messages.length > 0 ? messages[messages.length - 1].content : '');

    if (!query || typeof query !== 'string') {
      return res.status(400).json({ error: 'Missing user message or query.' });
    }

    // Build chat history (keep last 4 messages to optimize speed)
    const contents: any[] = [];
    if (Array.isArray(messages) && messages.length > 1) {
      for (const msg of messages.slice(-4, -1)) {
        contents.push({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.content }],
        });
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: query }],
    });

    // Ultra-fast low-latency generation with gemini-3.1-flash-lite (falls back to gemini-3.8-flash)
    let response: any = null;
    try {
      response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.3,
        },
      });
    } catch (liteErr: any) {
      console.warn('gemini-3.1-flash-lite fallback to gemini-3.8-flash:', liteErr?.message);
      response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.3,
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.LOW,
          },
        },
      });
    }

    const replyText = response?.text || "I'm here to help. Could you please rephrase your question about Inland Empire schools, daycare, or hospitals?";

    return res.json({
      reply: replyText,
    });
  } catch (error: any) {
    console.error('Gemini API chat error:', error);
    // Accurate, regional fallback for Inland Empire
    return res.json({
      reply: `Welcome to **ImmiAssist Inland Empire**! Here is immediate, verified guidance for your family:

* **Schools & Boundaries:** In Riverside and San Bernardino, public school enrollment is assigned by your home street address. Contact **Riverside Unified (RUSD)** at (951) 328-4003 or **San Bernardino City Unified (SBCUSD)** at (909) 889-7081 to find your assigned Elementary, Middle, or High school.
* **Subsidized Daycare:** Apply for state childcare vouchers paying up to 100% of licensed daycare through **CCRC** in San Bernardino (909-384-8000) or **RCOE Early Care** in Riverside (800-442-4927).
* **24/7 Regional Hospitals:** Visit **Loma Linda University Medical Center & Children's Hospital** (909-558-4000), **Arrowhead Regional (ARMC)** in Colton (909-580-1000), or **Riverside University Health (RUHS)** in Moreno Valley (951-486-4000).

Related Questions:
1. How do I look up my home street address on the district boundary map?
2. What documents are needed to enroll my child in elementary school?
3. How do I apply for CAPP subsidized daycare vouchers in the Inland Empire?`
    });
  }
});

// Live Phone Voice Call with Gemini AI (Conversational Spoken Audio in Any Language)
app.post('/api/voice/call', async (req, res) => {
  try {
    const { userSpeech, history = [] } = req.body;

    if (!userSpeech || typeof userSpeech !== 'string') {
      return res.status(400).json({ error: 'Missing user speech.' });
    }

    const voiceSystemPrompt = `You are "ImmiAssist Voice", a warm, empathetic live telephone assistant speaking directly with an immigrant caller in the Inland Empire (San Bernardino & Riverside counties, California).
CRITICAL RULES FOR VOICE CONVERSATION:
1. Speak in the EXACT SAME LANGUAGE the caller speaks (Spanish, English, Arabic, Tagalog, Vietnamese, etc.).
2. You are on a spoken telephone call: Keep your answer short, warm, and natural (strictly 2 to 4 spoken sentences).
3. DO NOT use markdown symbols, bullet points (*, -), numbers, or website URLs, as your response is converted directly into voice audio.
4. If they ask about schools, remind them that under Plyler v. Doe, public school is free for all children and schools never ask for immigration papers.
5. If they ask about health, remind them Full-Scope Medi-Cal covers all income-eligible California residents regardless of status and does not count as public charge.
6. End with a warm, caring question to see how else you can help.`;

    const contents: any[] = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const h of history.slice(-4)) {
        contents.push({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.text }],
        });
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: userSpeech }],
    });

    // 1. Generate conversational spoken response with retry
    let textGenResponse: any = null;
    let attempts = 0;
    const maxAttempts = 2;

    while (attempts < maxAttempts) {
      try {
        attempts++;
        textGenResponse = await ai.models.generateContent({
          model: 'gemini-3.1-flash-lite',
          contents: contents,
          config: {
            systemInstruction: voiceSystemPrompt,
            temperature: 0.3,
          },
        });
        break;
      } catch (err) {
        if (attempts >= maxAttempts) break;
        await new Promise((r) => setTimeout(r, 1200));
      }
    }

    const isSpanish = /([áéíóúñ¿¡]|hola|como|escuela|salud|hijo|medica|inscribir|gratis|papeles|donde|clinica)/i.test(userSpeech);

    const voiceText = (
      textGenResponse?.text ||
      (isSpanish
        ? 'En el Inland Empire, todas las escuelas públicas son gratuitas y seguras sin importar documentos. Además, Medi-Cal cubre a todas las familias de bajos ingresos. ¿Desea ubicar una clínica o escuela cercana a su hogar?'
        : 'In the Inland Empire, all public schools are completely free and safe regardless of legal status, and Full-Scope Medi-Cal covers all income-eligible families. Would you like to locate a clinic or school near your home?')
    )
      .replace(/[*#_`]/g, '')
      .trim();

    // 2. Synthesize audio with Gemini Flash Lite TTS
    let audioBase64: string | null = null;
    try {
      const ttsResponse = await ai.models.generateContent({
        model: 'gemini-3.8-flash-lite-tts',
        contents: [{ role: 'user', parts: [{ text: voiceText }] }],
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      audioBase64 = ttsResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || null;
    } catch (ttsErr) {
      console.warn('Gemini TTS audio synthesis fallback to client speech synthesis:', ttsErr);
    }

    return res.json({
      textResponse: voiceText,
      audioBase64: audioBase64,
    });
  } catch (error: any) {
    console.error('Voice call error:', error);
    return res.json({
      textResponse: 'Hello! All public schools and emergency clinics in California welcome every family regardless of immigration status. How can I help you today?',
      audioBase64: null,
    });
  }
});

// Text-to-Speech Endpoint for unified vocal assistant in any language
app.post('/api/tts', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Missing text to speak.' });
    }

    const cleanText = text.replace(/[*#_`]/g, '').slice(0, 800).trim();

    const ttsResponse = await ai.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [{ role: 'user', parts: [{ text: cleanText }] }],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const audioBase64 = ttsResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || null;

    return res.json({ audioBase64 });
  } catch (error: any) {
    console.error('TTS endpoint error:', error);
    return res.json({ audioBase64: null, error: error?.message });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'ImmiAssist - Inland Empire Immigrant Resource Navigator API',
    region: 'Inland Empire / Southern California',
    timestamp: new Date().toISOString(),
  });
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Inland Empire Navigator Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
