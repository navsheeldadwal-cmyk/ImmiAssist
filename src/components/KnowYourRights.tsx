import React, { useState } from 'react';
import {
  ShieldAlert,
  PhoneCall,
  FileCheck,
  Printer,
  Copy,
  Check,
  AlertTriangle,
  Lock,
  Eye,
  FileText,
  UserCheck
} from 'lucide-react';

interface KnowYourRightsProps {
  lang: 'en' | 'es';
}

export const KnowYourRights: React.FC<KnowYourRightsProps> = ({ lang }) => {
  const [copiedCard, setCopiedCard] = useState(false);
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [caregiverName, setCaregiverName] = useState('');
  const [caregiverPhone, setCaregiverPhone] = useState('');

  const pocketCardTextEn = `KNOW YOUR RIGHTS POCKET CARD (U.S. CONSTITUTION):
1. I AM EXERCISING MY 5TH AMENDMENT RIGHT TO REMAIN SILENT.
2. I DO NOT CONSENT TO A SEARCH OF MY PERSON, BELONGINGS, OR HOME.
3. IF YOU ARE AT MY HOME, I DO NOT GIVE PERMISSION TO ENTER UNLESS YOU SLIP A SEARCH WARRANT SIGNED BY A JUDGE UNDER MY DOOR.
4. I WANT TO SPEAK WITH AN ATTORNEY BEFORE ANSWERING ANY QUESTIONS OR SIGNING ANY PAPERS.

Inland Empire Rapid Response Hotline: (909) 361-4588`;

  const pocketCardTextEs = `TARJETA DE DERECHOS CONSTITUCIONALES:
1. ESTOY EJERCIENDO MI DERECHO CONSTITUCIONAL DE PERMANECER EN SILENCIO (5TA ENMIENDA).
2. NO DOY CONSENTIMIENTO PARA QUE REGISTREN MI PERSONA, MIS PERTENENCIAS O MI HOGAR.
3. SI ESTÁ EN MI HOGAR, NO TIENE PERMISO DE ENTRAR A MENOS QUE PASE POR DEBAJO DE LA PUERTA UNA ORDEN JUDICIAL FIRMADA POR UN JUEZ.
4. DESEO HABLAR CON UN ABOGADO ANTES DE RESPONDER PREGUNTAS O FIRMAR CUALQUIER DOCUMENTO.

Línea de Respuesta Rápida del Inland Empire: (909) 361-4588`;

  const handleCopyCard = () => {
    const text = lang === 'en' ? pocketCardTextEn : pocketCardTextEs;
    navigator.clipboard.writeText(text);
    setCopiedCard(true);
    setTimeout(() => setCopiedCard(false), 2000);
  };

  const rightsList = [
    {
      num: '01',
      titleEn: 'Right to Remain Silent (5th Amendment)',
      titleEs: 'Derecho a Permanecer en Silencio (5ta Enmienda)',
      descEn:
        'You have the constitutional right to not answer questions from ICE, police, or federal agents. You do not have to say where you were born, your citizenship, or how you entered the U.S. Say calmly: "I am exercising my right to remain silent."',
      descEs:
        'Tiene el derecho constitucional de no responder preguntas de ICE, la policía o agentes federales. No tiene que decir dónde nació, su ciudadanía o cómo ingresó al país. Diga con calma: "Estoy ejerciendo mi derecho a permanecer en silencio."'
    },
    {
      num: '02',
      titleEn: 'Do Not Open the Door Without a Judicial Warrant',
      titleEs: 'No Abra la Puerta sin Orden Firmada por un Juez',
      descEn:
        'ICE cannot enter your private residence without a valid search warrant signed by a court JUDGE. An "administrative warrant" (Form I-200 or I-205) is signed by ICE supervisors, NOT a judge, and does NOT give them legal right to enter your home. Ask them to slip the warrant under the door or hold it to the window.',
      descEs:
        'ICE no puede entrar a su casa sin una orden de cateo firmada por un JUEZ de la corte. Una orden administrativa (Formulario I-200 o I-205) es firmada por agentes de ICE y NO les da derecho de entrar. Pídales que pasen la orden por debajo de la puerta.'
    },
    {
      num: '03',
      titleEn: 'Right to an Attorney & Never Sign Documents',
      titleEs: 'Derecho a un Abogado y Nunca Firmar Documentos',
      descEn:
        'You have the right to speak to an accredited immigration attorney. NEVER sign any documents such as "Voluntary Departure" or admissions without an attorney present. Signing voluntary departure waives your right to a hearing before an immigration judge.',
      descEs:
        'Tiene derecho a consultar con un abogado de inmigración acreditado. NUNCA firme documentos como la "Salida Voluntaria" sin la presencia de su abogado. Firmar la salida voluntaria renuncia a su derecho a una audiencia ante un juez.'
    },
    {
      num: '04',
      titleEn: 'Workplace Protections Under California Labor Code',
      titleEs: 'Protecciones Laborales bajo la Ley de California',
      descEn:
        'In California, every worker has the legal right to minimum wage, overtime pay, and safe conditions regardless of immigration status. Under CA Labor Code AB 263, employers who threaten to call ICE or report immigration status face severe criminal and civil penalties.',
      descEs:
        'En California, todos los trabajadores tienen derecho al salario mínimo, horas extras y seguridad laboral sin importar su estatus. Bajo la ley laboral de CA (AB 263), los empleadores que amenacen con llamar a ICE enfrentan sanciones severas.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-bold uppercase tracking-wider mb-2">
          <ShieldAlert className="w-3.5 h-3.5 text-red-700" />
          {lang === 'en' ? 'Constitutional Protections on U.S. Soil' : 'Protecciones Constitucionales en EE.UU.'}
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {lang === 'en' ? 'Know Your Rights & Emergency Safety Plan' : 'Conozca Sus Derechos y Plan Familiar'}
        </h2>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
          {lang === 'en'
            ? 'The U.S. Constitution protects everyone living in the United States, regardless of your immigration status or country of origin.'
            : 'La Constitución de los Estados Unidos protege a todas las personas que viven en este país, sin importar su estatus migratorio o país de origen.'}
        </p>
      </div>

      {/* 24/7 Rapid Response Network Emergency Card */}
      <div className="bg-gradient-to-r from-red-700 via-rose-800 to-amber-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-10 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-200">
              {lang === 'en' ? 'Inland Empire Rapid Response Network' : 'Red de Respuesta Rápida del Inland Empire'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-1">
              {lang === 'en' ? 'ICE Enforcement Hotline' : 'Línea de Emergencia contra Redadas de ICE'}
            </h3>
            <p className="text-xs sm:text-sm text-red-100/90 max-w-xl mt-2 leading-relaxed">
              {lang === 'en'
                ? 'Report immigration enforcement activity, checkpoints, or request immediate legal defense support for detained community members in San Bernardino and Riverside counties.'
                : 'Reporte actividad de agentes migratorios, retenes o solicite defensa legal inmediata para personas detenidas en los condados de San Bernardino y Riverside.'}
            </p>
          </div>

          <div className="shrink-0 text-center">
            <a
              href="tel:9093614588"
              className="inline-flex items-center gap-2 bg-white text-red-800 font-black text-xl sm:text-2xl px-6 py-4 rounded-2xl shadow-lg hover:bg-red-50 hover:scale-105 transition-all"
            >
              <PhoneCall className="w-6 h-6 text-red-700 animate-bounce" />
              (909) 361-4588
            </a>
            <span className="block text-xs text-red-200 mt-2 font-semibold">
              {lang === 'en' ? 'Available 24 Hours / 7 Days a Week' : 'Disponible las 24 horas / 7 días'}
            </span>
          </div>
        </div>
      </div>

      {/* 4 Core Rights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {rightsList.map((r, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="text-3xl font-black text-slate-100 absolute top-4 right-5 select-none">
              {r.num}
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2 relative z-10">
              {lang === 'en' ? r.titleEn : r.titleEs}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed relative z-10">
              {lang === 'en' ? r.descEn : r.descEs}
            </p>
          </div>
        ))}
      </div>

      {/* Printable Digital Pocket Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
        {/* Visual Pocket Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-800 relative">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {lang === 'en' ? 'Digital Pocket Card' : 'Tarjeta de Bolsillo'}
              </span>
            </div>

            <button
              onClick={handleCopyCard}
              className="inline-flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              {copiedCard ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">{lang === 'en' ? 'Copied' : 'Copiado'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Copy Card' : 'Copiar'}</span>
                </>
              )}
            </button>
          </div>

          <div className="text-xs sm:text-sm space-y-3 font-mono leading-relaxed text-slate-200">
            {lang === 'en' ? (
              <>
                <p className="font-bold text-amber-300">
                  1. I AM EXERCISING MY 5TH AMENDMENT RIGHT TO REMAIN SILENT.
                </p>
                <p>2. I do not consent to a search of my person, vehicle, or home.</p>
                <p>
                  3. If you are at my residence, I do not grant permission to enter without a
                  search warrant signed by a judge.
                </p>
                <p>
                  4. I request to speak with my attorney before answering questions or signing any
                  documents.
                </p>
              </>
            ) : (
              <>
                <p className="font-bold text-amber-300">
                  1. ESTOY EJERCIENDO MI DERECHO A PERMANECER EN SILENCIO (5TA ENMIENDA).
                </p>
                <p>2. No doy consentimiento para catear mi persona, vehículo o vivienda.</p>
                <p>
                  3. Si está en mi casa, no tiene permiso de entrar sin una orden judicial firmada
                  por un juez.
                </p>
                <p>
                  4. Deseo hablar con mi abogado antes de responder preguntas o firmar cualquier
                  documento.
                </p>
              </>
            )}
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Inland Empire Rapid Response:</span>
            <strong className="text-red-400">(909) 361-4588</strong>
          </div>
        </div>

        {/* Emergency Family Safety Plan Builder */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <UserCheck className="w-5 h-5 text-amber-600" />
            <h3 className="text-lg font-bold text-slate-900">
              {lang === 'en' ? 'Family Emergency Plan Builder' : 'Creador de Plan Familiar de Emergencia'}
            </h3>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            {lang === 'en'
              ? 'Fill in your trusted emergency contacts and print this page for your family records.'
              : 'Escriba los contactos de emergencia de su familia e imprima esta página para tenerla en casa.'}
          </p>

          <div className="space-y-3 text-xs sm:text-sm">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'en' ? 'Emergency Legal / Trusted Contact Name:' : 'Contacto de Emergencia / Abogado:'}
              </label>
              <input
                type="text"
                value={emergencyName}
                onChange={(e) => setEmergencyName(e.target.value)}
                placeholder="e.g. Maria Gonzalez / Attorney"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:border-amber-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'en' ? 'Emergency Contact Phone:' : 'Teléfono de Contacto de Emergencia:'}
              </label>
              <input
                type="tel"
                value={emergencyPhone}
                onChange={(e) => setEmergencyPhone(e.target.value)}
                placeholder="e.g. (909) 555-0199"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:border-amber-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'en' ? 'Designated Children Caregiver Name:' : 'Nombre del Tutor Designado para Hijos:'}
              </label>
              <input
                type="text"
                value={caregiverName}
                onChange={(e) => setCaregiverName(e.target.value)}
                placeholder="e.g. Aunt Carmen / Close Friend"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:border-amber-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'en' ? 'Caregiver Phone Number:' : 'Teléfono del Tutor:'}
              </label>
              <input
                type="tel"
                value={caregiverPhone}
                onChange={(e) => setCaregiverPhone(e.target.value)}
                placeholder="e.g. (951) 555-0144"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:border-amber-600"
              />
            </div>

            <button
              onClick={() => window.print()}
              className="mt-3 w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
            >
              <Printer className="w-4 h-4" />
              {lang === 'en' ? 'Print Family Safety Plan' : 'Imprimir Plan Familiar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
