export type EditorialStatus =
  | 'draft'
  | 'research_required'
  | 'editorial_review'
  | 'specialist_review_required'
  | 'approved'
  | 'published'
  | 'needs_correction'
  | 'archived';

export type MedicalRiskLevel = 'general' | 'health-sensitive' | 'high-risk';

export type EvidenceGrade = 'A' | 'B' | 'C' | 'D'; // A: Meta-analysis/Systematic Review, B: RCTs, C: Observational/Mechanistic, D: Inconclusive/Contradictory

export type ProductCategory =
  | 'health-wellness'
  | 'fitness-sports'
  | 'supplements-nutrition'
  | 'product-reviews-comparisons';

export type ProductClassification = 'physical' | 'digital' | 'supplement';

export type AffiliateNetwork = 'ClickBank' | 'BuyGoods' | 'ShareASale' | 'DirectMerchant' | 'CJ';

export interface Author {
  id: string;
  name: string;
  role: string;
  title: string;
  credentials: string;
  bio: string;
  avatarUrl: string;
  articlesCount: number;
}

export interface Reviewer {
  id: string;
  name: string;
  title: string;
  credentials: string;
  institution: string;
  specialty: string;
  role: 'Medical Reviewer' | 'Scientific Reviewer' | 'Exercise Physiologist' | 'Registered Dietitian';
  bio: string;
  avatarUrl: string;
}

export interface ResearchCitation {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  pmid?: string;
  doi?: string;
  url: string;
  sourceType: 'Systematic Review / Meta-Analysis' | 'Randomized Controlled Trial' | 'Clinical Practice Guideline' | 'Government Health Agency (NIH/FDA)' | 'Academic Institution';
  hierarchyTier: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  keyFindings: string;
  limitations: string;
  directlySupportsClaim: boolean;
  lastCheckedDate: string;
}

export interface IngredientSpec {
  name: string;
  amountPerServing: string;
  dailyValue?: string;
  clinicalStandardDose: string;
  evidenceGrade: EvidenceGrade;
  purpose: string;
}

export interface ProductRecord {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  classification: ProductClassification;
  shortDescription: string;
  fullOverview: string;
  intendedAudience: string[];
  notRecommendedFor: string[];
  imageUrl: string;
  rating: {
    overall: number; // 0 - 10
    evidenceSupport: number;
    ingredientQuality: number;
    priceTransparency: number;
    safetyProfile: number;
  };
  reviewMethodologyType: 'research_based_analysis' | 'hands_on_testing' | 'hybrid';
  methodologyDetails: string;
  ingredients?: IngredientSpec[];
  verifiedSpecs: { [key: string]: string };
  price: number;
  currency: string;
  servingCount?: number;
  costPerServing?: number;
  subscriptionTerms?: string;
  refundPolicy: string;
  guaranteeDays?: number;
  merchantName: string;
  affiliateUrl: string;
  affiliateNetwork: AffiliateNetwork;
  trackingId: string;
  editorialStatus: EditorialStatus;
  medicalRiskLevel: MedicalRiskLevel;
  lastVerifiedDate: string;
  authorId: string;
  reviewerId?: string;
  pros: string[];
  cons: string[];
  evidenceSummary: string;
  safetyWarnings: string[];
  citations: ResearchCitation[];
  googleAdsCompliant: boolean;
  metaAdsCompliant: boolean;
  adComplianceNotes: string;
  winnerBadge?: string;
  officialSalesUrl?: string;
  refundPolicyDetails?: string;
  freeShippingAvailable?: boolean;
  cGmpCertified?: boolean;
  fdaRegisteredFacility?: boolean;
  thirdPartyTested?: boolean;
  manufacturedInUsa?: boolean;
  nonGmo?: boolean;
  labTestCertificateAvailable?: boolean;
  publishDate?: string;
  pricingPackages?: Array<{
    bottles: number;
    supplyMonths: number;
    pricePerBottle: number;
    totalPrice: number;
    savingsText?: string;
    isBestValue?: boolean;
    shippingText: string;
  }>;
}

export interface ArticleSection {
  id: string;
  heading: string;
  content: string; // rich text or formatted paragraphs
  keyTakeaways?: string[];
  citationIds?: string[];
}

export interface ArticleRecord {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProductCategory;
  articleType: 'guide' | 'evidence_review' | 'comparison' | 'investigation';
  readingTimeMinutes: number;
  publishDate: string;
  lastUpdatedDate: string;
  heroImageUrl: string;
  authorId: string;
  reviewerId?: string;
  editorialStatus: EditorialStatus;
  medicalRiskLevel: MedicalRiskLevel;
  evidenceGrade: EvidenceGrade;
  conciseSummaryAnswer: string;
  sections: ArticleSection[];
  citations: ResearchCitation[];
  relatedProductIds: string[];
  relatedArticleIds: string[];
  hasAffiliateLinks: boolean;
}

export interface IngredientProfile {
  id: string;
  name: string;
  aliases: string[];
  primaryCategory: string;
  evidenceGrade: EvidenceGrade;
  clinicallyStudiedDose: string;
  provenBenefits: string[];
  unsupportedClaims: string[];
  mechanismsOfAction: string;
  knownSideEffects: string[];
  contraindications: string[];
  nihFactSheetUrl: string;
  totalPubMedStudies: number;
}
