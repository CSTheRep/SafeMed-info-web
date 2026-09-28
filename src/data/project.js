/**
 * Central Project Configuration and Metadata for SafeMed
 * 
 * Update these links and text when your external repositories, papers, 
 * or contact channels become active.
 */

export const projectConfig = {
  name: "SafeMed",
  tagline: "A Research-Driven Approach to Safer Adverse Drug Event Reporting",
  description: "SafeMed is a healthcare technology and research project exploring digital approaches to adverse drug reaction/event reporting, data, artificial intelligence, and emerging computational methods.",
  
  // External & Showcase Links (Configure these anytime)
  links: {
    github: "https://github.com/CSTheRep", // GitHub profile / repository URL
    researchArchive: "/research", // Route or external URL to papers
    documentation: "#", // Replace with docs link if available
    demonstration: "#", // Replace with live demo URL if available
    contactEmail: "contact@safemed-project.org", // Contact email
    authorProfile: "https://www.linkedin.com/in/priyanshu-kumar-b7370224b/", // LinkedIn profile
  },

  // Problem, Gap, Opportunity, Goal (Why SafeMed?)
  whySafeMed: [
    {
      id: "problem",
      tag: "The Challenge",
      title: "The Problem",
      icon: "AlertTriangle",
      color: "amber",
      content: "[Explain the problem that inspired SafeMed — content to be added later. Adverse Drug Reactions (ADRs) and Events (ADEs) represent a profound public health concern, yet underreporting and complex medical jargon hinder timely intervention.]"
    },
    {
      id: "gap",
      tag: "The Bottleneck",
      title: "The Gap",
      icon: "GitBranch",
      color: "rose",
      content: "[Explain the limitation/gap that was observed — content to be added later. Legacy pharmacovigilance relies on fragmented, retrospective reporting pipelines that lack intuitive user intake, real-time OCR extraction, and adaptive computational modeling.]"
    },
    {
      id: "opportunity",
      tag: "The Innovation",
      title: "The Opportunity",
      icon: "Cpu",
      color: "teal",
      content: "[Explain why digital technology / AI could be explored — content to be added later. Uniting modern web architectures, machine-assisted document parsing (OCR), and advanced AI creates an opportunity to streamline the reporting loop from patient intake to clinical analytics.]"
    },
    {
      id: "goal",
      tag: "The Mission",
      title: "The Goal",
      icon: "Target",
      color: "sky",
      content: "[Explain the original SafeMed goal — content to be added later. To architect an accessible, end-to-end digital ecosystem that empowers users to report adverse drug reactions effortlessly while offering research-grade computational intelligence for safety monitoring.]"
    }
  ],

  // Origin Story
  origin: {
    title: "Where the Idea Came From",
    subtitle: "Every research journey begins with a question.",
    quote: "[Describe the real-life experience / observation that led to the idea — content to be added later.]",
    steps: [
      {
        stage: "01",
        label: "Experience",
        title: "The Catalyst",
        description: "[Describe the firsthand experience encountering medication side-effects and the difficulty of communicating symptoms accurately.]"
      },
      {
        stage: "02",
        label: "Observation",
        title: "Systemic Friction",
        description: "[Observing how patients struggle with clinical nomenclature and how physicians lack rapid structured adverse reaction telemetry.]"
      },
      {
        stage: "03",
        label: "Problem Recognition",
        title: "Framing the Need",
        description: "[Recognizing that existing adverse event reporting systems suffer from severe friction, high latency, and low patient adoption.]"
      },
      {
        stage: "04",
        label: "SafeMed Idea",
        title: "Conceptual Genesis",
        description: "[Formulating the vision for SafeMed: an intuitive, intelligent bridge uniting user-friendly intake, OCR, and analytical depth.]"
      }
    ]
  },

  // Prototype Overview
  prototype: {
    title: "From Idea to Prototype",
    subtitle: "Bridging the conceptual divide with a working digital demonstration.",
    description: "[Describe how the first SafeMed prototype was designed and what it attempted to solve — content to be added later.]",
    badge: "Early SafeMed Prototype",
    progression: [
      { step: "01", label: "Idea", note: "Recognized the reporting gap" },
      { step: "02", label: "Concept", note: "Designed patient-centered intake" },
      { step: "03", label: "Prototype", note: "Implemented initial web app with OCR" }
    ],
    features: [
      { name: "Authenticated Patient Portal", desc: "Secure role-based authentication allowing users to catalog medication histories." },
      { name: "Guided ADR Reporting Form", desc: "Structured wizard reducing medical ambiguity through assisted symptom prompts." },
      { name: "Prescription OCR Intake", desc: "Optical character recognition to auto-extract drug names, dosages, and regimens from paper slips." },
      { name: "Interactive Analytics Dashboard", desc: "Dynamic reaction frequency charts and medication safety summaries powered by Chart.js." }
    ]
  },

  // Survey Stage
  survey: {
    title: "Understanding the Research Landscape",
    subtitle: "Transitioning from empirical prototyping to formal literature analysis.",
    description: "[Survey/review content will be added later. A systematic investigation into existing pharmacovigilance methods, deep learning architectures, and computational limitations.]",
    framework: [
      {
        title: "Existing Work",
        desc: "[Examine current regulatory reporting mechanisms like FAERS, WHO-UMC VigiBase, and conventional hospital EHR alert systems.]",
        icon: "Library"
      },
      {
        title: "Patterns & Gaps",
        desc: "[Identify latency in adverse signal detection, severe class imbalance, and the inability of classical NLP to model multi-drug synergies.]",
        icon: "Search"
      },
      {
        title: "Research Opportunities",
        desc: "[Pinpoint the transformative potential of quantum state representations and hybrid deep learning models for high-dimensional ADE spaces.]",
        icon: "Lightbulb"
      },
      {
        title: "Next Direction",
        desc: "[Formulate the 3-paper research agenda progressing from baseline studies to quantum and hybrid quantum-classical neural pipelines.]",
        icon: "ArrowRight"
      }
    ],
    placeholders: {
      objective: "[Survey Objective: Synthesizing current computational techniques in ADE detection and pharmacovigilance — to be expanded]",
      scope: "[Scope: Peer-reviewed literature spanning biomedical NLP, machine learning, and emerging quantum algorithms]",
      approaches: "[Existing Approaches: Rule-based extraction, recurrent neural networks, biomedical BERT variants]",
      gaps: "[Observed Gaps: Inability to capture complex multi-molecular quantum configurations and multi-drug interaction entanglements]",
      opportunity: "[Research Opportunity: Hybridizing deep representation learning with parameterized quantum circuits]"
    }
  },

  // Current Progress Milestones
  currentProgress: [
    {
      milestone: "Concept",
      badge: "Formative",
      status: "Completed",
      description: "[Status / description — Initial idea validated through observation and user need identification.]"
    },
    {
      milestone: "Prototype",
      badge: "Implementation",
      status: "Operational",
      description: "[Status / description — Early SafeMed digital workflow demonstrated with authentication, ADR intake, OCR, and dashboard.]"
    },
    {
      milestone: "Research",
      badge: "Investigation",
      status: "Academic Phase",
      description: "[Status / description — Comprehensive survey and formal academic papers spanning foundational and advanced computational paradigms.]"
    },
    {
      milestone: "AI / Computational Exploration",
      badge: "Advanced Tech",
      status: "Active Exploration",
      description: "[Status / description — Rigorous exploration of Quantum Machine Learning circuits and hybrid deep learning architectures.]"
    },
    {
      milestone: "Current Development",
      badge: "Evolution",
      status: "In Progress",
      description: "[Status / description — Synthesizing empirical findings and research models toward the next-generation SafeMed architecture.]"
    }
  ],

  // Future Vision
  futureVision: [
    {
      title: "Further Research",
      icon: "BookOpen",
      description: "[Future direction content will be added later — Expanding peer-reviewed publications and open benchmark datasets.]"
    },
    {
      title: "Improved Reporting Workflow",
      icon: "Workflow",
      description: "[Future direction content will be added later — Seamless conversational and voice-assisted adverse event intake.]"
    },
    {
      title: "Advanced AI Methods",
      icon: "Brain",
      description: "[Future direction content will be added later — Domain-adapted clinical foundation models and biomedical reasoning agents.]"
    },
    {
      title: "Quantum / Hybrid Computational Exploration",
      icon: "Atom",
      description: "[Future direction content will be added later — Deploying hybrid circuits onto real fault-tolerant quantum hardware processors.]"
    },
    {
      title: "Better Analytics & Visual Intelligence",
      icon: "BarChart3",
      description: "[Future direction content will be added later — Predictive pharmacovigilance dashboards with population-scale signal detection.]"
    },
    {
      title: "Future Experimentation & Clinical Validation",
      icon: "FlaskConical",
      description: "[Future direction content will be added later — Collaborative trials with healthcare providers and pharmacovigilance centers.]"
    }
  ],

  // About Section
  about: {
    heading: "About SafeMed",
    subheading: "A research endeavor at the intersection of medical informatics and computational intelligence.",
    fullDescription: "[Full project description will be added later. SafeMed originated as an applied healthcare project to address the friction in reporting medication side effects, subsequently evolving into an intensive research inquiry spanning modern web engineering, artificial intelligence, quantum computing, and biomedical data science.]",
    keyFacts: [
      { label: "Focus Domain", value: "Adverse Drug Reactions (ADR) & Adverse Drug Events (ADE)" },
      { label: "Research Tracks", value: "Foundational, Quantum Models, Hybrid Deep Learning" },
      { label: "Original Architecture", value: "React, Tailwind, Node.js, Firestore, OCR, AI" },
      { label: "Current Status", value: "Academic Research Showcase & Evolutionary Stage" }
    ]
  }
};
