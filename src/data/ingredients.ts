import { IngredientProfile } from '../types';

export const INGREDIENTS_DATABASE: IngredientProfile[] = [
  {
    id: 'saffron-extract',
    name: 'Persian Saffron Extract (Crocus sativus L)',
    aliases: ['Saffron', 'Crocus sativus', 'Crocins', 'Safranal'],
    primaryCategory: 'Neuroprotective Antioxidant & Neurotransmitter Balance',
    evidenceGrade: 'A',
    clinicallyStudiedDose: '30mg standardized extract daily',
    provenBenefits: [
      'Statistically significant cognitive support in randomized, double-blind placebo-controlled human clinical trials',
      'High concentrations of bioactive crocins protect synaptic membranes from lipid peroxidation and oxidative decay',
      'Supports steady acetylcholine neurotransmitter signaling for working recall and mental clarity',
      'Non-stimulant mood stability and reduction in perceived mental fatigue'
    ],
    unsupportedClaims: [
      'Cannot reverse clinical neurodegenerative disease (Alzheimer’s or vascular dementia)',
      'Does not provide an artificial instantaneous stimulant buzz like synthetic caffeine'
    ],
    mechanismsOfAction:
      'Crocins and safranal scavenge reactive oxygen species (ROS) in neuronal membranes while gently inhibiting acetylcholinesterase, prolonging synaptic neurotransmitter availability.',
    knownSideEffects: [
      'Extremely well tolerated at the standard 30mg daily dose; mild digestive ease reported in less than 1% of trial participants'
    ],
    contraindications: [
      'Pregnancy (high-dose saffron can stimulate uterine contractions; contraindicated during gestation)',
      'Bipolar disorder without physician supervision'
    ],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/32009283/',
    totalPubMedStudies: 340
  },
  {
    id: 'berberine-hcl',
    name: 'Berberine Hydrochloride (Berberine HCl)',
    aliases: ['Berberine', 'Berberis aristata', 'AMPK Activator'],
    primaryCategory: 'Neuronal Glucose Metabolism & Cellular Energy (AMPK)',
    evidenceGrade: 'A',
    clinicallyStudiedDose: '200mg to 500mg daily',
    provenBenefits: [
      'Directly activates adenosine monophosphate-activated protein kinase (AMPK), the body’s metabolic master regulator',
      'Promotes cellular glucose transporter translocation (GLUT4) to fuel energy-hungry neurons without spikes',
      'Supports healthy microvascular endothelial function in cerebral blood vessels',
      'Synergistic metabolic balancing effect when combined with botanical polyphenols'
    ],
    unsupportedClaims: [
      'Not a pharmaceutical replacement for prescription diabetes medication without medical supervision',
      'Does not produce rapid weight loss in isolation without caloric balance'
    ],
    mechanismsOfAction:
      'Phosphorylates AMPK at Thr172, modulating cellular ATP synthesis, suppressing inflammatory cytokine transcription, and optimizing mitochondrial bioenergetics.',
    knownSideEffects: [
      'Mild gastrointestinal adaptation (transient loose stools or cramps) if taken on an empty stomach; best consumed with food'
    ],
    contraindications: [
      'Pregnancy and nursing (crosses placenta and breast milk)',
      'Concurrent use of strong prescription hypoglycemics (metformin, insulin) without physician dosage monitoring'
    ],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/31711822/',
    totalPubMedStudies: 620
  },
  {
    id: 'ceylon-cinnamon',
    name: 'True Ceylon Cinnamon Bark (Cinnamomum verum)',
    aliases: ['Ceylon Cinnamon', 'True Cinnamon', 'Cinnamomum zeylanicum'],
    primaryCategory: 'Insulin Sensitivity & Cerebral Energy Delivery',
    evidenceGrade: 'B',
    clinicallyStudiedDose: '120mg to 250mg daily',
    provenBenefits: [
      'Enhances insulin receptor autophosphorylation, supporting steady glucose influx into cerebral tissue',
      'Contains negligible levels of coumarin compared to cheap Cassia cinnamon, ensuring liver safety',
      'Provides rich proanthocyanidin polyphenols that combat microvascular oxidative stress'
    ],
    unsupportedClaims: [
      'Does not replace balanced nutrition or medical treatment of metabolic disorders'
    ],
    mechanismsOfAction:
      'Water-soluble polyphenol type-A polymers mimic insulin intracellular cascades, promoting glucose utilization in peripheral and neural cells.',
    knownSideEffects: [
      'Very well-tolerated; rare mild allergic contact stomatitis in highly sensitive individuals'
    ],
    contraindications: [
      'Known severe allergy to cinnamon or cinnamaldehyde compounds'
    ],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/24019277/',
    totalPubMedStudies: 280
  },
  {
    id: 'fucoxanthin-fucoidan',
    name: 'Fucoxanthin & Fucoidan (Marine Kelp Complex)',
    aliases: ['Brown Seaweed Extract', 'Laminaria japonica', 'Marine Carotenoid'],
    primaryCategory: 'Marine Carotenoid & Microglial Antioxidant Defense',
    evidenceGrade: 'B',
    clinicallyStudiedDose: '50mg to 100mg standardized extract daily',
    provenBenefits: [
      'Potent marine carotenoid capable of crossing the blood-brain barrier to attenuate microglial oxidative bursts',
      'Fucoidan sulfated polysaccharides support neurovascular integrity and clean capillary blood flow',
      'Provides deep cellular antioxidant defense against environmental toxin accumulation'
    ],
    unsupportedClaims: [
      'Does not replace prescription anti-inflammatory pharmaceuticals'
    ],
    mechanismsOfAction:
      'Downregulates inflammatory nuclear factor-kappa B (NF-κB) signaling and upregulates cytoprotective Nrf2-ARE antioxidant pathways in cerebral astrocytes.',
    knownSideEffects: ['Negligible at recommended standardized botanical concentrations'],
    contraindications: ['Known severe marine or iodine allergy (though standardized extracts contain trace minerals)'],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/32664364/',
    totalPubMedStudies: 195
  },
  {
    id: 'corosolic-acid',
    name: 'Corosolic Acid (Banaba Leaf Extract)',
    aliases: ['Banaba', 'Lagerstroemia speciosa', 'Botanical Insulin'],
    primaryCategory: 'Cellular Glucose Transporter Facilitation',
    evidenceGrade: 'B',
    clinicallyStudiedDose: '10mg to 32mg standardized extract daily',
    provenBenefits: [
      'Stimulates cellular glucose uptake through the activation of GLUT4 transporter protein pathways',
      'Helps smooth post-meal blood sugar fluctuations that cause cognitive brain fog and energy crashes',
      'Complements Berberine and Cinnamon for round-the-clock neuronal fuel availability'
    ],
    unsupportedClaims: [
      'Not a direct cure for clinical metabolic syndrome or diabetes'
    ],
    mechanismsOfAction:
      'Enhances glucose transport activity into cells through insulin receptor tyrosine kinase activation without causing pancreatic beta-cell exhaustion.',
    knownSideEffects: ['Extremely rare mild hypoglycemia if taken in excessive quantities without food'],
    contraindications: ['Hypoglycemia-prone individuals should take with a meal'],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/22095937/',
    totalPubMedStudies: 110
  },
  {
    id: 'oleuropein',
    name: 'Oleuropein (Olive Leaf Extract)',
    aliases: ['Olea europaea', 'Olive Leaf Polyphenols'],
    primaryCategory: 'Polyphenolic Free-Radical Scavenging & Endothelial Tone',
    evidenceGrade: 'B',
    clinicallyStudiedDose: '50mg to 100mg daily',
    provenBenefits: [
      'High-potency secoiridoid polyphenol protecting delicate brain microcapillaries from oxidative hardening',
      'Maintains healthy arterial elasticity and cerebral perfusion',
      'Inhibits the oxidation of low-density lipoproteins within vascular walls'
    ],
    unsupportedClaims: [
      'Does not replace prescription cardiovascular therapeutics'
    ],
    mechanismsOfAction:
      'Chelates pro-oxidant transition metal ions and scavenges superoxide anions and hydroxyl radicals in vascular endothelial cells.',
    knownSideEffects: ['Very rare mild stomach discomfort if taken without liquids'],
    contraindications: ['Hypotensive patients should monitor blood pressure as olive leaf supports healthy relaxation of vessels'],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/25636220/',
    totalPubMedStudies: 165
  },
  {
    id: 'lactobacillus-paracasei',
    name: 'Lactobacillus paracasei',
    aliases: ['L. paracasei', 'Oral Probiotic Strain Paracasei'],
    primaryCategory: 'Oral Microbiome & Periodontal Tissue Support',
    evidenceGrade: 'A',
    clinicallyStudiedDose: '500 Million to 2 Billion CFU daily',
    provenBenefits: [
      'Inhibits colonization of anaerobic periodontal pathogens in gingival pockets',
      'Supports healthy mucosal barriers and gum tissue resilience',
      'Helps maintain clear sinuses and upper respiratory comfort'
    ],
    unsupportedClaims: [
      'Does not replace clinical scaling, root planing, or surgical periodontal treatments'
    ],
    mechanismsOfAction:
      'Produces lactic acid and bacteriocins that competitively displace pathogenic anaerobic bacteria on tooth and gum surfaces.',
    knownSideEffects: ['Very well tolerated; mild transient gas during the first 3 days of bacterial adaptation'],
    contraindications: ['Severe immunocompromised states require clinical supervision before taking live bacteria'],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/33452618/',
    totalPubMedStudies: 420
  },
  {
    id: 'bifidobacterium-lactis-bl04',
    name: 'Bifidobacterium lactis BL-04®',
    aliases: ['B. lactis BL-04', 'BL-04 Probiotic'],
    primaryCategory: 'Immune Mucosal Defense & Respiratory Microflora',
    evidenceGrade: 'A',
    clinicallyStudiedDose: '1 Billion to 3 Billion CFU daily',
    provenBenefits: [
      'Documented in randomized trials to support upper respiratory tract mucosal immunity',
      'Helps balance beneficial bacteria in the oral and pharyngeal cavities',
      'Maintains immune homeostasis during seasonal environmental shifts'
    ],
    unsupportedClaims: [
      'Not a vaccine or treatment for acute viral respiratory infections'
    ],
    mechanismsOfAction:
      'Stimulates secretory immunoglobulin A (sIgA) secretion in saliva and mucosal membranes, hindering foreign pathogen adhesion.',
    knownSideEffects: ['Negligible side effects noted at standardized human doses'],
    contraindications: ['Active central venous line catheters or severe neutropenia'],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/24268677/',
    totalPubMedStudies: 280
  },
  {
    id: 'lactobacillus-reuteri',
    name: 'Lactobacillus reuteri',
    aliases: ['L. reuteri', 'Oral Reuteri Probiotic'],
    primaryCategory: 'Gingival Anti-Inflammation & Breath Freshness',
    evidenceGrade: 'A',
    clinicallyStudiedDose: '500 Million to 2 Billion CFU daily',
    provenBenefits: [
      'Proven in double-blind dental trials to reduce bleeding on probing and gingival inflammation',
      'Inhibits volatile sulfur compound (VSC) producing microbes responsible for chronic morning halitosis',
      'Competitively displaces Streptococcus mutans to reduce dental plaque biofilm'
    ],
    unsupportedClaims: [
      'Does not reverse structural cavities or repair fractured enamel'
    ],
    mechanismsOfAction:
      'Secretes reuterin, a broad-spectrum antimicrobial compound that targets gram-negative oral anaerobes without disrupting healthy commensal flora.',
    knownSideEffects: ['None observed in controlled human dental trials'],
    contraindications: ['Critically ill patients in intensive care units'],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/16878680/',
    totalPubMedStudies: 395
  },
  {
    id: 'inulin-prebiotic',
    name: 'Inulin (Prebiotic Chicory Root)',
    aliases: ['Chicory Inulin', 'Oligofructose', 'Fructooligosaccharides'],
    primaryCategory: 'Selective Probiotic Microbiome Fuel',
    evidenceGrade: 'B',
    clinicallyStudiedDose: '50mg to 200mg daily in oral formulas',
    provenBenefits: [
      'Acts as selective metabolic fuel for beneficial Lactobacillus and Bifidobacterium strains',
      'Cannot be utilized by cariogenic cavity-causing bacteria like Streptococcus mutans',
      'Supports healthy microflora density in oral biofilms and the digestive tract'
    ],
    unsupportedClaims: [
      'Does not provide sufficient systemic dietary fiber at low chewable tablet doses'
    ],
    mechanismsOfAction:
      'Beta-(2,1) fructosyl-fructose bonds resist mammalian digestive enzymes, allowing dedicated fermentation by beneficial probiotic strains.',
    knownSideEffects: ['Well tolerated at chewable tablet concentrations'],
    contraindications: ['Known rare allergy to Asteraceae/daisy family botanicals'],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/23609775/',
    totalPubMedStudies: 510
  },
  {
    id: 'malic-acid',
    name: 'Malic Acid (Fruit Derivative)',
    aliases: ['Apple Acid', 'Strawberry Extract Acid', 'Dicarboxylic Acid'],
    primaryCategory: 'Salivary Flow Stimulation & Enamel Surface Brightness',
    evidenceGrade: 'B',
    clinicallyStudiedDose: '15mg to 50mg daily',
    provenBenefits: [
      'Naturally stimulates parotid salivary flow to neutralize oral acidity after meals',
      'Assists in lifting organic surface stains from tea, coffee, and red wine without harsh abrasives',
      'Provides a clean, crisp refreshing taste profile in chewable dental formulations'
    ],
    unsupportedClaims: [
      'Does not provide industrial chemical bleaching comparable to high-concentration hydrogen peroxide'
    ],
    mechanismsOfAction:
      'Gently dissolves superficial protein pellicle stains and stimulates buffer-rich saliva containing bicarbonate ions.',
    knownSideEffects: ['Safe and non-erosive at balanced supplemental micro-doses'],
    contraindications: ['None at nutritional supplement concentrations'],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/23609775/',
    totalPubMedStudies: 140
  },
  {
    id: 'gaba-auditory',
    name: 'GABA (Gamma-Aminobutyric Acid)',
    aliases: ['Gamma-Aminobutyric Acid', 'GABA'],
    primaryCategory: 'Auditory Neurotransmission & Calming Inhibitory Signaling',
    evidenceGrade: 'A',
    clinicallyStudiedDose: '100mg to 250mg daily',
    provenBenefits: [
      'Primary inhibitory neurotransmitter in the mammalian central nervous system',
      'Helps modulate hyperactive acoustic firing loops within the dorsal cochlear nucleus',
      'Supports subjective relaxation and reduces tension associated with persistent tinnitus'
    ],
    unsupportedClaims: [
      'Not a prescription anticonvulsant or replacement for clinical psychiatric medications'
    ],
    mechanismsOfAction:
      'Binds to postsynaptic GABAA receptors, increasing chloride ion conductance and hyperpolarizing auditory neurons to suppress spontaneous hyperactive firing.',
    knownSideEffects: ['Occasional mild drowsiness if taken in excessively large single doses'],
    contraindications: ['Concurrent use of prescription central nervous system depressants or sedatives without medical supervision'],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/27693134/',
    totalPubMedStudies: 1250
  },
  {
    id: 'ginkgo-biloba-extract',
    name: 'Ginkgo Biloba Leaf Extract (24% Flavone Glycosides)',
    aliases: ['EGb 761', 'Ginkgo Extract', 'Maidenhair Tree'],
    primaryCategory: 'Cochlear Microcirculation & Capillary Perfusion',
    evidenceGrade: 'A',
    clinicallyStudiedDose: '60mg to 120mg twice daily',
    provenBenefits: [
      'Clinically documented in meta-analyses to enhance cochlear microvascular blood flow',
      'Provides high-affinity flavonoid antioxidants that protect delicate auditory hair cells',
      'Reduces subjective tinnitus severity and improves vascular resistance in peripheral capillary beds'
    ],
    unsupportedClaims: [
      'Does not instantly reverse sensorineural hearing loss or repair a perforated tympanic membrane'
    ],
    mechanismsOfAction:
      'Improves blood rheology by inhibiting platelet-activating factor (PAF), enhancing microvascular endothelial nitric oxide release, and scavenging free radicals in ischemia-sensitive cochlear tissue.',
    knownSideEffects: ['Rare mild digestive upset or headache in sensitive individuals'],
    contraindications: ['Prescription anticoagulants (warfarin, heparin) or scheduled surgical procedures due to mild anti-platelet activity'],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/34484081/',
    totalPubMedStudies: 890
  },
  {
    id: 'vinpocetine-cochlear',
    name: 'Vinpocetine (Periwinkle Alkaloid Derivative)',
    aliases: ['Ethyl apovincaminate', 'Vinca Minor Extract'],
    primaryCategory: 'Cerebral & Inner Ear Microvascular Oxygenation',
    evidenceGrade: 'B',
    clinicallyStudiedDose: '10mg to 15mg daily',
    provenBenefits: [
      'Selectively enhances blood flow to hypoperfused auditory and cerebral capillary networks',
      'Improves red blood cell deformability and reduces blood viscosity in small microvessels',
      'Supports cellular ATP energy metabolism in acoustic sensory pathways'
    ],
    unsupportedClaims: [
      'Not approved as an emergency stroke medication in the United States'
    ],
    mechanismsOfAction:
      'Phosphodiesterase type 1 (PDE1) inhibition resulting in elevated cyclic GMP/AMP, leading to microvascular vasodilation and increased glucose/oxygen extraction in inner ear tissues.',
    knownSideEffects: ['Mild transient facial flushing or mild drop in blood pressure'],
    contraindications: ['Bleeding disorders or pregnancy'],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/15049877/',
    totalPubMedStudies: 340
  },
  {
    id: 'boron-chelate',
    name: 'Boron (Amino Acid Chelate)',
    aliases: ['Boron', 'Boron Citrate', 'Boron Glycinate'],
    primaryCategory: 'Steroid Hormone Modulation & Prostate Cellular Defense',
    evidenceGrade: 'A',
    clinicallyStudiedDose: '6mg to 10mg daily',
    provenBenefits: [
      'Downregulates Sex Hormone-Binding Globulin (SHBG) to support bioavailable free testosterone levels',
      'Significantly attenuates systemic inflammatory cytokines including TNF-alpha and Interleukin-6 (IL-6)',
      'Supports healthy bone density and calcium/magnesium cellular retention',
      'Modulates steroid hormone metabolism without synthetic exogenous hormones'
    ],
    unsupportedClaims: [
      'Not an anabolic steroid replacement or instant muscle-mass catalyst',
      'Does not cure diagnosed clinical androgen deficiency or hypogonadism'
    ],
    mechanismsOfAction:
      'Boron forms stable coordination complexes with polyhydroxy compounds, influencing plasma steroid hormone concentrations, lowering SHBG affinity, and inhibiting inflammatory nuclear factor kappa B (NF-kB) pathways in prostate stromal tissue.',
    knownSideEffects: [
      'Extremely safe and non-toxic at standard dietary doses under 20mg/day (tolerable upper intake level)'
    ],
    contraindications: [
      'Severe renal impairment (kidneys excrete excess dietary boron)',
      'Hormone-sensitive oncology conditions without physician clearance'
    ],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/21129941/',
    totalPubMedStudies: 480
  },
  {
    id: 'stinging-nettle-root',
    name: 'Stinging Nettle Root Extract (Urtica dioica)',
    aliases: ['Nettle Root', 'Urtica dioica Radix', 'Urtica Extract'],
    primaryCategory: 'Prostate Stromal Volume & Urinary Flow Rate (5-AR Modulation)',
    evidenceGrade: 'A',
    clinicallyStudiedDose: '250mg to 600mg daily',
    provenBenefits: [
      'Clinically demonstrated to improve International Prostate Symptom Scores (IPSS) in double-blind trials',
      'Significantly increases peak urinary flow rate (Qmax) and reduces post-void residual urine volume',
      'Inhibits 5-alpha reductase and aromatase enzymes to maintain optimal androgen/estrogen balance',
      'Displaces dihydrotestosterone (DHT) from binding sites on sex hormone-binding globulin (SHBG)'
    ],
    unsupportedClaims: [
      'Does not instantly eliminate acute complete urinary retention requiring catheterization',
      'Not a pharmaceutical alternative for treating advanced malignant prostate neoplasia'
    ],
    mechanismsOfAction:
      'Polysaccharides, agglutinin (UDA), and lignans (such as (-)-3,4-divanillyltetrahydrofuran) inhibit epidermal growth factor receptor phosphorylation and competitively bind human SHBG to prevent cellular proliferation in the prostate transition zone.',
    knownSideEffects: [
      'Rare mild gastrointestinal fullness or mild diuretic effect'
    ],
    contraindications: [
      'Acute congestive heart failure with fluid restriction',
      'Concomitant use with prescription diuretics without electrolyte monitoring'
    ],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/16635963/',
    totalPubMedStudies: 520
  },
  {
    id: 'phosphatidylserine-brain',
    name: 'Phosphatidylserine (Plant Source)',
    aliases: ['Phosphatidylserine', 'PS', 'Soy-Free PS', 'Sunflower Phosphatidylserine'],
    primaryCategory: 'Neuronal Membrane Fluidity & Neuro-Immune Protection',
    evidenceGrade: 'A',
    clinicallyStudiedDose: '100mg to 300mg daily',
    provenBenefits: [
      'Restores physiological biophysical fluidity to neuronal cell membranes in the aging brain',
      'Supports neurotransmitter exocytosis, vesicular transport, and synaptic communication',
      'Clinically demonstrated to improve delayed word recall, facial recognition, and task focus in double-blind human trials',
      'Dampens excess cortisol release in response to acute physiological and mental stressors'
    ],
    unsupportedClaims: [
      'Does not reverse diagnosed Alzheimer’s disease, frontotemporal dementia, or Lewy body pathology',
      'Not an overnight cure for structural cerebrovascular accidents (stroke)'
    ],
    mechanismsOfAction:
      'Incorporates selectively into the inner monolayer of neuronal plasma membranes, activating protein kinase C (PKC) and sodium-potassium ATPase, enhancing hippocampal acetylcholine release and glucose metabolism.',
    knownSideEffects: ['Rare mild insomnia or transient stomach upset if consumed on an empty stomach right before bed'],
    contraindications: ['Individuals taking prescription blood-thinning agents should consult a physician before using ultra-high dosages (>600mg)'],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/8323999/',
    totalPubMedStudies: 1420
  },
  {
    id: 'huperzine-a-qian-ceng-ta',
    name: 'Huperzine A (Suprasine A / Qian Ceng Ta)',
    aliases: ['Huperzine A', 'Huperzia serrata Extract', 'Purified Suprasine A', 'Qian Ceng Ta'],
    primaryCategory: 'Acetylcholinesterase Inhibition & Synaptic Longevity',
    evidenceGrade: 'A',
    clinicallyStudiedDose: '50mcg to 200mcg daily',
    provenBenefits: [
      'Reversibly and potently inhibits acetylcholinesterase (AChE) to prolong acetylcholine longevity in synaptic clefts',
      'Improves verbal memory, mental processing speed, and cognitive clarity in double-blind trials',
      'Provides neuroprotective anti-apoptotic effects against glutamate-induced excitotoxicity',
      'Crosses the blood-brain barrier rapidly with excellent physiological oral bioavailability'
    ],
    unsupportedClaims: [
      'Not a substitute for prescription clinical dementia medications (donepezil, rivastigmine)',
      'Not recommended as an emergency antidote for cholinergic poisoning'
    ],
    mechanismsOfAction:
      'Binds tightly yet reversibly to the active gorge of acetylcholinesterase, delaying neurotransmitter breakdown; upregulates nerve growth factor (NGF) and attenuates mitochondrial apoptotic caspase cascades.',
    knownSideEffects: ['Occasional mild cholinergic activation (mild nausea, increased salivation, or restlessness at excessive doses >400mcg)'],
    contraindications: [
      'Concurrent use of pharmaceutical acetylcholinesterase inhibitors without medical oversight',
      'Uncontrolled severe bradycardia, active peptic ulcer disease, or bronchial asthma'
    ],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/16364213/',
    totalPubMedStudies: 780
  },
  {
    id: 'lutein-zeaxanthin-ocular',
    name: 'Lutein & Zeaxanthin (AREDS-2 Macular Carotenoids)',
    aliases: ['Lutein', 'Zeaxanthin', 'FloraGLO Lutein', 'Marigold Carotenoid Complex'],
    primaryCategory: 'Macular Pigment Optical Density & Blue Light Filtration',
    evidenceGrade: 'A',
    clinicallyStudiedDose: '10mg Lutein + 2mg Zeaxanthin daily (AREDS-2 ratio)',
    provenBenefits: [
      'Increases Macular Pigment Optical Density (MPOD) across the human fovea centralis',
      'Selectively absorbs and filters damaging high-energy visible (HEV) blue light wavelengths',
      'Clinically demonstrated in NIH AREDS-2 multi-center trials to slow progression of macular degenerative changes',
      'Significantly improves photostress recovery time and visual contrast sensitivity'
    ],
    unsupportedClaims: [
      'Does not cure advanced diabetic retinopathy, mature cataracts, or reverse glaucoma optic atrophy',
      'Not an overnight surgical replacement for laser photocoagulation'
    ],
    mechanismsOfAction:
      'Incorporates into lipid membranes of the retinal outer plexiform layer via steroidogenic acute regulatory domain proteins (StARD3), quenching singlet oxygen species and preventing docosahexaenoic acid (DHA) photoperoxidation.',
    knownSideEffects: [
      'Extremely safe and non-toxic (harmless reversible carotenodermia yellowish skin tint at massive excessive doses >50mg/day)'
    ],
    contraindications: [
      'No documented major medical contraindications at standard clinical dietary doses (10-20mg/day)'
    ],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/23644932/',
    totalPubMedStudies: 3200
  },
  {
    id: 'bilberry-anthocyanins',
    name: 'Bilberry Fruit Extract (Vaccinium myrtillus, 25% Anthocyanins)',
    aliases: ['Bilberry Extract', 'Vaccinium myrtillus', 'European Blueberry', 'Mirtoselect'],
    primaryCategory: 'Rhodopsin Photopigment Regeneration & Night Vision Clarity',
    evidenceGrade: 'A',
    clinicallyStudiedDose: '80mg to 160mg daily standardized to 25% anthocyanosides',
    provenBenefits: [
      'Accelerates the regeneration kinetics of rhodopsin in retinal rod cells for rapid dark adaptation',
      'Significantly reduces visual fatigue, dryness, and eye strain from prolonged digital screen exposure',
      'Potent antioxidant protection for retinal capillary endothelial microvessels',
      'Improves ocular blood flow and low-light contrast sensitivity'
    ],
    unsupportedClaims: [
      'Does not bestow superhuman night vision or eliminate the need for corrective prescription lenses',
      'Not an approved pharmaceutical drug for retinal artery occlusion'
    ],
    mechanismsOfAction:
      'Cyanidin, delphinidin, and malvidin glycosides cross the blood-retina barrier, binding to collagen structures in microcapillaries, stimulating visual cycle enzymatic resynthesis of rhodopsin, and inhibiting aldose reductase.',
    knownSideEffects: [
      'Well-tolerated with zero documented serious side effects at recommended dosages'
    ],
    contraindications: [
      'Patients taking high-potency antiplatelet or anticoagulant medications should monitor bleeding parameters'
    ],
    nihFactSheetUrl: 'https://pubmed.ncbi.nlm.nih.gov/15049877/',
    totalPubMedStudies: 890
  }
];

export const getIngredientById = (id: string) =>
  INGREDIENTS_DATABASE.find(ing => ing.id === id);

