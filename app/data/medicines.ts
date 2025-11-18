export interface Medicine {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  manufacturer: string;
  expiryDate: string;
  stock: number;
  originalPrice?: number;
  discount?: number;
}

export const medicines: Medicine[] = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    price: 25,
    category: "Pain Relief",
    description: "Paracetamol 500mg tablets for relief from fever and pain. Safe and effective pain relief medication.",
    manufacturer: "ABC Pharmaceuticals",
    expiryDate: "2026-12-31",
    stock: 50,
    originalPrice: 30,
    discount: 17,
  },
  {
    id: "2",
    name: "ORS Powder",
    price: 30,
    category: "Electrolytes",
    description: "Oral Rehydration Solution powder to prevent and treat dehydration. Essential for maintaining electrolyte balance.",
    manufacturer: "Health Plus",
    expiryDate: "2025-06-30",
    stock: 75,
    originalPrice: 35,
    discount: 14,
  },
  {
    id: "3",
    name: "Pain Relief Spray",
    price: 120,
    category: "Topical",
    description: "Fast-acting pain relief spray for muscle and joint pain. Provides instant cooling relief.",
    manufacturer: "Relief Pharma",
    expiryDate: "2026-03-15",
    stock: 30,
    originalPrice: 150,
    discount: 20,
  },
  {
    id: "4",
    name: "Bandages (Pack of 10)",
    price: 45,
    category: "First Aid",
    description: "Sterile adhesive bandages for wound care. Waterproof and breathable for quick healing.",
    manufacturer: "MediCare",
    expiryDate: "2027-12-31",
    stock: 100,
    originalPrice: 50,
    discount: 10,
  },
  {
    id: "5",
    name: "Cough Syrup 100ml",
    price: 85,
    category: "Cough & Cold",
    description: "Effective cough syrup for dry and wet cough. Provides relief from throat irritation and congestion.",
    manufacturer: "CureWell",
    expiryDate: "2025-09-20",
    stock: 40,
    originalPrice: 100,
    discount: 15,
  },
  {
    id: "6",
    name: "Antiseptic Cream",
    price: 55,
    category: "First Aid",
    description: "Antibacterial antiseptic cream for cuts, wounds, and skin infections. Promotes healing and prevents infection.",
    manufacturer: "SafeHeal",
    expiryDate: "2026-08-10",
    stock: 60,
    originalPrice: 65,
    discount: 15,
  },
  {
    id: "7",
    name: "Ibuprofen 400mg",
    price: 35,
    category: "Pain Relief",
    description: "Ibuprofen 400mg tablets for relief from inflammation, pain, and fever. Fast-acting anti-inflammatory medication.",
    manufacturer: "PainFree",
    expiryDate: "2026-05-25",
    stock: 55,
    originalPrice: 40,
    discount: 12,
  },
  {
    id: "8",
    name: "Antacid Tablets",
    price: 40,
    category: "Digestive",
    description: "Quick relief from acidity, heartburn, and indigestion. Provides instant comfort for stomach issues.",
    manufacturer: "DigestWell",
    expiryDate: "2025-11-30",
    stock: 80,
    originalPrice: 45,
    discount: 11,
  },
  {
    id: "9",
    name: "Vitamin D3",
    price: 150,
    category: "Supplements",
    description: "High-quality Vitamin D3 supplements for bone health and immune support. Essential for calcium absorption.",
    manufacturer: "VitaHealth",
    expiryDate: "2026-10-15",
    stock: 35,
    originalPrice: 180,
    discount: 17,
  },
  {
    id: "10",
    name: "Thermometer Digital",
    price: 200,
    category: "Medical Devices",
    description: "Accurate digital thermometer with fast reading. Waterproof and easy to use for temperature monitoring.",
    manufacturer: "MediTech",
    expiryDate: "2028-12-31",
    stock: 25,
    originalPrice: 250,
    discount: 20,
  },
];

export function getMedicineById(id: string): Medicine | undefined {
  return medicines.find(medicine => medicine.id === id);
}

