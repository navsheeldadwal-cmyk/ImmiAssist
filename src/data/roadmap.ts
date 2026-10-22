import { RoadmapStep } from '../types';

export const INLAND_EMPIRE_ROADMAP: RoadmapStep[] = [
  {
    id: 'step-schools',
    title: 'Enroll Children in Free Public K-12 School',
    category: 'education',
    urgency: 'Week 1',
    summary: 'Every child in California has a guaranteed constitutional right to attend public school from kindergarten through 12th grade, completely free, regardless of immigration status.',
    keyRights: 'Under the landmark U.S. Supreme Court decision Plyler v. Doe (1982) and California state law, public schools CANNOT ask about citizenship or immigration status, require Social Security Numbers, or report families.',
    actionSteps: [
      'Locate your local school district (e.g. San Bernardino Unified, Riverside Unified, Fontana Unified, Corona-Norco, Ontario-Montclair).',
      'Gather the child’s birth certificate (or passport/baptismal certificate from home country).',
      'Bring vaccination records. If vaccines are missing, visit SAC Health or RUHS Community Clinic for free school catch-up shots.',
      'Provide local proof of address (utility bill, lease, or a signed statement from your host).',
      'Enroll in free school breakfast and lunch (universal in California).'
    ],
    requiredDocs: [
      'Proof of child’s age (Foreign birth certificate or passport)',
      'Immunization record (Yellow card or clinic record)',
      'Proof of residency in the school district boundary'
    ],
    helpfulLinks: [
      { title: 'California Dept of Education Immigrant Student Rights', url: 'https://www.cde.ca.gov/re/di/eo/immigrantstudents.asp' },
      { title: 'Find Your Inland Empire School District', url: 'https://www.cde.ca.gov/SchoolDirectory/' }
    ]
  },
  {
    id: 'step-medical',
    title: 'Apply for California Full-Scope Medi-Cal Healthcare',
    category: 'health',
    urgency: 'Week 1',
    summary: 'California is the first state in the nation where all income-eligible residents qualify for free comprehensive Full-Scope Medi-Cal (doctors, dental, vision, prescription drugs, mental health, and hospital care) regardless of immigration status or age.',
    keyRights: 'Using Medi-Cal does NOT count against "Public Charge" rules for standard green card or visa applications. Your medical information is strictly protected by federal HIPAA and state privacy laws.',
    actionSteps: [
      'Visit BenefitsCal.com or walk into an Inland Empire Health Plan (IEHP) Community Resource Center in San Bernardino, Riverside, or Victorville.',
      'Fill out the Medi-Cal application. If asked about citizenship or SSN, you can state "Not applying for myself / Undocumented" without penalty.',
      'Choose a local health plan such as IEHP or Molina Healthcare.',
      'Assign a primary care clinic close to your home (e.g., SAC Health or RUHS Clinic).',
      'Receive your Benefits Identification Card (BIC) in the mail.'
    ],
    requiredDocs: [
      'Proof of identity (Consular ID, passport, or foreign driver license)',
      'Proof of California residency (utility bill or lease)',
      'Proof of monthly household income (paystubs or self-written declaration)'
    ],
    helpfulLinks: [
      { title: 'BenefitsCal Official Application Portal', url: 'https://www.benefitscal.com' },
      { title: 'IEHP Community Resource Centers', url: 'https://www.iehp.org' }
    ]
  },
  {
    id: 'step-ab60-license',
    title: 'Apply for a California AB 60 Driver’s License',
    category: 'legal',
    urgency: 'Week 2',
    summary: 'The California Assembly Bill 60 (AB 60) allows any eligible California resident to obtain a state driver’s license, regardless of immigration status.',
    keyRights: 'California law (AB 60) prohibits state and local law enforcement from using an AB 60 license to discriminate against the holder or investigate immigration status.',
    actionSteps: [
      'Study the California Driver Handbook (available online in Spanish, Arabic, Tagalog, Vietnamese, Chinese, and English).',
      'Gather accepted identity documents (e.g., valid Mexican Consular ID / Matrícula, passport from country of origin, or foreign electoral card).',
      'Schedule an appointment at a local DMV office (Fontana, San Bernardino, Riverside, Norco, or Palm Springs).',
      'Pass the vision screening and the written traffic knowledge test.',
      'Take your behind-the-wheel driving test and receive your license.'
    ],
    requiredDocs: [
      'Valid foreign passport or Consular Identification Card (Matrícula Consular)',
      'Two proofs of California residency (utility bill, bank statement, or rental lease)'
    ],
    helpfulLinks: [
      { title: 'California DMV AB 60 Document Checklist', url: 'https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/assembly-bill-60-driver-licenses/' },
      { title: 'Practice California DMV Written Tests', url: 'https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/' }
    ]
  },
  {
    id: 'step-itin-taxes',
    title: 'Obtain an IRS ITIN for Work, Taxes & Business',
    category: 'jobs',
    urgency: 'Month 1',
    summary: 'An Individual Taxpayer Identification Number (ITIN) is a tax processing number issued by the IRS for individuals who do not have and are not eligible for a Social Security Number.',
    keyRights: 'Having an ITIN allows you to legally work as an independent contractor (1099), establish your own business or LLC in California, build credit history, open bank accounts, and claim child tax credits.',
    actionSteps: [
      'Complete IRS Form W-7 (Application for IRS Individual Taxpayer Identification Number).',
      'Work with an IRS Certified Acceptance Agent (CAA) or trusted nonprofit like TODEC Legal Center or Catholic Charities to avoid mailing your original passport.',
      'File an annual federal tax return together with your Form W-7.',
      'Receive your ITIN letter from the IRS in 7 to 11 weeks.',
      'Use your ITIN to open a checking account with immigrant-friendly credit unions (e.g., Self-Help Federal Credit Union or Arrowhead Credit Union).'
    ],
    requiredDocs: [
      'Original valid foreign passport (or certified copy from issuing consulate)',
      'Completed Form W-7 and federal tax return'
    ],
    helpfulLinks: [
      { title: 'IRS ITIN Information Page', url: 'https://www.irs.gov/individuals/individual-taxpayer-identification-number' },
      { title: 'TODEC Small Business / ITIN Assistance', url: 'https://todec.org' }
    ]
  },
  {
    id: 'step-adult-esl',
    title: 'Register for Free Adult ESL & Vocational Classes',
    category: 'education',
    urgency: 'Month 1',
    summary: 'Inland Empire school districts and adult consortia offer 100% free English as a Second Language (ESL) classes, basic literacy, high school equivalency (GED/HiSET in Spanish or English), and workforce career certificates.',
    keyRights: 'Adult education programs in California do not check immigration status and charge no tuition for core ESL courses.',
    actionSteps: [
      'Find the adult school nearest your residence (Riverside Adult School, Chaffey Adult School in Ontario, San Bernardino Adult School, or Corona-Norco Adult Ed).',
      'Take a brief language placement assessment to find the right level from Level 1 (Beginner) to Level 6 (Advanced Professional).',
      'Choose daytime, evening, or weekend hybrid classes.',
      'Explore vocational certification options (Certified Nurse Assistant, Logistics, Construction, Bookkeeping).'
    ],
    requiredDocs: [
      'Photo identification (any country)',
      'Proof of age (18 or older)'
    ],
    helpfulLinks: [
      { title: 'Inland Adult Education Consortium', url: 'https://inlandadulted.org' },
      { title: 'Riverside Adult School Schedules', url: 'https://adulted.riversideunified.org' }
    ]
  },
  {
    id: 'step-tenant-rights',
    title: 'Know Your Rights as a California Tenant',
    category: 'housing',
    urgency: 'Week 2',
    summary: 'Housing costs in the Inland Empire are significant, but California has some of the strongest tenant protections in the United States.',
    keyRights: 'Under California Civil Code § 1940.3, it is ILLEGAL for a landlord to threaten to call immigration authorities, report you to ICE, or retaliate because of your legal status. Landlords also cannot evict you without a formal court order.',
    actionSteps: [
      'Always pay rent using traceable methods (checks, money orders with receipt stubs, or online portals). Never pay cash without receiving a written, signed receipt.',
      'Keep copies of all rental agreements, house rules, and rent payment receipts in a secure folder.',
      'If your landlord refuses to make essential repairs (water, heat, plumbing), submit requests in writing or text.',
      'If you receive an eviction notice (3-day or 30-day notice), contact Inland Counties Legal Services (ICLS) at (888) 245-4257 immediately for free defense.'
    ],
    requiredDocs: [
      'Lease agreement or month-to-month rental agreement',
      'Rent receipts and payment records'
    ],
    helpfulLinks: [
      { title: 'Inland Counties Legal Services (ICLS) Housing Help', url: 'https://www.inlandlegal.org' },
      { title: 'California Tenant Rights Guide (Dept of Real Estate)', url: 'https://landlordtenant.dre.ca.gov/' }
    ]
  },
  {
    id: 'step-rapid-response',
    title: 'Save Emergency Numbers & Create a Family Plan',
    category: 'legal',
    urgency: 'Week 1',
    summary: 'Preparation provides peace of mind. Every immigrant family in the Inland Empire should save emergency civil rights numbers and know their constitutional rights.',
    keyRights: 'The 4th and 5th Amendments of the U.S. Constitution protect EVERY person on U.S. soil. You have the right to remain silent, the right to deny warrantless entry into your home, and the right to speak to an attorney.',
    actionSteps: [
      'Save the Inland Empire Rapid Response Network hotline: (909) 361-4588 in your phone.',
      'Carry a printed "Know Your Rights" pocket card in your wallet.',
      'Designate a trusted relative, friend, or emergency caregiver for your children in case of emergency.',
      'Keep important family documents (birth certificates, medical records, passport copies) in a safe, water-resistant firebox known to a trusted relative.',
      'Never sign any documents presented by immigration authorities without having an attorney review them.'
    ],
    requiredDocs: [
      'Family emergency contact numbers list',
      'Caregiver’s Authorization Affidavit for minor children (California Family Code § 6550)'
    ],
    helpfulLinks: [
      { title: 'Inland Coalition for Immigrant Justice (ICIJ)', url: 'https://icij.org' },
      { title: 'California Immigrant Policy Center Resources', url: 'https://caimmigrant.org' }
    ]
  },
  {
    id: 'step-community-safety-net',
    title: 'Get a Library Card & Connect to Local Food Pantries',
    category: 'education',
    urgency: 'Month 1',
    summary: 'Public libraries in Riverside and San Bernardino counties are free civic sanctuaries offering free high-speed Wi-Fi, computer labs, printing, bilingual children’s storytimes, and career centers.',
    keyRights: 'Public libraries never share patron information and welcome all residents without checking immigration status.',
    actionSteps: [
      'Visit your local public library (e.g. Riverside Public Library, San Bernardino County Library system, Ontario City Library).',
      'Register for a free library card using any photo ID and proof of local mailing address.',
      'Check out bilingual books, study guides for the driving test, and free museum passes.',
      'Call 2-1-1 or visit Community Action Partnership of Riverside/San Bernardino to locate free weekly food distribution pantries.'
    ],
    requiredDocs: [
      'Any photo ID',
      'Piece of mail with your current address'
    ],
    helpfulLinks: [
      { title: 'San Bernardino County Library System', url: 'https://www.sbclib.org' },
      { title: 'Riverside Public Library', url: 'https://riversideca.gov/library/' }
    ]
  }
];
