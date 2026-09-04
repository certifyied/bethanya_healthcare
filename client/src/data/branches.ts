export interface BranchServiceGroup {
  category: string;
  items: string[];
}

export interface BranchData {
  id: "kattanam" | "thonnakkad" | "varkala";
  name: string;
  displayName: string;
  tagline: string;
  branchType: string;
  status: "open" | "opening_soon";
  statusBadge: string;
  image: string;
  galleryImages: string[];
  description: string[];
  features: string[];
  address: string;
  phone1: string;
  phone2?: string;
  email: string;
  timings: string;
  services: BranchServiceGroup[];
  locationNote?: string;
}

export const branchesData: Record<string, BranchData> = {
  kattanam: {
    id: "kattanam",
    name: "Kattanam",
    displayName: "Bethanya Ayurveda Hospital",
    tagline: "Peaceful village wellness & comprehensive hospital care",
    branchType: "Hospital & Inpatient Care Centre",
    status: "open",
    statusBadge: "Open & Welcoming Patients",
    image: "/images/Gemini_Generated_Image_1ts4f01ts4f01ts4.webp",
    galleryImages: [
      "/images/Gemini_Generated_Image_1ts4f01ts4f01ts4.webp",
      "/images/8CA5csIHslwV3sQ_pzp-VJomeg6dSWfeoxJbRqYh3f6.webp",
      "/images/DFp7i7MyG3HOnmFWul7p.webp",
      "/images/VA9zLVQfBMMJty.webp",
    ],
    description: [
      "Nestled in the serene landscapes of Kattanam, Alappuzha, Bethanya Ayurveda Hospital is a full-fledged healthcare sanctuary dedicated to classical Ayurvedic healing and rejuvenating wellness therapies.",
      "Under the visionary leadership of our chief medical directors, we offer personalized inpatient and outpatient clinical treatments, classical Panchakarma detoxifications, and rejuvenating wellness therapies administered by experienced therapists.",
      "Surrounded by lush greenery and natural calmness, patients enjoy a restful environment conducive to holistic recovery, lifestyle rehabilitation, and physical revival."
    ],
    features: [
      "Full-fledged Inpatient & Outpatient Care",
      "Traditional Panchakarma Theatres",
      "Qualified Senior Ayurvedic Physicians",
      "Authentic Herbal Medicine Dispensary",
      "Steam Baths, Medicated Baths & Shirodhara Suites",
      "Customized Ayurvedic Dietary Plans",
    ],
    address:
      "BETHANYA AYURVEDA HOSPITAL, Santhome Building, Near Pope Pius H.S School, Kattanam, Alappuzha District, Kerala - 690503",
    phone1: "+91 89217 99597",
    phone2: "+91 88671 27954",
    email: "bethanyahealthcare@gmail.com",
    timings: "Monday – Sunday: 8:00 AM – 7:00 PM",
    services: [
      {
        category: "Combo Packs",
        items: [
          "Abhyangam & Steam bath",
          "Udwarthanam & Steam bath",
          "Abhyanga & Shirodhara",
          "Local Massage & Local Podikizhi",
          "Back massage, Local podikizhi & Kativasti/Lepanam",
          "Abhyangam & Podikizhi",
        ],
      },
      {
        category: "Spa Massage",
        items: [
          "Rejuvenation therapy",
          "Body spa (Massage and scrub)",
          "Body massage + Scrub + Pack",
        ],
      },
      {
        category: "Special Treatments",
        items: [
          "Shirodhara",
          "Udwarthanam",
          "Podikizhi",
          "Elakizhi",
          "Naranga kizhi",
          "Njavarakizhi",
          "Pizhichil",
          "Kativasti",
          "Greevavasthi",
          "Januvasthi",
          "Meruvasthi",
          "Kati pitchu",
          "Takradhara",
          "Ksheera dhara",
          "Kashaya dhara",
          "Dhanyamla dhara",
          "Tharpanam",
          "Karnapooranam",
          "Shirovasthi",
          "Nasyam",
        ],
      },
      {
        category: "Ayurvedic Massage",
        items: [
          "Abhyangam",
          "Aroma therapy",
          "Deep tissue massage",
          "Marma massage",
          "Head massage",
          "Face massage",
          "Foot massage",
          "Back massage",
          "Neck and Shoulder massage",
          "Neck and back massage",
          "Head Neck and back massage",
        ],
      },
    ],
    locationNote: "Conveniently located near Pope Pius H.S School, easily accessible with ample parking.",
  },

  thonnakkad: {
    id: "thonnakkad",
    name: "Thonnakkad",
    displayName: "Bethanya Ayurveda Thonnakkad",
    tagline: "Tradition meets healing & classical clinical wellness",
    branchType: "Ayurvedic Healthcare Clinic",
    status: "open",
    statusBadge: "Open & Welcoming Patients",
    image: "/images/Gemini_Generated_Image_plmpgplmpgplmpgp.webp",
    galleryImages: [
      "/images/Gemini_Generated_Image_plmpgplmpgplmpgp.webp",
      "/images/Zcu9vir12SYeuV3V7vuPCWLb3E9DG-BpT.webp",
      "/images/8CA5csIHslwV3sQ_pzp-VJomeg6dSWfeoxJbRqYh3f6.webp",
    ],
    description: [
      "Located at our registered headquarters in Thonnakkad along the Chengannur–Mavelikkara Road, this branch represents the heritage cornerstone of Bethanya Healthcare Pvt. Ltd.",
      "Offering dedicated clinical consultations and traditional therapeutic procedures, our Thonnakkad clinic delivers genuine Ayurvedic solutions for chronic ailments, lifestyle disorders, and wellness rejuvenation.",
      "Here, ancient herbal remedies and patient-centric care combine to provide natural health management for families and visitors seeking genuine, time-tested healing."
    ],
    features: [
      "Expert Physician Consultations",
      "Authentic Therapy Chambers",
      "Classical Herbal Medicines & Products",
      "Targeted Pain Relief & Spine Care",
      "Rejuvenating Body & Head Massages",
      "Accessible Highway Location",
    ],
    address:
      'Regd. Office: X/498, "REHOBOTH", Valuparampil Puthen Veedu, Thonnakkad, Chengannur–Mavelikkara Road, Near Thonnakkad Church, Chengannur, Kerala – 689511',
    phone1: "+91 89217 99597",
    phone2: "+91 88671 27954",
    email: "bethanyahealthcare@gmail.com",
    timings: "Monday – Saturday: 8:30 AM – 6:30 PM",
    services: [
      {
        category: "Combo Packs",
        items: [
          "Abhyangam & Steam bath",
          "Abhyanga & Shirodhara",
        ],
      },
      {
        category: "Spa Massage",
        items: [
          "Rejuvenation therapy",
        ],
      },
      {
        category: "Special Treatments",
        items: [
          "Shirodhara",
          "Podikizhi",
          "Kativasti",
          "Greevavasthi",
        ],
      },
      {
        category: "Ayurvedic Massage",
        items: [
          "Abhyangam",
          "Head massage",
          "Neck and Shoulder massage",
          "Foot massage",
        ],
      },
    ],
    locationNote: "Situated on Chengannur–Mavelikkara Road near Thonnakkad Church.",
  },

  varkala: {
    id: "varkala",
    name: "Varkala",
    displayName: "Bethanya Ayurveda Varkala",
    tagline: "Cliffside serenity & ocean breeze healing sanctuary",
    branchType: "Beachside Wellness Sanctuary & Retreat",
    status: "opening_soon",
    statusBadge: "Opening Soon",
    image: "/images/Gemini_Generated_Image_8121581215812158 (1).webp",
    galleryImages: [
      "/images/Gemini_Generated_Image_8121581215812158 (1).webp",
      "/images/Hero2.webp",
      "/images/Hero3.webp",
      "/images/DFp7i7MyG3HOnmFWul7p.webp",
    ],
    description: [
      "Perched along the stunning North Cliff of Varkala overlooking the Arabian Sea, our upcoming wellness sanctuary brings the restorative wisdom of Kerala Ayurveda to the world's most sought-after coastline.",
      "Bethanya Ayurveda Varkala will combine ocean breeze relaxation with personalized detox regimens, seaside yoga, Shirodhara therapies, and bespoke herbal wellness packages designed for global travellers and wellness seekers.",
      "Opening soon to welcome guests seeking deep sensory rejuvenation, mind-body balance, and peaceful cliffside tranquility."
    ],
    features: [
      "Cliffside Ocean View Therapy Rooms",
      "Sunrise & Sunset Yoga Sessions",
      "Express & Extended Rejuvenation Programs",
      "Holistic Stress-Relief & Detox Packages",
      "Herbal Tea Lounge & Relaxation Garden",
      "Special Opening Wellness Privileges",
    ],
    address:
      "BETHANYA AYURVEDA VARKALA, Kshetra Street, North Cliff, Varkala, Kerala - 695141",
    phone1: "+91 88671 27954",
    phone2: "+91 89217 99597",
    email: "bethanyahealthcare@gmail.com",
    timings: "Opening Soon (Pre-Booking Enquiries Active)",
    services: [
      {
        category: "Upcoming Coastal Packages",
        items: [
          "Ocean Breeze Abhyangam & Steam Therapy",
          "Cliffside Shirodhara & Stress Release",
          "Holistic Sea-Salt & Herbal Body Scrub",
          "Sunset Marma Rejuvenation Therapy",
          "Ayurvedic Deep Tissue & Herbal Compress",
          "Weekend Detox & Panchakarma Retreatment",
        ],
      },
    ],
    locationNote: "Located right on Kshetra Street, North Cliff, Varkala, steps away from the scenic ocean promenade.",
  },
};
