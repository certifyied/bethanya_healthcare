export interface Product {
  id: string;
  name: string;
  price: string;
  category: "Oils" | "Herbs" | "Skincare";
  image: string;
  description: string;
  ingredients: string[];
  benefits: string[];
}

export const products: Product[] = [
  {
    id: "kumkumadi-oil",
    name: "Kumkumadi Tailam",
    price: "₹1,299",
    category: "Oils",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop",
    description: "Radiance-boosting face oil with saffron and 16 potent Ayurvedic herbs for luminous, youthful skin.",
    ingredients: ["Saffron", "Sandalwood", "Lotus", "Manjistha"],
    benefits: ["Brightens complexion", "Reduces dark spots", "Anti-aging", "Deep nourishment"],
  },
  {
    id: "ashwagandha-powder",
    name: "Ashwagandha Churna",
    price: "₹549",
    category: "Herbs",
    image: "https://images.unsplash.com/photo-1515694346937-94d85e39a29a?w=600&h=600&fit=crop",
    description: "Pure organic Ashwagandha root powder for stress relief, vitality, and balanced energy.",
    ingredients: ["Ashwagandha Root", "Wild-harvested"],
    benefits: ["Reduces stress", "Boosts immunity", "Improves sleep", "Enhances vitality"],
  },
  {
    id: "neem-face-wash",
    name: "Neem & Tulsi Face Wash",
    price: "₹399",
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop",
    description: "Gentle herbal cleanser with neem and tulsi extracts to purify and refresh your skin naturally.",
    ingredients: ["Neem Extract", "Tulsi", "Aloe Vera", "Turmeric"],
    benefits: ["Deep cleansing", "Anti-bacterial", "Controls oil", "Soothes skin"],
  },
  {
    id: "brahmi-oil",
    name: "Brahmi Hair Oil",
    price: "₹699",
    category: "Oils",
    image: "https://images.unsplash.com/photo-1600428877878-1a0ff561571c?w=600&h=600&fit=crop",
    description: "Traditional Brahmi-infused coconut oil to strengthen hair, reduce fall, and promote healthy growth.",
    ingredients: ["Brahmi", "Coconut Oil", "Amla", "Bhringraj"],
    benefits: ["Strengthens roots", "Reduces hair fall", "Promotes growth", "Calms the mind"],
  },
  {
    id: "triphala-powder",
    name: "Triphala Churna",
    price: "₹449",
    category: "Herbs",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=600&h=600&fit=crop",
    description: "A classical Ayurvedic blend of three fruits for digestive health and gentle detoxification.",
    ingredients: ["Amalaki", "Bibhitaki", "Haritaki"],
    benefits: ["Aids digestion", "Natural detox", "Rich in Vitamin C", "Balances doshas"],
  },
  {
    id: "turmeric-cream",
    name: "Haldi Glow Cream",
    price: "₹599",
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&h=600&fit=crop",
    description: "Luxurious turmeric and sandalwood cream that illuminates skin with an ancient golden glow.",
    ingredients: ["Turmeric", "Sandalwood", "Milk Protein", "Rose Water"],
    benefits: ["Golden glow", "Anti-inflammatory", "Moisturizing", "Even skin tone"],
  },
];
