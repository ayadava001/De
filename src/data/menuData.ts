export const menuData = [
  {
    id: 1,
    name: "Truffle Wagyu Burger",
    price: 45,
    category: "Main Course",
    description: "Premium Wagyu beef, black truffle aioli, aged cheddar, and caramelized onions on a brioche bun.",
    image: "https://picsum.photos/seed/burger/400/300",
    rating: 4.9,
    spiceLevel: 1,
    type: "Non-Veg"
  },
  {
    id: 2,
    name: "Golden Lobster Tail",
    price: 85,
    category: "Main Course",
    description: "Butter-poached Atlantic lobster tail with saffron risotto and edible gold leaf garnish.",
    image: "https://picsum.photos/seed/lobster/400/300",
    rating: 5.0,
    spiceLevel: 0,
    type: "Non-Veg"
  },
  {
    id: 3,
    name: "Wild Mushroom Arancini",
    price: 18,
    category: "Starters",
    description: "Crispy risotto balls stuffed with wild mushrooms and mozzarella, served with truffle dip.",
    image: "https://picsum.photos/seed/arancini/400/300",
    rating: 4.7,
    spiceLevel: 0,
    type: "Veg"
  },
  {
    id: 4,
    name: "Spicy Tuna Tartare",
    price: 24,
    category: "Starters",
    description: "Fresh Ahi tuna, avocado, cucumber, and spicy sriracha-soy dressing with sesame crisps.",
    image: "https://picsum.photos/seed/tuna/400/300",
    rating: 4.8,
    spiceLevel: 3,
    type: "Non-Veg"
  },
  {
    id: 5,
    name: "Velvet Chocolate Dome",
    price: 16,
    category: "Desserts",
    description: "Dark chocolate shell, raspberry coulis, and hazelnut praline mousse.",
    image: "https://picsum.photos/seed/dessert/400/300",
    rating: 4.9,
    spiceLevel: 0,
    type: "Veg"
  },
  {
    id: 6,
    name: "Saffron Pistachio Kulfi",
    price: 14,
    category: "Desserts",
    description: "Traditional Indian frozen dessert with premium saffron and crushed pistachios.",
    image: "https://picsum.photos/seed/kulfi/400/300",
    rating: 4.6,
    spiceLevel: 0,
    type: "Veg"
  },
  {
    id: 7,
    name: "Smoked Old Fashioned",
    price: 22,
    category: "Beverages",
    description: "Premium bourbon, maple syrup, bitters, smoked with cherry wood chips.",
    image: "https://picsum.photos/seed/cocktail/400/300",
    rating: 4.9,
    spiceLevel: 0,
    type: "Vegan"
  },
  {
    id: 8,
    name: "Sparkling Gold Elixir",
    price: 12,
    category: "Beverages",
    description: "Non-alcoholic sparkling white grape juice with edible gold flakes and elderflower.",
    image: "https://picsum.photos/seed/drink/400/300",
    rating: 4.5,
    spiceLevel: 0,
    type: "Vegan"
  }
];

export const pricingTiers = [
  {
    id: "silver",
    name: "Silver Package",
    price: 299,
    guests: 20,
    courses: 3,
    features: ["Standard Menu Selection", "Soft Drinks Included", "2 Servers", "Basic Table Setup"],
    color: "slate"
  },
  {
    id: "gold",
    name: "Gold Package",
    price: 599,
    guests: 50,
    courses: 5,
    features: ["Premium Menu Selection", "Wine Pairing", "4 Servers", "Elegant Decor", "Live Music Option"],
    color: "gold",
    popular: true
  },
  {
    id: "diamond",
    name: "Diamond Package",
    price: 999,
    guests: 100,
    courses: 7,
    features: ["Chef's Signature Menu", "Full Open Bar", "Private Chef On-site", "VIP Lounge Access", "Customized Theme"],
    color: "cyan"
  }
];
