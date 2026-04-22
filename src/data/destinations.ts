export interface Destination {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  detailedDescription: string;
  location: string;
  bestTimeToVisit: string;
  activities: string[];
  cuisine: string[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Boracay",
    image: "boracay",
    shortDescription: "World-famous white sand beaches and crystal-clear waters",
    detailedDescription: "Boracay is a small island in the central Philippines known for its resorts and beaches. Along the west coast, White Beach is backed by palm trees, bars and restaurants. On the east coast, strong winds make Bulabog Beach a hub for water sports. Nearby, the observation deck on Mount Luho offers panoramic views over the island. Offshore, coral reefs and shipwrecks are home to diverse marine life.",
    location: "Malay, Aklan, Western Visayas",
    bestTimeToVisit: "November to May (dry season with calm seas and perfect beach weather)",
    activities: [
      "Island hopping to nearby Puka Beach and Crystal Cove",
      "Sunset sailing on traditional paraw boats",
      "Scuba diving and snorkeling at marine sanctuaries",
      "Beach sports and water activities (parasailing, jet skiing, kiteboarding)",
      "Nightlife at D'Mall and beachfront bars",
      "Spa treatments and wellness activities"
    ],
    cuisine: [
      "Fresh seafood grilled on the beach",
      "Chorizo (spicy local sausage)",
      "Chori Burger - a Boracay specialty",
      "Halo-Halo (shaved ice dessert)",
      "International fusion restaurants",
      "Fresh tropical fruits and smoothies"
    ]
  },
  {
    id: 2,
    name: "Palawan (El Nido)",
    image: "palawan",
    shortDescription: "Stunning limestone cliffs, hidden lagoons, and pristine beaches",
    detailedDescription: "El Nido in Palawan is an archipelago of about 45 islands and islets known for dramatic limestone cliffs, pristine white sand beaches, and crystal-clear turquoise waters. It's considered one of the most beautiful destinations in the Philippines and the world. The town serves as a gateway to the Bacuit Archipelago, offering island-hopping tours to stunning lagoons, secret beaches, and vibrant coral reefs.",
    location: "Northern Palawan, MIMAROPA Region",
    bestTimeToVisit: "December to March (dry season with calm seas, perfect for island hopping)",
    activities: [
      "Island hopping tours (Big Lagoon, Small Lagoon, Secret Lagoon)",
      "Kayaking through emerald lagoons and limestone formations",
      "Snorkeling and diving at coral gardens",
      "Beach camping on remote islands",
      "Rock climbing on limestone cliffs",
      "Sunset viewing at Las Cabanas Beach",
      "Exploring hidden beaches and caves"
    ],
    cuisine: [
      "Tamilok (woodworm delicacy)",
      "Fresh seafood platters",
      "Crocodile sisig",
      "Kinilaw (Filipino ceviche)",
      "Cashew products from local farms",
      "Tropical fruit shakes"
    ]
  },
  {
    id: 3,
    name: "Banaue Rice Terraces",
    image: "banaue",
    shortDescription: "Ancient 2,000-year-old rice terraces carved into mountains",
    detailedDescription: "The Banaue Rice Terraces, often called the 'Eighth Wonder of the World,' are 2,000-year-old terraces carved into the Ifugao mountains. Created by ancestors of the indigenous people using minimal equipment, these terraces follow the natural contours of the mountains. The rice terraces are still used today and demonstrate the Ifugao people's engineering ingenuity and harmony with nature. This UNESCO World Heritage site showcases ancient irrigation systems that have sustained communities for millennia.",
    location: "Banaue, Ifugao Province, Cordillera Administrative Region",
    bestTimeToVisit: "March to May (rice planting season) or September to October (harvest season) for lush green terraces",
    activities: [
      "Trekking to Batad Rice Terraces",
      "Hiking to Tappiya Falls",
      "Cultural tours of Ifugao villages",
      "Learning about traditional rice farming techniques",
      "Visiting the Banaue Museum",
      "Photography of sunrise over terraces",
      "Staying in traditional Ifugao houses"
    ],
    cuisine: [
      "Pinikpikan (traditional chicken dish)",
      "Etag (smoked pork)",
      "Tinawon rice (indigenous heirloom rice)",
      "Inalippit (rice cake with sesame)",
      "Organic vegetables from the terraces",
      "Tinubong (sticky rice in bamboo)"
    ]
  },
  {
    id: 4,
    name: "Chocolate Hills",
    image: "chocolate-hills",
    shortDescription: "Over 1,200 unique cone-shaped hills forming a natural wonder",
    detailedDescription: "The Chocolate Hills are a geological formation in Bohol consisting of at least 1,260 hills spread over an area of more than 50 square kilometers. The hills are covered in green grass that turns brown during the dry season, giving them a chocolate appearance - hence the name. These perfectly cone-shaped hills are a natural wonder and one of the Philippines' most iconic landscapes. Their origin remains a subject of scientific debate, adding to their mystique.",
    location: "Carmen, Bohol, Central Visayas",
    bestTimeToVisit: "February to May (dry season when hills turn brown and chocolate-colored)",
    activities: [
      "Viewing from Chocolate Hills Complex viewing deck",
      "ATV adventures around the hills",
      "Zip-lining across the landscape",
      "Tarsier watching at nearby sanctuaries",
      "Loboc River cruise",
      "Exploring nearby caves and underground rivers",
      "Biking tours through countryside"
    ],
    cuisine: [
      "Peanut kisses (local chocolate delicacy)",
      "Calamay (sticky rice cake)",
      "Fresh seafood from Bohol seas",
      "Sikwate (hot chocolate drink)",
      "Ube (purple yam) desserts",
      "Hanging rice (puso)"
    ]
  },
  {
    id: 5,
    name: "Mayon Volcano",
    image: "mayon",
    shortDescription: "Perfect cone-shaped active volcano with breathtaking symmetry",
    detailedDescription: "Mayon Volcano is an active stratovolcano in the Bicol region, renowned for its near-perfect conical shape. Standing at 2,463 meters, it's considered to have the world's most perfectly formed cone. The volcano is sacred to locals and features prominently in Filipino mythology. Despite being active with regular eruptions, the surrounding area is lush with vegetation, and adventurous travelers can trek partway up its slopes for spectacular views.",
    location: "Albay Province, Bicol Region",
    bestTimeToVisit: "October to March (clear skies for best views of the volcano)",
    activities: [
      "Viewing the volcano from Ligñon Hill",
      "ATV tours around the volcano base",
      "Hiking to Cagsawa Ruins with volcano backdrop",
      "Photography tours for perfect volcano shots",
      "Visiting Daraga Church for panoramic views",
      "Exploring lava trails and volcanic landscapes",
      "Bicol food tours"
    ],
    cuisine: [
      "Bicol Express (spicy pork in coconut milk)",
      "Laing (taro leaves in coconut cream)",
      "Pinangat (taro leaves wrapped parcels)",
      "Pili nuts and Pili tart",
      "Kinunot (stingray in coconut)",
      "Sili ice cream (chili pepper ice cream)"
    ]
  },
  {
    id: 6,
    name: "Vigan",
    image: "vigan",
    shortDescription: "Preserved Spanish colonial heritage town with cobblestone streets",
    detailedDescription: "Vigan is a UNESCO World Heritage City in Ilocos Sur, known for its well-preserved Spanish colonial and Asian architecture. The city's Mestizo District showcases hundreds of heritage houses and cobblestone streets that transport visitors back to the 18th century. Kalesa (horse-drawn carriages) still traverse the historic Calle Crisologo, making it one of the few Hispanic towns left in the Philippines. The city represents a unique fusion of Filipino, Chinese, and Spanish cultures.",
    location: "Vigan City, Ilocos Sur, Ilocos Region",
    bestTimeToVisit: "December to May (dry season, perfect for walking tours and outdoor exploration)",
    activities: [
      "Kalesa ride through Calle Crisologo",
      "Exploring heritage houses and museums",
      "Shopping for handwoven abel textiles",
      "Pottery making at Pagburnayan",
      "Visiting Bantay Bell Tower for city views",
      "Trying traditional Ilocano handicrafts",
      "Photography of colonial architecture",
      "Attending the Viva Vigan Festival (May)"
    ],
    cuisine: [
      "Empanada (orange-colored savory pastry)",
      "Bagnet (crispy deep-fried pork belly)",
      "Longganisa (Vigan sausage)",
      "Pinakbet (mixed vegetables with shrimp paste)",
      "Poqui-poqui (eggplant omelet)",
      "Royal Bibingka (rice cake)",
      "Sukang Iloko (sugar cane vinegar)"
    ]
  }
];
