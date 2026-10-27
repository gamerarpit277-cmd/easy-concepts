// Business facts below come from the institute's public Google Maps listing.
// Course details are demo placeholders to confirm with the institute.

export const site = {
  name: "Easy Concepts",
  nameHi: "ईजी कॉन्सेप्ट्स",
  tagline: "Concepts made easy. Results made certain.",
  category: "Education Center",
  rating: 5.0,
  reviewCount: 59,
  photoCount: 46,
  womenOwned: true,
  phoneDisplay: "+91 80932 14651",
  phoneHref: "tel:+918093214651",
  whatsapp: "918093214651",
  address: {
    line1: "Main, Matiyala Main Rd, Sukh Ram Park",
    line2: "Matiala, Delhi 110059",
    plusCode: "J28W+3P Delhi",
  },
  hours: "Open daily · Closes 9 PM",
  lat: 28.6151844,
  lng: 77.0467723,
  mapsUrl:
    "https://www.google.com/maps/place/Easy+Concepts/@28.6151844,77.0467723,17z/data=!4m6!3m5!1s0x390d05acfe77e045:0x142d75b20bfbd43!8m2!3d28.6151844!4d77.0467723",
  mapsEmbed: "https://www.google.com/maps?q=28.6151844,77.0467723&z=16&output=embed",
};

export const reviews = [
  {
    name: "Anamika Gupta",
    meta: "Parent",
    when: "a year ago",
    title: "Truly lives up to its name – concepts made easy!",
    text: "As parents, we are extremely satisfied with Easy Concepts. The coaching provides a structured and supportive learning environment.",
    reply: "We are elated to have lived upto your expectations, Ma'am! We strive for great results and making greater human beings.",
  },
  {
    name: "Rudra Singh",
    meta: "Student",
    when: "a year ago",
    text: "The best coaching in Matiala. Very affordable and highly qualified and very helpful tutors. They connect with the children deeply and understand their problems or clear their doubts actively. I recommend it for every child.",
    reply: "Thank You, Rudra for this glorious review. I'm sure this will help us connect to many more genius brains like you.",
  },
  {
    name: "Amit Kumar",
    meta: "Local Guide · 36 reviews",
    when: "2 years ago",
    text: "I recently visited this coaching center, and I couldn't be more impressed! The environment is welcoming, and the instructors are incredibly knowledgeable and supportive. They genuinely care about each student's progress.",
    reply: "One of our guiding lights. Thank You much, Sir!",
  },
];

export const highlights = [
  "The teacher and staff is very humble and gentle.",
  "Insightful and motivating ambience for students.",
  "Reasonable price and excellent dedication of teachers.",
];

export const reviewTags = [
  { label: "Experienced faculty", count: 9 },
  { label: "Tutorials", count: 3 },
  { label: "Supportive faculty", count: 3 },
  { label: "Dedication of teachers", count: 3 },
];

export const courses = [
  {
    slug: "foundation",
    level: "Classes 1 – 5",
    title: "Foundation Program",
    blurb: "Strong basics in reading, maths and EVS with patient, activity-led teaching that builds confidence early.",
    subjects: ["Mathematics", "English", "Hindi", "EVS"],
    img: "https://images.unsplash.com/photo-1572847748080-bac263fae977?auto=format&fit=crop&w=900&q=75",
  },
  {
    slug: "middle",
    level: "Classes 6 – 8",
    title: "Middle School Program",
    blurb: "Concept-first coaching in Maths and Science, regular practice sheets and doubt sessions after every chapter.",
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    img: "https://images.unsplash.com/photo-1664382953518-4a664ab8a8c9?auto=format&fit=crop&w=900&q=75",
  },
  {
    slug: "boards-10",
    level: "Classes 9 – 10",
    title: "Board Excellence (CBSE)",
    blurb: "Complete syllabus coverage, chapter tests, sample papers and board-pattern mock exams for a confident score.",
    subjects: ["Mathematics", "Science", "SST", "English"],
    img: "https://images.unsplash.com/photo-1587135991058-8816b028691f?auto=format&fit=crop&w=900&q=75",
  },
  {
    slug: "senior",
    level: "Classes 11 – 12",
    title: "Senior Secondary",
    blurb: "Focused batches for Science and Commerce streams with deep concept clarity and exam-oriented practice.",
    subjects: ["Physics", "Chemistry", "Maths", "Accounts", "Economics"],
    img: "https://images.unsplash.com/photo-1758685845902-acd5db1b532b?auto=format&fit=crop&w=900&q=75",
  },
];

export const pillars = [
  {
    title: "Experienced faculty",
    text: "The most-mentioned strength in our Google reviews — teachers who explain until it clicks.",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0v6m-6-9.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5",
  },
  {
    title: "Small, personal batches",
    text: "Every child is seen. Doubts are cleared actively, not left for later.",
    icon: "M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4.13a4 4 0 11-8 0 4 4 0 018 0zm6 2a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Affordable fees",
    text: "Parents call it “reasonable price” with “excellent dedication” — quality coaching within reach.",
    icon: "M12 8c-1.7 0-3 .9-3 2s1.3 2 3 2 3 .9 3 2-1.3 2-3 2m0-8c1.1 0 2.1.4 2.6 1M12 8V7m0 9v1m0-1c-1.1 0-2.1-.4-2.6-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Regular tests & feedback",
    text: "Weekly practice tests and parent updates so progress is visible, not guessed.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
];

export const faqs = [
  {
    q: "Which classes do you teach?",
    a: "We coach students from Class 1 to Class 12, with dedicated batches for CBSE board preparation in Classes 10 and 12.",
  },
  {
    q: "Can my child attend a demo class first?",
    a: "Yes. Call or WhatsApp us to book a free demo class — you can meet the teachers and see the classroom before enrolling.",
  },
  {
    q: "What are the timings?",
    a: "Batches run through the afternoon and evening; the centre is open until 9 PM. Exact batch timings are shared at enquiry.",
  },
  {
    q: "Where exactly are you located?",
    a: "On Matiyala Main Road, Sukh Ram Park, Matiala, Delhi 110059 (Plus code J28W+3P). Tap “Get directions” to open Google Maps.",
  },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
