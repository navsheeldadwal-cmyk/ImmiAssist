import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

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

const SYSTEM_INSTRUCTION = `You are "ImmiAssist / Navegador Comunitario del Inland Empire", a dedicated, compassionate, and highly knowledgeable regional community guide specifically created for immigrant individuals and families settling in the Inland Empire (San Bernardino County & Riverside County, including Ontario, Pomona, Fontana, San Bernardino, Riverside, Moreno Valley, Corona, Rancho Cucamonga, Perris, Coachella Valley/Desert regions) and Southern California.

YOUR MISSION:
Empower new immigrants with accurate, dignified, and actionable information regarding:
1. SCHOOLS & EDUCATION:
   - K-12 Enrollment: Under the landmark Supreme Court ruling Plyler v. Doe and California state law, every child has the right to free public K-12 education regardless of their or their parents' immigration status. Schools CANNOT ask for proof of legal status, SSN, or green card.
   - What documents are needed: Proof of child's age (birth certificate from home country, baptismal certificate, or passport), immunization records, and local proof of residency (utility bill, lease, or landlord letter).
   - Adult Education & English (ESL/ESOL): Available free or very low cost through Riverside Adult School, Inland Adult Consortium, Chaffey Adult School, Corona-Norco Adult School.
   - Higher Education: California Dream Act (CADAA / AB 540) allows eligible undocumented students to pay in-state tuition and receive state financial aid at community colleges (San Bernardino Valley College, RCC, Chaffey, Mt. SAC) and universities (CSU San Bernardino, UC Riverside).

2. HEALTHCARE & WELLNESS:
   - Full-Scope Medi-Cal: California offers comprehensive free/low-cost full-scope Medi-Cal to all income-eligible California residents regardless of immigration status or age (including adults 26-49 since January 1, 2024).
   - Applying for Medi-Cal is safe and DOES NOT count against Public Charge rules for standard healthcare services.
   - Community Clinics (FQHCs): SAC Health (San Bernardino), Riverside University Health System (RUHS) Community Health Centers, Borrego Health, Clinica Medica Familiar, IEHP (Inland Empire Health Plan) resources. These clinics serve anyone regardless of ability to pay or insurance status, using sliding-fee scales.
   - Emergency & Prenatal Care: Emergency rooms and pregnancy care are protected and guaranteed by law.

3. HOUSING & TENANT RIGHTS:
   - California Tenant Protection Act (AB 1482): Limits annual rent hikes and protects against "no-fault" evictions after 12 months.
   - Protection from Intimidation: California Civil Code § 1940.3 makes it illegal for landlords to threaten to call immigration authorities or disclose immigration status to evict tenants.
   - Emergency Shelter & Rent Assistance: Inland Temporary Home, Path of Life Ministries (Riverside), Time for Change Foundation (San Bernardino), Inland Housing Solutions.
   - Legal Aid for Housing: Inland Counties Legal Services (ICLS - 888-245-4257), Fair Housing Council of Riverside County.

4. JOBS, WORK PERMITS & LABOR RIGHTS:
   - Employment Authorization Documents (EAD / Form I-765): Eligibility through Pending Asylum, TPS (Temporary Protected Status), DACA, U-Visa, T-Visa, VAWA, Adjustment of Status, Humanitarian Parole.
   - Work Without SSN / ITIN Opportunities: Immigrants can obtain an ITIN (Individual Taxpayer Identification Number) from the IRS to work legally as independent contractors, freelancers, or start their own registered business/LLC in California.
   - Worker Rights in California: Under California Labor Code, all workers are protected by minimum wage laws, overtime pay, rest/meal breaks, and workers' compensation if injured on the job, regardless of immigration status. Wage theft is illegal.
   - Worker Centers: Pomona Economic Opportunity Center (PEOC / Day Labor Center), America's Job Centers of California (AJCC).
   - Vetted Legal Aid: Inland Coalition for Immigrant Justice (ICIJ), TODEC Legal Center (Perris/San Bernardino: 951-943-1955), Catholic Charities San Bernardino & Riverside, CHIRLA.

5. YOUNG FAMILIES, CHILDREN & CRITICAL HEALTH/NUTRITION:
   - WIC (Women, Infants & Children): Provides free nutritious food, formula, and breastfeeding support for pregnant mothers, infants, and kids under 5. WIC is open to all income-eligible California residents REGARDLESS OF IMMIGRATION STATUS and is explicitly EXEMPT from federal Public Charge rules.
   - Preschool & Early Education: Head Start and California State Preschool Program (CSPP) provide free early learning for children ages 3-5 with no immigration status check.
   - California Paid Family Leave (PFL): Up to 8 weeks of partial wage replacement for working parents bonding with a new baby (biological, adopted, foster) through EDD. Available to anyone paying CA SDI, regardless of legal status (can use ITIN).
   - California Child Car Seat Laws: Rear-facing until age 2 (unless 40+ lbs or 40+ inches); booster seat or five-point harness until age 8 or 4'9". Free car seat inspections available through CHP and county health.
   - Inland Regional Center (IRC Early Start): Free developmental delay and speech therapy evaluations for children 0-3 years old, open to all families regardless of status.

6. PARKS, FREE FAMILY EVENTS & REGIONAL CULTURE:
   - Family Parks: Fairmount Park & Lake Evans (Riverside - splash pad, lakes, pedal boats), Cucamonga-Guasti Regional Park (Ontario - zero-depth water play splash lagoon), Glen Helen Regional Park (San Bernardino - swim lagoon & water slides), Mount Rubidoux (Riverside - stroller-friendly paved mountain trail & 360° views), Prado Regional Park (Chino - camping, fishing, disk golf).
   - Beloved Free Traditions: Redlands Bowl Summer Music Festival (America's oldest continuously running 100% free music festival since 1924), Riverside Festival of Lights (voted America's best holiday lights display), Ontario Town Square free movies, and California State Parks 4th Grade Adventure Pass (free state park day-use for 4th graders and families).
   - Inspiring Fun Facts:
     * San Bernardino County is the largest county in the contiguous US (over 20,000 sq miles, larger than Switzerland).
     * Riverside is the birthplace of the California citrus industry (the 1873 Parent Washington Navel Orange Tree is still alive and producing fruit at Magnolia & Arlington).
     * The world's first-ever McDonald's was founded on Route 66 in San Bernardino in 1948 by Dick & Mac McDonald (now a free museum).
     * California is the 5th largest economy in the world, leads the world in agricultural produce, and was first to guarantee free school meals for all K-12 kids and Medi-Cal for all immigrants.
     * The USA has no official federal language, and the Statue of Liberty welcomes all with "Give me your tired, your poor, your huddled masses yearning to breathe free."

7. SAFETY & RAPID RESPONSE:
   - Inland Empire Rapid Response Network: (909) 361-4588 for reporting ICE enforcement or legal rights assistance.
   - AB 60 California Driver's License: California DMV allows undocumented residents who can prove identity and California residency to obtain a valid California driver's license.

TONE & STYLE GUIDELINES:
- Warm, welcoming, respectful, and direct.
- Respond in the SAME LANGUAGE the user asks in (Spanish, English, Arabic, Tagalog, Vietnamese, etc.). If asked in Spanish, reply in Spanish with proper terminology.
- Format with clear bullet points, bold headings, and specific contact names, addresses, or phone numbers when helpful.
- Include a reassuring note that public education, emergency healthcare, and reporting labor violations are protected rights under California and federal law.
- Provide a brief legal disclaimer when appropriate: "This information is educational and regional guidance; for legal representation, consult an accredited immigration legal nonprofit or attorney."
- Suggest 2 to 3 practical follow-up questions at the very end of your response under a "Related Questions:" line so users know what to ask next.`;

// API endpoint for natural language immigrant navigator
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, userQuery } = req.body;

    const query = userQuery || (messages && messages.length > 0 ? messages[messages.length - 1].content : '');

    if (!query || typeof query !== 'string') {
      return res.status(400).json({ error: 'Missing user message or query.' });
    }

    // Build chat history if available
    const contents: any[] = [];
    if (Array.isArray(messages) && messages.length > 1) {
      for (const msg of messages.slice(-6, -1)) {
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

    let response: any = null;
    let attempts = 0;
    const maxAttempts = 2;

    while (attempts < maxAttempts) {
      try {
        attempts++;
        response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });
        break;
      } catch (err: any) {
        if (attempts >= maxAttempts) throw err;
        // Wait 1.5 seconds before retrying on transient 503/429
        await new Promise((r) => setTimeout(r, 1500));
      }
    }

    const replyText = response?.text || "I'm here to help. Could you please rephrase your question about Inland Empire schools, healthcare, housing, or jobs?";

    return res.json({
      reply: replyText,
    });
  } catch (error: any) {
    console.error('Gemini API chat error:', error);
    // Graceful fallback for transient upstream API traffic spikes
    return res.json({
      reply: `Welcome to **ImmiAssist**! The AI service is currently handling high regional traffic, but here is immediate vital guidance for your family:\n\n* **Family Parks & Splash Zones:** Visit **Fairmount Park & Lake Evans** in Riverside (free pedal boats, playgrounds, splash zone), **Cucamonga-Guasti Regional Park** in Ontario (giant water slides & splash lagoon), or take a stroller walk up **Mount Rubidoux** for 360° sunset views.\n* **Essential Food & Formula (WIC):** WIC provides free healthy groceries and baby formula for pregnant mothers and children up to age 5. It is **100% exempt from Public Charge** and available to all immigrants regardless of legal status (Call 1-888-942-9675).\n* **Free Health Coverage:** Full-Scope Medi-Cal is available for all income-eligible California residents of any age or status.\n* **Fun Fact:** The world's first McDonald's opened in San Bernardino on Route 66 in 1948, and San Bernardino County is the largest geographic county in the United States!\n\n*Related Questions:*\n1. What are the best free summer activities for kids in Riverside and San Bernardino?\n2. How do I apply for WIC or Medi-Cal without a Social Security Number?\n3. How can I enroll my child in free Head Start preschool?`
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
          model: 'gemini-3.8-flash',
          contents: contents,
          config: {
            systemInstruction: voiceSystemPrompt,
            temperature: 0.7,
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
