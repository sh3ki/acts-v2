export interface CollegeProgram {
  abbreviation: string;
  name: string;
  description: string;
  focusAreas: string[];
  pathways: string[];
}

export interface SeniorHighStrand {
  abbreviation: "ABM" | "ICT" | "STEM" | "HUMSS";
  name: string;
  description: string;
}

export const collegePrograms: CollegeProgram[] = [
  {
    abbreviation: "BSCS",
    name: "BS in Computer Science",
    description:
      "Focuses on computing theories, algorithm design, and developing complex software systems.",
    focusAreas: ["Computing theory", "Algorithms", "Software development"],
    pathways: ["Software development", "Further computing study"],
  },
  {
    abbreviation: "BSIT",
    name: "BS in Information Technology",
    description:
      "Focuses on the practical application of IT systems to meet organizational needs.",
    focusAreas: ["IT systems", "Infrastructure", "Organizational technology"],
    pathways: ["IT support", "Systems operations"],
  },
  {
    abbreviation: "BTVTEd",
    name: "Bachelor of Technical-Vocational Teacher Education",
    description:
      "Prepares future teachers to educate students in technical and vocational fields effectively.",
    focusAreas: ["Teacher education", "Technical and vocational education"],
    pathways: ["Technical-vocational teaching", "Education"],
  },
  {
    abbreviation: "BSBA",
    name: "BS in Business Administration",
    description:
      "Prepares students to manage human resources in diverse organizational settings.",
    focusAreas: ["Business management", "Human resource management"],
    pathways: ["Business operations", "Management"],
  },
  {
    abbreviation: "BSAIS",
    name: "BS in Accounting Information System",
    description:
      "Trains students in accounting, business, and computer systems for a tech-driven finance career.",
    focusAreas: ["Accounting", "Business", "Computer systems"],
    pathways: ["Accounting systems", "Business processes"],
  },
  {
    abbreviation: "BSEntrep",
    name: "BS in Entrepreneurship",
    description:
      "Develops skills to start, run, and sustain innovative enterprises.",
    focusAreas: ["Entrepreneurship", "Business development"],
    pathways: ["Venture development", "Small business"],
  },
  {
    abbreviation: "BSOA",
    name: "BS in Office Administration",
    description:
      "Prepares students for administrative roles in legal, medical, and corporate settings.",
    focusAreas: ["Office operations", "Business communication", "Administration"],
    pathways: ["Administrative support", "Office operations"],
  },
];

export const seniorHighStrands: SeniorHighStrand[] = [
  {
    abbreviation: "ABM",
    name: "Accountancy, Business and Management",
    description: "An academic strand for students interested in business and entrepreneurship.",
  },
  {
    abbreviation: "ICT",
    name: "Information and Communications Technology",
    description:
      "Covers computer programming, hardware and software installation, basic networking, and troubleshooting.",
  },
  {
    abbreviation: "STEM",
    name: "Science, Technology, Engineering and Mathematics",
    description: "An academic strand focused on science, technology, engineering, and mathematics.",
  },
  {
    abbreviation: "HUMSS",
    name: "Humanities and Social Sciences",
    description: "An academic strand focused on arts, social sciences, and humanities.",
  },
];
