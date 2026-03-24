export const salesEmployee = {
  name: "Neha Kapoor",
  initials: "NK",
  role: "Sales Executive",
  company: "TechCorp",
  location: "Pune, India",
  experience: 3,
};

export const salesCompetencies = [
  { area: "Product Knowledge",          before: 48, after: 85 },
  { area: "Negotiation & Closing",      before: 35, after: 80 },
  { area: "CRM Proficiency",            before: 40, after: 88 },
  { area: "Communication & Presentation", before: 52, after: 86 },
  { area: "Objection Handling",         before: 30, after: 78 },
  { area: "Pipeline Management",        before: 38, after: 84 },
];

export const salesScore = {
  before: 374,
  after: 726,
  delta: 352,
};

export const salesTimeline = [
  { month: "Month 1", score: 374 },
  { month: "Month 2", score: 442 },
  { month: "Month 3", score: 510 },
  { month: "Month 4", score: 585 },
  { month: "Month 5", score: 655 },
  { month: "Month 6", score: 726 },
];

export const salesStats = {
  certifications: ["Salesforce Certified", "HubSpot Sales Certified"],
  coursesCompleted: 7,
  learningHours: 44,
  assessmentsTaken: 4,
  avgAssessmentScore: 76,
  activeStreak: 19,
};

export const salesAssessments = [
  { name: "Sales Basics",     score: 58, month: "Month 1", color: "#f59e0b" },
  { name: "CRM Module",       score: 66, month: "Month 2", color: "#f97316" },
  { name: "Negotiation Test", score: 74, month: "Month 4", color: "#16a34a" },
  { name: "Final Review",     score: 82, month: "Month 6", color: "#2dcc70" },
];

export const salesPages = [
  { id: 1, title: "Before Aaptor",         path: "/sales/page1" },
  { id: 2, title: "Assessment",            path: "/sales/page2" },
  { id: 3, title: "Aaptor Score",          path: "/sales/page3" },
  { id: 4, title: "Learning Path",         path: "/sales/page4" },
  { id: 5, title: "Integrations",          path: "/sales/page5" },
  { id: 6, title: "After Aaptor",          path: "/sales/page6" },
  { id: 7, title: "Performance Dashboard", path: "/sales/page7" },
  { id: 8, title: "Role Match",            path: "/sales/page8" },
];

export const salesMatchedCandidates = [
  { name: "Neha Kapoor",    role: "Sales Executive",      score: 726, match: 93, skills: ["Salesforce", "Negotiation", "CRM"],      initials: "NK", isYou: true  },
  { name: "Aditya Sharma",  role: "Sr. Sales Executive",  score: 798, match: 91, skills: ["HubSpot", "Pipeline Mgmt", "Closing"],   initials: "AS", isYou: false },
  { name: "Priya Joshi",    role: "Account Manager",      score: 762, match: 88, skills: ["CRM", "Presentation", "Negotiation"],    initials: "PJ", isYou: false },
  { name: "Rahul Verma",    role: "Business Dev Rep",     score: 734, match: 85, skills: ["Product Knowledge", "Closing", "CRM"],   initials: "RV", isYou: false },
  { name: "Meera Singh",    role: "Sales Analyst",        score: 701, match: 82, skills: ["Pipeline Mgmt", "Salesforce", "Excel"],  initials: "MS", isYou: false },
];
