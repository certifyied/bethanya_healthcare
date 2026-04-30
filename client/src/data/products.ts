export interface Product {
  id: string;
  name: string;
  price: string;
  category:
  | "Oils"
  | "Herbs"
  | "Skincare"
  | "Foods"
  | "Wellness";
  image: string;
  description: string;
  ingredients: string[];
  benefits: string[];
}

export const products: Product[] = [
  {
    id: "coco-ginger-sarbat",
    name: "Coco Ginger Sarbat",
    price: "₹249",
    category: "Foods",
    image: "/images/products/coco-ginger-sarbat.jpg",
    description: "Traditional refreshing herbal sarbat.",
    ingredients: ["Coconut", "Ginger"],
    benefits: ["Refreshing", "Cooling", "Digestive support"],
  },

  {
    id: "virgin-oil",
    name: "Virgin Oil",
    price: "₹499",
    category: "Oils",
    image: "/images/products/virgin-oil.jpg",
    description: "Pure traditional virgin oil.",
    ingredients: ["Natural Oil Extract"],
    benefits: ["Nourishment", "Wellness support", "Multipurpose use"],
  },

  {
    id: "hair-oil",
    name: "Hair Oil",
    price: "₹599",
    category: "Oils",
    image: "/images/products/hair-oil.jpg",
    description: "Traditional herbal hair oil.",
    ingredients: ["Herbal Infusion"],
    benefits: ["Hair nourishment", "Strengthens roots", "Scalp care"],
  },

  {
    id: "karunochi-rice-powder",
    name: "Karunochi Rice Powder",
    price: "₹299",
    category: "Foods",
    image: "/images/products/karunochi-rice-powder.jpg",
    description: "Traditional nutritious rice powder.",
    ingredients: ["Karunochi Rice"],
    benefits: ["Nutrition", "Energy support", "Digestive wellness"],
  },

  {
    id: "kudangal-rice-powder",
    name: "Kudangal Rice Powder",
    price: "₹299",
    category: "Foods",
    image: "/images/products/kudangal-rice-powder.jpg",
    description: "Wholesome traditional rice powder.",
    ingredients: ["Kudangal Rice"],
    benefits: ["Natural nourishment", "Healthy grains", "Energy support"],
  },

  {
    id: "ragi-powder",
    name: "Ragi Powder",
    price: "₹249",
    category: "Foods",
    image: "/images/products/ragi-powder.jpg",
    description: "Traditional ragi nutrition powder.",
    ingredients: ["Ragi"],
    benefits: ["Calcium rich", "High fiber", "Energy support"],
  },

  {
    id: "sirijeevana",
    name: "Sirijeevana",
    price: "₹399",
    category: "Wellness",
    image: "/images/products/sirijeevana.jpg",
    description: "Traditional Ayurvedic wellness preparation.",
    ingredients: ["Herbal Blend"],
    benefits: ["Vitality", "Balance", "Wellness support"],
  },

  {
    id: "millets",
    name: "Millets",
    price: "₹299",
    category: "Foods",
    image: "/images/products/millets.jpg",
    description: "Nutritious traditional millets.",
    ingredients: ["Millets"],
    benefits: ["Fiber rich", "Healthy nutrition", "Sustained energy"],
  },

  {
    id: "ragi-flakes",
    name: "Ragi Flakes",
    price: "₹199",
    category: "Foods",
    image: "/images/products/ragi-flakes.jpg",
    description: "Healthy ragi flakes for daily nourishment.",
    ingredients: ["Ragi"],
    benefits: ["Quick nutrition", "Fiber rich", "Energy support"],
  },

  {
    id: "bajra-powder",
    name: "Bajra Powder",
    price: "₹249",
    category: "Foods",
    image: "/images/products/bajra-powder.jpg",
    description: "Traditional bajra nutrition powder.",
    ingredients: ["Bajra"],
    benefits: ["Healthy grains", "Iron rich", "Digestive support"],
  },

  {
    id: "jower-powder",
    name: "Jower Powder",
    price: "₹249",
    category: "Foods",
    image: "/images/products/jower-powder.jpg",
    description: "Traditional jower flour powder.",
    ingredients: ["Jower"],
    benefits: ["Natural nutrition", "Fiber rich", "Energy support"],
  },

  {
    id: "kajal",
    name: "Kajal",
    price: "₹199",
    category: "Skincare",
    image: "/images/products/kajal.jpg",
    description: "Traditional Ayurvedic kajal.",
    ingredients: ["Herbal Blend"],
    benefits: ["Eye care", "Natural beauty", "Cooling effect"],
  },
  {
    id: "lip-balm",
    name: "Lip Balm",
    price: "₹149",
    category: "Skincare",
    image: "/images/products/lip-balm.jpg",
    description: "Natural nourishing lip balm for soft and hydrated lips.",
    ingredients: ["Herbal Extracts", "Natural Oils"],
    benefits: ["Moisturizes lips", "Prevents dryness", "Softens lips"],
  },

  {
    id: "soap",
    name: "Herbal Soap",
    price: "₹129",
    category: "Skincare",
    image: "/images/products/soap.jpg",
    description: "Traditional herbal soap for gentle natural cleansing.",
    ingredients: ["Herbal Blend", "Natural Oils"],
    benefits: ["Cleanses skin", "Gentle care", "Natural freshness"],
  },

  {
    id: "face-wash",
    name: "Face Wash",
    price: "₹249",
    category: "Skincare",
    image: "/images/products/face-wash.jpg",
    description: "Herbal face wash for refreshing and purifying skin care.",
    ingredients: ["Herbal Extracts", "Aloe Vera"],
    benefits: ["Deep cleansing", "Refreshes skin", "Supports healthy glow"],
  },
];
