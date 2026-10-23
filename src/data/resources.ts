import { ResourceItem } from '../types';

export const INLAND_EMPIRE_RESOURCES: ResourceItem[] = [
  // ==========================================
  // --- HOSPITALS & HEALTHCARE NETWORKS ---
  // ==========================================
  {
    id: 'loma-linda-univ-med-center',
    name: 'Loma Linda University Medical Center & Children’s Hospital',
    category: 'health',
    facilityType: 'Hospital',
    county: 'San Bernardino County',
    city: 'Loma Linda',
    address: '11234 Anderson St, Loma Linda, CA 92354',
    phone: '(909) 558-4000',
    website: 'https://lluh.org',
    description: 'World-renowned academic medical center and the only Level 1 Trauma and Children’s Hospital in the Inland Empire. Offers 24/7 comprehensive emergency care, maternity, pediatric intensive care, outpatient clinics, and translation services.',
    keyBenefits: [
      '24/7 Emergency & Level 1 Trauma Center with dedicated Children’s Hospital',
      'Accepts Covered California, employer health plans, and Medi-Cal',
      'Certified medical interpreters in Spanish, Arabic, Vietnamese, and 150+ languages',
      'Financial assistance & charity care programs for qualifying families'
    ],
    languages: ['English', 'Español', 'Arabic', 'Vietnamese', 'Certified Medical Interpreters'],
    costType: 'Covered by Insurance / Medi-Cal',
    whatToBring: [
      'Government photo ID or passport',
      'Health insurance card or Medi-Cal BIC card (if enrolled)',
      'List of current medications and previous medical history'
    ],
    featured: true,
    tags: [
      'hospital',
      'hospitals',
      'children hospital',
      'emergency',
      'emergency room',
      'er',
      'trauma',
      'pediatrics',
      'doctors',
      'maternity',
      'surgery',
      'loma linda'
    ]
  },
  {
    id: 'arrowhead-regional-med-center',
    name: 'Arrowhead Regional Medical Center (ARMC Hospital)',
    category: 'health',
    facilityType: 'Hospital',
    county: 'San Bernardino County',
    city: 'Colton',
    address: '400 N. Pepper Ave, Colton, CA 92324',
    phone: '(909) 580-1000',
    website: 'https://www.arrowheadmedcenter.org',
    description: 'Major public teaching hospital operated by San Bernardino County with 456 beds. Features a 24-hour Emergency Department, Level II Trauma Center, Regional Burn Center, neonatal ICU, and family health outpatient primary care centers.',
    keyBenefits: [
      '24-Hour emergency department and primary care clinics on campus',
      'Financial eligibility counselors on-site for Covered California and Medi-Cal enrollment',
      'Comprehensive specialty care including OB/GYN, cardiology, and pediatrics',
      'Dedicated language line and bilingual staff throughout the hospital'
    ],
    languages: ['English', 'Español', 'Bilingual Staff', 'Tele-interpreter Service'],
    costType: 'Covered by Insurance / Medi-Cal',
    whatToBring: [
      'Any government-issued photo ID (passport, state ID, or consular ID)',
      'Proof of address in San Bernardino or Riverside County',
      'Income verification for hospital financial assistance programs'
    ],
    featured: true,
    tags: [
      'hospital',
      'hospitals',
      'medical center',
      'emergency',
      'er',
      'trauma',
      'burn center',
      'colton',
      'san bernardino',
      'doctors',
      'county hospital'
    ]
  },
  {
    id: 'ruhs-medical-center-hospital',
    name: 'Riverside University Health System (RUHS) Medical Center Hospital',
    category: 'health',
    facilityType: 'Hospital',
    county: 'Riverside County',
    city: 'Moreno Valley',
    address: '26520 Cactus Ave, Moreno Valley, CA 92555',
    phone: '(951) 486-4000',
    website: 'https://www.ruhealth.org',
    description: 'Premier Riverside County public teaching hospital featuring 439 beds, Level 1 Adult & Pediatric Trauma Center, 24/7 Emergency Room, pediatric care, and an extensive network of 14 Community Health Centers across Riverside County.',
    keyBenefits: [
      'Level 1 Pediatric and Adult Trauma and 24/7 Emergency Medical Services',
      'Riverside County safety-net healthcare provider with no residency restrictions',
      'Network of 14 regional primary care clinics in Riverside, Moreno Valley, Corona, and Indio',
      'Prescription pharmacy and low-cost specialty outpatient care'
    ],
    languages: ['English', 'Español', 'Telephone Translation (200+ languages)'],
    costType: 'Covered by Insurance / Medi-Cal',
    whatToBring: [
      'Photo ID (passport, driver license, or consular card)',
      'Proof of residency in Riverside County',
      'Health insurance card or income proof if seeking financial support'
    ],
    featured: true,
    tags: [
      'hospital',
      'hospitals',
      'medical center',
      'emergency',
      'er',
      'moreno valley',
      'riverside',
      'county hospital',
      'trauma',
      'doctors',
      'clinic'
    ]
  },
  {
    id: 'riverside-community-hospital',
    name: 'Riverside Community Hospital',
    category: 'health',
    facilityType: 'Hospital',
    county: 'Riverside County',
    city: 'Riverside',
    address: '4445 Magnolia Ave, Riverside, CA 92501',
    phone: '(951) 788-3000',
    website: 'https://riversidecommunityhospital.com',
    description: '473-bed full-service regional hospital in downtown Riverside with one of the busiest emergency rooms in Southern California. Recognized HeartCare Center, comprehensive stroke center, robotic surgery, and Level 1 Trauma Center.',
    keyBenefits: [
      '24/7 Level 1 Trauma Emergency Room in central Riverside',
      'Comprehensive cardiac care, stroke care, and labor & delivery maternity',
      'Accepts private insurance plans, Medicare, Covered California, and Medi-Cal',
      'Full bilingual nursing staff and 24/7 language interpretation'
    ],
    languages: ['English', 'Español', 'Interpreter Access'],
    costType: 'Covered by Insurance / Medi-Cal',
    whatToBring: [
      'Photo ID and insurance cards if insured',
      'Emergency contact information'
    ],
    featured: false,
    tags: [
      'hospital',
      'hospitals',
      'emergency',
      'er',
      'riverside',
      'cardiology',
      'maternity',
      'stroke center',
      'doctors'
    ]
  },
  {
    id: 'san-antonio-regional-hospital',
    name: 'San Antonio Regional Hospital',
    category: 'health',
    facilityType: 'Hospital',
    county: 'San Bernardino County',
    city: 'Upland',
    address: '999 San Bernardino Rd, Upland, CA 91786',
    phone: '(909) 985-2811',
    website: 'https://www.sarh.org',
    description: '363-bed non-profit regional hospital serving West Inland Empire communities including Upland, Ontario, Rancho Cucamonga, and Montclair. Features an advanced 24/7 Emergency Department, heart institute, and maternity center.',
    keyBenefits: [
      '24/7 Emergency Department serving West Inland Empire families',
      'State-of-the-art maternity and neonatal intensive care (NICU)',
      'Community health education and prenatal classes for young parents',
      'Bilingual patient navigation and financial counseling'
    ],
    languages: ['English', 'Español'],
    costType: 'Covered by Insurance / Medi-Cal',
    whatToBring: [
      'Photo ID and insurance documentation',
      'Medical history records'
    ],
    featured: false,
    tags: [
      'hospital',
      'hospitals',
      'emergency',
      'er',
      'upland',
      'ontario',
      'rancho cucamonga',
      'maternity',
      'doctors'
    ]
  },
  {
    id: 'kaiser-fontana-medical-center',
    name: 'Kaiser Permanente Fontana Medical Center & Hospital',
    category: 'health',
    facilityType: 'Hospital',
    county: 'San Bernardino County',
    city: 'Fontana',
    address: '9961 Sierra Ave, Fontana, CA 92335',
    phone: '(833) 574-2273',
    website: 'https://healthy.kaiserpermanente.org',
    description: 'Major regional medical center and hospital facility providing 24/7 emergency care, specialty surgery, pediatric departments, and comprehensive outpatient physician clinics across the Inland Empire.',
    keyBenefits: [
      '24-Hour emergency department and urgent care',
      'Integrated electronic health records and online pharmacy refills',
      'Multi-specialty pediatric, family medicine, and women’s health physicians',
      'Extensive multilingual physician directory'
    ],
    languages: ['English', 'Español', 'Multi-Language Line'],
    costType: 'Covered by Insurance / Medi-Cal',
    whatToBring: [
      'Kaiser membership card or photo ID',
      'Appointment confirmation if scheduled'
    ],
    featured: false,
    tags: [
      'hospital',
      'hospitals',
      'kaiser',
      'fontana',
      'emergency',
      'er',
      'urgent care',
      'doctors',
      'pediatrics',
      'pharmacy'
    ]
  },
  {
    id: 'sac-health-san-bernardino',
    name: 'SAC Health System (Comprehensive Clinic & Outpatient Center)',
    category: 'health',
    facilityType: 'Clinic',
    county: 'San Bernardino County',
    city: 'San Bernardino',
    address: '250 S. G St, San Bernardino, CA 92410',
    phone: '(909) 382-7100',
    website: 'https://www.sachealth.org',
    description: 'The largest community health center network in the Inland Empire, affiliated with Loma Linda University Health. Provides family medicine, pediatrics, prenatal OB/GYN, dental care, eye care, and on-site pharmacy.',
    keyBenefits: [
      'Accepts Covered California, private insurance, Medi-Cal, and sliding-fee scale',
      'Full pediatric immunizations, well-child visits, and school physicals',
      'Dental care, vision exams, and on-site pharmacy with prescription discounts',
      'Bilingual medical doctors and certified interpreters'
    ],
    languages: ['English', 'Español', 'Arabic', 'Vietnamese', 'Language Line'],
    costType: 'Sliding Scale',
    whatToBring: [
      'Photo identification (passport, state ID, or foreign driver license)',
      'Proof of income if applying for sliding-fee scale',
      'Immunization record card for children'
    ],
    featured: true,
    tags: [
      'clinic',
      'clinics',
      'doctors',
      'health center',
      'pediatric',
      'dental',
      'dentist',
      'pharmacy',
      'vaccines',
      'immunizations',
      'san bernardino'
    ]
  },
  {
    id: 'iehp-community-resource-center',
    name: 'Inland Empire Health Plan (IEHP) Community Resource Center',
    category: 'health',
    facilityType: 'Community Center',
    county: 'San Bernardino County',
    city: 'San Bernardino',
    address: '805 W. 2nd St, Suite C, San Bernardino, CA 92410',
    phone: '(866) 228-4347',
    website: 'https://www.iehp.org',
    description: 'Public health organization resource center providing free enrollment assistance for health insurance (Covered California and Medi-Cal), fitness and nutrition classes, asthma management, and health navigation for newcomer families.',
    keyBenefits: [
      'Free in-person enrollment assistance for California health plans and Medi-Cal',
      'Assistance finding primary care doctors and pediatricians close to your home',
      'Free preventative health education, nutrition, and wellness classes',
      'Bilingual navigators to guide you through the U.S. healthcare system'
    ],
    languages: ['English', 'Español', 'Arabic'],
    costType: 'Free',
    whatToBring: [
      'Identification (Passport, State ID, or consular ID)',
      'Proof of California residency (utility bill or lease agreement)',
      'Income verification documents (W-2, pay stubs, or tax forms)'
    ],
    featured: true,
    tags: [
      'insurance',
      'health plan',
      'medi-cal',
      'covered california',
      'health insurance',
      'doctor referral',
      'san bernardino',
      'wellness'
    ]
  },
  {
    id: 'clinica-medica-familiar',
    name: 'Clínica Médica Familiar (Fontana & Ontario Family Practice)',
    category: 'health',
    facilityType: 'Clinic',
    county: 'San Bernardino County',
    city: 'Fontana',
    address: '9961 Sierra Ave, Fontana, CA 92335',
    phone: '(909) 357-1234',
    website: 'https://clinicamedicafamiliar.org',
    description: 'Community outpatient family clinic serving families across Fontana, Ontario, and Rialto. Offers same-day doctor visits, routine immunizations, well-child exams, physicals for school sports, laboratory work, and women’s health.',
    keyBenefits: [
      '100% Spanish-bilingual doctors, nurses, and office staff',
      'Low flat-rate consultations and affordable labs for families',
      'School physicals, pediatric vaccinations, and annual wellness checks',
      'Saturday appointment availability for working parents'
    ],
    languages: ['Español', 'English'],
    costType: 'Sliding Scale',
    whatToBring: [
      'Photo ID',
      'List of current medications or previous medical records if available'
    ],
    featured: false,
    tags: [
      'clinic',
      'clinics',
      'doctor',
      'pediatrics',
      'family doctor',
      'vaccines',
      'fontana',
      'ontario',
      'school physicals'
    ]
  },
  {
    id: 'borrego-health-coachella',
    name: 'Borrego Health - Coachella Valley Community Health Center',
    category: 'health',
    facilityType: 'Clinic',
    county: 'Coachella Valley',
    city: 'Coachella',
    address: '55-497 Van Buren St, Coachella, CA 92236',
    phone: '(760) 391-6000',
    website: 'https://www.borregohealth.org',
    description: 'Dedicated healthcare clinic for families in Eastern Riverside County and the Coachella Valley. Offers primary medical care, dental, vision, women’s health, and pediatric services.',
    keyBenefits: [
      'Comprehensive primary care doctors, pediatricians, and dentists',
      'Indigenous language interpretation support available',
      'Free preventive vaccinations and child wellness checkups',
      'Sliding fee scale and Medi-Cal accepted'
    ],
    languages: ['Español', 'English', 'Mixteco Support'],
    costType: 'Sliding Scale',
    whatToBring: [
      'Any form of photo identification',
      'Proof of income if requesting sliding-scale payment'
    ],
    featured: false,
    tags: [
      'clinic',
      'coachella',
      'desert',
      'doctors',
      'dental',
      'dentist',
      'health center',
      'pediatrics'
    ]
  },

  // ==========================================
  // --- SCHOOLS (ELEMENTARY, MIDDLE, HIGH) & BOUNDARIES ---
  // ==========================================

  // --- ELEMENTARY SCHOOLS (TK–5/6) ---
  {
    id: 'bryant-elementary-rusd',
    name: 'Bryant Dual Language Immersion Elementary School (RUSD)',
    category: 'education',
    facilityType: 'Elementary School',
    gradeLevels: 'Grades TK–6 (Transitional Kindergarten to 6th Grade)',
    county: 'Riverside County',
    city: 'Riverside',
    address: '4324 3rd St, Riverside, CA 92507',
    phone: '(951) 788-7453',
    website: 'https://bryant.riversideunified.org',
    boundaryZone: 'Central Riverside / Downtown Attendance Zone (Dual Language Magnet)',
    feederPattern: 'Feeds into Central Middle School → Riverside Polytechnic High School',
    boundaryMapUrl: 'https://www.riversideunified.org/departments/student_services/school_directory_locator',
    description: 'Exemplary neighborhood elementary school offering a 90:10 Spanish-English Dual Language Immersion program alongside standard elementary curriculum. Provides full-day transitional kindergarten (TK), kindergarten, and grades 1–6 with bilingual parent support.',
    keyBenefits: [
      'Dual Language Immersion (English & Spanish) starting in Transitional Kindergarten',
      'Free universal school breakfast, lunch, and after-school expanded learning',
      'Designated neighborhood attendance zone with dual-language transfer availability',
      'Bilingual counselors and parent resource liaison on campus'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      "Child's proof of age (birth certificate or passport)",
      'Immunization record (measles, polio, DTaP, hepatitis B, varicella)',
      'Two proofs of home address in Riverside (utility bill, lease, or mortgage statement)'
    ],
    featured: true,
    tags: [
      'elementary',
      'elementary school',
      'elemenatry',
      'elemntary',
      'primary school',
      'tk',
      'kindergarten',
      'school',
      'schools',
      'riverside',
      'rusd',
      'dual language',
      'spanish',
      'boundary',
      'boundaries',
      'zone'
    ]
  },
  {
    id: 'crenshaw-elementary-sbcusd',
    name: 'Crenshaw Elementary School (SBCUSD)',
    category: 'education',
    facilityType: 'Elementary School',
    gradeLevels: 'Grades TK–5 (Transitional Kindergarten to 5th Grade)',
    county: 'San Bernardino County',
    city: 'San Bernardino',
    address: '1755 Lugo Ave, San Bernardino, CA 92404',
    phone: '(909) 388-6380',
    website: 'https://crenshaw.sbcusd.com',
    boundaryZone: 'San Bernardino Central Attendance Zone',
    feederPattern: 'Feeds into King Middle School → Cajon High School / San Bernardino High',
    boundaryMapUrl: 'https://sbcusd.com/departments/enrollment',
    description: 'Public neighborhood elementary school in San Bernardino focused on early literacy, STEM education, and English Language Development (ELD). Welcomes newcomer immigrant children with dedicated bilingual classroom aides and free tutoring.',
    keyBenefits: [
      'Structured English Language Development (ELD) support for newcomer students',
      'Universal free meals and Chromebook device loaned to every student',
      'Free after-school CAPS academic enrichment and sports program until 6:00 PM',
      'On-site family support center for enrollment and immunization clinics'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      "Child's birth certificate or passport",
      'Current immunization / yellow card record',
      'Proof of residency in San Bernardino City Unified School District'
    ],
    featured: true,
    tags: [
      'elementary',
      'elementary school',
      'elemenatry',
      'elemntary',
      'primary school',
      'tk',
      'kindergarten',
      'grades k-5',
      'school',
      'san bernardino',
      'sbcusd',
      'boundary',
      'boundaries',
      'attendance zone'
    ]
  },
  {
    id: 'eisenhower-elementary-cnusd',
    name: 'Dwight D. Eisenhower Elementary School (CNUSD)',
    category: 'education',
    facilityType: 'Elementary School',
    gradeLevels: 'Grades TK–6 (Transitional Kindergarten to 6th Grade)',
    county: 'Riverside County',
    city: 'Corona',
    address: '3355 Prado Rd, Corona, CA 92882',
    phone: '(951) 736-3236',
    website: 'https://eisenhower.cnusd.k12.ca.us',
    boundaryZone: 'South Corona Attendance Zone',
    feederPattern: 'Feeds into Citrus Hills Intermediate School → Santiago High School',
    boundaryMapUrl: 'https://www.cnusd.k12.ca.us/our_departments/student_services/school_boundaries',
    description: 'Top-ranked public elementary school in Corona-Norco Unified with high academic growth, robotics clubs, and strong community engagement. Features transitional kindergarten, full-day kindergarten, and specialized reading specialists.',
    keyBenefits: [
      'High-performing academic curriculum with 1:1 classroom student technology',
      'Transitional Kindergarten (TK) for young children turning 5',
      'Specialized English Learner (EL) coaches to assist new immigrant children',
      'Safe neighborhood campus with active parent-teacher association'
    ],
    languages: ['English', 'Español', 'Arabic'],
    costType: 'Free',
    whatToBring: [
      'Child birth certificate, passport, or hospital birth record',
      'Immunization record from doctor or county clinic',
      'Recent gas, electric, or water utility bill showing parent name and address'
    ],
    featured: false,
    tags: [
      'elementary',
      'elementary school',
      'elemenatry',
      'elemntary',
      'primary school',
      'tk',
      'kindergarten',
      'school',
      'corona',
      'cnusd',
      'boundary',
      'boundaries',
      'zone'
    ]
  },
  {
    id: 'kingsley-elementary-omsd',
    name: 'Kingsley Elementary School (OMSD)',
    category: 'education',
    facilityType: 'Elementary School',
    gradeLevels: 'Grades TK–6 (Transitional Kindergarten to 6th Grade)',
    county: 'San Bernardino County',
    city: 'Ontario',
    address: '1020 S. Flora Ave, Ontario, CA 91761',
    phone: '(909) 984-7517',
    website: 'https://kingsley.omsd.net',
    boundaryZone: 'Ontario West Attendance Zone',
    feederPattern: 'Feeds into De Anza Middle School → Chaffey High School (CJUHSD)',
    boundaryMapUrl: 'https://www.omsd.net/departments/child-welfare-and-attendance/school-locator',
    description: 'Dedicated neighborhood elementary school in Ontario offering dual-language Spanish-English instruction, STEM labs, and family resource centers. Assists new resident families with smooth school registration and English assessments.',
    keyBenefits: [
      'Dual Language Immersion program and English Learner tutoring',
      'Free morning and after-school supervision for working families',
      'Family Welcome Liaison providing school uniforms and backpack assistance',
      'Clear neighborhood attendance boundary with seamless feeder to De Anza Middle'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      "Child's birth certificate or passport",
      'Vaccination records',
      'Proof of residency in Ontario or Montclair (rental lease or electric bill)'
    ],
    featured: false,
    tags: [
      'elementary',
      'elementary school',
      'elemenatry',
      'elemntary',
      'primary school',
      'ontario',
      'omsd',
      'tk',
      'kindergarten',
      'school',
      'boundary',
      'boundaries',
      'zone'
    ]
  },
  {
    id: 'belvedere-elementary-sbcusd',
    name: 'Belvedere Elementary School (SBCUSD)',
    category: 'education',
    facilityType: 'Elementary School',
    gradeLevels: 'Grades TK–5 (Transitional Kindergarten to 5th Grade)',
    county: 'San Bernardino County',
    city: 'San Bernardino / Highland',
    address: '2501 E. Marshall Blvd, San Bernardino, CA 92404',
    phone: '(909) 862-7100',
    website: 'https://belvedere.sbcusd.com',
    boundaryZone: 'East San Bernardino & Highland Attendance Zone',
    feederPattern: 'Feeds into Serrano Middle School → San Gorgonio High School',
    boundaryMapUrl: 'https://sbcusd.com/departments/enrollment',
    description: 'California Distinguished elementary school serving East San Bernardino and Highland neighborhoods. Offers strong visual arts, science enrichment, and multilingual support programs for immigrant families.',
    keyBenefits: [
      'California Distinguished School recognition for academic growth',
      'Transitional Kindergarten (TK) and Kindergarten full-day classrooms',
      'Bilingual counselors and speech therapists on staff',
      'Feeds directly into Serrano Middle School attendance zone'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Birth certificate or passport',
      'Complete immunization yellow card',
      'Proof of address within East San Bernardino / Highland'
    ],
    featured: false,
    tags: [
      'elementary',
      'elementary school',
      'elemenatry',
      'elemntary',
      'primary school',
      'san bernardino',
      'highland',
      'sbcusd',
      'school',
      'boundary',
      'boundaries'
    ]
  },
  {
    id: 'victoria-elementary-rusd',
    name: 'Victoria Elementary School (RUSD)',
    category: 'education',
    facilityType: 'Elementary School',
    gradeLevels: 'Grades TK–6 (Transitional Kindergarten to 6th Grade)',
    county: 'Riverside County',
    city: 'Riverside',
    address: '2910 Arlington Ave, Riverside, CA 92506',
    phone: '(951) 788-7462',
    website: 'https://victoria.riversideunified.org',
    boundaryZone: 'Riverside Victoria & Arlington Heights Attendance Zone',
    feederPattern: 'Feeds into Gage Middle School → Riverside Polytechnic High School',
    boundaryMapUrl: 'https://www.riversideunified.org/departments/student_services/school_directory_locator',
    description: 'Established public neighborhood elementary school along historic Victoria Avenue. Features dedicated reading interventionists, math lab, instrumental music, and structured transitional kindergarten.',
    keyBenefits: [
      'Transitional Kindergarten (TK) and grades 1–6 with small class ratios',
      'Comprehensive English Learner program and free after-school academic clubs',
      'School garden, science lab, and physical education specialists',
      'Clear attendance boundaries feeding directly into Gage Middle and Poly High'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Birth certificate or passport',
      'Proof of vaccinations',
      'Proof of residence in Victoria / Arlington area of Riverside'
    ],
    featured: false,
    tags: [
      'elementary',
      'elementary school',
      'elemenatry',
      'elemntary',
      'primary school',
      'riverside',
      'rusd',
      'tk',
      'kindergarten',
      'school',
      'boundary',
      'boundaries'
    ]
  },

  // --- MIDDLE SCHOOLS (GRADES 6–8) ---
  {
    id: 'central-middle-rusd',
    name: 'Central Middle School (RUSD)',
    category: 'education',
    facilityType: 'Middle School',
    gradeLevels: 'Grades 7–8 (Middle School / Intermediate)',
    county: 'Riverside County',
    city: 'Riverside',
    address: '4795 Magnolia Ave, Riverside, CA 92506',
    phone: '(951) 788-7301',
    website: 'https://central.riversideunified.org',
    boundaryZone: 'Central Riverside / Magnolia Corridor Attendance Zone',
    feederPattern: 'Feeder from Bryant & Longfellow Elementary → Feeds into Riverside Poly High School',
    boundaryMapUrl: 'https://www.riversideunified.org/departments/student_services/school_directory_locator',
    description: 'Central Riverside public middle school preparing 7th and 8th-grade students for high school graduation and university pathways. Offers advanced math, Spanish for native speakers, band, robotics, and sports.',
    keyBenefits: [
      'Core academic transition programs preparing 7th and 8th graders for high school',
      'Spanish Native Speaker literature classes and English Language Development (ELD)',
      'Free after-school tutoring, athletics, and STEM robotics clubs',
      'Assigned neighborhood attendance boundary feeding directly into Riverside Poly High'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Middle school transfer transcripts or elementary completion record',
      'Student immunization records (including Tdap booster for 7th grade)',
      'Proof of address within Central Riverside boundary'
    ],
    featured: true,
    tags: [
      'middle school',
      'middle',
      'intermediate',
      'junior high',
      'grades 6-8',
      'grades 7-8',
      'riverside',
      'rusd',
      'school',
      'boundary',
      'boundaries'
    ]
  },
  {
    id: 'richardson-prep-middle-sbcusd',
    name: 'Richardson PREP HI Middle School (SBCUSD)',
    category: 'education',
    facilityType: 'Middle School',
    gradeLevels: 'Grades 6–8 (Middle School)',
    county: 'San Bernardino County',
    city: 'San Bernardino',
    address: '1450 E. 27th St, San Bernardino, CA 92404',
    phone: '(909) 388-6438',
    website: 'https://richardson.sbcusd.com',
    boundaryZone: 'San Bernardino Citywide Academic Magnet & Feeder Zone',
    feederPattern: 'Feeder from North San Bernardino Elementary → Cajon High & San Bernardino High',
    boundaryMapUrl: 'https://sbcusd.com/departments/enrollment',
    description: 'National Blue Ribbon award-winning middle school in San Bernardino recognized among the top public schools in California. Rigorous college-prep academics, leadership academies, and honors programs.',
    keyBenefits: [
      'National Blue Ribbon School and California Gold Ribbon School of Excellence',
      'Rigorous honors English, science, algebra, and leadership curriculum',
      'Supportive environment for newly arriving immigrant children with academic ambition',
      'Feeder pipeline to prestigious International Baccalaureate (IB) high school programs'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Proof of 5th grade completion or previous transcripts',
      'Child immunization record with 7th-grade Tdap shot',
      'Proof of residence in San Bernardino County'
    ],
    featured: true,
    tags: [
      'middle school',
      'middle',
      'intermediate',
      'junior high',
      'grades 6-8',
      'san bernardino',
      'sbcusd',
      'school',
      'honors',
      'boundary',
      'boundaries'
    ]
  },
  {
    id: 'auburndale-intermediate-cnusd',
    name: 'Auburndale Intermediate Middle School (CNUSD)',
    category: 'education',
    facilityType: 'Middle School',
    gradeLevels: 'Grades 7–8 (Intermediate / Middle School)',
    county: 'Riverside County',
    city: 'Corona',
    address: '1255 River Rd, Corona, CA 92880',
    phone: '(951) 736-3231',
    website: 'https://auburndale.cnusd.k12.ca.us',
    boundaryZone: 'North Corona & Prado Dam Attendance Zone',
    feederPattern: 'Feeder from Eisenhower Elementary → Feeds into Corona High School',
    boundaryMapUrl: 'https://www.cnusd.k12.ca.us/our_departments/student_services/school_boundaries',
    description: 'Comprehensive intermediate middle school in Corona providing 7th and 8th graders with STEM academies, dual-language continuing paths, music, and career technical exploration.',
    keyBenefits: [
      'STEM Maker-Space labs and Project Lead The Way engineering classes',
      'Comprehensive English Learner (EL) support and bilingual student advisors',
      'Feeder boundary pipeline into Corona High School and STEM academies',
      'Bus transportation provided for eligible boundary neighborhoods'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Child birth certificate or passport',
      'Proof of vaccinations (Tdap booster required for 7th grade entry)',
      'Proof of residency in Corona-Norco Unified School District'
    ],
    featured: false,
    tags: [
      'middle school',
      'middle',
      'intermediate',
      'junior high',
      'grades 7-8',
      'corona',
      'cnusd',
      'school',
      'boundary',
      'boundaries'
    ]
  },
  {
    id: 'de-anza-middle-omsd',
    name: 'De Anza Middle School (OMSD)',
    category: 'education',
    facilityType: 'Middle School',
    gradeLevels: 'Grades 7–8 (Middle School)',
    county: 'San Bernardino County',
    city: 'Ontario',
    address: '1450 S. Sultana Ave, Ontario, CA 91761',
    phone: '(909) 986-8577',
    website: 'https://deanza.omsd.net',
    boundaryZone: 'Ontario Downtown & West Boundary Zone',
    feederPattern: 'Feeder from Kingsley & Sultana Elementary → Feeds into Chaffey High School (CJUHSD)',
    boundaryMapUrl: 'https://www.omsd.net/departments/child-welfare-and-attendance/school-locator',
    description: 'Welcoming public middle school in Ontario offering International Baccalaureate Middle Years Programme (IB MYP), band, bilingual parent center, and university readiness.',
    keyBenefits: [
      'International Baccalaureate (IB) Middle Years Programme candidate school',
      'Free after-school tutoring, athletics, and cultural arts programs',
      'Strong transition counselors preparing 8th graders for Chaffey High School',
      'Parent leadership academy and bilingual workshops'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Previous school transcripts or grade reports',
      'Vaccination yellow card (with Tdap)',
      'Proof of residency in Ontario or Montclair'
    ],
    featured: false,
    tags: [
      'middle school',
      'middle',
      'intermediate',
      'junior high',
      'grades 7-8',
      'ontario',
      'omsd',
      'school',
      'boundary',
      'boundaries'
    ]
  },

  // --- HIGH SCHOOLS (GRADES 9–12) ---
  {
    id: 'riverside-poly-high-rusd',
    name: 'Riverside Polytechnic High School (Poly High - RUSD)',
    category: 'education',
    facilityType: 'High School',
    gradeLevels: 'Grades 9–12 (Comprehensive High School)',
    county: 'Riverside County',
    city: 'Riverside',
    address: '5450 Victoria Ave, Riverside, CA 92506',
    phone: '(951) 788-7203',
    website: 'https://poly.riversideunified.org',
    boundaryZone: 'Riverside Central & Victoria Corridor Attendance Zone',
    feederPattern: 'Feeds from Central Middle School & Gage Middle School',
    boundaryMapUrl: 'https://www.riversideunified.org/departments/student_services/school_directory_locator',
    description: 'Historic, top-ranked public high school in Riverside established in 1887. Offers AP Capstone diploma, biomedical science pathways, engineering, dual enrollment with Riverside City College, and comprehensive college admissions counseling.',
    keyBenefits: [
      'Over 25 Advanced Placement (AP) courses and college-credit dual enrollment',
      'Career Technical Education (CTE) pathways in Sports Medicine, Computer Science, and Engineering',
      'Newcomer immigrant student orientation and bilingual graduation counselors',
      'Designated attendance zone with clear street boundary maps'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Official high school transcripts (translated foreign transcripts evaluated on-site)',
      'Proof of student age (passport or birth certificate)',
      'Proof of home address within the Poly High attendance boundary'
    ],
    featured: true,
    tags: [
      'high school',
      'highschool',
      'high',
      'grades 9-12',
      'riverside',
      'poly high',
      'rusd',
      'diploma',
      'ap classes',
      'school',
      'boundary',
      'boundaries',
      'zone'
    ]
  },
  {
    id: 'san-bernardino-high-sbcusd',
    name: 'San Bernardino High School (Cardinal IB World School)',
    category: 'education',
    facilityType: 'High School',
    gradeLevels: 'Grades 9–12 (Comprehensive High School)',
    county: 'San Bernardino County',
    city: 'San Bernardino',
    address: '1850 N. E St, San Bernardino, CA 92405',
    phone: '(909) 881-8217',
    website: 'https://sbhs.sbcusd.com',
    boundaryZone: 'San Bernardino Central Attendance Zone',
    feederPattern: 'Feeds from Arrowview Middle School & Richardson PREP HI',
    boundaryMapUrl: 'https://sbcusd.com/departments/enrollment',
    description: 'Authorized International Baccalaureate (IB) World School serving central San Bernardino. Offers the rigorous IB Diploma Programme, Cardinal Biomedical Academy, automotive technology, and dedicated immigrant student advisory.',
    keyBenefits: [
      'International Baccalaureate (IB) Diploma Programme accepted by top global universities',
      'On-site newcomer English Learner academy with specialized language instructors',
      'Free breakfast, lunch, and after-school supper for 100% of students',
      'Direct partnerships with Cal State San Bernardino and UC Riverside'
    ],
    languages: ['English', 'Español', 'Multilingual Counselors'],
    costType: 'Free',
    whatToBring: [
      'Student birth certificate or passport',
      'Previous transcripts or foreign school report cards',
      'Proof of residency in San Bernardino'
    ],
    featured: true,
    tags: [
      'high school',
      'highschool',
      'high',
      'grades 9-12',
      'san bernardino',
      'sbcusd',
      'ib',
      'diploma',
      'school',
      'boundary',
      'boundaries',
      'zone'
    ]
  },
  {
    id: 'centennial-high-cnusd',
    name: 'Centennial High School & STEM Academy (CNUSD)',
    category: 'education',
    facilityType: 'High School',
    gradeLevels: 'Grades 9–12 (Comprehensive High School)',
    county: 'Riverside County',
    city: 'Corona',
    address: '1820 Rimpau Ave, Corona, CA 92881',
    phone: '(951) 739-5670',
    website: 'https://centennial.cnusd.k12.ca.us',
    boundaryZone: 'South & West Corona Attendance Zone',
    feederPattern: 'Feeds from Citrus Hills Intermediate & Raney Intermediate',
    boundaryMapUrl: 'https://www.cnusd.k12.ca.us/our_departments/student_services/school_boundaries',
    description: 'Nationally acclaimed high school featuring the Centennial STEM Academy, IB Diploma Programme, championship athletics, and career academies in digital media, medical sciences, and law.',
    keyBenefits: [
      'Renowned STEM Academy and International Baccalaureate (IB) Programme',
      'Over 95% graduation rate and extensive college scholarships guidance',
      'Bilingual counselors assisting immigrant parents with university applications (FAFSA/CADAA)',
      'Clear attendance boundaries with interactive district boundary locator'
    ],
    languages: ['English', 'Español', 'Arabic'],
    costType: 'Free',
    whatToBring: [
      'Student birth certificate or passport',
      'Transcripts from 8th grade or previous high school',
      'Two proofs of residency in Corona'
    ],
    featured: true,
    tags: [
      'high school',
      'highschool',
      'high',
      'grades 9-12',
      'corona',
      'cnusd',
      'stem',
      'ib',
      'diploma',
      'school',
      'boundary',
      'boundaries',
      'zone'
    ]
  },
  {
    id: 'chaffey-high-school',
    name: 'Chaffey High School (CJUHSD - Historic Campus)',
    category: 'education',
    facilityType: 'High School',
    gradeLevels: 'Grades 9–12 (Comprehensive High School)',
    county: 'San Bernardino County',
    city: 'Ontario',
    address: '1245 N. Euclid Ave, Ontario, CA 91762',
    phone: '(909) 988-2411',
    website: 'https://chs.cjuhsd.net',
    boundaryZone: 'Ontario Citywide High School Attendance Zone',
    feederPattern: 'Feeds from De Anza Middle, Vernon Middle & OMSD Schools',
    boundaryMapUrl: 'https://www.cjuhsd.net/our-district/school-boundaries',
    description: 'Historic public high school in Ontario with a 65-acre campus. Offers extensive Advanced Placement courses, NJROTC, agricultural sciences, healthcare certifications, and robust English Learner counseling.',
    keyBenefits: [
      'Comprehensive academic options with over 20 AP subjects and career certifications',
      'Dedicated counseling center for newly arrived high school students',
      'Parent Resource Center with regular Spanish and multilingual parent workshops',
      'Feeder transition from Ontario-Montclair School District elementary & middle schools'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Student birth certificate or passport',
      'Complete high school transcripts for credit evaluation',
      'Proof of residency in Ontario or Montclair'
    ],
    featured: false,
    tags: [
      'high school',
      'highschool',
      'high',
      'grades 9-12',
      'ontario',
      'chaffey',
      'cjuhsd',
      'diploma',
      'school',
      'boundary',
      'boundaries',
      'zone'
    ]
  },
  {
    id: 'cajon-high-sbcusd',
    name: 'Cajon High School (SBCUSD - North San Bernardino)',
    category: 'education',
    facilityType: 'High School',
    gradeLevels: 'Grades 9–12 (Comprehensive High School)',
    county: 'San Bernardino County',
    city: 'San Bernardino',
    address: '1200 W. Hill Dr, San Bernardino, CA 92407',
    phone: '(909) 881-8120',
    website: 'https://cajon.sbcusd.com',
    boundaryZone: 'North San Bernardino & Muscoy Attendance Zone',
    feederPattern: 'Feeds from King Middle School & Shandin Hills Middle School',
    boundaryMapUrl: 'https://sbcusd.com/departments/enrollment',
    description: 'Premier International Baccalaureate (IB) high school in North San Bernardino nestled below the San Bernardino mountains. Offers college prep, cybersecurity, nursing pathways, and active parent organizations.',
    keyBenefits: [
      'Authorized International Baccalaureate (IB) World School curriculum',
      'Award-winning Career Technical Education (CTE) nursing and computer pathways',
      'Extensive sports and music programs for newcomer student integration',
      'Interactive online boundary lookup to verify your street address'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Student identification or passport',
      'Official middle school or high school transcripts',
      'Proof of residence in North San Bernardino / Muscoy'
    ],
    featured: false,
    tags: [
      'high school',
      'highschool',
      'high',
      'grades 9-12',
      'san bernardino',
      'cajon',
      'muscoy',
      'sbcusd',
      'ib',
      'school',
      'boundary',
      'boundaries'
    ]
  },

  // --- SCHOOL ATTENDANCE BOUNDARY & DISTRICT ENROLLMENT LOCATORS ---
  {
    id: 'sbcusd-boundary-enrollment-center',
    name: 'San Bernardino City USD School Boundary & Enrollment Center',
    category: 'education',
    facilityType: 'School Boundary & Enrollment',
    gradeLevels: 'Grades TK–12 (Elementary, Middle & High School Boundaries)',
    county: 'San Bernardino County',
    city: 'San Bernardino',
    address: '777 N. F St, San Bernardino, CA 92410',
    phone: '(909) 889-7081',
    website: 'https://sbcusd.com/departments/enrollment',
    boundaryZone: 'All San Bernardino & Highland School Attendance Zones',
    boundaryMapUrl: 'https://sbcusd.com/departments/enrollment',
    description: 'Official centralized boundary locator and student enrollment headquarters for San Bernardino City Unified. Look up your exact home street address to find your assigned elementary, middle, and high school attendance zones, or apply for intra-district school transfers.',
    keyBenefits: [
      'Online and in-person street address boundary zone lookup tool',
      'Official assigned neighborhood school verification letter for residency proof',
      'Intra-district (school choice) and Inter-district transfer permit processing',
      'Bilingual enrollment specialists to evaluate international student school credits'
    ],
    languages: ['English', 'Español', 'Multilingual Interpreters'],
    costType: 'Free',
    whatToBring: [
      "Child's proof of age (birth certificate or passport)",
      'Immunization records (yellow card)',
      'Proof of residency in the school district (lease agreement, utility bill, or mortgage statement)'
    ],
    featured: true,
    tags: [
      'boundary',
      'boundaries',
      'school boundary',
      'attendance zone',
      'street address',
      'school finder',
      'feeder school',
      'enrollment',
      'registration',
      'district',
      'san bernardino',
      'sbcusd',
      'elementary',
      'middle school',
      'high school'
    ]
  },
  {
    id: 'rusd-boundary-registration-center',
    name: 'Riverside Unified School District Boundary Locator & Registration',
    category: 'education',
    facilityType: 'School Boundary & Enrollment',
    gradeLevels: 'Grades TK–12 (Elementary, Middle & High School Boundaries)',
    county: 'Riverside County',
    city: 'Riverside',
    address: '6735 Magnolia Ave, Riverside, CA 92506',
    phone: '(951) 328-4003',
    website: 'https://www.riversideunified.org/departments/student_services/school_directory_locator',
    boundaryZone: 'City of Riverside & Woodcrest Attendance Boundaries',
    boundaryMapUrl: 'https://www.riversideunified.org/departments/student_services/school_directory_locator',
    description: 'Official school boundary and enrollment center for Riverside Unified School District. Features an interactive GIS street boundary locator to identify your assigned elementary school, middle school feeder, and high school (Poly, Ramona, King, Arlington, or North).',
    keyBenefits: [
      'Interactive GIS school boundary map searchable by street address and zip code',
      'Feeder pattern charts showing which middle school and high school your elementary feeds into',
      'Open enrollment school transfer permit applications (Intra-district transfers)',
      'Newcomer student English Language assessments (ELPAC) and school supply assistance'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      "Child's birth certificate or passport",
      'Current immunization / vaccination records',
      'Proof of Riverside address (electric bill, gas bill, or rental lease)'
    ],
    featured: true,
    tags: [
      'boundary',
      'boundaries',
      'school boundary',
      'attendance zone',
      'school finder',
      'feeder pattern',
      'enrollment',
      'registration',
      'riverside',
      'rusd',
      'elementary',
      'middle school',
      'high school'
    ]
  },
  {
    id: 'cnusd-boundary-locator-center',
    name: 'Corona-Norco Unified School Zone & Boundary Locator Center',
    category: 'education',
    facilityType: 'School Boundary & Enrollment',
    gradeLevels: 'Grades TK–12 (Elementary, Intermediate & High School Zones)',
    county: 'Riverside County',
    city: 'Norco / Corona / Eastvale',
    address: '2820 Clark Ave, Norco, CA 92860',
    phone: '(951) 736-5000',
    website: 'https://www.cnusd.k12.ca.us/our_departments/student_services/school_boundaries',
    boundaryZone: 'Corona, Norco, and Eastvale Attendance Boundaries',
    boundaryMapUrl: 'https://www.cnusd.k12.ca.us/our_departments/student_services/school_boundaries',
    description: 'District student services and interactive boundary mapping department for Corona-Norco Unified. Allows families to type in any address across Corona, Norco, or Eastvale to view exact school boundaries, bus route eligibility, and transfer options.',
    keyBenefits: [
      'Online Address Locator tool verifying elementary, intermediate, and high school boundaries',
      'Bus route and student transportation eligibility by attendance zone',
      'STEM academies and International Baccalaureate (IB) magnet application support',
      'Bilingual newcomer family welcome and immunization verification'
    ],
    languages: ['English', 'Español', 'Arabic', 'Mandarin'],
    costType: 'Free',
    whatToBring: [
      'Child photo ID, birth certificate, or passport',
      'Complete immunization records',
      'Two proofs of residency in Corona, Norco, or Eastvale'
    ],
    featured: true,
    tags: [
      'boundary',
      'boundaries',
      'school boundary',
      'attendance zone',
      'school finder',
      'corona',
      'norco',
      'eastvale',
      'cnusd',
      'enrollment',
      'elementary',
      'middle school',
      'high school'
    ]
  },
  {
    id: 'omsd-cjuhsd-boundary-locator',
    name: 'Ontario-Montclair & Chaffey High School Boundary & Feeder Transition',
    category: 'education',
    facilityType: 'School Boundary & Enrollment',
    gradeLevels: 'Grades TK–8 Elementary/Middle (OMSD) & Grades 9–12 High School (CJUHSD)',
    county: 'San Bernardino County',
    city: 'Ontario / Montclair',
    address: '950 W. D St, Ontario, CA 91762',
    phone: '(909) 459-2500',
    website: 'https://www.omsd.net/departments/child-welfare-and-attendance/school-locator',
    boundaryZone: 'Ontario, Montclair, and West Inland Empire Feeder Boundaries',
    boundaryMapUrl: 'https://www.omsd.net/departments/child-welfare-and-attendance/school-locator',
    description: 'Unified boundary and student transition coordination office guiding families between OMSD elementary/middle schools and Chaffey Joint Union High School District. Enter your Ontario or Montclair street address to see your assigned elementary school, middle school, and zoned high school.',
    keyBenefits: [
      'School boundary address locator for Ontario and Montclair residential areas',
      'Feeder transition mapping showing how 8th graders transition into Chaffey High or Montclair High',
      'Free student bus pass guidance for students residing beyond walking distance',
      'Universal Transitional Kindergarten (TK) and Dual Language school placement'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      "Child's proof of birth date (birth certificate or passport)",
      'Up-to-date vaccine records (measles, polio, DTaP, varicella)',
      'Proof of residence in Ontario or Montclair'
    ],
    featured: false,
    tags: [
      'boundary',
      'boundaries',
      'school boundary',
      'attendance zone',
      'feeder pattern',
      'ontario',
      'montclair',
      'chaffey',
      'omsd',
      'elementary',
      'middle school',
      'high school'
    ]
  },

  // ==========================================
  // --- DAYCARE, CHILDCARE & PRESCHOOL ---
  // ==========================================
  {
    id: 'ccrc-daycare-san-bernardino',
    name: 'Child Care Resource Center (CCRC) - Daycare & Childcare Subsidies',
    category: 'education',
    facilityType: 'Daycare & Childcare',
    gradeLevels: 'Ages 0–5 (Infant, Toddler & Preschool)',
    county: 'San Bernardino County',
    city: 'San Bernardino',
    address: '1111 E. Mill St, Suite 100, San Bernardino, CA 92408',
    phone: '(909) 384-8000',
    website: 'https://www.ccrcca.org',
    boundaryZone: 'Countywide San Bernardino Childcare Assistance',
    description: 'The official Child Care Resource and Referral (R&R) agency serving San Bernardino County. Provides free personalized referrals to licensed infant care, toddler daycares, family child care homes, and preschools. Administers state-funded childcare payment assistance (CAPP) that pays up to 100% of daycare costs for qualifying working or student parents.',
    keyBenefits: [
      'Free customized matching to licensed infant daycares, toddler programs, and family child care homes',
      'Childcare Financial Assistance (CAPP vouchers) covering up to 100% of licensed daycare costs',
      'Guidance on evaluating daycare quality, safety certifications, and staff-to-child ratios',
      'Assistance available in English, Spanish, and multiple languages'
    ],
    languages: ['English', 'Español', 'Multilingual Specialists'],
    costType: 'Free',
    whatToBring: [
      'Proof of identity (Government ID, passport, or driver license)',
      'Proof of residency in San Bernardino County (utility bill or lease)',
      'Proof of monthly household income and work/school schedule for daycare subsidy'
    ],
    featured: true,
    tags: [
      'daycare',
      'daycares',
      'day care',
      'childcare',
      'child care',
      'infant care',
      'infant',
      'toddler',
      'nursery',
      'preschool',
      'subsidized daycare',
      'capp',
      'ccrc',
      'babysitter',
      'san bernardino',
      'guarderia'
    ]
  },
  {
    id: 'rcoe-daycare-riverside',
    name: 'Riverside County Office of Education (RCOE) - Early Care & Child Care Referral',
    category: 'education',
    facilityType: 'Daycare & Childcare',
    gradeLevels: 'Ages 0–5 (Infant, Toddler & Preschool)',
    county: 'Riverside County',
    city: 'Riverside',
    address: '3939 13th St, Riverside, CA 92501',
    phone: '(800) 442-4927',
    website: 'https://www.rcoe.us/departments/early-care-education',
    boundaryZone: 'Countywide Riverside Childcare Assistance',
    description: 'Riverside County’s centralized Child Care Resource & Referral (R&R) service. Connects parents across Riverside, Corona, Moreno Valley, and the Coachella Valley with licensed infant daycares, center-based child care, and certified family child care homes. Enrolls families in state Alternative Payment Program childcare vouchers.',
    keyBenefits: [
      'Free 1-on-1 daycare matching service to find licensed care close to your home or workplace',
      'Subsidized childcare vouchers paying daycare fees for working or schooling parents',
      'Verified background checks, health standards, and safety licensing verification for all providers',
      'Early childhood inclusion support for infants and toddlers with special needs'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Parent photo ID or passport',
      'Children’s birth certificates or immunization records',
      'Income verification (pay stubs or employer letter) and school schedule'
    ],
    featured: true,
    tags: [
      'daycare',
      'daycares',
      'day care',
      'childcare',
      'child care',
      'infant care',
      'infant',
      'toddler',
      'riverside',
      'subsidized daycare',
      'capp',
      'rcoe',
      'preschool',
      'guarderia'
    ]
  },
  {
    id: 'inland-early-head-start-daycare',
    name: 'Inland Empire Early Head Start & Infant Childcare Network',
    category: 'education',
    facilityType: 'Daycare & Childcare',
    gradeLevels: 'Ages 6 Weeks to 3 Years (Infant & Toddler Care)',
    county: 'San Bernardino County',
    city: 'San Bernardino / Riverside',
    address: 'Regional Centers across San Bernardino & Riverside Counties',
    phone: '(909) 386-2700',
    website: 'https://www.sbcss.k12.ca.us/index.php/student-services/early-learning-services',
    boundaryZone: 'Inland Empire Regional Early Learning Centers',
    description: 'Federally funded Early Head Start daycare and early education centers providing 100% free full-day child care for babies and toddlers (ages 6 weeks to 3 years). Offers daily nutrition, diapers, formula, and developmental milestones tracking for young families.',
    keyBenefits: [
      '100% Free infant and toddler daycare for qualified families (6 weeks to 3 years)',
      'Free daily nutritious meals, baby formula, and diapers provided at the daycare',
      'Low adult-to-infant ratios (1 teacher for every 4 infants) for focused personal attention',
      'Direct pipeline into Universal Transitional Kindergarten (TK) and Head Start Preschool'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Child’s birth certificate or hospital birth card',
      'Up-to-date pediatric vaccine records',
      'Proof of household income (tax form, pay stub, or Medi-Cal card)'
    ],
    featured: false,
    tags: [
      'daycare',
      'daycares',
      'day care',
      'early head start',
      'infant care',
      'infant',
      'toddler daycare',
      'toddler',
      'free daycare',
      'head start',
      'childcare',
      'child care',
      'babies',
      'guarderia'
    ]
  },
  {
    id: 'omsd-early-learning-daycare',
    name: 'Ontario-Montclair Early Learning & State Preschool Daycare',
    category: 'education',
    facilityType: 'Daycare & Childcare',
    gradeLevels: 'Ages 2 to 5 Years (Toddler & State Preschool)',
    county: 'San Bernardino County',
    city: 'Ontario',
    address: '950 W. D St, Ontario, CA 91762',
    phone: '(909) 459-2500',
    website: 'https://www.omsd.net/departments/early-learning',
    boundaryZone: 'Ontario-Montclair Early Learning Boundary',
    description: 'District-administered early learning and state preschool daycare program serving toddlers and preschool children. Provides full-day and half-day certified early childhood education, school readiness, social-emotional learning, and dual-language enrichment.',
    keyBenefits: [
      'State-funded free and low-cost full-day preschool and childcare programs',
      'Seamless early pipeline directly into neighborhood elementary kindergarten',
      'Certified early childhood educators and speech/hearing developmental screenings',
      'Hot nutritious breakfasts and lunches served daily at no cost'
    ],
    languages: ['English', 'Español'],
    costType: 'Free',
    whatToBring: [
      'Child birth certificate or passport',
      'Current pediatric immunization records',
      'Proof of income for state-subsidized placement'
    ],
    featured: false,
    tags: [
      'daycare',
      'daycares',
      'day care',
      'preschool',
      'toddler',
      'childcare',
      'child care',
      'ontario',
      'omsd',
      'early learning',
      'guarderia'
    ]
  },

  // ========================================================
  // --- SPECIALIZED LEGAL, REFUGEE & ASYLUM (IN THE BACK) ---
  // ========================================================
  {
    id: 'irc-refugee-resettlement',
    name: 'International Rescue Committee (IRC) - Refugee & Asylee Resettlement Center',
    category: 'legal',
    facilityType: 'Legal Aid',
    county: 'San Bernardino County',
    city: 'San Bernardino / Riverside',
    address: '2020 E. Washington St, Colton, CA 92324',
    phone: '(909) 381-5507',
    website: 'https://www.rescue.org/united-states/san-bernardino-ca',
    description: 'Federally recognized refugee resettlement agency assisting humanitarian arrivals, refugees, asylees, SIV visa holders, and humanitarian parolees with initial reception, housing placement, English classes, job placement, and cultural orientation.',
    keyBenefits: [
      'Official refugee and humanitarian parole resettlement support',
      'Initial housing assistance, furnishings, and food staples setup',
      'Enrollment in Refugee Cash Assistance (RCA) and CalFresh nutrition',
      'Work readiness training, job placement, and U.S. workplace culture classes'
    ],
    languages: ['English', 'Español', 'Arabic', 'Dari', 'Pashto', 'Ukrainian'],
    costType: 'Free',
    whatToBring: [
      'I-94 arrival record showing refugee, asylee, or humanitarian parole status',
      'Foreign passport and USCIS paperwork',
      'Social Security card or receipt of application'
    ],
    featured: true,
    tags: [
      'refugee',
      'asylum',
      'asylee',
      'humanitarian parole',
      'irc',
      'resettlement',
      'legal',
      'colton',
      'san bernardino'
    ]
  },
  {
    id: 'icls-immigration-legal-aid',
    name: 'Inland Counties Legal Services (ICLS) - Immigration & Civil Legal Aid',
    category: 'legal',
    facilityType: 'Legal Aid',
    county: 'San Bernardino County',
    city: 'San Bernardino / Colton',
    address: '1040 E. Cooley Dr, Colton, CA 92324',
    phone: '(888) 245-4257',
    website: 'https://www.inlandlegal.org',
    description: 'Premier regional legal aid organization providing free legal representation for low-income immigrants in family petitions, U-Visas, VAWA domestic violence protections, T-Visas for trafficking survivors, asylum, and deportation defense consultations.',
    keyBenefits: [
      '100% Free legal representation by licensed attorneys and DOJ accredited representatives',
      'Specialized relief for crime survivors (U-Visa) and domestic abuse survivors (VAWA)',
      'Naturalization and U.S. Citizenship application assistance (N-400 fee waivers)',
      'Housing defense, eviction prevention, and tenant rights'
    ],
    languages: ['English', 'Español', 'Interpreter Access'],
    costType: 'Free',
    whatToBring: [
      'Any immigration documents received from USCIS or immigration court',
      'Police reports or court records if applying for crime victim relief (U-Visa/VAWA)',
      'Proof of household income (pay stubs or tax returns)'
    ],
    featured: true,
    tags: [
      'legal',
      'lawyer',
      'attorney',
      'asylum',
      'u-visa',
      'vawa',
      'citizenship',
      'eviction',
      'tenant defense',
      'free legal aid'
    ]
  },
  {
    id: 'todec-legal-center',
    name: 'TODEC Legal Center (Training Occupational Development Educating Communities)',
    category: 'legal',
    facilityType: 'Legal Aid',
    county: 'Riverside County',
    city: 'Perris',
    address: '234 S. D St, Perris, CA 92570',
    phone: '(951) 943-1955',
    website: 'https://todec.org',
    description: 'Grassroots community organization serving the Inland Empire for over 35 years. Provides accredited immigration legal services, citizenship classes, DACA renewals, family reunification, community education, and advocacy.',
    keyBenefits: [
      'DOJ accredited immigration legal counseling and representation',
      'DACA renewals and Advance Parole travel application help',
      'Citizenship preparation courses and naturalization fee waiver filing',
      'Emergency community defense, rapid response, and family preparedness plans'
    ],
    languages: ['Español', 'English'],
    costType: 'Free Consultations',
    whatToBring: [
      'Previous immigration records or court notices',
      'Valid passport or identification',
      'Marriage certificates and children birth certificates if filing family petitions'
    ],
    featured: false,
    tags: [
      'legal',
      'lawyer',
      'daca',
      'citizenship',
      'family petition',
      'perris',
      'riverside',
      'immigrant advocacy'
    ]
  },
  {
    id: 'ierrn-rapid-response',
    name: 'Inland Empire Rapid Response Network (IERRN)',
    category: 'legal',
    facilityType: 'Legal Aid',
    county: 'All',
    city: 'Inland Empire Wide',
    address: 'Regional Emergency Network, Riverside & San Bernardino',
    phone: '(909) 361-4588',
    website: 'https://icirr.org',
    description: 'Community network operating a 24/7 emergency dispatch helpline for families facing immediate immigration enforcement, ICE detentions, workplace raids, or requiring urgent legal defense connections in Riverside and San Bernardino counties.',
    keyBenefits: [
      '24/7 Emergency response helpline: (909) 361-4588',
      'Direct referrals to pro bono and low-cost immigration defense attorneys',
      'Family safety planning and legal power of attorney documentation',
      'Bail bond fund referrals and community accompaniment'
    ],
    languages: ['Español', 'English'],
    costType: 'Free',
    whatToBring: [
      'Alien Registration Number (A-Number) of detained individual if available',
      'Location of detention or court hearing date'
    ],
    featured: false,
    tags: [
      'helpline',
      'emergency',
      'ice',
      'legal defense',
      'rapid response',
      'detention',
      'undocumented support'
    ]
  }
];
