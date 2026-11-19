export type PersonnelCategory =
  | "School Officials"
  | "College Faculty"
  | "Senior High School Faculty"
  | "Administrative Staff";

export interface PersonnelMember {
  name: string;
  role: string;
  category: PersonnelCategory;
}

export const personnelCategories: PersonnelCategory[] = [
  "School Officials",
  "College Faculty",
  "Senior High School Faculty",
  "Administrative Staff",
];

export const personnel: PersonnelMember[] = [
  { name: "Prof. Ruben F. Macalinao, MBA, MM", role: "School President", category: "School Officials" },
  { name: "Mrs. Elma M. Macalinao", role: "Corporate Treasurer", category: "School Officials" },
  { name: "Dr. Mayvel M. Rivera, DBA", role: "Head, Accounting Department", category: "School Officials" },
  { name: "Dr. John Matthew M. Macalinao, DBA", role: "School Director", category: "School Officials" },
  { name: "Dr. Jo-Christine E. Macalinao, MSc, DBA", role: "School Registrar", category: "School Officials" },
  { name: "Mr. Christian A. Rivera", role: "Liaison Officer", category: "School Officials" },
  { name: "Dr. Adoree A. Ramos, DBA", role: "College Dean Head, Department of Business Management", category: "School Officials" },
  { name: "Dr. Adeline Z. Davac, EdD", role: "Grade 11 SHS Principal/Marketing Head", category: "School Officials" },
  { name: "Dr. Eric P. Castillo, PhD", role: "Grade 12 SHS Principal", category: "School Officials" },
  { name: "Dr. Abiekhay Camillee U. Lavastida, EdD", role: "Head, Department of Teacher Education", category: "School Officials" },
  { name: "Engr. Randie Ian A. Villatuya, ECE", role: "Head, Department of Computer Studies", category: "School Officials" },

  { name: "Mr. Jerome C. Aguilar", role: "Information Technology and Computer Science Instructor", category: "College Faculty" },
  { name: "Prof. Maricris A. Amoloza, MAEd", role: "NSTP/Sports Coordinator", category: "College Faculty" },
  { name: "Prof. Jane Marie P. Marcelo, MBA", role: "Business Management Professor", category: "College Faculty" },
  { name: "Prof. Maria Lourdes M. Formentera, MAEd", role: "Acting Guidance Councilor", category: "College Faculty" },
  { name: "Ms. Eizalyn P. Manalo, LPT", role: "Filipino Teacher", category: "College Faculty" },
  { name: "Ms. Ma. Rhiza D. Cañete", role: "Business Management Teacher", category: "College Faculty" },
  { name: "Mr. Lemmuel B. Lacbay, LPT", role: "Filipino Teacher", category: "College Faculty" },
  { name: "Mr. Ariel Jr. M. Tobias", role: "Instructor", category: "College Faculty" },
  { name: "Atty. Frederick Dela Rosa Lubuguin", role: "Legal Counsel/Law Professor", category: "College Faculty" },
  { name: "Prof. Winonah Nemia G. Catipon", role: "Professor", category: "College Faculty" },

  { name: "Ms. Aira Joy A. Abasula, LPT", role: "Science Teacher", category: "Senior High School Faculty" },
  { name: "Ms. Chrishelyn D. Dacsil, LPT", role: "Mathematics Teacher", category: "Senior High School Faculty" },
  { name: "Ms. Marithonie L. Estrada, LPT", role: "English Teacher", category: "Senior High School Faculty" },
  { name: "Ms. Jhonalyn S. Sune, LPT", role: "Physical Education Teacher", category: "Senior High School Faculty" },
  { name: "Mr. Danielle P. Calabit, LPT", role: "Electronics and Technology Teacher", category: "Senior High School Faculty" },
  { name: "Ms. Shoby Jean N. Alvarez, LPT", role: "Mathematics Teacher", category: "Senior High School Faculty" },
  { name: "Mr. John Harvey M. Alias, LPT", role: "Social Science Teacher", category: "Senior High School Faculty" },
  { name: "Mr. Jayvee E. Leron, LPT", role: "Mathematics Teacher", category: "Senior High School Faculty" },
  { name: "Ms. Rose Anne G. Oblepias, LPT", role: "English Teacher", category: "Senior High School Faculty" },
  { name: "Ms. Sophia Alexis P. Cuyo, LPT", role: "English Teacher", category: "Senior High School Faculty" },
  { name: "Ms. Shane Irish C. Pontiga", role: "Instructress/Marketing Assistant", category: "Senior High School Faculty" },
  { name: "Mrs. Abegail S. Formeloza, LPT", role: "Instructress", category: "Senior High School Faculty" },
  { name: "Ms. Gimelrose T. Ramirez, LPT", role: "Instructress", category: "Senior High School Faculty" },
  { name: "Mr. Benedict James C. Esponga", role: "Instructor", category: "Senior High School Faculty" },
  { name: "Ms. Michelle F. Montilla, LPT", role: "Instructress", category: "Senior High School Faculty" },
  { name: "Ms. Jhayzrine Kaye A. Esperanza, LPT", role: "Instructress", category: "Senior High School Faculty" },
  { name: "Mr. Francis Dominic U. Puna", role: "Instructor", category: "Senior High School Faculty" },
  { name: "Mr. Jeferson D. Llanes", role: "Instructor", category: "Senior High School Faculty" },

  { name: "Ms. Riza F. Macalinao", role: "Cashier", category: "Administrative Staff" },
  { name: "Ms. Eva S. Sardal", role: "Cashier", category: "Administrative Staff" },
  { name: "Mrs. Ednalyn C. Pautan", role: "Principal's Secrectary", category: "Administrative Staff" },
  { name: "Mrs. Richelle Ann M. Raquel", role: "Human Resource Assistant", category: "Administrative Staff" },
  { name: "Ms. Alison Viena Bern D. Añonuevo", role: "Records Clerk", category: "Administrative Staff" },
  { name: "Ms. Vanessa N. Gaballeño", role: "Clerk", category: "Administrative Staff" },
  { name: "Mrs. Maricel S. Caballes", role: "Bookkeeper", category: "Administrative Staff" },
  { name: "Mr. Ryan Joshua A. Alarva", role: "Instructor/System Administrator", category: "Administrative Staff" },
  { name: "Mr. Jonard A. Badinas", role: "Computer Laboratory Aide", category: "Administrative Staff" },
  { name: "Mrs. Ingrid A. Alcarez", role: "Layout Artist", category: "Administrative Staff" },
  { name: "Mr. Regie A. Cabalfin", role: "Office Assistant", category: "Administrative Staff" },
  { name: "Mr. Ernesto C. Sajonia Jr.", role: "Property Custodian", category: "Administrative Staff" },
];
