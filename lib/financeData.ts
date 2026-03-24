export const financeEmployee = {
  name: "Arjun Mehta",
  initials: "AM",
  role: "Finance Manager",
  company: "TechCorp",
  location: "Mumbai, India",
  experience: 6,
};

export const financeCompetencies = [
  { area: "Financial Reporting",    before: 45, after: 82 },
  { area: "Excel & SAP",            before: 50, after: 90 },
  { area: "Risk & Compliance",      before: 30, after: 76 },
  { area: "Budget & Forecasting",   before: 38, after: 80 },
  { area: "Stakeholder Comms",      before: 42, after: 78 },
  { area: "Leadership",             before: 35, after: 74 },
];

export const financeScore = {
  before: 402,
  after: 738,
  delta: 336,
};

export const financeTimeline = [
  { month: "Month 1", score: 402 },
  { month: "Month 2", score: 478 },
  { month: "Month 3", score: 545 },
  { month: "Month 4", score: 610 },
  { month: "Month 5", score: 680 },
  { month: "Month 6", score: 738 },
];

export const financeStats = {
  certifications: ["CFA Level 1", "SAP FI Certified"],
  coursesCompleted: 8,
  learningHours: 52,
  assessmentsTaken: 4,
  avgAssessmentScore: 78,
  activeStreak: 24,
};

export const financeAssessments = [
  { name: "Finance Basics",   score: 62, month: "Month 1", color: "#f59e0b" },
  { name: "SAP FI Module",    score: 70, month: "Month 2", color: "#f97316" },
  { name: "Risk & Audit",     score: 76, month: "Month 4", color: "#16a34a" },
  { name: "Final Review",     score: 84, month: "Month 6", color: "#2dcc70" },
];

export const financePages = [
  { id: 1, title: "Before Aaptor",         path: "/finance/page1" },
  { id: 2, title: "Assessment",            path: "/finance/page2" },
  { id: 3, title: "Aaptor Score",          path: "/finance/page3" },
  { id: 4, title: "Learning Path",         path: "/finance/page4" },
  { id: 5, title: "Integrations",          path: "/finance/page5" },
  { id: 6, title: "After Aaptor",          path: "/finance/page6" },
  { id: 7, title: "Performance Dashboard", path: "/finance/page7" },
  { id: 8, title: "Role Match",            path: "/finance/page8" },
];

export const financeMatchedCandidates = [
  { name: "Arjun Mehta",    role: "Finance Manager",      score: 738, match: 94, skills: ["SAP FI", "Reporting", "Forecasting"], initials: "AM", isYou: true  },
  { name: "Kavya Iyer",     role: "Sr. Finance Analyst",  score: 812, match: 92, skills: ["CFA", "Risk Mgmt", "SAP FI"],         initials: "KI", isYou: false },
  { name: "Rohan Desai",    role: "FP&A Lead",            score: 774, match: 89, skills: ["Forecasting", "Excel", "Reporting"],  initials: "RD", isYou: false },
  { name: "Sneha Pillai",   role: "Finance Controller",   score: 751, match: 86, skills: ["Compliance", "SAP FI", "Audit"],      initials: "SP", isYou: false },
  { name: "Vikram Nair",    role: "Risk Analyst",         score: 718, match: 83, skills: ["Risk Mgmt", "Compliance", "Excel"],   initials: "VN", isYou: false },
];
