export interface HistoryMilestone {
  year: number;
  title: string;
  description: string;
}

export interface AcademicDepartment {
  name: string;
  vision: string;
  mission: string;
  coreValues: string[];
}

export const institution = {
  name: "ACTS Computer College",
  location: "Santa Cruz, Laguna, Philippines",
  established: 1987,
  phrase: "Experience, Expertise & Excellence",
  vision:
    "ACTS Computer College is a higher educational institution dedicated in the holistic development of citizens and leaders in pursuit of truth, shall live a moral life and be guided by their faith in Almighty God and love for His mankind.",
  mission:
    "ACTS Computer College, the pioneer computer school in Sta. Cruz, Laguna founded in 1987, is a private non-sectarian higher educational institution with an aim to focus on instruction, research and community services, offering curriculum towards experience, expertise and excellence supportive of national development goals and standards of global requirements.",
  coreValues: [
    "Leadership towards sustainable national development,",
    "Empowerment of education, experience, expertise and excellence,",
    "Achiever with competence and great commitment,",
    "Dedication in service to God and country,",
    "GOD centered higher educational institution.",
  ],
} as const;

export const history: HistoryMilestone[] = [
  {
    year: 1987,
    title: "First computer school in Santa Cruz",
    description:
      "Founded in Sta. Cruz, Laguna as the town's first computer school, offering short courses in programming and office applications.",
  },
  {
    year: 1990,
    title: "Technical program expansion",
    description: "Expanded into two- and three-year technology-focused programs.",
  },
  {
    year: 1994,
    title: "College growth",
    description:
      "Moved to a larger campus, was renamed ACTS Computer College, and received CHED approval for degree programs including BSCS, BSIT, BSBA, and BSIM.",
  },
  {
    year: 1996,
    title: "Study Now Pay Later Plan",
    description: "Introduced the Study Now Pay Later Plan.",
  },
  {
    year: 2006,
    title: "ASAP Scholarship",
    description: "Introduced the ASAP Scholarship initiative.",
  },
];

export const presidentMessage = {
  name: "Prof. Ruben F. Macalinao, MBA, MM",
  role: "School President",
  message: `Dear students, parents, and visitors,

Welcome to ACTS Computer College — a place where passion meets purpose and learning transforms lives.

As the President of this institution, I am deeply honored to lead a community committed to excellence, innovation, and integrity. With decades of experience in both education and industry, I have seen how technology and character-driven learning can shape not only careers but the future of our society.

At ACTS, we don’t just train minds — we mold leaders. Our academic programs are designed to equip students with real-world skills, while our values-centered culture inspires them to become responsible, compassionate, and visionary individuals. Whether you are a prospective student, a parent seeking a nurturing academic environment, or a partner interested in collaboration, you are welcome here. ACTS is more than a school; it is a family grounded in faith, service, and excellence. Let us journey together as we build brighter futures, one student at a time.`,
} as const;

export const departments: AcademicDepartment[] = [
  {
    name: "Department of Computer Studies",
    vision:
      "The Department of Computer Studies envisions being an institution of academic excellence in the fields of Computer Science and Information Technology, committed to transforming students into productive, socially responsible, globally competitive, and God-fearing individuals.",
    mission:
      "The Department of Computer Studies commits itself to provide resilient, relevant, responsive, and quality education programs that enable students to secure the needed expertise and professional competence in the field of Computer Science and Information Technology.",
    coreValues: ["ACTS CODE: Christ-Centered, Competence, Obedience, Discipline, and Excellence."],
  },
  {
    name: "Department of Business Management",
    vision:
      "The Department of Business Management (DBM) envisions itself as a center of excellence in management education. This will be achieved by offering quality education, experience, and expertise nurturing the value of service to others and cultivated by the ideals of Christian faith that meets the professional and educational needs of students, businesses, and community.",
    mission:
      "The Department of Business Management (DBM) mission is to commit itself in the formation of students through education and technology into moral upright, experienced and well-rounded professional individuals, fostering unwavering commitment to excellence and global competitiveness.",
    coreValues: [
      "Leadership towards sustainable national development.",
      "Empowerment of education, experience, expertise and excellence.",
      "Achiever with competence and greater commitment.",
      "Dedication in service of God and Country.",
      "God-centered higher educational institution.",
    ],
  },
  {
    name: "Department of Teacher Education",
    vision:
      "The Department of Teacher Education shall be the center in developing a case of professional educators who are equipped with excellent teaching tools, skill and prepared with the demands of technical education necessary to create academically excellent and morally upright learning environments.",
    mission:
      "The Department of Teacher Education enables aspiring educators to become highly skilled, globally competitive professionals, and to grow with faith, dream, passion and confidence towards academic and moral excellence.",
    coreValues: [
      "Professionalism – Advocate sense of professionalism through ethical and spiritual practices leading academic excellence and integrity of life.",
      "Expertise – Demonstrate proficiency and competence in the chosen specialization relative to technological, pedagogical knowledge and practices.",
      "Innovation – Dedicated in the continuous creation of innovative teaching strategies and approaches.",
    ],
  },
];

export const seniorHighDepartment = {
  name: "Senior High School",
  vision:
    "ACTS Computer College Senior High School is committed to fostering educational reforms integrating strong faith in God, excellent service and morally upright characters towards the development of highly skilled and globally competitive professionals at par with the ASEAN Economic Community.",
  mission:
    "ACTS Computer College Senior High School aims to nurture God-centered young people of moral aspirations, experience, expertise and excellence who are equipped with solid academic foundation and with the 21st century skills transforming divergence in the life of the nation, the ASEAN Economic Community and the global world.",
  guidingVerse: "“Your EDUCATION is your Life, Guard it well.” – Proverbs 4:13b",
} as const;

export const contact = {
  name: "ACTS Computer College",
  email: "actscc87@yahoo.com",
  landline: "(049) 501-1484",
  mobile: ["09988526488", "09178673073"],
  address:
    "EGK Building, corner A. Bonifacio Street and Pedro Guevara Avenue, Santa Cruz, Laguna 4009, Philippines.",
  facebook: "https://www.facebook.com/ACTSCC",
  youtube: "https://www.youtube.com/@ACTSComputerCollegeACTSCC1987",
} as const;
