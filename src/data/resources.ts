import { ResourceItem } from '../types';

export const INLAND_EMPIRE_RESOURCES: ResourceItem[] = [
  // --- EDUCATION ---
  {
    id: 'sbcusd-family-center',
    name: 'San Bernardino City Unified School District (SBCUSD) Enrollment Center',
    category: 'education',
    county: 'San Bernardino County',
    city: 'San Bernardino',
    address: '777 N. F St, San Bernardino, CA 92410',
    phone: '(909) 889-7081',
    website: 'https://sbcusd.com/enrollment',
    description: 'Centralized school enrollment for K-12 students. Under Plyler v. Doe, every child in California has the constitutional right to attend free public school regardless of immigration status. No Social Security number or immigration documents are ever required.',
    keyBenefits: [
      'Constitutional right to free public K-12 education',
      'No Social Security Number or proof of citizenship required',
      'Free breakfast and lunch programs for all students',
      'Bilingual enrollment counselors available'
    ],
    languages: ['English', 'Español', 'Multilingual Interpreters'],
    costType: 'Free',
    whatToBring: [
      "Child's proof of age (foreign birth certificate, passport, or baptismal record)",
      'Immunization / vaccine records (yellow card or clinic printout)',
      'Proof of residency in district (utility bill, lease agreement, or letter from host/landlord)'
    ],
    featured: true
  },
  {
    id: 'rusd-family-resource',
    name: 'Riverside Unified School District (RUSD) Family Resource Center',
    category: 'education',
    county: 'Riverside County',
    city: 'Riverside',
    address: '6735 Magnolia Ave, Riverside, CA 92506',
    phone: '(951) 328-4003',
    website: 'https://riversideunified.org',
    description: 'Comprehensive family support hub assisting immigrant and newly arrived families with school enrollment, bilingual parent workshops, school supplies, immunization clinic referrals, and English Learner programs.',
    keyBenefits: [
      'Assistance with English Language Development (ELD) testing',
      'School supply and backpack assistance',
      'Safe, welcoming sanctuary school district policy',
      'Connection to community clothing and food closets'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      "Child's birth certificate or passport from country of origin",
      'Current immunization records',
      'Local proof of address (water/electric bill or rent receipt)'
    ],
    featured: false
  },
  {
    id: 'sbvc-dreamers',
    name: 'San Bernardino Valley College - Dreamers Resource Center',
    category: 'education',
    county: 'San Bernardino County',
    city: 'San Bernardino',
    address: '701 S. Mount Vernon Ave, San Bernardino, CA 92410',
    phone: '(909) 384-8988',
    website: 'https://www.valleycollege.edu/student-services/specialized-programs/dreamers-resource-center/',
    description: 'Dedicated center for undocumented, DACA, and mixed-status college students. Provides guidance on the California Dream Act (CADAA), AB 540 in-state tuition exemption, textbook vouchers, and legal immigration consultations.',
    keyBenefits: [
      'AB 540 in-state college tuition assistance (save thousands/yr)',
      'California Dream Act (CADAA) financial aid application help',
      'Free on-campus immigration legal consultations for students & families',
      'Undocumented student emergency grants and textbook loans'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'High school transcript or diploma (California or abroad)',
      'California residency documents (3 years of CA school attendance for AB 540)',
      'Previous tax filings or ITIN if available (optional)'
    ],
    featured: true
  },
  {
    id: 'rcc-la-casa',
    name: 'Riverside City College - La Casa & Undocumented Student Center',
    category: 'education',
    county: 'Riverside County',
    city: 'Riverside',
    address: '4800 Magnolia Ave, Bradshaw Building, Riverside, CA 92506',
    phone: '(951) 222-8168',
    website: 'https://www.rcc.edu/student-support/la-casa.html',
    description: 'Holistic support center helping undocumented students and immigrants transition into higher education, vocational certificates (automotive, welding, nursing, IT), and transfer to UC Riverside or CSU San Bernardino.',
    keyBenefits: [
      'Tuition waivers through the California College Promise Grant',
      'Career technical education (CTE) vocational certificates',
      'Peer mentorship and legal clinic days with immigration attorneys',
      'Undocu-friendly academic counseling'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Government-issued ID or Consular ID (Matrícula Consular)',
      'Transcripts from prior schooling if available',
      'CA Dream Act application draft (staff can help fill out)'
    ],
    featured: false
  },
  {
    id: 'riverside-adult-school',
    name: 'Riverside Adult School - Free ESL & Citizenship Preparation',
    category: 'education',
    county: 'Riverside County',
    city: 'Riverside',
    address: '6735 Magnolia Ave, Riverside, CA 92506',
    phone: '(951) 788-7185',
    website: 'https://adulted.riversideunified.org',
    description: 'Free English as a Second Language (ESL) courses ranging from absolute beginner to advanced conversation, High School Diploma/GED in Spanish and English, and U.S. Citizenship exam preparation classes.',
    keyBenefits: [
      'Completely tuition-free English classes (morning & evening schedules)',
      'Free preparation for the naturalization/citizenship interview and exam',
      'GED and vocational job training preparation',
      'Open to all adults 18+ regardless of immigration status'
    ],
    languages: ['English', 'Español', 'Bilingual Staff'],
    costType: 'Free',
    whatToBring: [
      'Photo ID (passport, consular ID, or state ID)',
      'Proof of age (18 years or older)'
    ],
    featured: true
  },
  {
    id: 'chaffey-adult-school',
    name: 'Chaffey Adult School (Ontario - Montclair)',
    category: 'education',
    county: 'San Bernardino County',
    city: 'Ontario',
    address: '1802 E. 7th St, Ontario, CA 91764',
    phone: '(909) 391-5365',
    website: 'https://www.chaffeyadultschool.org',
    description: 'Serving West Inland Empire families with free English (ESL), adult basic literacy, computer skills training, and workforce certification programs with flexible daytime and evening hours.',
    keyBenefits: [
      'Free beginner through advanced ESL levels',
      'Computer literacy classes for job applications',
      'Childcare support available for select morning sessions',
      'Career technical pathways in medical assisting and logistics'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Any photo ID',
      'Registration form (completed on-site or online)'
    ],
    featured: false
  },

  // --- HEALTHCARE ---
  {
    id: 'sac-health-san-bernardino',
    name: 'SAC Health System (San Bernardino FQHC)',
    category: 'health',
    county: 'San Bernardino County',
    city: 'San Bernardino',
    address: '250 S. G St, San Bernardino, CA 92410',
    phone: '(909) 382-7100',
    website: 'https://www.sachealth.org',
    description: 'The largest Federally Qualified Health Center (FQHC) in the Inland Empire. Provides comprehensive family medicine, pediatrics, prenatal/OBGYN, dental, behavioral health, and on-site pharmacy. Welcomes everyone regardless of immigration status.',
    keyBenefits: [
      'Sliding-fee discount program based on income, even without insurance',
      'Full-Scope Medi-Cal enrollment counselors on-site',
      'Comprehensive prenatal and pediatric healthcare',
      'Bilingual medical doctors and certified interpreters'
    ],
    languages: ['English', 'Español', 'Arabic', 'Vietnamese', 'Language Line'],
    costType: 'Sliding Scale',
    whatToBring: [
      'Photo identification (any country passport, consular ID, or CA ID)',
      'Proof of income (pay stubs, tax return, or declaration of self-employment)',
      'Proof of address in San Bernardino/Riverside County'
    ],
    featured: true
  },
  {
    id: 'iehp-community-resource-center',
    name: 'Inland Empire Health Plan (IEHP) Community Resource Center',
    category: 'health',
    county: 'San Bernardino County',
    city: 'San Bernardino',
    address: '805 W. 2nd St, Suite C, San Bernardino, CA 92410',
    phone: '(866) 228-4347',
    website: 'https://www.iehp.org',
    description: 'Walk-in community hub where certified specialists assist immigrants with enrolling in California Full-Scope Medi-Cal (free healthcare for all income-eligible Californians regardless of legal status), free health screenings, and fitness classes.',
    keyBenefits: [
      'Free in-person enrollment assistance for California Full-Scope Medi-Cal',
      'Zero questions about legal status for health coverage',
      'Free preventative health education, nutrition, and diabetes checks',
      'Assistance finding doctors who speak your native language'
    ],
    languages: ['English', 'Español', 'Arabic'],
    costType: 'Free',
    whatToBring: [
      'Identification (Consular ID, passport, or foreign birth certificate)',
      'Proof of California residency (utility bill or rent receipt)',
      'Income verification (recent pay stubs or self-attestation letter if cash income)'
    ],
    featured: true
  },
  {
    id: 'ruhs-clinics-riverside',
    name: 'Riverside University Health System (RUHS) Community Health Centers',
    category: 'health',
    county: 'Riverside County',
    city: 'Moreno Valley / Riverside',
    address: '26520 Cactus Ave, Moreno Valley, CA 92555',
    phone: '(951) 486-4000',
    website: 'https://www.ruhealth.org',
    description: 'County-operated healthcare network with clinics across Riverside, Moreno Valley, Corona, Hemet, and Indio. Provides primary care, emergency services, mental health, and specialty care with safety-net protections for all residents.',
    keyBenefits: [
      'County safety-net healthcare provider with no immigration restrictions',
      'Emergency room and critical care protections',
      'Riverside County Medically Indigent Services Program (MISP) enrollment',
      'Prescription drug assistance programs'
    ],
    languages: ['English', 'Español', 'Telephone Translation (200+ languages)'],
    costType: 'Sliding Scale',
    whatToBring: [
      'Photo ID (passport, consular card, or any government ID)',
      'Proof of residency in Riverside County',
      'Proof of household income'
    ],
    featured: false
  },
  {
    id: 'clinica-medica-familiar',
    name: 'Clínica Médica Familiar (Fontana & Ontario)',
    category: 'health',
    county: 'San Bernardino County',
    city: 'Fontana',
    address: '9961 Sierra Ave, Fontana, CA 92335',
    phone: '(909) 357-1234',
    website: 'https://clinicamedicafamiliar.org',
    description: 'Culturally rooted community clinic serving immigrant families across Fontana, Ontario, and Rialto. Offers same-day sick visits, immunizations, well-child checkups, laboratory work, and ultrasound services.',
    keyBenefits: [
      '100% Spanish-bilingual doctors and nursing staff',
      'Low flat-rate consultations for uninsured individuals',
      'Medi-Cal and Covered California certified enrollment site',
      'Saturday appointment availability'
    ],
    languages: ['Español', 'English'],
    costType: 'Sliding Scale',
    whatToBring: [
      'Photo ID',
      'List of current medications or previous medical records if available'
    ],
    featured: false
  },
  {
    id: 'borrego-health-coachella',
    name: 'Borrego Health - Coachella Valley Community Health Center',
    category: 'health',
    county: 'Coachella Valley',
    city: 'Coachella',
    address: '55-497 Van Buren St, Coachella, CA 92236',
    phone: '(760) 391-6000',
    website: 'https://www.borregohealth.org',
    description: 'Dedicated healthcare home for agricultural workers, farmworkers, and immigrant families in Eastern Riverside County and the Coachella Valley. Offers mobile health units, dental, vision, and occupational medicine.',
    keyBenefits: [
      'Specialized care for farmworkers and seasonal agricultural laborers',
      'Indigenous language interpretation support (including Mixteco and Purépecha)',
      'Free preventive vaccinations and blood pressure screenings',
      'Sliding fee scale adjusted to seasonal harvest income'
    ],
    languages: ['Español', 'English', 'Mixteco Support'],
    costType: 'Sliding Scale',
    whatToBring: [
      'Any form of identification',
      'Proof of income or employer check stub'
    ],
    featured: false
  },

  // --- HOUSING & TENANT RIGHTS ---
  {
    id: 'icls-housing-rights',
    name: 'Inland Counties Legal Services (ICLS) - Housing & Eviction Defense',
    category: 'housing',
    county: 'San Bernardino County',
    city: 'San Bernardino / Riverside',
    address: '1040 E. Cooley Dr, Colton, CA 92324',
    phone: '(888) 245-4257',
    website: 'https://www.inlandlegal.org',
    description: 'Premier civil legal aid nonprofit serving Riverside and San Bernardino. Protects tenants from unlawful evictions, uninhabitable living conditions, retaliatory rent hikes, and illegal landlord threats based on immigration status under CA Civil Code § 1940.3.',
    keyBenefits: [
      '100% Free legal defense against unlawful detainer (eviction) lawsuits',
      'Protection against landlord harassment or threats to call ICE',
      'Assistance demanding repairs for mold, leaks, or broken heating/plumbing',
      'Advice on California Tenant Protection Act (AB 1482) rent caps'
    ],
    languages: ['English', 'Español', 'Interpreter Access'],
    costType: 'Free',
    whatToBring: [
      'Copy of your lease agreement or rental contract',
      'All written notices from landlord (3-day notice, 30-day notice, rent increase letter)',
      'Proof of rent payments (money order receipts, bank statements, or receipts)'
    ],
    featured: true
  },
  {
    id: 'fair-housing-council-ie',
    name: 'Fair Housing Council of Riverside County',
    category: 'housing',
    county: 'Riverside County',
    city: 'Riverside',
    address: '3933 Mission Inn Ave, Riverside, CA 92501',
    phone: '(951) 682-6581',
    website: 'https://fairhousingnet.org',
    description: 'HUD-approved housing counseling agency investigating housing discrimination based on national origin, race, language, or family size. Offers tenant-landlord mediation and rental counseling.',
    keyBenefits: [
      'Free discrimination complaint filing under Federal and California Fair Housing laws',
      'Free tenant-landlord mediation to avoid eviction court',
      'First-time homebuyer education for immigrant families',
      'Security deposit dispute assistance'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Rental agreement',
      'Communication logs or text messages with landlord',
      'Proof of payments and written notices'
    ],
    featured: false
  },
  {
    id: 'path-of-life-ministries',
    name: 'Path of Life Ministries - Family & Emergency Shelter Hub',
    category: 'housing',
    county: 'Riverside County',
    city: 'Riverside',
    address: '2840 Hulen Pl, Riverside, CA 92507',
    phone: '(951) 683-4101',
    website: 'https://www.thepathoflife.org',
    description: 'Emergency shelter, transitional housing, and rapid rehousing services for families with children and individuals facing homelessness in Western Riverside County.',
    keyBenefits: [
      'Family shelter with private rooms for parents and children',
      'Hot meals, warm beds, showers, and hygiene kits',
      'Case management for transitioning into permanent rental apartments',
      'Non-judgmental emergency shelter intake'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Any ID available for adults',
      'Birth certificates or immunization cards for children if available'
    ],
    featured: false
  },
  {
    id: 'inland-socal-united-way-211',
    name: 'Inland SoCal 2-1-1 (Crisis, Utility & Rental Assistance)',
    category: 'housing',
    county: 'All',
    city: 'Inland Empire Region-wide',
    address: '9624 Hermosa Ave, Rancho Cucamonga, CA 91730',
    phone: '2-1-1 (or 888-435-7565)',
    website: 'https://inlandsocaluw.org/211',
    description: '24/7 confidential community helpline connecting Inland Empire residents with emergency rent relief, Low-Income Home Energy Assistance (LIHEAP utility bill help), food pantries, and temporary motels.',
    keyBenefits: [
      'Dial 2-1-1 anytime 24/7/365 in 150+ languages',
      'Access to LIHEAP utility grants (electric & gas bill forgiveness)',
      'Immediate referral to open emergency shelter beds across IE',
      'Confidential and anonymous screening'
    ],
    languages: ['English', 'Español', '150+ Languages via Tele-interpreter'],
    costType: 'Free',
    whatToBring: [
      'Utility bill (Southern California Edison, SoCalGas, or municipal utility)',
      'Proof of household income'
    ],
    featured: true
  },

  // --- JOBS & WORK PERMITS ---
  {
    id: 'peoc-day-labor-center',
    name: 'Pomona Economic Opportunity Center (PEOC / Day Labor Center)',
    category: 'jobs',
    county: 'Pomona Valley',
    city: 'Pomona',
    address: '1444 E. Holt Ave, Pomona, CA 91767',
    phone: '(909) 397-4215',
    website: 'https://pomonadaylabor.org',
    description: 'A democratic worker center organizing day laborers, domestic workers, and warehouse workers in the Inland Empire and Pomona Valley. Provides safe hiring halls, OSHA workplace safety training, wage theft legal recovery, and wage negotiation.',
    keyBenefits: [
      'Safe, dignity-centered hiring hall matching workers with fair-wage jobs',
      'Direct legal intervention against unpaid wages or employer wage theft',
      'OSHA-certified construction and warehouse safety courses',
      'English for the Workplace and worker rights workshops'
    ],
    languages: ['Español', 'English'],
    costType: 'Free',
    whatToBring: [
      'Any photo identification',
      'Work clothing / boots for construction or landscaping assignments'
    ],
    featured: true
  },
  {
    id: 'ajcc-san-bernardino-workforce',
    name: "America's Job Center of California (AJCC) - San Bernardino",
    category: 'jobs',
    county: 'San Bernardino County',
    city: 'San Bernardino',
    address: '658 E. Brier Dr, Suite 100, San Bernardino, CA 92408',
    phone: '(909) 382-0440',
    website: 'https://wp.sbcounty.gov/workforce/',
    description: 'State and county workforce development center offering free computer access for job applications, resume writing workshops, vocational training vouchers, and job placement assistance for work-authorized individuals.',
    keyBenefits: [
      'Free computer lab, printing, and resume builder tools',
      'Direct job recruitment fairs with Inland Empire logistics & healthcare employers',
      'WIOA-funded vocational training programs (truck driving, medical coding, welding)',
      'Interview coaching and professional attire vouchers'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Proof of work authorization (EAD Work Permit card, Green Card, or US Passport)',
      'Updated resume if available',
      'Driver license or California ID'
    ],
    featured: false
  },
  {
    id: 'itin-business-todec',
    name: 'TODEC Small Business & ITIN Independent Contracting Training',
    category: 'jobs',
    county: 'Riverside County',
    city: 'Perris / San Bernardino',
    address: '234 S. D St, Perris, CA 92570',
    phone: '(951) 943-1955',
    website: 'https://todec.org',
    description: 'Empowers immigrant workers without federal work permits to become self-employed independent contractors or launch their own California registered LLC or Sole Proprietorship using an IRS ITIN number.',
    keyBenefits: [
      'Learn how to legally work and earn income in California using an ITIN',
      'Free assistance forming a California LLC or DBA (Doing Business As)',
      'Guidance on business licensing, liability insurance, and invoicing clients',
      'Tax compliance and bookkeeping education'
    ],
    languages: ['Español', 'English'],
    costType: 'Free',
    whatToBring: [
      'IRS ITIN letter if you already have one (or staff can help you apply for an ITIN)',
      'Valid passport or Consular ID',
      'Business idea or trade skill description'
    ],
    featured: true
  },
  {
    id: 'ca-labor-commissioner-san-bernardino',
    name: "California Labor Commissioner's Office (DIR) - San Bernardino",
    category: 'jobs',
    county: 'San Bernardino County',
    city: 'San Bernardino',
    address: '464 W. 4th St, Room 348, San Bernardino, CA 92401',
    phone: '(909) 383-4334',
    website: 'https://www.dir.ca.gov/dlse/',
    description: 'State government agency enforcing wage, hour, and overtime protections. UNDER CALIFORNIA LAW, ALL WORKERS ARE PROTECTED regardless of immigration status. Employers who withhold wages or retaliate with immigration threats face severe state penalties.',
    keyBenefits: [
      'Enforces full minimum wage, overtime pay, and rest break compensations',
      'Recovers unpaid tips, withheld paychecks, and unlawful deductions',
      'Strict legal protection against employer retaliation or ICE threats (AB 263)',
      'No fees to file an official Wage Claim'
    ],
    languages: ['English', 'Español', 'Multilingual Translation'],
    costType: 'Free',
    whatToBring: [
      "Records of hours worked (notebook log, calendar, text messages, or punch cards)",
      'Pay stubs, bounced checks, or cash envelopes from employer',
      "Employer's business name, address, and supervisor's phone number"
    ],
    featured: true
  },

  // --- LEGAL DEFENSE & CIVIL RIGHTS ---
  {
    id: 'todec-legal-center',
    name: 'TODEC Legal Center (Training Occupational Development Educating Communities)',
    category: 'legal',
    county: 'Riverside County',
    city: 'Perris',
    address: '234 S. D St, Perris, CA 92570',
    phone: '(951) 943-1955',
    website: 'https://todec.org',
    description: 'Grassroots immigrant rights organization serving the Inland Empire and Coachella Valley for over 35 years. Provides accredited DOJ legal immigration representation, citizenship naturalization, DACA renewals, U-Visas, and community empowerment.',
    keyBenefits: [
      'DOJ-accredited legal representatives and experienced immigration attorneys',
      'Low-cost or free consultations for asylum, family petitions, and work authorization',
      'DACA renewal fee grants and application assistance',
      'Community organizing, leadership academies, and civic advocacy'
    ],
    languages: ['Español', 'English'],
    costType: 'Free Consultations',
    whatToBring: [
      'All previous immigration papers, notices, or Alien Registration Number (A-Number)',
      'Valid passport or official ID',
      'Certified court or arrest dispositions if ever arrested anywhere'
    ],
    featured: true
  },
  {
    id: 'icij-inland-coalition',
    name: 'Inland Coalition for Immigrant Justice (ICIJ)',
    category: 'legal',
    county: 'San Bernardino County',
    city: 'Ontario / San Bernardino',
    address: '1030 W. 4th St, Ontario, CA 91762',
    phone: '(909) 361-4588',
    website: 'https://icij.org',
    description: 'Coalition of over 35 immigrant-serving organizations across San Bernardino and Riverside counties. Operates the Inland Empire Rapid Response Network, bond fund assistance, immigrant detention defense, and community education.',
    keyBenefits: [
      'Operates the 24/7 Inland Empire Rapid Response Hotline: (909) 361-4588',
      'Emergency legal defense for community members detained by immigration authorities',
      'Know Your Rights pocket cards and community defense workshops',
      'Advocacy for immigrant-friendly municipal and county policies'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'For detained relatives: full legal name, date of birth, country of origin, and A-Number if known',
      'Location of enforcement or detention facility'
    ],
    featured: true
  },
  {
    id: 'catholic-charities-sb-riverside',
    name: 'Catholic Charities San Bernardino & Riverside Counties - Immigration Services',
    category: 'legal',
    county: 'San Bernardino County',
    city: 'San Bernardino',
    address: '1450 N. D St, San Bernardino, CA 92405',
    phone: '(909) 388-1239',
    website: 'https://ccsbriv.org/immigration-services',
    description: 'DOJ-recognized non-profit legal services providing professional, ethical, low-cost legal assistance with affirmative immigration applications, green card renewals, family reunification, TPS, and naturalization.',
    keyBenefits: [
      'DOJ-recognized and highly reputable legal specialists',
      'Low, transparent non-profit fees with fee waiver assistance for USCIS fees',
      'Safe from unauthorized "notario" scams',
      'Comprehensive family immigration counseling'
    ],
    languages: ['English', 'Español', 'Vietnamese Support'],
    costType: 'Sliding Scale',
    whatToBring: [
      'Prior USCIS receipts, decision letters, or immigration documents',
      'Proof of household income for USCIS Fee Waiver (I-912)',
      'Government identification'
    ],
    featured: false
  },
  {
    id: 'chirla-inland-empire',
    name: 'CHIRLA Inland Empire (Coalition for Humane Immigrant Rights)',
    category: 'legal',
    county: 'San Bernardino County',
    city: 'San Bernardino',
    address: '433 N. Sierra Way, San Bernardino, CA 92410',
    phone: '(888) 624-4752',
    website: 'https://www.chirla.org',
    description: 'Statewide immigrant rights leader with a dedicated Inland Empire regional organizing and legal team. Conducts weekly legal consultation clinics, AB 60 driver license application assistance, and youth empowerment summits.',
    keyBenefits: [
      'Weekly walk-in and virtual legal consultations',
      'Guidance for undocumented drivers obtaining California AB 60 driver licenses',
      'Student and youth undocumented organizing network',
      'State legislative advocacy fighting for health and labor equity'
    ],
    languages: ['Español', 'English'],
    costType: 'Free Consultations',
    whatToBring: [
      'Immigration file copies',
      'Two forms of ID'
    ],
    featured: false
  }
];
