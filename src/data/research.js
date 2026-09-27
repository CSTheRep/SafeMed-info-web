/**
 * SafeMed Research Papers Data
 * 
 * NOTE FOR USER:
 * To update the research papers with your real academic work:
 * 1. Replace the titles, authors, publication status, abstracts, and links below.
 * 2. Fill in the specific content under the `sections` object for each paper.
 * 3. Never edit the ID field so routing (/research/1, /research/2, /research/3) remains stable.
 */

export const researchPapers = [
  {
    id: 1,
    number: "01",
    tag: "Foundational Research",
    direction: "Research 1",
    title: "[Research Paper 1 Title]",
    area: "[Research Area to be added]",
    authors: [
      "[Author 1]",
      "[Author 2]",
      "[Author 3]"
    ],
    year: "[Year]",
    status: "[Publication / Review Status]",
    doi: "[DOI / Identifier to be added]",
    venue: "[Journal / Conference / Preprint Venue]",
    link: "", // Insert full paper URL / PDF link here (e.g. https://doi.org/... or arXiv link)
    codeLink: "", // Optional link to code repository
    abstract: "[A brief abstract connecting this foundational research work will be added here once provided. Content to be added.]",
    summary: "[Brief overview connecting the foundational methodology to adverse drug reaction exploration.]",
    sections: {
      background: "[Background context and historical context of adverse drug event detection — CONTENT TO BE ADDED]",
      problemStatement: "[Formal definition of the problem addressed in this paper — CONTENT TO BE ADDED]",
      motivation: "[The driving scientific and healthcare motivation for this research — CONTENT TO BE ADDED]",
      objectives: "[Primary research goals and measurable objectives — CONTENT TO BE ADDED]",
      methodology: "[Detailed methodological approach, computational paradigms, and formulation — CONTENT TO BE ADDED]",
      dataset: "[Data sources, cohort characteristics, ethical considerations, and preprocessing — CONTENT TO BE ADDED]",
      architecture: "[Detailed model architecture, baseline designs, and pipeline overview — CONTENT TO BE ADDED]",
      experimentalSetup: "[Hardware environment, hyperparameter tuning, validation criteria, and baselines — CONTENT TO BE ADDED]",
      results: "[Empirical findings, performance benchmarks, and comparative evaluation — CONTENT TO BE ADDED]",
      discussion: "[In-depth interpretation of experimental results, theoretical implications, and clinical relevance — CONTENT TO BE ADDED]",
      limitations: "[Identified technical, computational, or domain constraints of the current iteration — CONTENT TO BE ADDED]",
      futureWork: "[Planned research trajectories, expanded datasets, and next-generation iterations — CONTENT TO BE ADDED]",
      conclusion: "[Final synthesis of research contributions and key takeaways — CONTENT TO BE ADDED]"
    }
  },
  {
    id: 2,
    number: "02",
    tag: "Quantum Exploration",
    direction: "Quantum Models",
    title: "[Research Paper 2 Title]",
    area: "Quantum Models & Pharmacovigilance",
    authors: [
      "[Author 1]",
      "[Author 2]",
      "[Author 3]"
    ],
    year: "[Year]",
    status: "[Publication / Review Status]",
    doi: "[DOI / Identifier to be added]",
    venue: "[Journal / Conference / Preprint Venue]",
    link: "", // Insert full paper URL / PDF link here
    codeLink: "", // Optional link to code repository
    abstract: "[Abstract summarizing the investigation into quantum models and quantum machine learning architectures for adverse drug event evaluation — CONTENT TO BE ADDED.]",
    summary: "[Exploration of quantum-inspired algorithms and quantum circuits for complex ADE pattern recognition.]",
    sections: {
      background: "[Quantum computing background, QML foundations, and relevance to complex bio-molecular or drug interaction spaces — CONTENT TO BE ADDED]",
      problemStatement: "[High-dimensional drug interaction challenges and computational bottlenecks — CONTENT TO BE ADDED]",
      motivation: "[Why classical computational models encounter limits and how quantum paradigms offer novel representations — CONTENT TO BE ADDED]",
      objectives: "[Core research objectives for evaluating quantum models in pharmacovigilance — CONTENT TO BE ADDED]",
      methodology: "[Quantum state encoding, variational circuits, quantum feature mapping, and hybrid optimization routines — CONTENT TO BE ADDED]",
      dataset: "[Quantum-formatted benchmarking datasets and feature selection strategies — CONTENT TO BE ADDED]",
      architecture: "[Quantum circuit architectures, qubit parameterization, ansatz selection, and simulation framework — CONTENT TO BE ADDED]",
      experimentalSetup: "[Quantum simulator/hardware specs, noise modeling, shot counts, and classical baseline comparisons — CONTENT TO BE ADDED]",
      results: "[Simulated quantum performance metrics, convergence behavior, and fidelity metrics — CONTENT TO BE ADDED]",
      discussion: "[Critical analysis of quantum advantages, current NISQ hardware feasibility, and expressibility — CONTENT TO BE ADDED]",
      limitations: "[Qubit count limits, decoherence constraints, and data embedding overheads — CONTENT TO BE ADDED]",
      futureWork: "[Scaling to fault-tolerant quantum hardware and expanded multi-drug interaction circuits — CONTENT TO BE ADDED]",
      conclusion: "[Summary of findings from quantum model exploration — CONTENT TO BE ADDED]"
    }
  },
  {
    id: 3,
    number: "03",
    tag: "Hybrid Computational Approach",
    direction: "Deep Learning + Quantum",
    title: "[Research Paper 3 Title]",
    area: "Deep Learning + Quantum Computing (Hybrid HQNN)",
    authors: [
      "[Author 1]",
      "[Author 2]",
      "[Author 3]"
    ],
    year: "[Year]",
    status: "[Publication / Review Status]",
    doi: "[DOI / Identifier to be added]",
    venue: "[Journal / Conference / Preprint Venue]",
    link: "", // Insert full paper URL / PDF link here
    codeLink: "", // Optional link to code repository
    abstract: "[Abstract detailing the combined deep learning and quantum computing framework for next-generation adverse drug reaction intelligence — CONTENT TO BE ADDED.]",
    summary: "[Bridging neural network representations with quantum parameterized circuits for synergistic feature extraction.]",
    sections: {
      background: "[Emergence of hybrid classical-quantum computing paradigms and transformer/deep learning backbones — CONTENT TO BE ADDED]",
      problemStatement: "[Addressing multi-modal adverse event data (unstructured clinical text + molecular structures + patient demographics) — CONTENT TO BE ADDED]",
      motivation: "[Harnessing classical deep neural networks for feature compression combined with quantum layers for non-linear correlation mapping — CONTENT TO BE ADDED]",
      objectives: "[Developing and validating an end-to-end hybrid Deep Learning + Quantum pipeline — CONTENT TO BE ADDED]",
      methodology: "[Hybrid backpropagation, quantum gradient estimation (parameter-shift rule), and classical encoder design — CONTENT TO BE ADDED]",
      dataset: "[Multi-modal ADE benchmarks, clinical narrative corpuses, and chemical relation graphs — CONTENT TO BE ADDED]",
      architecture: "[Detailed schematic of Classical Neural Layers + Parameterized Quantum Layer + Output Classification Head — CONTENT TO BE ADDED]",
      experimentalSetup: "[End-to-end training parameters, hybrid simulation backends, and comprehensive baselines — CONTENT TO BE ADDED]",
      results: "[Comparative metrics across classical deep learning vs. standalone quantum vs. hybrid HQNN — CONTENT TO BE ADDED]",
      discussion: "[Why the synergy between deep representation learning and quantum subspaces enhances predictive robustness — CONTENT TO BE ADDED]",
      limitations: "[Latency in hybrid gradient evaluation and pipeline synchronization bottlenecks — CONTENT TO BE ADDED]",
      futureWork: "[Integration into clinical production pipelines and real-time pharmacovigilance streams — CONTENT TO BE ADDED]",
      conclusion: "[Concluding perspective on deep learning + quantum computing in drug safety science — CONTENT TO BE ADDED]"
    }
  }
];

export const researchOverview = {
  title: "Research Papers",
  subtitle: "Three progressive research tracks advancing from computational baseline to quantum and hybrid architectures.",
  intro: "[A brief overview connecting the three research works will be added later. The research tracks demonstrate an evolving progression from early computational inquiries to quantum exploration and ultimately synergistic deep learning + quantum hybrid models.]"
};
