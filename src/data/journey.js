/**
 * SafeMed Project Journey Chronology
 * 
 * Strict sequence:
 * 01 Experience / Observation
 * 02 SafeMed Prototype
 * 03 Survey / Landscape
 * 04 Research 1
 * 05 Research 2 (Quantum Models)
 * 06 Research 3 (Deep Learning + Quantum)
 */

export const journeyStages = [
  {
    step: "01",
    id: "experience",
    stageNumber: 1,
    title: "The Idea",
    phase: "Origin & Observation",
    year: "[Year / Origin]",
    icon: "Lightbulb",
    shortSummary: "A real-world experience and observation of Adverse Drug Reactions revealed systemic reporting friction, giving birth to the core question behind SafeMed.",
    description: "[Describe the real-life experience / observation that led to the idea — content to be added later.]",
    keyInsight: "Observation of delayed or fragmented reporting workflows underscored the urgent necessity for modern, user-centric reporting interfaces.",
    progressionNote: "Experience created the initial spark and recognized the critical reporting gap.",
    details: [
      { label: "Trigger", value: "[Real-world observation of adverse drug reaction complexity]" },
      { label: "Initial Question", value: "Why is drug safety and adverse event reporting still fraught with manual barriers?" },
      { label: "Core Imperative", value: "Bridging the gap between patient reporting experience and reliable pharmacovigilance." }
    ]
  },
  {
    step: "02",
    id: "prototype",
    stageNumber: 2,
    title: "SafeMed Prototype",
    phase: "First Implementation",
    year: "[Year / Prototype]",
    icon: "AppWindow",
    shortSummary: "Transforming the initial concept into an interactive digital workflow: Authentication, structured ADR reporting, prescription OCR, reaction analytics, and an intuitive dashboard.",
    description: "[Describe how the first SafeMed prototype was designed and what it attempted to solve — content to be added later.]",
    keyInsight: "Demonstrated that an accessible digital reporting workflow with OCR intake substantially lowers user friction.",
    progressionNote: "The idea materialized into a tangible working prototype, highlighting new research-level questions.",
    details: [
      { label: "Architecture", value: "Full-stack web application with responsive UI and cloud datastore" },
      { label: "Core Feature", value: "Structured ADR intake accompanied by optional prescription OCR" },
      { label: "Observation", value: "While the workflow succeeded, classifying and evaluating reactions warranted rigorous algorithmic backing." }
    ]
  },
  {
    step: "03",
    id: "survey",
    stageNumber: 3,
    title: "Understanding the Landscape",
    phase: "Survey & Literature Review",
    year: "[Year / Survey]",
    icon: "Compass",
    shortSummary: "Moving beyond pure software prototyping to comprehensively map existing pharmacovigilance literature, contemporary NLP techniques, and systemic research gaps.",
    description: "[Survey/review content will be added later — mapping current reporting pipelines, limitations of existing tools, and opportunities for advanced computational paradigms.]",
    keyInsight: "Identified clear computational gaps in how complex multi-drug interactions and adverse event correlations are detected and modeled.",
    progressionNote: "The prototype led directly to a rigorous survey of the scientific literature.",
    details: [
      { label: "Scope", value: "[Survey objective and systematic literature review scope]" },
      { label: "Observed Gap", value: "[Limitations in existing reporting databases and classical NLP pipelines]" },
      { label: "Research Opportunity", value: "[Identifying the transition from basic rule-based systems to deep computational models]" }
    ]
  },
  {
    step: "04",
    id: "research-1",
    stageNumber: 4,
    title: "Research 1: SafeMed ADE Awareness & Reporting Platform",
    phase: "First Academic Investigation",
    year: "2025",
    icon: "FileText",
    researchId: 1,
    shortSummary: "Published research addressing under-reporting of ADRs in India through SafeMed: a patient-centric, AI-driven digital platform integrating prescription OCR, AI categorization, and AMC routing.",
    description: "Published in IEEE ICICV-2025: 'SafeMed: An ADE Awareness Platform for Survey and Reporting' (ISBN: 979-8-3315-1174-6). Analyzes the severe underreporting of ADRs in India (<1% vs. ~5% global average) and evaluates public awareness (73.5% unaware) alongside digital platform readiness (86.4% in favor of online portals). Details the modular three-tier architecture connecting patients, AMCs, and regulatory bodies.",
    keyInsight: "Empirical survey established an acute public awareness deficit (73.5% unawareness) contrasted by overwhelming support (86.4%) for digital reporting platforms.",
    progressionNote: "Literature review findings and prototype workflows materialized into our first peer-reviewed IEEE publication.",
    details: [
      { label: "Focus", value: "ADR Awareness, Digital Reporting & Pharmacovigilance Architecture" },
      { label: "Deliverable", value: "Published in IEEE ICICV-2025 (pp. 701–706, ISBN: 979-8-3315-1174-6)" },
      { label: "Open Challenge", value: "Prescription OCR handwriting variability, rural digital divide, and revitalizing non-functional AMCs (43%)." }
    ]
  },
  {
    step: "05",
    id: "research-2",
    stageNumber: 5,
    title: "Research 2: Quantum Models",
    phase: "Quantum Computational Exploration",
    year: "[Year / Research 2]",
    icon: "Atom",
    researchId: 2,
    shortSummary: "Pioneering the application of quantum models and quantum machine learning circuits to tackle the exponential feature spaces of adverse drug events and molecular interactions.",
    description: "[Quantum models research content to be added later. Exploring quantum feature maps, variational circuits, and state encoding.]",
    keyInsight: "Demonstrated that quantum representations offer novel subspace embeddings for intricate, high-dimensional drug reaction attributes.",
    progressionNote: "Investigating whether quantum computing could resolve high-dimensional correlation bottlenecks.",
    details: [
      { label: "Direction", value: "Quantum Machine Learning & Variational Quantum Classifiers" },
      { label: "Theoretical Scope", value: "Quantum Hilbert spaces for mapping complex multi-drug adverse associations" },
      { label: "Hardware Context", value: "Simulated quantum computing with noise modeling for NISQ feasibility" }
    ]
  },
  {
    step: "06",
    id: "research-3",
    stageNumber: 6,
    title: "Research 3: Deep Learning + Quantum",
    phase: "Hybrid Intelligence",
    year: "[Year / Research 3]",
    icon: "Sparkles",
    researchId: 3,
    shortSummary: "Unifying classical deep neural networks with parameterized quantum circuits into an end-to-end hybrid framework for superior feature extraction and predictive sensitivity.",
    description: "[Deep learning + quantum hybrid research content to be added later. Combining neural feature extraction with quantum variational layers.]",
    keyInsight: "Achieved synergistic coupling: classical layers distill multi-modal patient/clinical narratives while quantum layers capture complex non-linear entanglements.",
    progressionNote: "Synthesizing deep learning power with quantum mechanics to form a unified computational vanguard.",
    details: [
      { label: "Architecture", value: "Hybrid Quantum-Classical Neural Network (HQNN)" },
      { label: "Integration", value: "Seamless backpropagation bridging PyTorch/TensorFlow with Qiskit/PennyLane" },
      { label: "SafeMed Vision", value: "Serving as the intelligent computational backbone for future pharmacovigilance engines" }
    ]
  }
];

export const journeyConnectionNarrative = {
  heading: "From Experience to Hybrid Quantum Intelligence",
  narrativeFlow: [
    {
      step: "01",
      title: "Real Experience",
      detail: "Encountering friction in ADR reporting ignited the core research inquiry."
    },
    {
      step: "02",
      title: "Functional Prototype",
      detail: "SafeMed was built to digitize the user flow and capture structured adverse event reports."
    },
    {
      step: "03",
      title: "Comprehensive Survey",
      detail: "Academic literature was analyzed to locate exact gaps in modern pharmacovigilance."
    },
    {
      step: "04",
      title: "Foundational Research",
      detail: "Research 1 formalized the problem with empirical modeling and baseline architectures."
    },
    {
      step: "05",
      title: "Quantum Exploration",
      detail: "Research 2 pushed computational boundaries by encoding drug safety states into quantum circuits."
    },
    {
      step: "06",
      title: "Deep Learning + Quantum",
      detail: "Research 3 synthesized deep neural representations with quantum variational layers."
    },
    {
      step: "07",
      title: "Next-Gen SafeMed",
      detail: "SafeMed synthesizes this full research continuum into a holistic drug safety paradigm."
    }
  ]
};
