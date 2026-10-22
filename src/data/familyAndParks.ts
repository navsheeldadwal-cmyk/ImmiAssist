export interface ParkItem {
  id: string;
  name: string;
  city: string;
  county: 'San Bernardino County' | 'Riverside County';
  address: string;
  admission: 'Free' | 'Small County Fee ($3-$10)' | 'Free on Weekdays';
  highlights: string[];
  description: string;
  familyTip: string;
  hasWaterPlay: boolean;
  hasPlayground: boolean;
  hasPicnicTables: boolean;
}

export interface FamilyEventItem {
  id: string;
  title: string;
  location: string;
  season: 'Year-Round' | 'Summer' | 'Spring & Fall' | 'Winter / Holidays';
  cost: '100% Free' | 'Free with Registration' | 'Low-Cost / Donation';
  description: string;
  familyHighlights: string[];
  website?: string;
}

export interface CriticalFamilyInfo {
  id: string;
  title: string;
  category: 'Nutrition & Food' | 'Childcare & Preschool' | 'Paid Family Leave' | 'Child Safety' | 'Early Intervention';
  summary: string;
  keyRuleOrRight: string;
  howToAccess: string;
  phoneOrContact: string;
  safeForImmigrants: boolean;
}

export interface FunFactItem {
  id: string;
  region: 'Inland Empire' | 'SoCal' | 'California' | 'United States';
  title: string;
  fact: string;
  didYouKnow: string;
  iconType: 'citrus' | 'mountain' | 'star' | 'flag' | 'history' | 'sun';
}

export const PARKS_AND_OUTDOORS: ParkItem[] = [
  {
    id: 'fairmount-park',
    name: 'Fairmount Park & Lake Evans',
    city: 'Riverside',
    county: 'Riverside County',
    address: '2601 Fairmount Blvd, Riverside, CA 92501',
    admission: 'Free',
    highlights: ['Pedal boats', 'Modern playground', 'Rose Garden', 'Splash pad in summer', 'Fishing lakes', 'Shaded picnic shelters'],
    description: 'A historic 250-acre regional gem designed by the famed Olmsted Brothers. Features serene lakes with ducks, sprawling lawns for family soccer, paved stroller paths, and a popular summertime water splash zone.',
    familyTip: 'Bring bread crumbs or duck feed for the kids at Lake Evans, and pack a picnic blanket for under the heritage trees.',
    hasWaterPlay: true,
    hasPlayground: true,
    hasPicnicTables: true,
  },
  {
    id: 'cucamonga-guasti-park',
    name: 'Cucamonga-Guasti Regional Park',
    city: 'Ontario',
    county: 'San Bernardino County',
    address: '800 N. Archibald Ave, Ontario, CA 91764',
    admission: 'Small County Fee ($3-$10)',
    highlights: ['Zero-depth water play splash park', 'Two giant water slides', 'Twin fishing lakes', 'Pedal boat rentals', 'Spacious grassy playfields'],
    description: 'An oasis in West Inland Empire featuring a massive chlorinated water play lagoon with slides, perfect for hot summer weekends with toddlers and young children.',
    familyTip: 'Arrive early on warm summer weekends to grab a shaded picnic gazebo near the water play lagoon.',
    hasWaterPlay: true,
    hasPlayground: true,
    hasPicnicTables: true,
  },
  {
    id: 'mount-rubidoux',
    name: 'Mount Rubidoux Park & Historic Trail',
    city: 'Riverside',
    county: 'Riverside County',
    address: '4706 Mount Rubidoux Dr, Riverside, CA 92501',
    admission: 'Free',
    highlights: ['Paved walking trails', 'Historic World Peace Tower', 'Panoramic 360° city views', 'Stroller-accessible road', 'Sunset viewing'],
    description: 'A beloved 161-acre mountain park with paved, vehicle-free winding roads. Families love the gentle 3-mile loop to the summit for breathtaking views of the entire Inland Empire valley and snow-capped peaks.',
    familyTip: 'The paved road is completely closed to motor vehicles, making it safe for strollers, toddlers on tricycles, and family walks.',
    hasWaterPlay: false,
    hasPlayground: false,
    hasPicnicTables: true,
  },
  {
    id: 'glen-helen-regional',
    name: 'Glen Helen Regional Park',
    city: 'San Bernardino / Devore',
    county: 'San Bernardino County',
    address: '2555 Glen Helen Pkwy, San Bernardino, CA 92407',
    admission: 'Small County Fee ($3-$10)',
    highlights: ['Sandy beach swim lagoon', 'Dual water slides', 'Two stocked fishing lakes', 'Expansive picnic grounds', 'Mountain backdrop'],
    description: 'Nestled between the San Gabriel and San Bernardino mountain ranges, this huge park offers a chlorinated swim lagoon with sandy shores, water slides, and fishing.',
    familyTip: 'Water shoes and life jackets for little ones are highly recommended for the swim lagoon.',
    hasWaterPlay: true,
    hasPlayground: true,
    hasPicnicTables: true,
  },
  {
    id: 'prado-regional-park',
    name: 'Prado Regional Park',
    city: 'Chino',
    county: 'San Bernardino County',
    address: '16700 Euclid Ave, Chino, CA 91708',
    admission: 'Small County Fee ($3-$10)',
    highlights: ['50-acre fishing lake', 'Disc golf course', 'Spacious playgrounds', 'Camping & RV sites', 'Nature trails & birdwatching'],
    description: 'A sprawling 2,000-acre outdoor paradise with green fields, towering eucalyptus trees, and plenty of space for family reunions, birthdays, and weekend barbecues.',
    familyTip: 'Rent a pedal boat on the lake or bring bikes to ride along the scenic lakeside trails.',
    hasWaterPlay: false,
    hasPlayground: true,
    hasPicnicTables: true,
  },
  {
    id: 'victoria-gardens-chaffey',
    name: 'Victoria Gardens Town Square & Cultural Center',
    city: 'Rancho Cucamonga',
    county: 'San Bernardino County',
    address: '12505 Cultural Center Dr, Rancho Cucamonga, CA 91739',
    admission: 'Free',
    highlights: ['Paul A. Biane Library with children’s room', 'Pedestrian-friendly fountains', 'Open-air green lawns', 'Seasonal family concerts'],
    description: 'A vibrant open-air pedestrian village with tree-lined streets, a state-of-the-art public library with bilingual children’s storytelling, and family community gatherings.',
    familyTip: 'Check out the interactive Imagination Station inside the library on weekends for free crafts and science play.',
    hasWaterPlay: false,
    hasPlayground: true,
    hasPicnicTables: true,
  }
];

export const FAMILY_EVENTS_AND_ACTIVITIES: FamilyEventItem[] = [
  {
    id: 'redlands-bowl',
    title: 'Redlands Bowl Summer Music Festival',
    location: 'Redlands Bowl Amphitheater, 25 Grant St, Redlands, CA',
    season: 'Summer',
    cost: '100% Free',
    description: 'The oldest continuously running 100% free outdoor music festival in the United States! Held every Tuesday and Friday evening in June, July, and August under the stars.',
    familyHighlights: [
      'Zero admission cost—never charges a single dollar',
      'Orchestral symphonies, Broadway musicals, Mexican folkloric ballet, and world music',
      'Pack a family dinner picnic basket and lawn chairs',
      'Kid-friendly Tuesday afternoon Children’s Music Festival workshops'
    ],
    website: 'https://redlandsbowl.org'
  },
  {
    id: 'riverside-festival-lights',
    title: 'Riverside Festival of Lights (Downtown Riverside)',
    location: 'Mission Inn Ave & Downtown Pedestrian Mall, Riverside, CA',
    season: 'Winter / Holidays',
    cost: '100% Free',
    description: 'Voted America’s Best Public Holiday Lights Display! Over 5 million dazzling holiday lights, animated figures, gingerbread displays, and family street entertainment from Thanksgiving through New Year’s.',
    familyHighlights: [
      'Completely free to walk the illuminated pedestrian boulevard',
      'Festive holiday food vendors, artisan crafts, and horse-drawn carriages',
      'Giant outdoor holiday tree and illuminated arches perfect for family photos',
      'Free community stage performances with regional school choirs and dance troupes'
    ],
    website: 'https://www.riversideca.gov/fol'
  },
  {
    id: 'ontario-town-square-movies',
    title: 'Ontario Town Square Summer Movie & Concert Nights',
    location: '224 E. Euclid Ave, Ontario, CA 91764',
    season: 'Summer',
    cost: '100% Free',
    description: 'Free outdoor movie nights and live summer concert series on the grassy town square. Families bring blankets and lawn chairs to enjoy family-friendly movies on the giant screen.',
    familyHighlights: [
      'Free popcorn and children’s lawn games before showtime',
      'Surrounded by local ice cream shops and bilingual family eateries',
      'Interactive splash pad fountain open during daytime heat'
    ],
    website: 'https://ontariotownsquare.org'
  },
  {
    id: 'public-library-storytimes',
    title: 'Bilingual Library Storytimes & Homework Clubs',
    location: 'San Bernardino County & Riverside County Public Libraries',
    season: 'Year-Round',
    cost: '100% Free',
    description: 'Local libraries offer free weekly early-literacy story hours in English and Spanish, toddler music and movement, STEM discovery kits, and free after-school homework tutoring.',
    familyHighlights: [
      'Free books, audiobooks, and tablets to borrow with any library card',
      'Bilingual songs, puppetry, and crafts for babies, toddlers, and kindergarteners',
      'Safe, climate-controlled, welcoming community haven during hot summers',
      'Free computer lab and high-speed Wi-Fi access'
    ],
    website: 'https://www.sbclib.org'
  },
  {
    id: 'ca-state-parks-adventure-pass',
    title: 'California State Parks 4th Grade Adventure Pass',
    location: 'All participating California State Parks',
    season: 'Year-Round',
    cost: '100% Free',
    description: 'An official California program providing free day-use entry to 19 state parks for any 4th grader and their entire family (up to 3 adults and all children in the car) for a full year!',
    familyHighlights: [
      'Includes Lake Perris State Recreation Area and Silverwood Lake in the Inland Empire',
      'No citizenship or social security number required—any 4th grader qualifies',
      'Free hiking, beach days, nature exploration, and campfire programs'
    ],
    website: 'https://www.parks.ca.gov/AdventurePass'
  },
  {
    id: 'cheech-museum-family-days',
    title: 'The Cheech Marin Center for Chicano Art & Culture',
    location: '3581 Mission Inn Ave, Riverside, CA 92501',
    season: 'Year-Round',
    cost: 'Free with Registration',
    description: 'The world’s first museum dedicated entirely to Chicano and Mexican-American art and culture. Offers free admission on "First Sundays" and free family art-making workshops.',
    familyHighlights: [
      'Free First Sundays family admission with hands-on painting & sculpture stations',
      'Celebrates bilingualism, immigrant resilience, muralism, and community pride',
      'Located directly in historic Downtown Riverside across from the public library'
    ],
    website: 'https://riversideartmuseum.org/visit/the-cheech-marin-center/'
  }
];

export const CRITICAL_FAMILY_PROGRAMS: CriticalFamilyInfo[] = [
  {
    id: 'wic-nutrition',
    title: 'WIC: Special Nutrition Program for Women, Infants & Children',
    category: 'Nutrition & Food',
    summary: 'Provides free healthy foods (milk, eggs, fruits, vegetables, beans, whole grains), infant baby formula, nutrition counseling, and breastfeeding support for pregnant mothers, new mothers, and children up to age 5.',
    keyRuleOrRight: 'Guaranteed to all income-eligible California residents REGARDLESS OF IMMIGRATION STATUS. WIC is explicitly EXEMPT from federal "Public Charge" rules and will NEVER affect green card or visa applications.',
    howToAccess: 'Apply online through California WIC or visit your nearest WIC clinic in San Bernardino, Riverside, Fontana, Ontario, or Corona.',
    phoneOrContact: 'Call 1-888-942-9675 or visit m.wic.ca.gov',
    safeForImmigrants: true
  },
  {
    id: 'head-start-preschool',
    title: 'Head Start & California State Preschool Program (CSPP)',
    category: 'Childcare & Preschool',
    summary: 'Completely free, high-quality early childhood education, nutritious meals, health screenings, and kindergarten readiness for children ages 3 to 5 from low-to-moderate income households.',
    keyRuleOrRight: 'Preschool enrollment is open to all children living in California regardless of family immigration status. School districts do not verify immigration documents.',
    howToAccess: 'Contact your local school district’s Early Childhood Department or the San Bernardino / Riverside County Superintendent of Schools.',
    phoneOrContact: 'San Bernardino Head Start: (909) 383-2078 | Riverside Early Childhood: (951) 826-6622',
    safeForImmigrants: true
  },
  {
    id: 'paid-family-leave',
    title: 'California Paid Family Leave (PFL) for Bonding with New Babies',
    category: 'Paid Family Leave',
    summary: 'California law allows working parents to receive up to 8 weeks of partial wage replacement (60% to 70% of regular pay) to bond with a new biological, adopted, or foster child.',
    keyRuleOrRight: 'If your employer deducts California State Disability Insurance (CA SDI) from your paycheck, you are eligible for PFL REGARDLESS OF CITIZENSHIP OR IMMIGRATION STATUS. You can apply using an ITIN or SSN.',
    howToAccess: 'Apply through the California Employment Development Department (EDD) within 41 days of taking your leave.',
    phoneOrContact: 'EDD PFL Helpline: 1-877-238-4373 (English) / 1-877-375-7322 (Español)',
    safeForImmigrants: true
  },
  {
    id: 'car-seat-safety',
    title: 'California Child Passenger Car Seat Safety Laws',
    category: 'Child Safety',
    summary: 'California law requires all children under age 2 to ride in a rear-facing car seat unless they weigh 40+ lbs or are 40+ inches tall. Children under age 8 must ride in a booster seat or five-point harness car seat in the back seat.',
    keyRuleOrRight: 'Free car seat inspections and free or low-cost replacement car seats are provided by local CHP offices, fire stations, and county public health departments for families in need.',
    howToAccess: 'Schedule a free certified inspection to ensure your car seat is installed correctly and safely.',
    phoneOrContact: 'San Bernardino County Child Passenger Safety: (800) 782-4264 | Riverside County Safety: (951) 358-7171',
    safeForImmigrants: true
  },
  {
    id: 'inland-regional-center',
    title: 'Inland Regional Center (IRC) - Early Start Developmental Help',
    category: 'Early Intervention',
    summary: 'Free developmental evaluations and home-based speech, physical, occupational, and behavioral therapy for infants and toddlers (ages 0 to 3) showing signs of developmental delays, speech delays, or autism.',
    keyRuleOrRight: 'Under the California Early Intervention Services Act, services are completely free to families regardless of income or immigration status.',
    howToAccess: 'Parents can directly self-refer their child without a doctor’s prescription by calling IRC Early Start intake.',
    phoneOrContact: 'Inland Regional Center: (909) 890-3000 | Website: inlandrc.org',
    safeForImmigrants: true
  }
];

export const FUN_FACTS_DATA: FunFactItem[] = [
  // --- INLAND EMPIRE ---
  {
    id: 'ie-name-origin',
    region: 'Inland Empire',
    title: 'Why is it Called the "Inland Empire"?',
    fact: 'The term "Inland Empire" was coined in 1914 by developers and local newspapers to celebrate the region’s booming agricultural prosperity as the orange and citrus capital of the world.',
    didYouKnow: 'Before that, developers called it the "Orange Empire" because of the millions of golden citrus trees that carpeted the valley between Redlands, Riverside, Ontario, and San Bernardino.',
    iconType: 'citrus'
  },
  {
    id: 'ie-parent-navel-orange',
    region: 'Inland Empire',
    title: 'The Living Tree That Started a California Revolution',
    fact: 'The historic Parent Washington Navel Orange Tree, planted in 1873 in Riverside by Eliza Tibbets, is STILL ALIVE and producing juicy oranges today at the corner of Magnolia and Arlington avenues!',
    didYouKnow: 'Nearly all navel orange trees grown in California, Florida, and across the globe are direct genetic descendants of this single legendary Riverside tree.',
    iconType: 'citrus'
  },
  {
    id: 'ie-largest-county',
    region: 'Inland Empire',
    title: 'The Largest County in the Contiguous United States',
    fact: 'San Bernardino County covers over 20,105 square miles. It is geographically larger than the entire states of Switzerland, Netherlands, Belgium, and New Jersey combined!',
    didYouKnow: 'It stretches from the edge of Los Angeles all the way across the Mojave Desert to the Colorado River and Nevada border.',
    iconType: 'mountain'
  },
  {
    id: 'ie-first-mcdonalds',
    region: 'Inland Empire',
    title: 'The World’s Very First McDonald’s on Route 66',
    fact: 'In 1948, brothers Richard and Maurice McDonald opened the world’s very first McDonald’s hamburger stand on historic Route 66 at 1398 N. E Street in San Bernardino, California.',
    didYouKnow: 'They pioneered the "Speedee Service System" that invented modern fast food. Today, the original site is a free museum filled with retro memorabilia and historic artifacts!',
    iconType: 'history'
  },
  {
    id: 'ie-redlands-bowl-legacy',
    region: 'Inland Empire',
    title: 'America’s Oldest 100% Free Music Festival',
    fact: 'Founded in 1924, the Redlands Bowl Summer Music Festival is the oldest continuously operating outdoor music festival in the United States that has never charged a single cent for admission.',
    didYouKnow: 'Founder Grace Stewart Mullen believed that "music is for everyone, not just those who can afford tickets." It continues to draw over 100,000 community members every summer.',
    iconType: 'star'
  },

  // --- SOUTHERN CALIFORNIA ---
  {
    id: 'socal-snow-and-surf',
    region: 'SoCal',
    title: 'Snow to Surf in a Single Afternoon',
    fact: 'Southern California is one of the only places on Earth where you can ski or snowboard down the mountains of Big Bear in the morning, and catch waves on a Pacific beach by sunset—just a 90-minute drive away!',
    didYouKnow: 'Locals call this the "California Double," celebrating the incredible geographic diversity of Southern California’s microclimates.',
    iconType: 'sun'
  },
  {
    id: 'socal-sunshine-champion',
    region: 'SoCal',
    title: 'Over 280 Days of Golden Sunshine Each Year',
    fact: 'Southern California averages 284 sunny days per year with a rare Mediterranean climate found on only 3% of the Earth’s land surface.',
    didYouKnow: 'This ideal climate is why the world’s film and aerospace industries relocated here in the early 1900s—they could film movies and test airplanes outdoors all year long without rain.',
    iconType: 'sun'
  },
  {
    id: 'socal-ancient-heritage',
    region: 'SoCal',
    title: 'Indigenous Nations of the Inland Empire & SoCal',
    fact: 'Long before California became a state, the Inland Empire was the vibrant homeland of the Serrano, Cahuilla, Tongva, and Luiseño native nations who lived in balance with the valleys and mountains for thousands of years.',
    didYouKnow: 'Many local names come from Native languages—including "Cucamonga" (meaning "sandy place" in Tongva) and "Yucaipa" (meaning "green valley" in Serrano).',
    iconType: 'history'
  },

  // --- CALIFORNIA ---
  {
    id: 'ca-economic-titan',
    region: 'California',
    title: 'The 5th Largest Economy in the World',
    fact: 'If California were an independent country, its economy would be the 5th largest on planet Earth—producing more economic value than the United Kingdom, India, or France!',
    didYouKnow: 'California leads the nation in technology, clean energy, agriculture, entertainment, and biomedical research.',
    iconType: 'star'
  },
  {
    id: 'ca-agricultural-wonder',
    region: 'California',
    title: 'America’s Agricultural Breadbasket',
    fact: 'California produces over a third of the country’s vegetables and three-quarters of the country’s fruits and nuts. It produces over 80% of the entire world’s almonds!',
    didYouKnow: 'The Central Valley and Inland Empire valleys are among the most fertile agricultural regions ever cultivated by human hands.',
    iconType: 'citrus'
  },
  {
    id: 'ca-extreme-landscapes',
    region: 'California',
    title: 'Highest & Lowest Points in the Lower 48 States',
    fact: 'Mount Whitney (the highest peak in the contiguous US at 14,505 feet) and Badwater Basin in Death Valley (the lowest point in North America at 282 feet below sea level) are just 84 miles apart in California!',
    didYouKnow: 'California is also home to General Sherman in Sequoia National Park, the largest living tree on Earth by volume.',
    iconType: 'mountain'
  },
  {
    id: 'ca-humanitarian-leader',
    region: 'California',
    title: 'Nation-Leading Immigrant Protection & Care',
    fact: 'California is the first and only state in the United States to guarantee comprehensive free Full-Scope Medi-Cal healthcare to all low-income residents, regardless of immigration status or age.',
    didYouKnow: 'California was also the first state to provide free, universal breakfast and lunch to every public K-12 student in every school district statewide.',
    iconType: 'flag'
  },

  // --- UNITED STATES ---
  {
    id: 'usa-statue-of-liberty',
    region: 'United States',
    title: 'The Welcome Poem at the Statue of Liberty',
    fact: 'At the base of the Statue of Liberty in New York Harbor is a bronze plaque with the immortal words of poet Emma Lazarus: "Give me your tired, your poor, your huddled masses yearning to breathe free."',
    didYouKnow: 'Over 12 million immigrants passed through Ellis Island between 1892 and 1954, building the infrastructure, culture, and spirit of modern America.',
    iconType: 'flag'
  },
  {
    id: 'usa-no-official-language',
    region: 'United States',
    title: 'The U.S. Has No Official Federal Language',
    fact: 'The United States has never had an official national language at the federal level. The Founding Fathers believed in linguistic freedom, and over 350 different languages are spoken in American homes every day.',
    didYouKnow: 'Spanish has been spoken in the Southwest and California since the 1500s—long before English-speaking settlers arrived.',
    iconType: 'history'
  },
  {
    id: 'usa-national-parks-idea',
    region: 'United States',
    title: '"America’s Best Idea": The National Park System',
    fact: 'In 1872, the U.S. established Yellowstone as the world’s first National Park. Today, America protects over 84 million acres across 63 National Parks and 420+ monuments for all people to enjoy forever.',
    didYouKnow: 'Joshua Tree National Park, located right on the edge of the Inland Empire in the Coachella Valley, preserves some of the most surreal and mystical desert landscapes on Earth.',
    iconType: 'mountain'
  }
];
