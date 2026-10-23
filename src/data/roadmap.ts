import { RoadmapStep } from '../types';

export const INLAND_EMPIRE_ROADMAP: RoadmapStep[] = [
  // ==========================================
  // --- FIRST 30 DAYS (IMMEDIATE ESSENTIALS) ---
  // ==========================================
  {
    id: 'step-schools',
    title: 'Enroll Children in Free Public K-12 School',
    category: 'education',
    urgency: 'Week 1',
    period: 'First 30 Days',
    summary: 'Every child in California has a guaranteed constitutional right to attend public school from kindergarten through 12th grade, completely free, regardless of immigration status.',
    keyRights: 'Under the landmark U.S. Supreme Court decision Plyler v. Doe (1982) and California state law, public schools CANNOT ask about citizenship or immigration status, require Social Security Numbers, or report families.',
    actionSteps: [
      'Locate your local school district office (e.g. San Bernardino Unified, Riverside Unified, Corona-Norco, Ontario-Montclair).',
      'Gather the child’s birth certificate (or passport/baptismal certificate from home country).',
      'Bring vaccination records. If vaccines are missing, visit SAC Health or RUHS Community Clinic for free school catch-up shots.',
      'Provide local proof of address (utility bill, lease, or a signed statement from your landlord/host).',
      'Enroll in free school breakfast and lunch (universal in California).'
    ],
    requiredDocs: [
      'Proof of child’s age (Foreign birth certificate or passport)',
      'Immunization record (Yellow card or doctor printout)',
      'Proof of residency in the school district boundary'
    ],
    helpfulLinks: [
      { title: 'California Dept of Education Immigrant Student Rights', url: 'https://www.cde.ca.gov/re/di/eo/immigrantstudents.asp' },
      { title: 'Find Your Inland Empire School District', url: 'https://www.cde.ca.gov/SchoolDirectory/' }
    ]
  },
  {
    id: 'step-medical',
    title: 'Apply for Healthcare (Covered California or Full-Scope Medi-Cal)',
    category: 'health',
    urgency: 'Week 1',
    period: 'First 30 Days',
    summary: 'California offers comprehensive free or low-cost health coverage through Covered California and Full-Scope Medi-Cal (doctors, emergency rooms, dental, vision, prescription drugs, and hospital care).',
    keyRights: 'Standard healthcare enrollment does NOT count against "Public Charge" rules for green card or visa applications. Your medical records are strictly protected under federal HIPAA and state privacy laws.',
    actionSteps: [
      'Visit BenefitsCal.com or walk into an Inland Empire Health Plan (IEHP) Community Resource Center in San Bernardino or Riverside.',
      'Fill out the application for your family members.',
      'Choose a local health plan (such as IEHP or Molina Healthcare) and select a regional hospital network.',
      'Assign a primary care clinic close to your home (e.g., SAC Health, RUHS, or Clinica Medica Familiar).',
      'Receive your Benefits Identification Card (BIC) or insurance card in the mail.'
    ],
    requiredDocs: [
      'Proof of identity (Passport, state ID, or driver license)',
      'Proof of California residency (utility bill or lease agreement)',
      'Proof of household income (paystubs, W-2, or self-attestation letter)'
    ],
    helpfulLinks: [
      { title: 'BenefitsCal Official Application Portal', url: 'https://www.benefitscal.com' },
      { title: 'IEHP Community Resource Centers', url: 'https://www.iehp.org' }
    ]
  },
  {
    id: 'step-ab60-license',
    title: 'Apply for a California Driver’s License or State ID at the DMV',
    category: 'legal',
    urgency: 'Week 2',
    period: 'First 30 Days',
    summary: 'A California Driver’s License or State Identification Card provides essential identification for opening bank accounts, signing leases, and driving legally.',
    keyRights: 'California law allows all residents to obtain a valid state driver’s license (Standard, REAL ID, or AB 60) with strong privacy protections against unlawful discrimination.',
    actionSteps: [
      'Study the California Driver Handbook (available online in Spanish, Arabic, Tagalog, Vietnamese, Chinese, and English).',
      'Gather accepted identity documents (e.g., valid passport, consular identification, or foreign electoral card).',
      'Schedule an appointment at a local DMV office (Fontana, San Bernardino, Riverside, Norco, or Palm Springs).',
      'Pass the vision screening and the written traffic rules knowledge test.',
      'Take your behind-the-wheel driving test and receive your official California driver license.'
    ],
    requiredDocs: [
      'Valid passport or government photo ID',
      'Two proofs of California residency (utility bill, bank statement, or rental lease)'
    ],
    helpfulLinks: [
      { title: 'California DMV Document Checklist', url: 'https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/' },
      { title: 'Practice California DMV Written Tests', url: 'https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/' }
    ]
  },
  {
    id: 'step-tenant-rights',
    title: 'Know Your Rights as a California Tenant',
    category: 'housing',
    urgency: 'Week 2',
    period: 'First 30 Days',
    summary: 'Housing costs in the Inland Empire are significant, but California provides some of the strongest tenant protections in the United States.',
    keyRights: 'Under California Civil Code § 1940.3, landlords cannot intimidate, retaliate against, or evict tenants without formal legal process, regardless of immigration status. Rent caps (AB 1482) limit annual increases.',
    actionSteps: [
      'Always pay rent using traceable methods (checks, money orders with retained stubs, or online portals). Always request a written receipt.',
      'Keep copies of all rental agreements, house rules, and rent payment receipts in a secure folder.',
      'If your landlord refuses to make essential repairs (water, heat, plumbing), submit requests in writing or text message.',
      'If you receive an eviction notice, contact Inland Counties Legal Services (ICLS) at (888) 245-4257 immediately for free guidance.'
    ],
    requiredDocs: [
      'Lease agreement or month-to-month rental agreement',
      'Rent receipts and communication records with landlord'
    ],
    helpfulLinks: [
      { title: 'Inland Counties Legal Services (ICLS) Housing Help', url: 'https://www.inlandlegal.org' },
      { title: 'California Tenant Rights Guide (Dept of Real Estate)', url: 'https://landlordtenant.dre.ca.gov/' }
    ]
  },
  {
    id: 'step-community-safety-net',
    title: 'Get a Public Library Card & Connect to Community Resources',
    category: 'education',
    urgency: 'Month 1',
    period: 'First 30 Days',
    summary: 'Public libraries in Riverside and San Bernardino counties offer free high-speed Wi-Fi, computer labs, printing, bilingual children’s storytimes, homework help, and language learning software.',
    keyRights: 'Public libraries provide free civic access to all residents without fees and protect patron privacy.',
    actionSteps: [
      'Visit your local public library (e.g. Riverside Public Library, San Bernardino County Library system, Ontario City Library).',
      'Register for a free library card using any photo ID and proof of local mailing address.',
      'Access free online learning tools (such as Mango Languages and LinkedIn Learning).',
      'Pick up free California State Parks passes available for checkout at the library.'
    ],
    requiredDocs: [
      'Any photo ID',
      'Proof of local address (utility bill, lease, or piece of mail)'
    ],
    helpfulLinks: [
      { title: 'San Bernardino County Library System', url: 'https://www.sbclib.org' },
      { title: 'Riverside Public Library', url: 'https://riversideca.gov/library/' }
    ]
  },

  // ==========================================
  // --- DAYS 31–60 (MONTH 2: FINANCIAL & STABILITY) ---
  // ==========================================
  {
    id: 'step-banking-credit',
    title: 'Open a U.S. Bank Account & Begin Building Credit',
    category: 'jobs',
    urgency: 'Month 2',
    period: 'Days 31-60',
    summary: 'Opening a checking and savings account with a reputable bank or local credit union protects your money, eliminates high check-cashing fees, and establishes your financial footprint in the U.S.',
    keyRights: 'Federal banking laws allow financial institutions to accept foreign passports, Consular IDs (Matrícula), SSNs, or ITINs to open accounts.',
    actionSteps: [
      'Compare local credit unions and banks (e.g., Arrowhead Credit Union, Self-Help Federal Credit Union, Chase, Bank of America).',
      'Open a checking account with zero or low monthly maintenance fees by setting up direct deposit.',
      'Deposit an initial sum and set up free mobile banking with fraud alerts.',
      'Apply for a "Secured Credit Card" (you deposit $200–$500 as collateral) and use it for small purchases paid off in full each month to build a 700+ credit score.'
    ],
    requiredDocs: [
      'Primary ID (Passport, foreign driver license, or Consular ID)',
      'Secondary ID or Proof of Address (utility bill or lease)',
      'SSN or IRS ITIN letter (if available)'
    ],
    helpfulLinks: [
      { title: 'Consumer Financial Protection Bureau (CFPB) Newcomer Guide', url: 'https://www.consumerfinance.gov' },
      { title: 'Arrowhead Credit Union Inland Empire', url: 'https://www.arrowheadcu.org' }
    ]
  },
  {
    id: 'step-adult-esl-month2',
    title: 'Register for Free Adult ESL English & High School Diploma Classes',
    category: 'education',
    urgency: 'Month 2',
    period: 'Days 31-60',
    summary: 'Developing English language proficiency accelerates your career, helps you communicate with your children’s teachers, and opens doors to higher earnings.',
    keyRights: 'Adult education programs in California public school districts charge ZERO tuition for core English (ESL) courses.',
    actionSteps: [
      'Contact the nearest adult school: Riverside Adult School, Chaffey Adult School (Ontario), Corona-Norco Adult Ed, or San Bernardino Adult School.',
      'Take the free language placement exam to identify your level (Beginner Level 1 to Advanced Professional Level 6).',
      'Select morning, evening, or Saturday hybrid schedules that fit around work and family duties.',
      'Explore vocational English training (English for Healthcare, English for Logistics & Construction).'
    ],
    requiredDocs: [
      'Photo identification',
      'Proof of age (18 years or older)'
    ],
    helpfulLinks: [
      { title: 'Inland Adult Education Consortium', url: 'https://inlandadulted.org' },
      { title: 'Riverside Adult School Programs', url: 'https://adulted.riversideunified.org' }
    ]
  },
  {
    id: 'step-family-doctor-dental',
    title: 'Establish a Primary Care Physician (PCP) & Pediatric Dental Home',
    category: 'health',
    urgency: 'Month 2',
    period: 'Days 31-60',
    summary: 'Rather than visiting urgent care or emergency rooms for routine illnesses, establish a dedicated family doctor and dentist who understand your family’s ongoing health history.',
    keyRights: 'Under California health regulations, all health plans must provide translation/interpretation services in your primary language at no cost during medical appointments.',
    actionSteps: [
      'Call your health plan (e.g., IEHP member services at 800-440-4347) or community clinic network (SAC Health, RUHS Clinics).',
      'Select a primary care doctor (PCP) close to your residence who speaks your native language.',
      'Schedule initial preventative well-child exams and adult health screenings (blood pressure, diabetes, vision).',
      'Schedule a pediatric dental checkup and teeth cleaning for your school-age children.'
    ],
    requiredDocs: [
      'Health insurance card or Medi-Cal BIC card',
      'List of current medications and allergies',
      'Child immunization record'
    ],
    helpfulLinks: [
      { title: 'IEHP Doctor & Specialist Directory', url: 'https://www.iehp.org' },
      { title: 'SAC Health Outpatient Clinic Locations', url: 'https://www.sachealth.org' }
    ]
  },
  {
    id: 'step-utility-discounts',
    title: 'Apply for California Utility Discounts (SCE CARE, Gas & Home Internet)',
    category: 'housing',
    urgency: 'Month 2',
    period: 'Days 31-60',
    summary: 'California offers substantial utility discounts for modest-income and newly arrived families that can save hundreds of dollars each month on electricity, natural gas, and high-speed home internet.',
    keyRights: 'Utility discount programs (CARE/FERA and LifeLine) do NOT require Social Security numbers and are completely exempt from public charge scrutiny.',
    actionSteps: [
      'Apply for Southern California Edison (SCE) CARE or FERA program to receive 20% to 30% off your monthly electric bill.',
      'Apply for SoCalGas CARE program for up to 20% savings on gas heating.',
      'Sign up for the California LifeLine discount for reduced-cost cell phone or landline service.',
      'Apply for low-cost home broadband internet plans (e.g., Spectrum Internet Assist or AT&T Access for $15–$30/mo).'
    ],
    requiredDocs: [
      'Copy of recent utility bill (SCE, SoCalGas)',
      'Proof of household income or enrollment in Medi-Cal/WIC'
    ],
    helpfulLinks: [
      { title: 'Southern California Edison CARE Program', url: 'https://www.sce.com/residential/assistance/care-fera' },
      { title: 'SoCalGas Assistance Programs', url: 'https://www.socalgas.com/save-money-and-energy/assistance-programs' }
    ]
  },
  {
    id: 'step-preschool-headstart',
    title: 'Apply for Subsidized Daycare (CCRC & RCOE) & Free Preschool',
    category: 'education',
    urgency: 'Month 2',
    period: 'Days 31-60',
    summary: 'If you work, attend adult ESL classes, or seek employment, California provides subsidized childcare (CAPP vouchers) that can pay up to 100% of licensed infant, toddler, and after-school daycare costs, plus free state preschool for ages 3–5.',
    keyRights: 'California Child Care Resource & Referral agencies (CCRC and RCOE) serve all eligible California families regardless of legal status to ensure children are in licensed, safe care.',
    actionSteps: [
      'For San Bernardino County: Contact the Child Care Resource Center (CCRC) at (909) 384-8000 to apply for the Alternative Payment childcare subsidy voucher.',
      'For Riverside County: Contact Riverside County Office of Education (RCOE) Early Care & Education at (800) 442-4927 for subsidized daycare placement.',
      'Use the free 1-on-1 daycare matching service to locate licensed home family daycares or center-based infant/toddler facilities near your home.',
      'Enroll 3- and 4-year-olds in California State Preschool Programs (CSPP) or federal Head Start for kindergarten readiness.'
    ],
    requiredDocs: [
      'Parent photo ID or passport',
      'Child birth certificate or immunization card',
      'Proof of household income (pay stub or employer letter) and work/training schedule'
    ],
    helpfulLinks: [
      { title: 'Child Care Resource Center (CCRC) Subsidies', url: 'https://www.ccrcca.org' },
      { title: 'Riverside County Office of Education Early Care', url: 'https://www.rcoe.us/departments/early-care-education' }
    ]
  },

  // ==========================================
  // --- DAYS 61–90 (MONTH 3: CAREER & LONG-TERM INTEGRATION) ---
  // ==========================================
  {
    id: 'step-career-training',
    title: 'Access Workforce Development & Career Placement at America’s Job Center',
    category: 'jobs',
    urgency: 'Month 3',
    period: 'Days 61-90',
    summary: 'America’s Job Centers of California (AJCC) in Riverside and San Bernardino provide free career coaching, resume translation to U.S. formats, interview preparation, and job placement assistance.',
    keyRights: 'Under California workforce policies, job search centers and WIOA career technical training funds are available to all work-authorized residents.',
    actionSteps: [
      'Visit your local AJCC branch (San Bernardino, Riverside, Ontario, Hemet, or Indio).',
      'Attend a free orientation on the Inland Empire’s high-growth sectors: Healthcare, Logistics, Advanced Manufacturing, and Green Energy.',
      'Work with a career specialist to adapt your CV/resume into a concise 1-page U.S. resume format.',
      'Ask about Workforce Innovation and Opportunity Act (WIOA) grants that pay 100% of tuition for trade certificates (commercial trucking CDL, medical billing, computer IT).'
    ],
    requiredDocs: [
      'Work authorization document (EAD card, Green Card, or US Passport)',
      'Draft resume or work history summary',
      'California ID or Driver License'
    ],
    helpfulLinks: [
      { title: 'San Bernardino County Workforce Development', url: 'https://wp.sbcounty.gov/workforce/' },
      { title: 'Riverside County Workforce Development Center', url: 'https://rivcoworkforce.com' }
    ]
  },
  {
    id: 'step-credential-evaluation',
    title: 'Evaluate Foreign Diplomas, Degrees & Professional Certifications',
    category: 'education',
    urgency: 'Month 3',
    period: 'Days 61-90',
    summary: 'If you earned a high school diploma, vocational certificate, bachelor’s degree, or master’s degree in your home country, getting it officially evaluated opens doors to U.S. professional jobs and university programs.',
    keyRights: 'California universities and licensing boards accept foreign evaluations from members of the National Association of Credential Evaluation Services (NACES).',
    actionSteps: [
      'Gather original transcripts, course descriptions, and graduation diplomas from your home university or school.',
      'Choose a certified NACES-accredited credential evaluator (such as World Education Services - WES, or Educational Credential Evaluators - ECE).',
      'Request a "Course-by-Course" evaluation if you plan to attend college or transfer credits, or a "Document-by-Document" evaluation for general employment.',
      'Submit certified English translations alongside your original language documents.'
    ],
    requiredDocs: [
      'Original or certified copy of foreign transcripts and graduation diploma',
      'Certified English translations of all academic records'
    ],
    helpfulLinks: [
      { title: 'NACES Accredited Credential Evaluators Directory', url: 'https://www.naces.org/members' },
      { title: 'World Education Services (WES) Evaluation Portal', url: 'https://www.wes.org' }
    ]
  },
  {
    id: 'step-community-college',
    title: 'Explore College Degrees & Certificate Programs at Community Colleges',
    category: 'education',
    urgency: 'Month 3',
    period: 'Days 61-90',
    summary: 'California’s Community College system is the largest in the nation, offering flexible associate degrees, career certificates, and guaranteed transfer agreements to UC Riverside and CSU San Bernardino.',
    keyRights: 'California College Promise Grant waives enrollment tuition fees for eligible California residents, making higher education virtually tuition-free.',
    actionSteps: [
      'Apply online through CCCApply to San Bernardino Valley College (SBVC), Riverside City College (RCC), Chaffey College (Rancho Cucamonga), or Moreno Valley College.',
      'Meet with an academic counselor to plan your certificate (e.g. Registered Nursing, Cybersecurity, Automotive Technology, Business Accounting).',
      'Complete the FAFSA or California Dream Act Application (CADAA) for grants and book vouchers.',
      'Register for fall, spring, or summer semester courses.'
    ],
    requiredDocs: [
      'High school diploma or foreign equivalent evaluation',
      'California residency proof (1 year and 1 day for in-state tuition rate)',
      'Government ID'
    ],
    helpfulLinks: [
      { title: 'California Community Colleges Application Portal', url: 'https://www.cccapply.org' },
      { title: 'San Bernardino Valley College Admissions', url: 'https://www.valleycollege.edu' }
    ]
  },
  {
    id: 'step-school-pta-civic',
    title: 'Join Your Child’s School Site Council (SSC) or English Learner Advisory (ELAC)',
    category: 'education',
    urgency: 'Month 3',
    period: 'Days 61-90',
    summary: 'Active parent involvement directly boosts children’s academic success and helps you build lasting community friendships and civic leadership in the Inland Empire.',
    keyRights: 'California Education Code mandates English Learner Advisory Committees (ELAC) at all public schools with 21+ English learners, ensuring immigrant parents have a formal voice in school budgets and programs.',
    actionSteps: [
      'Attend the next Parent-Teacher Association (PTA) or ELAC meeting at your children’s school.',
      'Request interpretation services for school meetings (school districts provide translators upon request).',
      'Volunteer for school field trips, science fairs, or cultural heritage celebrations.',
      'Connect with other neighborhood parents to coordinate carpools and study groups.'
    ],
    requiredDocs: [
      'Volunteer clearance form (completed through school principal’s office)'
    ],
    helpfulLinks: [
      { title: 'California PTA Newcomer Parent Guide', url: 'https://capta.org' },
      { title: 'California Department of Education ELAC Guidelines', url: 'https://www.cde.ca.gov/ta/cr/elac.asp' }
    ]
  },
  {
    id: 'step-immigration-roadmap',
    title: 'Establish Your Long-Term Legal Status Tracking & Citizenship Roadmap',
    category: 'legal',
    urgency: 'Month 3',
    period: 'Days 61-90',
    summary: 'Keep track of all immigration notice deadlines, green card renewal timelines (Form I-90), work authorization renewals, and the 3- or 5-year timeline for U.S. Citizenship (Form N-400 naturalization).',
    keyRights: 'You have the right to consult accredited non-profit legal counsel and avoid fraudulent "notarios" who are not licensed attorneys.',
    actionSteps: [
      'Create a digital and physical folder with copies of all USCIS receipts, Alien Registration Numbers (A-Numbers), and approval notices.',
      'Check your case status periodically on USCIS.gov using your 13-character receipt number.',
      'If you have a 10-year Green Card, calendar your 5-year naturalization date (or 3-year date if married to a U.S. citizen).',
      'Attend free U.S. Citizenship preparation classes offered by Riverside Adult School or Chaffey Adult School.'
    ],
    requiredDocs: [
      'USCIS notices and receipt numbers',
      'Permanent Resident Card (Green Card) or Employment Authorization Card'
    ],
    helpfulLinks: [
      { title: 'USCIS Official Online Case Status Checker', url: 'https://egov.uscis.gov' },
      { title: 'USCIS Naturalization Eligibility Information', url: 'https://www.uscis.gov/citizenship' }
    ]
  }
];
