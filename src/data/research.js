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
    title: "SafeMed: An ADE Awareness Platform for Survey and Reporting",
    area: "ADR Awareness, Digital Reporting & Pharmacovigilance Architecture",
    authors: [
      "Nongmeikapam Thoiba Singh",
      "Priyanshu Kumar",
      "Bhawna Bisht"
    ],
    affiliations: "Department of Computer Science Engineering, Chandigarh University, Mohali, Punjab, India",
    authorEmails: [
      "nthoiba12@gmail.com",
      "priyanshukcs16@gmail.com",
      "bbhawna0730@gmail.com"
    ],
    year: "2025",
    status: "Published (IEEE ICICV-2025)",
    doi: "ISBN: 979-8-3315-1174-6",
    venue: "Proceedings of the 6th International Conference on Intelligent Communication Technologies and Virtual Mobile Networks (ICICV-2025), IEEE, pp. 701–706",
    citation: "N. T. Singh, P. Kumar, and B. Bisht, \"SafeMed: An ADE Awareness Platform for Survey and Reporting,\" in Proc. 6th Int. Conf. Intell. Commun. Technol. Virtual Mob. Netw. (ICICV-2025), 2025, pp. 701–706. ISBN: 979-8-3315-1174-6.",
    keywords: [
      "patient safety",
      "user-cantered design",
      "adverse drug reactions",
      "pharmacovigilance",
      "reporting procedure"
    ],
    link: "", // Official IEEE conference publication
    codeLink: "",
    abstract: "Under-reporting of adverse drug reactions (ADRs) is a significant challenge in the timely identification of risk and patient safety. This paper addresses this critical issue by developing SafeMed, a novel, user-friendly website designed to revolutionize ADR reporting through increased public awareness and simplified reporting processes. SafeMed is an online, non-specialist resource that gives transparent and comprehensive information about reporting ADRs. With a user-centered design approach, SafeMed ensures accessibility, efficiency, and effectiveness for a diverse user base. The platform empowers patients and healthcare professionals with easy-to-follow instructions and tools to streamline the reporting procedure. This innovation fosters greater public participation in the pharmacovigilance system, eventually enhancing medication safety. The study provides a revolutionary pharmacovigilance approach through a scalable, user-centered solution that enhances patient safety and dramatically increases the ADR reporting rate.",
    summary: "Investigates the severe underreporting of Adverse Drug Reactions (ADRs) in India (<1% reporting rate vs. ~5% global average) and presents SafeMed: a patient-centric, AI-driven three-tier digital pharmacovigilance platform integrating prescription OCR, multi-language support, real-time analytics, AMC routing, and regulatory monitoring.",
    sections: {
      background: "Adverse Drug Reactions (ADRs) pose a significant challenge to global healthcare systems, impacting patient safety and delaying the identification of medication-related risks [12]. Despite the critical role of ADR reporting in pharmacovigilance, underreporting remains a widespread and persistent issue, often attributed to limited public awareness, complexity in reporting procedures, and the absence of accessible platforms for non-specialists [13]. In India, the Pharmacovigilance Programme of India (PvPI), launched in 2010 by the Indian Pharmacopoeia Commission (IPC) under the Central Drugs Standard Control Organization (CDSCO), currently encompasses over 200 Adverse Drug Reaction Monitoring Centers (AMCs) across India [1]. However, ADR reporting in India remains substantially low—less than 1% compared to an international average of approximately 5% [2]. Tandon et al. [3] highlighted that although PvPI has established over 250 AMCs, 43% remain non-functional, significantly hindering the efficiency of pharmacovigilance efforts.",
      problemStatement: "Under-reporting of ADRs continues to weaken the pharmacovigilance system, delaying timely interventions and compromising patient safety [12], [14]. Conventional reporting mechanisms rely heavily on healthcare professionals, who face physician workloads, reluctance to report, and lack of training [15], [16], [17]. Furthermore, public awareness is severely limited: an empirical survey conducted in this study revealed that 73.5% of respondents were completely unaware of ADRs, 14.3% had limited awareness, and only 12.2% demonstrated a clear understanding [Fig. 1]. In addition, inconsistencies in ADR reporting standards, inadequate training for healthcare professionals, and limited integration of digital tools continue to pose major challenges in India [7], especially when contrasted with systems like the US FDA's MedWatch and the European Medicines Agency's EudraVigilance, which each receive over 100,000 ADR reports annually [8].",
      motivation: "Digital platforms have played a transformative role in pharmacovigilance worldwide. Blenkinsopp et al. [11] demonstrated that introducing online ADR reporting portals and mobile applications in the UK increased ADR reports by 60% over five years. While India's mobile-based ADR reporting is still in its early stages [7], empirical survey results conducted as part of this study revealed that 86.4% of respondents support the use of online platforms for reporting adverse drug events (ADEs) to the relevant authorities [Fig. 2]. This indicates a strong public inclination toward digital solutions like SafeMed, which simplifies the reporting process, provides transparent information, and makes pharmacovigilance accessible to the general population, bridging the gap between patients, healthcare professionals, and regulatory authorities.",
      objectives: "1. Develop SafeMed as a patient-centric, AI-driven digital platform aimed at simplifying and enhancing the ADR monitoring process [21].\n2. Empower patients and non-specialists to report ADRs effortlessly through user-friendly web and mobile interfaces with multilingual support [4], [23].\n3. Integrate Optical Character Recognition (OCR) technology to extract prescription details from uploaded images and PDFs, reducing manual data entry errors [19].\n4. Leverage AI-driven ADR categorization and TensorFlow-based machine learning models to identify emerging patterns, group similar cases, and assess potential severity [22].\n5. Establish automated risk alerts and direct communication routing reports to the nearest Adverse Drug Reaction Monitoring Center (AMC) with two-way follow-up capability.\n6. Provide interactive real-time ADR monitoring dashboards for regulatory bodies and pharmaceutical companies to improve responsiveness in drug safety management [8].",
      methodology: "SafeMed follows an end-to-end, participatory methodology (flowchart illustrated in Fig. 3):\n• Registration & Ingestion: Users begin by registering or logging in, followed by reporting an ADR through either manual data entry or PDF/image upload. If a PDF is uploaded, Optical Character Recognition (OCR) extracts prescription details; manual entry utilizes a built-in medicine database search to minimize errors.\n• ADR Categorization & Similarity Matching: Algorithms classify ADR cases based on severity, drug type, and patient demographics, grouping similar ADR cases and assessing potential severity.\n• Database Storage & ML Pattern Analysis: Structured data is stored in a secure dual-database layer where machine learning models analyze patterns in real time.\n• Generation of Reports & Alerts: The system generates ADR reports and automated risk alerts, updating regulatory dashboards and notifying nearest AMCs.\n• Two-Way Communication: Enables AMCs to review reports promptly, request additional details from users, and provide follow-up guidance.",
      dataset: "The empirical data, surveys, and system data sources utilized in this study comprise:\n• ADR Awareness Survey (Fig. 1): Primary survey evaluating public awareness of Adverse Drug Reactions (73.5% unaware, 14.3% somewhat aware, 12.2% clearly aware).\n• Online Platform Adoption Survey (Fig. 2): Primary survey assessing public willingness to report ADEs digitally (86.4% supporting online portals for reporting ADEs to authorities).\n• Built-in Medicine Database: Comprehensive pharmaceutical catalog integrated into the UI for rapid medicine search and selection.\n• Prescription Document Data: Uploaded prescription images and PDF files processed via OCR extraction algorithms [19].\n• Geographic AMC Directory: Spatial mapping data of Adverse Drug Reaction Monitoring Centers across India to route reports to the nearest AMC.",
      architecture: "SafeMed follows a modular, three-tier architecture:\n1. User Interface Layer: Web application built with React.js and mobile application built with React Native. Provides intuitive interfaces for ADR reporting, medicine searches, and statistical insights, incorporating multi-language support and mobile-friendly responsive design [23].\n2. Processing Layer: Powered by Node.js and Python [20]. Incorporates Optical Character Recognition (OCR) technology for prescription data extraction [19], Natural Language Processing (NLP) models to enhance user input interpretation and data classification, and TensorFlow-based machine learning models for ADR pattern recognition and drug interaction forecasting. Includes an automated AI-driven alerting system.\n3. Data Management Layer: Dual-database architecture utilizing MongoDB and PostgreSQL for high-performance storage and retrieval of ADR reports and prescription data. Integrates an analytics engine and an interactive regulatory dashboard visualizing high-risk medications and emerging ADR trends [8].",
      experimentalSetup: "The experimental and system implementation setup encompasses:\n• Web Frontend: React.js application delivering responsive user interfaces for Home, Registration, AMC Locator, and ADR Reporting forms (Figs. 4–7).\n• Mobile Frontend: React Native cross-platform application providing mobile-first accessibility.\n• Backend Infrastructure: Node.js and Python microservices executing server logic, data routing, and machine learning pipelines [20].\n• Document Processing: OCR pipeline for optical extraction of text from prescription documents [19].\n• Machine Learning Framework: TensorFlow models for ADR similarity matching, pattern recognition, and predictive analytics.\n• Database Environment: PostgreSQL relational database combined with MongoDB document database for structured and unstructured safety data.\n• Empirical Survey: Public opinion survey conducted in India evaluating ADR awareness and online reporting portal acceptance.",
      results: "The empirical survey results and platform implementation outcomes documented in the paper are:\n• Survey on the Need to Create Awareness of ADR (Fig. 1):\n  - 73.5% of people do not know about ADRs\n  - 14.3% of people somewhat know about ADRs\n  - 12.2% of people do know about ADRs\n• Survey on Using Online Platforms for ADR Reporting (Fig. 2):\n  - 86.4% of respondents support using online portals for reporting ADEs to the concerned authorities\n• System Implementation & Functional Verification (Figs. 4–7):\n  - Home Interface (Fig. 4): Primary navigation interface where users can initiate ADR reporting.\n  - AMC Locator (Fig. 5): Interactive feature enabling users to check for locations of AMCs in their city.\n  - User Registration (Fig. 6): Streamlined registration interface allowing users to create an account.\n  - ADR Reporting Form (Fig. 7): Structured reporting form for systematic submission and analysis of adverse drug reactions.",
      discussion: "The findings underscore a severe disparity between the necessity of drug safety surveillance and public knowledge in India, where ADR reporting rates remain below 1% (compared to ~5% globally). With 43% of over 250 established AMCs non-functional [3], relying exclusively on voluntary physician reporting is insufficient. SafeMed shifts pharmacovigilance to an inclusive, patient-centric paradigm. By providing an intuitive multilingual interface, prescription OCR, AI-driven categorization, and direct AMC routing, SafeMed reduces reporting friction. Concurrently, the 86.4% public support for online reporting highlights strong demand for accessible digital health interventions that foster collaboration between patients, healthcare professionals, and regulatory bodies.",
      limitations: "The paper acknowledges several practical and institutional limitations:\n1. Severe public awareness deficit (73.5% unaware of ADRs) necessitates extensive public education campaigns for sustained community participation.\n2. Handwritten prescription variability, lighting conditions, and image resolutions present challenges for OCR accuracy, requiring human-in-the-loop verification options.\n3. Diverse linguistic demographics and digital divides across India require continuous expansion of multi-language translations and lightweight mobile interfaces.\n4. Approximately 43% of established AMCs in India are non-functional [3], meaning institutional infrastructure must be revitalized to respond promptly to routed digital reports.\n5. Future components like blockchain data verification and federated learning remain exploratory and are not yet fully implemented in the baseline system.",
      futureWork: "The future research and technological roadmap outlined in the paper includes:\n• Predictive Deep Learning Models: Advanced algorithms to forecast adverse reactions and identify high-risk medications before widespread clinical occurrence.\n• AI-Powered Chatbots: Conversational assistants for automated user guidance during ADR reporting and instant symptom-based recommendations.\n• EHR Interoperability: Seamless integration with Electronic Health Record systems for automated documentation.\n• Federated Learning Models: Collaborative, decentralized machine learning that enhances predictive analytics while maintaining strict patient data privacy.\n• Blockchain Technology: Immutable distributed ledgers to ensure data transmission integrity, transparency, and auditability.\n• IoT-Based Health Monitoring: Real-time physiological data collection from wearable devices to enhance adverse event detection.\n• Global Pharmacovigilance Collaboration: Cross-border ADR data exchange partnerships with global bodies such as the WHO, US FDA, and EMA.",
      conclusion: "SafeMed marks a significant advancement in pharmacovigilance by addressing critical challenges: underreporting of adverse drug reactions, inefficiencies in data collection, and the lack of real-time regulatory interventions. By integrating cutting-edge technologies like machine learning, natural language processing (NLP), prescription OCR, and robust web and mobile interfaces, SafeMed creates a comprehensive, user-friendly, and intelligent ADR reporting ecosystem. The platform empowers patients, streamlines reporting for healthcare professionals, and provides regulatory authorities with real-time, actionable intelligence—fostering a safer, more transparent healthcare ecosystem."
    },
    references: [
      "F. Mukadam and U. Gawali, \"Adverse drug reactions: A retrospective analysis from the ADR monitoring centre at a tertiary care hospital,\" J. Pharm. Care., vol. 12, no. 1, 2024.",
      "U. Thatte, M. Mahajan, N. Gogtay, and S. Deshpande, \"An analysis of completeness and quality of adverse drug reaction reports at an ADR monitoring centre in western India,\" Perspect. Clin. Res., vol. 9, no. 3, p. 123, 2018.",
      "V. R. Tandon, V. Mahajan, V. Khajuria, and Z. Gillani, \"Under-reporting of adverse drug reactions: A challenge for pharmacovigilance in India,\" Indian J. Pharmacol., vol. 47, no. 1, pp. 65–67, 2015.",
      "A. Kitabayashi and Y. Inoue, \"Factors that lead to stagnation in direct patient reporting of adverse drug reactions: An opinion survey of the general public and physicians in Japan,\" Therap. Innov. Regul. Sci., vol. 56, no. 3, pp. 616–624, 2022.",
      "J. Robertson and D. A. Newby, \"Low awareness of adverse drug reaction reporting systems: A consumer survey,\" Med. J. Aust., vol. 199, no. 10, pp. 684–686, 2013.",
      "S. Upasani, M. Upasani, A. Ahmed, N. Jain, and P. Pal, \"Clinical view on adverse drug reactions, pharmacovigilance in India, and role of clinical pharmacists,\" World J. Adv. Res. Rev., vol. 10, no. 3, pp. 42-47, 2021.",
      "A. Dutta, A. Banerjee, S. Basu, and S. R. Chaudhry, \"Analysis of under-reporting of Adverse Drug Reactions: Scenario in India and neighboring countries,\" IP Int. J. Comp. Adv. Pharmacol., vol. 5, no. 3, pp. 1–7, 2020.",
      "M. Zehravi, M. Maqbool, and I. Ara, \"An overview about safety surveillance of adverse drug reactions and pharmacovigilance in India,\" Indian J. Nutr. Diet., vol. 58, no. 3, pp. 408–409, 2021.",
      "P. Thota, A. Thota, B. Medhi, S. Sidhu, P. Kumar, V. Selvan, and G. Singh, \"Drug safety alerts of the Pharmacovigilance Programme of India: A scope for targeted spontaneous reporting in India,\" Perspect. Clin. Res., vol. 9, no. 1, p. 51, 2018.",
      "V. Kalaiselvan, K. Rishi, P. Thota, A. Tripathi, and G. Singh, \"Status of documentation grading and completeness score for Indian individual case safety reports,\" Indian J. Pharmacol., vol. 47, no. 3, p. 325, 2015.",
      "A. Blenkinsopp, P. Wilkie, M. Wang, and P. A. Routledge, \"Patient reporting of suspected adverse drug reactions: A review of published literature and international experience,\" Br. J. Clin. Pharmacol., vol. 63, no. 2, pp. 148-156, 2006.",
      "K. Sienkiewicz, M. Burzyńska, I. Rydlewska-Liszkowska, J. Sienkiewicz, and E. Gaszyńska, \"The Importance of Direct Patient Reporting of Adverse Drug Reactions in the Safety Monitoring Process,\" Int. J. Environ. Res. Public Health, vol. 19, no. 1, p. 413, 2021.",
      "V. Tandon, V. Mahajan, V. Khajuria, and Z. Gillani, \"Under-reporting of adverse drug reactions: A challenge for pharmacovigilance in India,\" Indian J. Pharmacol., vol. 47, no. 1, p. 65, 2015.",
      "J. Adhikary, B. Bhandare, E. Adarsh, and V. Satyanarayana, \"A study to assess knowledge, attitude and practice of adverse drug reaction reporting among physicians in a tertiary care hospital,\" J. Evol. Med. Dent. Sci., vol. 2, no. 9, pp. 1027-1034, 2013.",
      "T. Sharma et al., \"Knowledge, attitude, and practice of pharmacovigilance among nursing professionals in a tertiary care teaching hospital in Dehradun, Uttarakhand,\" Int. J. Basic Clin. Pharmacol., vol. 6, no. 2, p. 414, 2017.",
      "S. Sen et al., \"Knowledge, attitudes, and practice of adverse drug reaction monitoring among physicians in India,\" Int. J. Basic Clin. Pharmacol., vol. 6, no. 6, p. 1497, 2017.",
      "M. Behera, R. Tripathy, V. Srivastava, and M. Das, \"Knowledge, attitude, and practice (KAP) of pharmacovigilance among pediatricians of Odisha and factors related to poor reporting of adverse drug reactions,\" J. Family Med. Prim. Care, vol. 11, no. 7, pp. 3524-3527, 2022.",
      "J. Gadhade, R. Hiray, R. Aherkar, and K. Shah, \"Pharmacovigilance programme of India: Revival of the renaissance,\" Int. J. Basic Clin. Pharmacol., vol. 7, no. 11, p. 2281, 2018.",
      "M. Vora, H. Upadhyaya, J. Nagar, and P. Patel, \"Knowledge, attitude, and practices toward pharmacovigilance and adverse drug reactions in postgraduate students of tertiary care hospital in Gujarat,\" J. Adv. Pharm. Technol. Res., vol. 6, no. 1, p. 29, 2015.",
      "V. Tandon, V. Mahajan, V. Khajuria, and Z. Gillani, \"Under-reporting of adverse drug reactions: A challenge for pharmacovigilance in India,\" Indian J. Pharmacol., vol. 47, no. 1, p. 65, 2015.",
      "P. Thota, A. Thota, B. Medhi, S. Sidhu, P. Kumar, V. Selvan, and G. Singh, \"Drug safety alerts of the Pharmacovigilance Programme of India: A scope for targeted spontaneous reporting in India,\" Perspect. Clin. Res., vol. 9, no. 1, p. 51, 2018.",
      "M. Zehravi, M. Maqbool, and I. Ara, \"An overview about safety surveillance of adverse drug reactions and pharmacovigilance in India,\" Indian J. Nutr. Diet., vol. 58, no. 3, pp. 408–409, 2021.",
      "A. Blenkinsopp, P. Wilkie, M. Wang, and P. A. Routledge, \"Patient reporting of suspected adverse drug reactions: A review of published literature and international experience,\" Br. J. Clin. Pharmacol., vol. 63, no. 2, pp. 148-156, 2006."
    ]
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
