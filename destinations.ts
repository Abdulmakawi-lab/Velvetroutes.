export type Destination = {
  slug: string;
  name: string;
  country: string;
  region: 'Middle East' | 'Asia' | 'Europe' | 'Africa';
  tagline: string;
  category: string;
  hero: string;
  card: string;
  gallery: string[];
  featured?: boolean;
  overview: string;
  attractions: { name: string; description: string }[];
  seasons: { period: string; description: string }[];
  experiences: string[];
  itinerary: { day: string; title: string; description: string }[];
  requirements: string[];
  travelTips: string[];
  faqs: { q: string; a: string }[];
};

// ─── IRAQ (Flagship — most detailed) ──────────────────────────────────────
const iraq: Destination = {
  slug: 'iraq',
  name: 'Iraq',
  country: 'Republic of Iraq',
  region: 'Middle East',
  tagline: 'The Sacred Journey',
  category: 'Religious Tourism',
  hero: 'https://images.pexels.com/photos/17340981/pexels-photo-17340981.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
  card: 'https://images.pexels.com/photos/18766057/pexels-photo-18766057.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
  gallery: [
    'https://images.pexels.com/photos/17340981/pexels-photo-17340981.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    'https://images.pexels.com/photos/18766057/pexels-photo-18766057.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    'https://images.pexels.com/photos/37196808/pexels-photo-37196808.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    'https://images.pexels.com/photos/18848803/pexels-photo-18848803.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    'https://images.pexels.com/photos/18647338/pexels-photo-18647338.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    'https://images.pexels.com/photos/17212315/pexels-photo-17212315.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
  ],
  featured: true,
  overview:
    'Iraq is the cradle of civilisation and the heart of Islamic heritage. For pilgrims, it is the most sacred destination on earth — home to the holy shrines of Najaf, Karbala, Kazmain, Samarra, and Baghdad. Walk in the footsteps of the Imams, pray where millions have prayed for centuries, and experience a spiritual connection that words cannot capture. Velvet Routes specialises in crafting seamless, comfortable, and deeply meaningful Iraq pilgrimage journeys — with 4-star hotels near the shrines, hygienic Indian meals, experienced guides, and 24/7 on-ground support.',
  attractions: [
    { name: 'Imam Ali Shrine (Najaf)', description: 'The holiest site in Najaf — the burial place of Imam Ali (A.S.), the first Imam. A breathtaking golden dome that draws millions of pilgrims annually.' },
    { name: 'Imam Hussain Shrine (Karbala)', description: 'The eternal symbol of sacrifice and justice. The shrine of Imam Hussain (A.S.) in Karbala is the spiritual centre of the Shia world.' },
    { name: 'Hazrat Abbas Shrine (Karbala)', description: 'The shrine of Hazrat Abbas (A.S.), brother of Imam Hussain (A.S.), renowned for its stunning golden dome and intricate tilework.' },
    { name: 'Kazmain Shrine (Baghdad)', description: 'Housing Imam Musa al-Kadhim (A.S.) and Imam Muhammad al-Jawad (A.S.), this masterpiece of Islamic architecture stands in the heart of Baghdad.' },
    { name: 'Samarra Shrines', description: 'The shrines of Imam Ali al-Hadi (A.S.) and Imam Hasan al-Askari (A.S.), and the sacred cellar (Sardab) of Imam Mahdi (ATFS).' },
    { name: 'Wadi-us-Salaam (Najaf)', description: 'The largest cemetery in the world, a sacred burial ground adjacent to the Imam Ali Shrine, holding centuries of Islamic history.' },
    { name: 'Baghdad Heritage Sites', description: 'Historic mosques, shrines of the Sahaba, and centuries of Islamic scholarship in the capital that was once the centre of the Islamic world.' },
  ],
  seasons: [
    { period: 'October – March', description: 'The best time to visit. Pleasant temperatures (15–25°C) make shrine visits and travel comfortable. Ideal for pilgrimage.' },
    { period: 'April – May', description: 'Spring brings moderate weather. Good for travel, though temperatures begin rising towards summer.' },
    { period: 'June – September', description: 'Extremely hot (40–50°C). Not recommended for travel, though shrine visits are still possible with proper arrangements.' },
  ],
  experiences: [
    'Pray at the Imam Ali Shrine in Najaf at dawn',
    'Walk the historic route between Imam Hussain and Hazrat Abbas shrines',
    'Visit the sacred Sardab of Imam Mahdi (ATFS) in Samarra',
    'Experience the spiritual atmosphere of Karbala during evening prayers',
    'Explore the golden domes and tilework of Kazmain Shrine',
    'Pay respects at Wadi-us-Salaam, the world\'s largest cemetery',
    'Discover Baghdad\'s rich Islamic heritage and historic mosques',
    'Enjoy hygienic Indian meals prepared with care throughout your journey',
  ],
  itinerary: [
    { day: 'Day 1', title: 'Arrival in Najaf', description: 'Arrive at Najaf International Airport. Transfer to your 4-star hotel near the Imam Ali Shrine. Evening visit to the shrine for Maghrib prayers.' },
    { day: 'Day 2', title: 'Najaf & Karbala', description: 'Morning prayers at Imam Ali Shrine. Visit Wadi-us-Salaam. Travel to Karbala (90 min). Check into hotel near Imam Hussain Shrine. Evening ziyarat.' },
    { day: 'Day 3', title: 'Karbala Deep Dive', description: 'Full day in Karbala — prayers at Imam Hussain Shrine, walk to Hazrat Abbas Shrine, guided historical commentary, and time for personal devotion.' },
    { day: 'Day 4', title: 'Kazmain (Baghdad)', description: 'Travel to Baghdad. Visit the Kazmain Shrine of Imam Musa al-Kadhim (A.S.) and Imam al-Jawad (A.S.). Explore Baghdad heritage sites.' },
    { day: 'Day 5', title: 'Samarra', description: 'Day trip to Samarra — visit the shrines of Imam Ali al-Hadi (A.S.) and Imam al-Askari (A.S.), and the sacred Sardab of Imam Mahdi (ATFS). Return to Baghdad.' },
    { day: 'Day 6', title: 'Baghdad & Departure', description: 'Morning visit to remaining Baghdad heritage sites. Transfer to airport for departure. Safe journey home with memories to last a lifetime.' },
  ],
  requirements: [
    'Valid passport with minimum 6 months validity',
    'Iraq visa (we handle the complete application process)',
    'Vaccination certificate (as per current requirements)',
    'Passport-size photographs (we will guide you on specifications)',
    'Travel insurance (included in our packages)',
    'No special language requirements — our guides speak Hindi, Urdu, and English',
  ],
  travelTips: [
    'Carry comfortable walking shoes — shrine visits involve significant walking',
    'Dress modestly — women should carry an abaya or chador for shrine visits',
    'Keep a copy of your passport and visa at all times',
    'Stay hydrated, especially if travelling in shoulder seasons',
    'Carry Indian rupees converted to USD before departure for better exchange rates',
    'Download offline maps and keep our emergency contact numbers handy',
    'Notify your bank about international card usage before travel',
  ],
  faqs: [
    { q: 'Is Iraq safe for pilgrimage travel?', a: 'The holy cities of Najaf, Karbala, Kazmain, and Samarra are generally safe for pilgrims. Millions visit annually. We ensure your safety with experienced guides, secure transport, and 24/7 support throughout your journey.' },
    { q: 'What type of accommodation is provided?', a: '4-star and above hotels located within walking distance of the holy shrines. All hotels are clean, comfortable, and selected for their proximity to sacred sites.' },
    { q: 'Is Indian food available?', a: 'Yes — freshly prepared Indian vegetarian and non-vegetarian meals are included throughout your journey. Hygiene is our top priority.' },
    { q: 'Do you handle the visa?', a: 'Yes, complete visa assistance is included. We handle the documentation, submission, and follow-up for your Iraq visa.' },
    { q: 'How long is a typical Iraq pilgrimage?', a: 'Our standard package is 6 days covering Najaf, Karbala, Kazmain, and Samarra. We can customize the duration based on your preferences.' },
    { q: 'Do you provide guides who speak Hindi or Urdu?', a: 'Yes, our experienced guides speak Hindi, Urdu, and English, and provide spiritual and historical commentary at every shrine.' },
  ],
};

// ─── Helper to create destinations with shared structure ───────────────────
function makeDest(d: Partial<Destination> & { slug: string; name: string; country: string; tagline: string; hero: string; card: string; overview: string }): Destination {
  return {
    region: 'Middle East',
    category: 'Leisure',
    gallery: [d.hero, d.card],
    attractions: [],
    seasons: [],
    experiences: [],
    itinerary: [],
    requirements: [],
    travelTips: [],
    faqs: [],
    ...d,
  } as Destination;
}

// ─── All Worldwide Destinations ─────────────────────────────────────────────
export const destinations: Destination[] = [
  iraq,
  makeDest({
    slug: 'uae', name: 'UAE', country: 'United Arab Emirates', region: 'Middle East',
    tagline: 'The City of Gold', category: 'Luxury',
    hero: 'https://images.pexels.com/photos/30764058/pexels-photo-30764058.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/30764058/pexels-photo-30764058.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: [
      'https://images.pexels.com/photos/30764058/pexels-photo-30764058.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
      'https://images.pexels.com/photos/32119558/pexels-photo-32119558.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
      'https://images.pexels.com/photos/19741511/pexels-photo-19741511.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    ],
    featured: true,
    overview: 'The UAE is where ancient Arabian culture meets futuristic luxury. From the towering Burj Khalifa to the serene Sheikh Zayed Grand Mosque, from desert safaris to world-class shopping — the UAE offers an unmatched blend of adventure, culture, and opulence.',
    attractions: [
      { name: 'Burj Khalifa', description: 'The world\'s tallest building. Observation decks offer breathtaking views of Dubai\'s skyline and the Arabian Gulf.' },
      { name: 'Sheikh Zayed Grand Mosque', description: 'One of the world\'s most beautiful mosques, in Abu Dhabi. A masterpiece of white marble, gold, and crystal.' },
      { name: 'Palm Jumeirah', description: 'An engineering marvel — a man-made island in the shape of a palm tree, home to luxury resorts and residences.' },
      { name: 'Dubai Mall', description: 'The world\'s largest shopping mall, featuring an aquarium, ice rink, and over 1,200 retail outlets.' },
      { name: 'Desert Safari', description: 'Dune bashing, camel rides, and traditional Bedouin dinners under the stars in the Arabian Desert.' },
      { name: 'Dubai Frame', description: 'A 150-meter golden frame offering panoramic views of old and new Dubai from its glass-bottom bridge.' },
    ],
    seasons: [
      { period: 'November – March', description: 'The best time to visit. Pleasant weather (20–30°C) perfect for sightseeing, desert safaris, and outdoor activities.' },
      { period: 'April – October', description: 'Very hot (35–45°C). Best for indoor attractions, shopping, and evening activities. Hotel rates are lower.' },
    ],
    experiences: ['Sunset desert safari with Bedouin dinner', 'Sunrise from Burj Khalifa observation deck', 'Traditional abra ride across Dubai Creek', 'Gold and spice souk shopping in old Dubai', 'Friday brunch at a luxury beach resort', 'Sheikh Zayed Grand Mosque guided tour'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Dubai Marina', description: 'Arrive in Dubai. Transfer to hotel. Evening Dubai Marina walk and dhow cruise dinner.' },
      { day: 'Day 2', title: 'Old Dubai & Burj Khalifa', description: 'Morning: Dubai Museum, gold souk, spice souk, abra ride. Afternoon: Dubai Mall. Evening: Burj Khalifa at sunset.' },
      { day: 'Day 3', title: 'Desert Safari', description: 'Morning at leisure. Afternoon desert safari — dune bashing, camel ride, BBQ dinner with live entertainment under the stars.' },
      { day: 'Day 4', title: 'Abu Dhabi Day Trip', description: 'Full day to Abu Dhabi — Sheikh Zayed Grand Mosque, Emirates Palace, Ferrari World (optional). Return to Dubai.' },
      { day: 'Day 5', title: 'Palm Jumeirah & Departure', description: 'Morning: Atlantis, The Palm and Aquaventure. Afternoon: shopping and departure transfer.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'UAE visa (we handle the application)', 'Return flight tickets', 'Hotel booking confirmation', 'Travel insurance'],
    travelTips: ['Dress modestly in public and religious sites', 'Carry sunglasses and sunscreen year-round', 'Friday is a holy day — some shops open later', 'Tipping is appreciated but not mandatory', 'Use metro for convenient transport in Dubai'],
    faqs: [
      { q: 'Do I need a visa for the UAE?', a: 'Yes, Indian passport holders require a UAE visa. We handle the complete visa application process as part of our service.' },
      { q: 'What is the best time to visit?', a: 'November to March offers the most pleasant weather. Avoid June–August when temperatures can exceed 45°C.' },
      { q: 'Can I drink alcohol in the UAE?', a: 'Alcohol is available in licensed hotels and restaurants. Dubai is more relaxed, but public intoxication is strictly prohibited.' },
    ],
  }),
  makeDest({
    slug: 'saudi-arabia', name: 'Saudi Arabia', country: 'Kingdom of Saudi Arabia', region: 'Middle East',
    tagline: 'The Holy Land', category: 'Religious Tourism',
    hero: 'https://images.pexels.com/photos/34956761/pexels-photo-34956761.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/34956761/pexels-photo-34956761.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: [
      'https://images.pexels.com/photos/34956761/pexels-photo-34956761.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
      'https://images.pexels.com/photos/5620451/pexels-photo-5620451.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
      'https://images.pexels.com/photos/34956775/pexels-photo-34956775.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    ],
    featured: true,
    overview: 'Saudi Arabia is home to the two holiest sites in Islam — Makkah and Madinah. Every year, millions of pilgrims perform Umrah and Hajj, fulfilling a lifelong spiritual aspiration. Beyond the holy cities, Saudi Arabia now welcomes tourists to discover its rich heritage, from the UNESCO site of AlUla to the vibrant city of Riyadh.',
    attractions: [
      { name: 'Masjid al-Haram (Makkah)', description: 'The largest mosque in the world, home to the Holy Kaaba. The destination of every Muslim\'s lifelong aspiration.' },
      { name: 'Masjid an-Nabawi (Madinah)', description: 'The Prophet\'s Mosque in Madinah — the second holiest site in Islam, housing the tomb of Prophet Muhammad (PBUH).' },
      { name: 'AlUla', description: 'A UNESCO World Heritage site featuring ancient rock formations and the Nabataean city of Hegra (Mada\'in Saleh).' },
      { name: 'Riyadh', description: 'The capital city, blending modern skyscrapers with historic sites like Diriyah and the National Museum.' },
      { name: 'Jeddah', description: 'The gateway to Makkah, known for its historic Al-Balad district and the stunning Corniche along the Red Sea.' },
    ],
    seasons: [
      { period: 'November – February', description: 'The best time. Mild weather (20–25°C) ideal for Umrah, Hajj, and sightseeing.' },
      { period: 'March – October', description: 'Hot to extremely hot. Umrah is still performed, but outdoor sightseeing is limited during peak summer.' },
    ],
    experiences: ['Perform Umrah at Masjid al-Haram', 'Pray at the Prophet\'s Mosque in Madinah', 'Visit the historic Al-Balad district in Jeddah', 'Explore the ancient wonders of AlUla', 'Walk between Safa and Marwah', 'Drink from the holy Zamzam well'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Jeddah', description: 'Arrive in Jeddah. Transfer to hotel. Rest and preparation for Umrah.' },
      { day: 'Day 2', title: 'Travel to Makkah & Umrah', description: 'Travel to Makkah. Perform Umrah — Tawaf, Sa\'i, and trimming of hair. Prayers at Masjid al-Haram.' },
      { day: 'Day 3', title: 'Makkah', description: 'Full day in Makkah — prayers, personal devotion, and visits to significant Islamic sites around the city.' },
      { day: 'Day 4', title: 'Travel to Madinah', description: 'Travel to Madinah. Check into hotel near Masjid an-Nabawi. Evening prayers at the Prophet\'s Mosque.' },
      { day: 'Day 5', title: 'Madinah', description: 'Full day in Madinah — prayers at Masjid an-Nabawi, visit to Quba Mosque, Jabal Uhud, and other historic Islamic sites.' },
      { day: 'Day 6', title: 'Departure', description: 'Morning prayers. Transfer to Madinah/Jeddah airport for departure.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Umrah or tourist visa (we handle the application)', 'Meningitis vaccination certificate', 'Travel insurance', 'Appropriate Ihram clothing for Umrah'],
    travelTips: ['Carry Ihram and learn the rituals before travel', 'Stay hydrated, especially during Tawaf and Sa\'i', 'Keep your hotel proximity to the Haram in mind', 'Respect prayer times — shops close during prayers', 'Women should carry an abaya'],
    faqs: [
      { q: 'Can non-Muslims visit Saudi Arabia?', a: 'Yes, Saudi Arabia now issues tourist visas. However, entry to Makkah and Madinah is restricted to Muslims only.' },
      { q: 'What is the difference between Umrah and Hajj?', a: 'Umrah can be performed year-round and takes a few hours. Hajj is performed during specific days of the Islamic calendar (Dhul Hijjah) and takes 5–6 days.' },
      { q: 'Do you arrange Umrah packages?', a: 'Yes, we offer complete Umrah packages including visa, flights, premium hotels near the Haram, and guided assistance.' },
    ],
  }),
  makeDest({
    slug: 'turkey', name: 'Turkey', country: 'Republic of Türkiye', region: 'Middle East',
    tagline: 'Where Two Worlds Meet', category: 'Cultural',
    hero: 'https://images.pexels.com/photos/12240132/pexels-photo-12240132.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/12240132/pexels-photo-12240132.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: [
      'https://images.pexels.com/photos/12240132/pexels-photo-12240132.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
      'https://images.pexels.com/photos/32417032/pexels-photo-32417032.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
      'https://images.pexels.com/photos/8471324/pexels-photo-8471324.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    ],
    featured: true,
    overview: 'Turkey is a mesmerizing blend of East and West, where ancient empires left their mark on stunning landscapes. From the architectural wonders of Istanbul to the otherworldly landscapes of Cappadocia, from the turquoise coast of Antalya to the thermal springs of Pamukkale — Turkey offers an unforgettable journey through history, culture, and natural beauty.',
    attractions: [
      { name: 'Hagia Sophia (Istanbul)', description: 'A 1,500-year-old architectural marvel that has served as cathedral, mosque, and museum. A symbol of Istanbul\'s rich history.' },
      { name: 'Blue Mosque (Istanbul)', description: 'The Sultan Ahmed Mosque, famous for its six minarets and 20,000 handcrafted blue Iznik tiles.' },
      { name: 'Cappadocia', description: 'A surreal landscape of fairy chimneys, cave dwellings, and underground cities. World-famous for sunrise hot air balloon rides.' },
      { name: 'Pamukkale', description: 'The "Cotton Castle" — stunning white travertine terraces of thermal water, a UNESCO World Heritage site.' },
      { name: 'Ephesus', description: 'One of the best-preserved ancient cities in the Mediterranean, home to the Library of Celsus and the Temple of Artemis.' },
      { name: 'Grand Bazaar (Istanbul)', description: 'One of the world\'s oldest and largest covered markets — 4,000 shops across 61 streets.' },
    ],
    seasons: [
      { period: 'April – June & September – October', description: 'The best times. Mild weather perfect for sightseeing, hot air balloon rides, and coastal visits.' },
      { period: 'July – August', description: 'Hot and busy. Good for coastal areas but crowded in major cities. Book early.' },
      { period: 'November – March', description: 'Cooler and less crowded. Cappadocia in snow is magical. Lower hotel rates.' },
    ],
    experiences: ['Hot air balloon ride at sunrise in Cappadocia', 'Bosphorus cruise between two continents', 'Turkish bath (hamam) experience', 'Grand Bazaar shopping and haggling', 'Whirling Dervish ceremony', 'Turkish tea and baklava tasting'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Istanbul', description: 'Arrive in Istanbul. Transfer to hotel. Evening Bosphorus cruise dinner.' },
      { day: 'Day 2', title: 'Istanbul Classics', description: 'Hagia Sophia, Blue Mosque, Topkapi Palace, Hippodrome, and Grand Bazaar.' },
      { day: 'Day 3', title: 'Cappadocia', description: 'Fly to Cappadocia. Sunset hot air balloon ride. Cave hotel overnight.' },
      { day: 'Day 4', title: 'Cappadocia Deep Dive', description: 'Göreme Open Air Museum, underground city, fairy chimneys, and pottery workshop.' },
      { day: 'Day 5', title: 'Pamukkale & Ephesus', description: 'Fly to Izmir. Visit Pamukkale thermal terraces and the ancient city of Ephesus.' },
      { day: 'Day 6', title: 'Return & Departure', description: 'Fly back to Istanbul. Free time for shopping. Departure transfer.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Turkish e-Visa (we assist with application)', 'Return flight tickets', 'Hotel booking confirmation', 'Travel insurance'],
    travelTips: ['Carry modest clothing for mosque visits (women should cover hair)', 'Bargaining is expected at the Grand Bazaar', 'Try the Turkish breakfast — it\'s legendary', 'Carry cash (Turkish Lira) for small shops', 'Remove shoes before entering mosques'],
    faqs: [
      { q: 'Do Indian passport holders need a visa for Turkey?', a: 'Yes, Indian citizens need a Turkish e-Visa. We handle the complete application process.' },
      { q: 'Is the hot air balloon ride in Cappadocia safe?', a: 'Yes, balloon rides are highly regulated and operated by licensed pilots. Weather-dependent — we book only on suitable days.' },
      { q: 'Is Turkey safe for tourists?', a: 'Yes, Turkey is a major tourist destination with excellent infrastructure. Standard travel precautions apply.' },
    ],
  }),
  makeDest({
    slug: 'maldives', name: 'Maldives', country: 'Republic of Maldives', region: 'Asia',
    tagline: 'Paradise on Earth', category: 'Beach',
    hero: 'https://images.pexels.com/photos/33643742/pexels-photo-33643742.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/33643742/pexels-photo-33643742.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: [
      'https://images.pexels.com/photos/33643742/pexels-photo-33643742.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
      'https://images.pexels.com/photos/35192311/pexels-photo-35192311.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
      'https://images.pexels.com/photos/6044984/pexels-photo-6044984.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    ],
    featured: true,
    overview: 'The Maldives is the ultimate tropical paradise — 1,200 islands of powdery white sand, crystal-clear turquoise waters, and overwater bungalows. Whether it\'s a honeymoon, a family getaway, or a solo escape, the Maldives delivers an experience of pure serenity and luxury.',
    attractions: [
      { name: 'Overwater Villas', description: 'The iconic Maldivian experience — your private villa perched above the lagoon with direct ocean access.' },
      { name: 'Snorkeling & Diving', description: 'Explore vibrant coral reefs, manta rays, whale sharks, and tropical fish in some of the world\'s clearest waters.' },
      { name: 'Bioluminescent Beaches', description: 'Witness the magical "sea of stars" — beaches that glow blue at night due to bioluminescent plankton.' },
      { name: 'Private Sandbanks', description: 'Dine on a pristine sandbank in the middle of the ocean — a truly exclusive Maldivian experience.' },
      { name: 'Sunset Dolphin Cruise', description: 'Spot spinner dolphins playing in the boat\'s wake as the sun sets over the Indian Ocean.' },
    ],
    seasons: [
      { period: 'November – April', description: 'The dry season. Sunny skies, calm seas, and excellent visibility for diving. Peak season.' },
      { period: 'May – October', description: 'The wet season with occasional rain showers. Lower rates, fewer crowds, and still plenty of sunshine between showers.' },
    ],
    experiences: ['Stay in an overwater villa', 'Snorkel with manta rays and whale sharks', 'Private sandbank dinner under the stars', 'Sunset dolphin cruise', 'Underwater restaurant dining', 'Traditional Maldivian spa treatment'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Speedboat Transfer', description: 'Arrive at Malé. Speedboat or seaplane transfer to your resort. Welcome drinks and check-in to your overwater villa.' },
      { day: 'Day 2', title: 'Reef Exploration', description: 'Guided snorkeling tour of the house reef. Afternoon spa treatment. Evening sunset dolphin cruise.' },
      { day: 'Day 3', title: 'Water Sports & Sandbank', description: 'Morning kayaking or paddleboarding. Afternoon private sandbank picnic. Evening bioluminescent beach walk.' },
      { day: 'Day 4', title: 'Diving Adventure', description: 'Discover scuba diving or guided dive for certified divers. Afternoon at leisure. Farewell dinner.' },
      { day: 'Day 5', title: 'Departure', description: 'Morning at leisure. Transfer to Malé airport for departure.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Maldives visa on arrival (free for 30 days)', 'Return flight tickets', 'Hotel booking confirmation', 'Travel insurance'],
    travelTips: ['Carry reef-safe sunscreen', 'Pack light — most resorts are casual', 'Carry an underwater camera or GoPro', 'Book spa treatments in advance', 'Tip in USD — widely accepted'],
    faqs: [
      { q: 'Do I need a visa for the Maldives?', a: 'Indian passport holders receive a free 30-day visa on arrival. You need a valid passport, return ticket, and hotel confirmation.' },
      { q: 'What is the best time for a Maldives honeymoon?', a: 'November to April offers the best weather — sunny skies, calm seas, and excellent visibility for snorkeling and diving.' },
      { q: 'Are the Maldives resorts family-friendly?', a: 'Yes, many resorts offer family villas, kids\' clubs, and family activities. We can recommend the perfect resort for your group.' },
    ],
  }),
  // ─── Other destinations (concise but complete) ────────────────────────────
  makeDest({
    slug: 'thailand', name: 'Thailand', country: 'Kingdom of Thailand', region: 'Asia',
    tagline: 'Land of Smiles', category: 'Cultural',
    hero: 'https://images.pexels.com/photos/7477941/pexels-photo-7477941.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/7477941/pexels-photo-7477941.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: ['https://images.pexels.com/photos/7477941/pexels-photo-7477941.jpeg?auto=compress&cs=tinysrgb&h=600&w=800', 'https://images.pexels.com/photos/16429145/pexels-photo-16429145.jpeg?auto=compress&cs=tinysrgb&h=600&w=800'],
    overview: 'Thailand is a vibrant kingdom of golden temples, bustling markets, tropical beaches, and world-renowned cuisine. From the temples of Bangkok to the beaches of Phuket and the hills of Chiang Mai, Thailand offers something for every traveller.',
    attractions: [
      { name: 'Grand Palace (Bangkok)', description: 'A dazzling complex of buildings including Wat Phra Kaew, home to the Emerald Buddha.' },
      { name: 'Phi Phi Islands', description: 'Stunning limestone cliffs rising from turquoise waters — a tropical paradise made famous by "The Beach."' },
      { name: 'Chiang Mai Temples', description: 'Hundreds of ancient temples in northern Thailand, including the mountaintop Wat Phra That Doi Suthep.' },
      { name: 'Floating Markets', description: 'Damnoen Saduak and other floating markets where vendors sell fruits and food from wooden boats.' },
    ],
    seasons: [
      { period: 'November – February', description: 'Cool and dry. The best time to visit. Pleasant weather across the country.' },
      { period: 'March – May', description: 'Hot season. Good for beach destinations but cities are very warm.' },
      { period: 'June – October', description: 'Rainy season. Lower rates, lush landscapes, and occasional afternoon showers.' },
    ],
    experiences: ['Temple hopping in Bangkok', 'Island hopping in Phuket and Krabi', 'Thai cooking class', 'Floating market tour', 'Thai massage and wellness', 'Full Moon Party on Koh Phangan'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Bangkok', description: 'Arrive in Bangkok. Evening dinner cruise on the Chao Phraya River.' },
      { day: 'Day 2', title: 'Bangkok Temples & Markets', description: 'Grand Palace, Wat Pho, Wat Arun. Afternoon floating market. Evening street food tour.' },
      { day: 'Day 3', title: 'Fly to Phuket', description: 'Fly to Phuket. Check into beach resort. Evening at Patong Beach.' },
      { day: 'Day 4', title: 'Phi Phi Islands', description: 'Full-day speedboat tour to Phi Phi Islands — snorkeling, Maya Bay, Monkey Beach.' },
      { day: 'Day 5', title: 'Phuket Leisure & Departure', description: 'Morning at leisure. Afternoon departure transfer.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Thailand visa (visa exemption or e-Visa, we assist)', 'Return flight tickets', 'Travel insurance'],
    travelTips: ['Dress modestly for temple visits', 'Carry insect repellent', 'Bargain at markets but respectfully', 'Try street food — it\'s safe and delicious', 'Carry cash (Thai Baht) for small vendors'],
    faqs: [
      { q: 'Do Indians need a visa for Thailand?', a: 'Indian passport holders currently receive visa-free entry for tourism (check current policy). We handle all visa formalities.' },
      { q: 'Is Thailand safe for solo travellers?', a: 'Yes, Thailand is one of the safest destinations in Southeast Asia for solo and group travellers.' },
    ],
  }),
  makeDest({
    slug: 'singapore', name: 'Singapore', country: 'Republic of Singapore', region: 'Asia',
    tagline: 'The Lion City', category: 'Urban',
    hero: 'https://images.pexels.com/photos/2804038/pexels-photo-2804038.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/2804038/pexels-photo-2804038.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: ['https://images.pexels.com/photos/2804038/pexels-photo-2804038.jpeg?auto=compress&cs=tinysrgb&h=600&w=800'],
    overview: 'Singapore is a gleaming city-state where cultures, cuisines, and architecture blend seamlessly. From the futuristic Gardens by the Bay to the iconic Marina Bay Sands, from the cultural enclaves of Chinatown and Little India to the magic of Universal Studios — Singapore is a world-class destination for families, couples, and business travellers alike.',
    attractions: [
      { name: 'Marina Bay Sands', description: 'The iconic triple-tower hotel with a rooftop infinity pool offering panoramic city views.' },
      { name: 'Gardens by the Bay', description: 'Futuristic gardens with the Supertree Grove, Cloud Forest, and Flower Dome — a marvel of urban design.' },
      { name: 'Sentosa Island', description: 'A resort island home to Universal Studios, S.E.A. Aquarium, Adventure Cove Waterpark, and beach clubs.' },
      { name: 'Chinatown & Little India', description: 'Cultural enclaves with heritage shophouses, temples, and some of the city\'s best street food.' },
    ],
    seasons: [
      { period: 'February – April', description: 'The driest months. Best time for outdoor activities and sightseeing.' },
      { period: 'Year-round', description: 'Singapore is warm and humid year-round (25–32°C). Rain can occur any time but is usually brief.' },
    ],
    experiences: ['Light show at Gardens by the Bay', 'Universal Studios Singapore', 'Hawker centre food trail', 'Singapore River cruise', 'Night Safari at Singapore Zoo', 'Shopping on Orchard Road'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Marina Bay', description: 'Arrive in Singapore. Evening: Marina Bay Sands light show and Gardens by the Bay.' },
      { day: 'Day 2', title: 'Sentosa Island', description: 'Full day at Sentosa — Universal Studios, S.E.A. Aquarium, beach time.' },
      { day: 'Day 3', title: 'Cultural Singapore', description: 'Chinatown, Little India, Kampong Glam. Afternoon: Singapore Flyer. Evening: Night Safari.' },
      { day: 'Day 4', title: 'Shopping & Departure', description: 'Morning: Orchard Road shopping. Afternoon departure.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Singapore visa (we handle the application)', 'Return flight tickets', 'Travel insurance'],
    travelTips: ['Carry an umbrella — rain is unpredictable', 'Eat at hawker centres for authentic, affordable food', 'Use the MRT for convenient transport', 'Chewing gum is banned — don\'t carry it', 'Tap water is safe to drink'],
    faqs: [
      { q: 'Do Indians need a visa for Singapore?', a: 'Yes, Indian passport holders need a Singapore visa. We handle the complete application process.' },
    ],
  }),
  makeDest({
    slug: 'malaysia', name: 'Malaysia', country: 'Malaysia', region: 'Asia',
    tagline: 'Truly Asia', category: 'Cultural',
    hero: 'https://images.pexels.com/photos/9395978/pexels-photo-9395978.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/9395978/pexels-photo-9395978.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: ['https://images.pexels.com/photos/9395978/pexels-photo-9395978.jpeg?auto=compress&cs=tinysrgb&h=600&w=800'],
    overview: 'Malaysia is a vibrant mosaic of Malay, Chinese, and Indian cultures. From the towering Petronas Towers of Kuala Lumpur to the pristine beaches of Langkawi and the rainforests of Borneo — Malaysia truly lives up to its slogan "Truly Asia."',
    attractions: [
      { name: 'Petronas Towers (KL)', description: 'The world\'s tallest twin towers. The Skybridge and observation deck offer stunning city views.' },
      { name: 'Batu Caves', description: 'A limestone hill with a series of caves and Hindu temples, guarded by a 42-meter golden statue of Lord Murugan.' },
      { name: 'Langkawi', description: 'An archipelago of 99 islands with pristine beaches, mangrove tours, and the Langkawi Cable Car.' },
      { name: 'Genting Highlands', description: 'A hill resort with theme parks, casinos, and cooler mountain air.' },
    ],
    seasons: [
      { period: 'March – October', description: 'Generally dry on the west coast (KL, Langkawi). Best for most visitors.' },
      { period: 'November – February', description: 'Monsoon on the east coast. West coast remains visitable.' },
    ],
    experiences: ['Petronas Towers skybridge visit', 'Batu Caves temple climb', 'Langkawi island hopping', 'Kuala Lumpur food trail', 'Cameron Highlands tea plantation visit', 'Borneo rainforest trekking'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in KL', description: 'Arrive in Kuala Lumpur. Evening: Petronas Towers and KLCC Park.' },
      { day: 'Day 2', title: 'KL City Tour', description: 'Batu Caves, King\'s Palace, National Monument, Independence Square. Evening: KL Tower.' },
      { day: 'Day 3', title: 'Genting Highlands', description: 'Day trip to Genting Highlands — theme park and casino. Cable car ride.' },
      { day: 'Day 4', title: 'Langkawi', description: 'Fly to Langkawi. Island hopping tour. Cable car and sky bridge.' },
      { day: 'Day 5', title: 'Beach & Departure', description: 'Morning at beach. Afternoon fly to KL and departure.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Malaysia e-Visa (we handle the application)', 'Return flight tickets', 'Travel insurance'],
    travelTips: ['Dress modestly at religious sites', 'Carry rain gear year-round', 'Try the local food — nasi lemak is a must', 'Use Grab for convenient transport', 'Carry cash for small shops'],
    faqs: [
      { q: 'Do Indians need a visa for Malaysia?', a: 'Yes, Indian passport holders need a Malaysia e-Visa. We handle the complete application.' },
    ],
  }),
  makeDest({
    slug: 'azerbaijan', name: 'Azerbaijan', country: 'Republic of Azerbaijan', region: 'Middle East',
    tagline: 'Land of Fire', category: 'Cultural',
    hero: 'https://images.pexels.com/photos/35418664/pexels-photo-35418664.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/35418664/pexels-photo-35418664.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: ['https://images.pexels.com/photos/35418664/pexels-photo-35418664.jpeg?auto=compress&cs=tinysrgb&h=600&w=800', 'https://images.pexels.com/photos/37064726/pexels-photo-37064726.jpeg?auto=compress&cs=tinysrgb&h=600&w=800'],
    overview: 'Azerbaijan, the "Land of Fire," is a fascinating crossroads of Europe and Asia. Baku\'s Flame Towers contrast with the medieval old town, while the Caspian Sea coast and the Caucasus Mountains offer diverse landscapes. Rich in oil, history, and hospitality.',
    attractions: [
      { name: 'Flame Towers (Baku)', description: 'Three iconic skyscrapers shaped like flames, illuminating the Baku skyline at night.' },
      { name: 'Old City (Icherisheher)', description: 'A UNESCO World Heritage medieval walled city with the Maiden Tower and Palace of the Shirvanshahs.' },
      { name: 'Gobustan National Park', description: 'Ancient rock carvings and mud volcanoes — a UNESCO site dating back 40,000 years.' },
      { name: 'Caspian Sea Boulevard', description: 'A beautiful waterfront promenade stretching along Baku\'s coast.' },
    ],
    seasons: [
      { period: 'April – June & September – October', description: 'Best times — mild weather ideal for sightseeing.' },
      { period: 'July – August', description: 'Hot in Baku but pleasant in the mountains.' },
    ],
    experiences: ['Baku Flame Towers night view', 'Old City walking tour', 'Gobustan rock art and mud volcanoes', 'Caspian Sea cruise', 'Fire Temple of Baku (Ateshgah)', 'Azerbaijani cuisine tasting'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Baku', description: 'Arrive in Baku. Evening: Baku Boulevard and Flame Towers view.' },
      { day: 'Day 2', title: 'Baku City Tour', description: 'Old City, Maiden Tower, Shirvanshah Palace, Carpet Museum. Evening: Fountain Square.' },
      { day: 'Day 3', title: 'Gobustan & Fire Temple', description: 'Gobustan rock art, mud volcanoes, Ateshgah Fire Temple, and burning mountain (Yanar Dag).' },
      { day: 'Day 4', title: 'Departure', description: 'Free time for shopping. Departure transfer.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Azerbaijan e-Visa (we handle the application)', 'Return flight tickets', 'Travel insurance'],
    travelTips: ['Carry a jacket for evenings', 'Try the local plov (rice dish)', 'Use taxis or Bolt app for transport', 'English is limited — carry a translation app'],
    faqs: [
      { q: 'Do Indians need a visa for Azerbaijan?', a: 'Yes, Indian passport holders need an Azerbaijan e-Visa. We handle the complete application.' },
    ],
  }),
  makeDest({
    slug: 'georgia', name: 'Georgia', country: 'Georgia', region: 'Middle East',
    tagline: 'The Caucasus Gem', category: 'Nature',
    hero: 'https://images.pexels.com/photos/20241383/pexels-photo-20241383.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/20241383/pexels-photo-20241383.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: ['https://images.pexels.com/photos/20241383/pexels-photo-20241383.jpeg?auto=compress&cs=tinysrgb&h=600&w=800'],
    overview: 'Georgia is a hidden gem at the crossroads of Europe and Asia — with dramatic Caucasus Mountain scenery, ancient churches, charming old towns, and one of the world\'s oldest wine-making traditions. Tbilisi, the capital, enchants with its blend of medieval and modern architecture.',
    attractions: [
      { name: 'Tbilisi Old Town', description: 'Narrow cobblestone streets, colourful balconied houses, sulphur baths, and the Narikala Fortress overlooking the city.' },
      { name: 'Gergeti Trinity Church', description: 'A 14th-century church dramatically situated beneath Mount Kazbek — one of Georgia\'s most iconic images.' },
      { name: 'Wine Region (Kakheti)', description: 'Georgia is the birthplace of wine. Visit traditional qvevri wineries and taste 8,000 years of winemaking heritage.' },
      { name: 'Ananuri Fortress', description: 'A scenic medieval fortress complex on the Aragvi River along the Georgian Military Highway.' },
    ],
    seasons: [
      { period: 'May – October', description: 'Best for mountain areas and the Caucasus. Warm, green, and accessible.' },
      { period: 'November – April', description: 'Ski season in Gudauri. Tbilisi remains visitable.' },
    ],
    experiences: ['Tbilisi sulphur bath experience', 'Wine tasting in Kakheti', 'Caucasus Mountain 4x4 tour', 'Gergeti church hike', 'Georgian feast (supra) with khinkali', 'Kazbegi mountain scenery'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Tbilisi', description: 'Arrive in Tbilisi. Evening: Old Town walk and sulphur baths.' },
      { day: 'Day 2', title: 'Tbilisi City Tour', description: 'Narikala Fortress, Metekhi Church, Sioni Cathedral, Bridge of Peace, Funicular for city views.' },
      { day: 'Day 3', title: 'Kazbegi Day Trip', description: 'Ananuri Fortress, Gudauri, Gergeti Trinity Church, and Mount Kazbek.' },
      { day: 'Day 4', title: 'Kakheti Wine Tour', description: 'Visit traditional wineries, taste Georgian wines, and explore the wine country.' },
      { day: 'Day 5', title: 'Departure', description: 'Free time for shopping. Departure transfer.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Georgia e-Visa (we handle the application)', 'Return flight tickets', 'Travel insurance'],
    travelTips: ['Try khachapuri and khinkali', 'Carry warm clothes for mountain trips', 'Georgian wine is a must-try', 'English is increasingly spoken in Tbilisi'],
    faqs: [
      { q: 'Do Indians need a visa for Georgia?', a: 'Indian passport holders need a Georgia e-Visa. We handle the complete application process.' },
    ],
  }),
  makeDest({
    slug: 'armenia', name: 'Armenia', country: 'Republic of Armenia', region: 'Middle East',
    tagline: 'The Ancient Highland', category: 'Cultural',
    hero: 'https://images.pexels.com/photos/16206879/pexels-photo-16206879.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/16206879/pexels-photo-16206879.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: ['https://images.pexels.com/photos/16206879/pexels-photo-16206879.jpeg?auto=compress&cs=tinysrgb&h=600&w=800'],
    overview: 'Armenia is one of the world\'s oldest civilizations — the first country to adopt Christianity. With stunning mountain landscapes, ancient monasteries, and the majestic Mount Ararat looming in the distance, Armenia offers a deeply spiritual and culturally rich travel experience.',
    attractions: [
      { name: 'Yerevan', description: 'One of the world\'s oldest continuously inhabited cities, blending Soviet architecture with modern cafés and the stunning Cascade Complex.' },
      { name: 'Khor Virap Monastery', description: 'A historic monastery with the most iconic view of Mount Ararat — the legendary resting place of Noah\'s Ark.' },
      { name: 'Garni Temple', description: 'A Greco-Roman pagan temple — the only one of its kind in the region — overlooking the Azat River Gorge.' },
      { name: 'Lake Sevan', description: 'One of the world\'s largest high-altitude freshwater lakes, with the scenic Sevanavank Monastery on its shores.' },
    ],
    seasons: [
      { period: 'May – October', description: 'Best time — warm weather, green landscapes, and accessible mountain sites.' },
      { period: 'November – April', description: 'Cold and snowy. Tsaghkadzor is a popular ski destination.' },
    ],
    experiences: ['Sunrise view of Mount Ararat from Khor Virap', 'Garni Temple and Geghard Monastery', 'Lake Sevan boat trip', 'Armenian brandy tasting', 'Yerevan Cascade and Republic Square', 'Armenian cuisine — try dolma and lavash'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Yerevan', description: 'Arrive in Yerevan. Evening: Republic Square fountain show.' },
      { day: 'Day 2', title: 'Yerevan & Garni', description: 'City tour, Matenadaran, Cascade. Afternoon: Garni Temple and Geghard Monastery.' },
      { day: 'Day 3', title: 'Khor Virap & Sevan', description: 'Morning: Khor Virap with Mount Ararat views. Afternoon: Lake Sevan and Sevanavank.' },
      { day: 'Day 4', title: 'Departure', description: 'Brandy tasting. Departure transfer.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Armenia e-Visa (we handle the application)', 'Return flight tickets', 'Travel insurance'],
    travelTips: ['Carry cash (Armenian Dram)', 'Try Armenian brandy — Churchill\'s favourite', 'Dress modestly at monasteries', 'English is limited outside Yerevan'],
    faqs: [
      { q: 'Do Indians need a visa for Armenia?', a: 'Indian passport holders need an Armenia e-Visa. We handle the complete application.' },
    ],
  }),
  makeDest({
    slug: 'uk', name: 'United Kingdom', country: 'United Kingdom', region: 'Europe',
    tagline: 'Royal Heritage', category: 'Cultural',
    hero: 'https://images.pexels.com/photos/16771428/pexels-photo-16771428.png?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/16771428/pexels-photo-16771428.png?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: ['https://images.pexels.com/photos/16771428/pexels-photo-16771428.png?auto=compress&cs=tinysrgb&h=600&w=800'],
    overview: 'The United Kingdom is a land of royal palaces, historic castles, charming countryside, and vibrant cities. From the iconic Big Ben and Tower of London to the mystical Stonehenge and the rugged beauty of the Scottish Highlands — the UK offers a journey through centuries of history and culture.',
    attractions: [
      { name: 'Big Ben & Westminster (London)', description: 'The iconic clock tower and the Houses of Parliament along the River Thames — symbols of London.' },
      { name: 'Tower of London', description: 'A historic castle housing the Crown Jewels, with 900 years of royal history.' },
      { name: 'Stonehenge', description: 'The mysterious prehistoric stone circle — a UNESCO World Heritage site dating back 5,000 years.' },
      { name: 'Edinburgh Castle', description: 'A historic fortress dominating the skyline of Scotland\'s capital city.' },
    ],
    seasons: [
      { period: 'May – September', description: 'The best time — warmer weather, longer daylight hours, and numerous festivals.' },
      { period: 'October – April', description: 'Cooler and wetter, but fewer crowds and lower prices. Christmas markets in December.' },
    ],
    experiences: ['London Eye and Thames cruise', 'Tower of London and Crown Jewels', 'Stonehenge and Bath day trip', 'Edinburgh Castle and Royal Mile', 'Scottish Highlands tour', 'Afternoon tea experience'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in London', description: 'Arrive in London. Evening: London Eye and Thames River cruise.' },
      { day: 'Day 2', title: 'London City Tour', description: 'Big Ben, Westminster Abbey, Tower of London, Tower Bridge, Buckingham Palace.' },
      { day: 'Day 3', title: 'Stonehenge & Bath', description: 'Day trip to Stonehenge and the Roman city of Bath.' },
      { day: 'Day 4', title: 'Edinburgh', description: 'Fly/train to Edinburgh. Castle, Royal Mile, Arthur\'s Seat.' },
      { day: 'Day 5', title: 'Highlands & Departure', description: 'Highlands day trip. Return to Edinburgh for departure.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'UK Standard Visitor Visa (we handle the application)', 'Return flight tickets', 'Travel insurance', 'Proof of funds'],
    travelTips: ['Carry an umbrella — rain is always possible', 'Use the Tube (London Underground) for transport', 'Afternoon tea is a must', 'Try fish and chips', 'Stand on the right on escalators'],
    faqs: [
      { q: 'Do Indians need a visa for the UK?', a: 'Yes, Indian passport holders need a UK Standard Visitor Visa. We handle the complete application including documentation.' },
    ],
  }),
  makeDest({
    slug: 'europe', name: 'Europe', country: 'European Union', region: 'Europe',
    tagline: 'The Grand Continent', category: 'Cultural',
    hero: 'https://images.pexels.com/photos/20411450/pexels-photo-20411450.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/20411450/pexels-photo-20411450.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: ['https://images.pexels.com/photos/20411450/pexels-photo-20411450.jpeg?auto=compress&cs=tinysrgb&h=600&w=800'],
    overview: 'Europe is a continent of endless discovery — from the romantic streets of Paris to the ancient ruins of Rome, from the Alpine peaks of Switzerland to the medieval charm of Prague. A single Schengen visa opens doors to 27 countries, each with its own language, cuisine, and heritage.',
    attractions: [
      { name: 'Eiffel Tower (Paris)', description: 'The symbol of Paris — an iron lattice tower offering panoramic views of the City of Light.' },
      { name: 'Colosseum (Rome)', description: 'The world\'s largest ancient amphitheatre — a marvel of Roman engineering and a UNESCO site.' },
      { name: 'Swiss Alps', description: 'Snow-capped peaks, pristine lakes, and charming mountain villages — accessible by scenic rail journeys.' },
      { name: 'Sagrada Familia (Barcelona)', description: 'Gaudí\'s masterpiece — a breathtaking basilica under construction for over 140 years.' },
    ],
    seasons: [
      { period: 'May – September', description: 'The best time — warm, long days, and perfect for sightseeing. Peak tourist season.' },
      { period: 'October – April', description: 'Fewer crowds, lower prices. Christmas markets in December. Ski season in the Alps.' },
    ],
    experiences: ['Eiffel Tower and Seine cruise in Paris', 'Colosseum and Vatican in Rome', 'Swiss Alps scenic train journey', 'Amsterdam canal cruise', 'Barcelona Sagrada Familia and Park Güell', 'Vienna classical music concert'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Paris', description: 'Arrive in Paris. Evening: Eiffel Tower and Seine River cruise.' },
      { day: 'Day 2', title: 'Paris Classics', description: 'Louvre Museum, Notre-Dame, Champs-Élysées, Arc de Triomphe.' },
      { day: 'Day 3', title: 'Switzerland', description: 'Fly to Zurich. Lucerne, Mt. Titlis, and scenic lake cruise.' },
      { day: 'Day 4', title: 'Rome', description: 'Fly to Rome. Colosseum, Roman Forum, Trevi Fountain, Pantheon.' },
      { day: 'Day 5', title: 'Vatican & Departure', description: 'Vatican Museums, Sistine Chapel, St. Peter\'s Basilica. Departure transfer.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Schengen Visa (we handle the application)', 'Return flight tickets', 'Travel insurance (minimum €30,000 coverage)', 'Proof of accommodation and funds'],
    travelTips: ['Carry comfortable walking shoes', 'Keep some cash (Euros) for small purchases', 'Learn a few words in the local language', 'Use trains for intercity travel', 'Be mindful of pickpockets in tourist areas'],
    faqs: [
      { q: 'Do I need a separate visa for each European country?', a: 'No. A Schengen Visa allows travel across 27 European countries. We handle the complete application.' },
      { q: 'What is the best time to visit Europe?', a: 'May to September offers the best weather. For fewer crowds, consider April–May or September–October.' },
    ],
  }),
  makeDest({
    slug: 'switzerland', name: 'Switzerland', country: 'Swiss Confederation', region: 'Europe',
    tagline: 'Alpine Splendour', category: 'Nature',
    hero: 'https://images.pexels.com/photos/27667695/pexels-photo-27667695.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/27667695/pexels-photo-27667695.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: ['https://images.pexels.com/photos/27667695/pexels-photo-27667695.jpeg?auto=compress&cs=tinysrgb&h=600&w=800'],
    overview: 'Switzerland is a land of breathtaking Alpine landscapes, pristine lakes, and charming cities. From the snow-capped peaks of the Jungfrau to the turquoise waters of Lake Lucerne, from the medieval streets of Bern to the cosmopolitan shores of Lake Geneva — Switzerland offers natural beauty and precision-crafted experiences.',
    attractions: [
      { name: 'Mt. Titlis', description: 'A 3,000-meter peak accessible by the world\'s first rotating cable car — with a cliff walk and ice cave.' },
      { name: 'Lake Lucerne', description: 'A stunning lake surrounded by mountains, best explored by paddle steamer cruise.' },
      { name: 'Jungfraujoch', description: 'The "Top of Europe" — a railway station at 3,454 meters with year-round snow and an ice palace.' },
      { name: 'Rhine Falls', description: 'Europe\'s largest waterfall, near Schaffhausen — a thundering natural spectacle.' },
    ],
    seasons: [
      { period: 'June – September', description: 'Best for hiking, lake cruises, and mountain visits. Warm and green.' },
      { period: 'December – March', description: 'Ski season — world-class resorts like Zermatt, St. Moritz, and Verbier.' },
    ],
    experiences: ['Mt. Titlis rotating cable car', 'Jungfraujoch ice palace', 'Lake Lucerne paddle steamer cruise', 'Swiss chocolate and cheese tasting', 'Glacier Express scenic train', 'Rhine Falls boat trip'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Zurich', description: 'Arrive in Zurich. Transfer to Lucerne. Evening lake walk.' },
      { day: 'Day 2', title: 'Mt. Titlis', description: 'Full day: Mt. Titlis rotating cable car, cliff walk, ice cave. Return to Lucerne.' },
      { day: 'Day 3', title: 'Interlaken & Jungfrau', description: 'Travel to Interlaken. Jungfraujoch — Top of Europe. Ice palace and snow park.' },
      { day: 'Day 4', title: 'Bern & Rhine Falls', description: 'Bern old town (UNESCO). Rhine Falls. Return to Zurich.' },
      { day: 'Day 5', title: 'Departure', description: 'Zurich city tour. Departure transfer.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Schengen Visa (we handle the application)', 'Return flight tickets', 'Travel insurance (minimum €30,000 coverage)'],
    travelTips: ['Carry warm clothes for mountain visits — even in summer', 'Get a Swiss Travel Pass for unlimited rail travel', 'Try fondue and raclette', 'Carry cash — Switzerland uses Swiss Francs (CHF)', 'Tap water is among the best in the world'],
    faqs: [
      { q: 'Does Switzerland require a separate visa?', a: 'No, Switzerland is part of the Schengen area. A Schengen Visa covers Switzerland.' },
    ],
  }),
  makeDest({
    slug: 'france', name: 'France', country: 'French Republic', region: 'Europe',
    tagline: 'The City of Light', category: 'Cultural',
    hero: 'https://images.pexels.com/photos/31482953/pexels-photo-31482953.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/31482953/pexels-photo-31482953.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: ['https://images.pexels.com/photos/31482953/pexels-photo-31482953.jpeg?auto=compress&cs=tinysrgb&h=600&w=800'],
    overview: 'France is the world\'s most visited country — and for good reason. Paris, the City of Light, enchants with the Eiffel Tower, the Louvre, and the Champs-Élysées. Beyond Paris, the French Riviera, the vineyards of Bordeaux, the lavender fields of Provence, and the châteaux of the Loire Valley offer endless discovery.',
    attractions: [
      { name: 'Eiffel Tower', description: 'The iconic symbol of Paris. Views from the top are breathtaking, especially at sunset.' },
      { name: 'The Louvre', description: 'The world\'s largest art museum, home to the Mona Lisa and 35,000 other works.' },
      { name: 'Palace of Versailles', description: 'A magnificent royal palace with stunning gardens — a symbol of French absolute monarchy.' },
      { name: 'French Riviera', description: 'The glamorous Côte d\'Azur — Nice, Cannes, Monaco — with Mediterranean beaches and luxury resorts.' },
    ],
    seasons: [
      { period: 'May – September', description: 'Best time — warm, long days. Paris in summer is magical. Riviera is ideal June–August.' },
      { period: 'October – April', description: 'Fewer crowds, lower prices. Christmas markets in Alsace. Skiing in the Alps.' },
    ],
    experiences: ['Eiffel Tower at sunset', 'Louvre Museum guided tour', 'Seine River dinner cruise', 'Versailles Palace and gardens', 'French Riviera beach day', 'Wine tasting in Bordeaux or Champagne'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Paris', description: 'Arrive in Paris. Evening: Eiffel Tower and Seine cruise.' },
      { day: 'Day 2', title: 'Paris Classics', description: 'Louvre, Notre-Dame, Montmartre, Sacré-Cœur, Champs-Élysées.' },
      { day: 'Day 3', title: 'Versailles', description: 'Full day at the Palace of Versailles and its gardens.' },
      { day: 'Day 4', title: 'Nice & Riviera', description: 'Fly to Nice. Promenade des Anglais, Old Town, Castle Hill view.' },
      { day: 'Day 5', title: 'Monaco & Departure', description: 'Day trip to Monaco. Return to Nice for departure.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Schengen Visa (we handle the application)', 'Return flight tickets', 'Travel insurance (minimum €30,000 coverage)'],
    travelTips: ['Learn a few French phrases — locals appreciate it', 'Carry Euros in cash for small purchases', 'Try croissants, crêpes, and French cheese', 'Use the Metro for Paris transport', 'Tipping is included in restaurant bills'],
    faqs: [
      { q: 'Is Paris safe for tourists?', a: 'Yes, Paris is generally safe. Be mindful of pickpockets in tourist areas and on the Metro.' },
    ],
  }),
  makeDest({
    slug: 'italy', name: 'Italy', country: 'Italian Republic', region: 'Europe',
    tagline: 'La Dolce Vita', category: 'Cultural',
    hero: 'https://images.pexels.com/photos/14836534/pexels-photo-14836534.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/14836534/pexels-photo-14836534.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: ['https://images.pexels.com/photos/14836534/pexels-photo-14836534.jpeg?auto=compress&cs=tinysrgb&h=600&w=800'],
    overview: 'Italy is a country that lives and breathes art, history, and culinary excellence. From the ancient ruins of Rome to the Renaissance masterpieces of Florence, from the romantic canals of Venice to the dramatic Amalfi Coast — Italy is a feast for every sense.',
    attractions: [
      { name: 'Colosseum (Rome)', description: 'The iconic ancient amphitheatre — a marvel of Roman engineering and a symbol of the eternal city.' },
      { name: 'Vatican City', description: 'The smallest country in the world, home to St. Peter\'s Basilica, the Sistine Chapel, and the Vatican Museums.' },
      { name: 'Florence Duomo', description: 'Brunelleschi\'s magnificent dome crowning the Cathedral of Santa Maria del Fiore — a Renaissance masterpiece.' },
      { name: 'Venice Canals', description: 'The romantic city of canals — gondola rides, St. Mark\'s Square, and the Rialto Bridge.' },
    ],
    seasons: [
      { period: 'April – June & September – October', description: 'Best times — mild weather, fewer crowds, and beautiful light.' },
      { period: 'July – August', description: 'Hot and crowded. Coastal areas are pleasant. Cities are busy.' },
    ],
    experiences: ['Colosseum and Vatican guided tour', 'Gondola ride in Venice', 'Uffizi Gallery in Florence', 'Amalfi Coast drive', 'Italian cooking class and wine tasting', 'Pisa and the Leaning Tower'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Rome', description: 'Arrive in Rome. Evening: Trevi Fountain and Spanish Steps.' },
      { day: 'Day 2', title: 'Rome Classics', description: 'Colosseum, Roman Forum, Palatine Hill, Pantheon.' },
      { day: 'Day 3', title: 'Vatican', description: 'Vatican Museums, Sistine Chapel, St. Peter\'s Basilica.' },
      { day: 'Day 4', title: 'Florence', description: 'Train to Florence. Duomo, Uffizi, Ponte Vecchio.' },
      { day: 'Day 5', title: 'Venice & Departure', description: 'Train to Venice. St. Mark\'s, gondola ride. Departure from Venice.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Schengen Visa (we handle the application)', 'Return flight tickets', 'Travel insurance (minimum €30,000 coverage)'],
    travelTips: ['Try authentic Italian pizza and pasta', 'Carry Euros for small purchases', 'Dress modestly for Vatican and churches', 'Use trains for intercity travel', 'Gelato is a daily must'],
    faqs: [
      { q: 'What is the best time to visit Italy?', a: 'April–June and September–October offer the best weather and fewer crowds. Summer is busy but lively.' },
    ],
  }),
  makeDest({
    slug: 'bali', name: 'Bali (Indonesia)', country: 'Indonesia', region: 'Asia',
    tagline: 'Island of the Gods', category: 'Beach',
    hero: 'https://images.pexels.com/photos/35738184/pexels-photo-35738184.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/35738184/pexels-photo-35738184.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: ['https://images.pexels.com/photos/35738184/pexels-photo-35738184.jpeg?auto=compress&cs=tinysrgb&h=600&w=800', 'https://images.pexels.com/photos/36810327/pexels-photo-36810327.jpeg?auto=compress&cs=tinysrgb&h=600&w=800'],
    overview: 'Bali, the "Island of the Gods," is a tropical paradise of lush rice terraces, ancient temples, volcanic mountains, and pristine beaches. From the cultural heart of Ubud to the beach clubs of Seminyak and the clifftop temples of Uluwatu — Bali offers a magical blend of spirituality, adventure, and relaxation.',
    attractions: [
      { name: 'Tegallalang Rice Terraces', description: 'Stunning emerald-green rice terraces near Ubud — a photographer\'s dream.' },
      { name: 'Uluwatu Temple', description: 'A dramatic sea temple perched on a cliff, famous for its sunset Kecak fire dance.' },
      { name: 'Mount Batur', description: 'An active volcano best climbed before dawn for a spectacular sunrise view.' },
      { name: 'Tanah Lot Temple', description: 'A iconic temple on a rock formation in the sea — stunning at sunset.' },
    ],
    seasons: [
      { period: 'April – October', description: 'Dry season — the best time. Sunny, warm, and ideal for all activities.' },
      { period: 'November – March', description: 'Wet season — afternoon showers, but lush landscapes and fewer crowds.' },
    ],
    experiences: ['Sunrise hike up Mount Batur', 'Rice terrace walk in Tegallalang', 'Uluwatu sunset and Kecak dance', 'Balinese spa and massage', 'Surfing in Kuta or Seminyak', 'Balinese cooking class'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Bali', description: 'Arrive in Denpasar. Transfer to hotel. Evening at Seminyak beach club.' },
      { day: 'Day 2', title: 'Ubud Cultural', description: 'Tegallalang rice terraces, monkey forest, Ubud market. Evening: traditional dance.' },
      { day: 'Day 3', title: 'Mount Batur Sunrise', description: 'Pre-dawn Mount Batur hike for sunrise. Afternoon: hot springs and coffee plantation.' },
      { day: 'Day 4', title: 'Temples & Beach', description: 'Tanah Lot and Uluwatu temples. Kecak fire dance at sunset.' },
      { day: 'Day 5', title: 'Departure', description: 'Morning spa and beach. Departure transfer.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Bali visa on arrival (we assist)', 'Return flight tickets', 'Travel insurance'],
    travelTips: ['Carry reef-safe sunscreen', 'Rent a scooter or use Grab', 'Try nasi goreng and satay', 'Dress modestly at temples — sarongs provided', 'Carry cash (Indonesian Rupiah)'],
    faqs: [
      { q: 'Do Indians need a visa for Bali?', a: 'Indian passport holders can get a Visa on Arrival (VOA) for Bali. We handle the arrangement.' },
    ],
  }),
  makeDest({
    slug: 'egypt', name: 'Egypt', country: 'Arab Republic of Egypt', region: 'Africa',
    tagline: 'Land of the Pharaohs', category: 'Cultural',
    hero: 'https://images.pexels.com/photos/33678760/pexels-photo-33678760.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/33678760/pexels-photo-33678760.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: ['https://images.pexels.com/photos/33678760/pexels-photo-33678760.jpeg?auto=compress&cs=tinysrgb&h=600&w=800'],
    overview: 'Egypt is a living museum of one of the world\'s greatest civilizations. The Pyramids of Giza, the Sphinx, the temples of Luxor and Karnak, and the treasures of Tutankhamun — Egypt offers a journey through 5,000 years of history, capped by a Nile cruise that follows the path of the pharaohs.',
    attractions: [
      { name: 'Pyramids of Giza', description: 'The last surviving wonder of the ancient world — the Great Pyramid has stood for 4,500 years.' },
      { name: 'The Sphinx', description: 'The colossal limestone statue with the body of a lion and the face of a pharaoh.' },
      { name: 'Egyptian Museum (Cairo)', description: 'Home to the world\'s largest collection of ancient Egyptian artifacts, including Tutankhamun\'s treasures.' },
      { name: 'Nile Cruise (Luxor to Aswan)', description: 'A journey along the Nile visiting the temples of Luxor, Karnak, Edfu, and Philae.' },
    ],
    seasons: [
      { period: 'October – April', description: 'The best time — cooler weather ideal for sightseeing. December–February are peak months.' },
      { period: 'May – September', description: 'Very hot. Lower prices, but outdoor sightseeing is challenging.' },
    ],
    experiences: ['Pyramids and Sphinx guided tour', 'Nile cruise from Luxor to Aswan', 'Egyptian Museum and King Tut\'s treasures', 'Sound and light show at the Pyramids', 'Hot air balloon over Luxor', 'Khan el-Khalili bazaar in Cairo'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Cairo', description: 'Arrive in Cairo. Evening: Sound and light show at the Pyramids.' },
      { day: 'Day 2', title: 'Pyramids & Museum', description: 'Pyramids of Giza, Sphinx, Egyptian Museum, Khan el-Khalili bazaar.' },
      { day: 'Day 3', title: 'Fly to Luxor', description: 'Fly to Luxor. Karnak Temple, Luxor Temple. Board Nile cruise.' },
      { day: 'Day 4', title: 'Nile Cruise', description: 'Valley of the Kings, Hatshepsut Temple, Colossi of Memnon. Sail to Edfu.' },
      { day: 'Day 5', title: 'Aswan & Departure', description: 'Edfu Temple, Philae Temple, Aswan High Dam. Fly to Cairo for departure.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Egypt visa on arrival or e-Visa (we assist)', 'Return flight tickets', 'Travel insurance'],
    travelTips: ['Carry modest clothing — Egypt is predominantly Muslim', 'Bargain at the bazaar', 'Carry cash (Egyptian Pounds)', 'Stay hydrated — carry water everywhere', 'Tipping (baksheesh) is customary'],
    faqs: [
      { q: 'Is Egypt safe for tourists?', a: 'Tourist areas and Nile cruises are generally safe and well-protected. We use trusted guides and secure transport.' },
    ],
  }),
  makeDest({
    slug: 'qatar', name: 'Qatar', country: 'State of Qatar', region: 'Middle East',
    tagline: 'The Pearl of the Gulf', category: 'Luxury',
    hero: 'https://images.pexels.com/photos/19748320/pexels-photo-19748320.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/19748320/pexels-photo-19748320.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: ['https://images.pexels.com/photos/19748320/pexels-photo-19748320.jpeg?auto=compress&cs=tinysrgb&h=600&w=800'],
    overview: 'Qatar is a gleaming peninsula nation where Arabian heritage meets modern luxury. Doha\'s futuristic skyline, the Museum of Islamic Art, the traditional Souq Waqif, and the desert dunes of Khor Al Adaid — Qatar offers a sophisticated blend of culture, luxury, and adventure.',
    attractions: [
      { name: 'Doha Corniche', description: 'A 7-km waterfront promenade offering stunning views of Doha\'s skyline and the Arabian Gulf.' },
      { name: 'Museum of Islamic Art', description: 'A world-class museum designed by I.M. Pei, housing Islamic art spanning 1,400 years.' },
      { name: 'Souq Waqif', description: 'A vibrant traditional market — spices, textiles, handicrafts, and authentic Qatari cuisine.' },
      { name: 'Khor Al Adaid (Inland Sea)', description: 'A UNESCO-recognized natural wonder — a tidal inlet where the sea meets the desert dunes.' },
    ],
    seasons: [
      { period: 'November – March', description: 'The best time — pleasant weather (20–25°C) ideal for sightseeing and desert trips.' },
      { period: 'April – October', description: 'Hot to extremely hot. Indoor attractions and air-conditioned venues.' },
    ],
    experiences: ['Dhow boat cruise on the Corniche', 'Desert safari and dune bashing', 'Khor Al Adaid (Inland Sea) tour', 'Souq Waqif shopping and dining', 'Museum of Islamic Art visit', 'Katara Cultural Village'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Doha', description: 'Arrive in Doha. Evening: Corniche walk and dhow cruise.' },
      { day: 'Day 2', title: 'Doha City Tour', description: 'Museum of Islamic Art, Souq Waqif, Katara Cultural Village, The Pearl-Qatar.' },
      { day: 'Day 3', title: 'Desert Adventure', description: 'Desert safari, dune bashing, and Khor Al Adaid (Inland Sea). Traditional Bedouin lunch.' },
      { day: 'Day 4', title: 'Departure', description: 'Morning shopping. Departure transfer.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Qatar visa on arrival or Hayya Entry (we assist)', 'Return flight tickets', 'Travel insurance'],
    travelTips: ['Dress modestly in public', 'Carry sunglasses and sunscreen', 'Try Qatari machboos', 'Use taxis or Uber for transport', 'Friday is a holy day — plan accordingly'],
    faqs: [
      { q: 'Do Indians need a visa for Qatar?', a: 'Indian passport holders can get a Qatar visa on arrival (conditions apply) or apply in advance. We handle all arrangements.' },
    ],
  }),
  makeDest({
    slug: 'oman', name: 'Oman', country: 'Sultanate of Oman', region: 'Middle East',
    tagline: 'The Jewel of Arabia', category: 'Cultural',
    hero: 'https://images.pexels.com/photos/27222917/pexels-photo-27222917.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    card: 'https://images.pexels.com/photos/27222917/pexels-photo-27222917.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    gallery: ['https://images.pexels.com/photos/27222917/pexels-photo-27222917.jpeg?auto=compress&cs=tinysrgb&h=600&w=800'],
    overview: 'Oman is the Middle East\'s best-kept secret — a land of dramatic mountains, pristine coastline, and rich Arabian heritage. Muscat\'s grand mosques, the forts of Nizwa, the fjords of Musandam, and the Wahiba Sands desert — Oman offers authentic Arabian beauty without the glitz.',
    attractions: [
      { name: 'Sultan Qaboos Grand Mosque', description: 'A masterpiece of Islamic architecture in Muscat, featuring one of the world\'s largest hand-woven carpets.' },
      { name: 'Mutrah Corniche & Souq', description: 'A beautiful waterfront promenade and the traditional Mutrah Souq — frankincense, silver, and spices.' },
      { name: 'Wahiba Sands', description: 'A vast desert of golden dunes — perfect for dune bashing and overnight camping under the stars.' },
      { name: 'Nizwa Fort', description: 'A 17th-century fort and UNESCO site — Oman\'s most visited national monument.' },
    ],
    seasons: [
      { period: 'October – April', description: 'The best time — pleasant weather ideal for sightseeing and desert camping.' },
      { period: 'May – September', description: 'Very hot. Salalah in the south is cooler during the khareef (monsoon) season.' },
    ],
    experiences: ['Sultan Qaboos Grand Mosque tour', 'Wahiba Sands desert camping', 'Wadi Shab swimming and hiking', 'Dolphin watching in Muscat', 'Nizwa fort and goat market', 'Frankincense trail in Dhofar'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Muscat', description: 'Arrive in Muscat. Evening: Mutrah Corniche and souq.' },
      { day: 'Day 2', title: 'Muscat City', description: 'Sultan Qaboos Grand Mosque, Royal Opera House, Al Alam Palace.' },
      { day: 'Day 3', title: 'Wahiba Sands', description: 'Travel to Wahiba Sands. Dune bashing and overnight desert camp.' },
      { day: 'Day 4', title: 'Nizwa & Departure', description: 'Nizwa Fort and souq. Return to Muscat for departure.' },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Oman e-Visa (we handle the application)', 'Return flight tickets', 'Travel insurance'],
    travelTips: ['Dress conservatively — Oman is traditional', 'Carry a jacket for evening desert camps', 'Try Omani halwa and dates', 'Photography permissions vary — ask first'],
    faqs: [
      { q: 'Do Indians need a visa for Oman?', a: 'Yes, Indian passport holders need an Oman e-Visa. We handle the complete application.' },
    ],
  }),
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export const featuredDestinations = destinations.filter((d) => d.featured);
export const worldwideDestinations = destinations.filter((d) => d.slug !== 'iraq');
