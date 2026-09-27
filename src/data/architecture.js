/**
 * SafeMed High-Level System Architecture
 * 
 * Flow:
 * User -> SafeMed Interface -> Backend / API -> Data Processing -> AI / Intelligent Components -> Database -> Analytics / Reporting
 */

export const architectureFlow = [
  {
    layer: "01",
    id: "user",
    title: "User / Reporter",
    role: "Intake Source",
    icon: "User",
    details: "Patient, healthcare professional, or researcher initiating an adverse drug reaction report.",
    subItems: ["Direct symptom input", "Prescription slip upload", "Querying safety stats"]
  },
  {
    layer: "02",
    id: "interface",
    title: "SafeMed Interface",
    role: "Presentation Layer",
    icon: "Monitor",
    details: "Modern responsive web frontend built with React and Tailwind CSS providing accessible reporting workflows.",
    subItems: ["Authentication UI", "Step-by-step reporting wizard", "Document OCR upload preview", "Chart.js visualization views"]
  },
  {
    layer: "03",
    id: "backend",
    title: "Backend / API Gateway",
    role: "Service Orchestration",
    icon: "Server",
    details: "Node.js REST / asynchronous services managing authenticated sessions, validation, and pipeline dispatch.",
    subItems: ["Request validation", "Security & rate control", "Pipeline dispatching"]
  },
  {
    layer: "04",
    id: "processing",
    title: "Data Processing & OCR",
    role: "Ingestion Engine",
    icon: "Cpu",
    details: "Vision and text processing pipelines converting raw inputs and prescription images into structured payloads.",
    subItems: ["OCR text extraction", "Data sanitization & parsing", "Schema standardization"]
  },
  {
    layer: "05",
    id: "ai",
    title: "AI / Intelligent Components",
    role: "Reasoning & Machine Learning",
    icon: "Brain",
    details: "Gemini, LangChain agents, and biomedical NLP pipelines for symptom standardization, alongside research models.",
    subItems: ["Clinical NLP normalization", "LLM reasoning with LangChain", "Quantum / Hybrid model research hooks"]
  },
  {
    layer: "06",
    id: "database",
    title: "Database Layer",
    role: "Persistence Store",
    icon: "Database",
    details: "Cloud Firestore datastore maintaining user profiles, adverse event telemetry, and prescription logs.",
    subItems: ["Encrypted user records", "Report document collections", "Reaction indexing"]
  },
  {
    layer: "07",
    id: "analytics",
    title: "Analytics / Reporting",
    role: "Insights & Export",
    icon: "BarChart3",
    details: "Statistical aggregation engine feeding visual dashboards, alert metrics, and pharmacovigilance reports.",
    subItems: ["Dynamic trend aggregation", "Safety anomaly alerts", "Exportable report summaries"]
  }
];
