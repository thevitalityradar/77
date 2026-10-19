import { Author, Reviewer } from '../types';

export const AUTHORS: Author[] = [
  {
    id: 'author-marcus-vance',
    name: 'Marcus Vance, MS, CSCS',
    role: 'Senior Health & Fitness Editor',
    title: 'Exercise Physiologist & Science Writer',
    credentials: 'MS in Exercise Science (Penn State), NSCA Certified Strength & Conditioning Specialist',
    bio: 'Marcus has covered human biomechanics, supplement clinical trials, and recovery technologies for over eight years. He specializes in deconstructing commercial marketing claims against published peer-reviewed human trials.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    articlesCount: 42
  },
  {
    id: 'author-elena-rostova',
    name: 'Dr. Elena Rostova, PhD',
    role: 'Lead Nutrition & Biochemical Analyst',
    title: 'Nutritional Biochemist & Research Editor',
    credentials: 'PhD in Nutritional Biochemistry (Cornell University), Member of the American Society for Nutrition',
    bio: 'Dr. Rostova evaluates ingredient purity, bioavailability mechanisms, and synergistic interactions in dietary supplements. She previously served as an academic researcher investigating micronutrient transport mechanisms.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    articlesCount: 38
  }
];

export const REVIEWERS: Reviewer[] = [
  {
    id: 'rev-dr-julian-mercer',
    name: 'Dr. Julian Mercer, MD',
    title: 'Internal Medicine & Preventative Cardiology',
    credentials: 'MD (Johns Hopkins University School of Medicine), Board-Certified Internist',
    institution: 'Metropolitan Health Sciences Alliance',
    specialty: 'Cardiovascular Risk & Dietary Compound Safety',
    role: 'Medical Reviewer',
    bio: 'Dr. Mercer conducts clinical medical reviews for 77 Review content touching cardiovascular markers, metabolic health, and supplement contraindications. His reviews ensure zero unsubstantiated disease-treatment claims are published.',
    avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'rev-sarah-jenkins',
    name: 'Sarah Jenkins, MS, RD, CSSD',
    title: 'Board Certified Sports Dietitian',
    credentials: 'MS in Clinical Dietetics, Registered Dietitian (Commission on Dietetic Registration), CSSD',
    institution: 'Collegiate Performance Nutrition Advisory',
    specialty: 'Sports Supplement Safety & WADA/NSF Banned Substances',
    role: 'Registered Dietitian',
    bio: 'Sarah reviews supplement formulation records, third-party purity documentation, and electrolyte/macronutrient guides to ensure adherence to established dietary reference intakes and anti-doping standards.',
    avatarUrl: 'https://images.unsplash.com/photo-1594824813590-4822295d9859?auto=format&fit=crop&w=300&q=80'
  }
];

export const getAuthorById = (id: string) => AUTHORS.find(a => a.id === id) || AUTHORS[0];
export const getReviewerById = (id?: string) => (id ? REVIEWERS.find(r => r.id === id) : undefined);
