/**
 * SafeMed Conceptual Workflow
 * 
 * Flow:
 * 1. Login
 * 2. ADR Report
 * 3. Optional Prescription OCR
 * 4. Reaction Information
 * 5. Statistics / Dashboard
 */

export const workflowSteps = [
  {
    step: "01",
    id: "login",
    title: "Login & Authentication",
    icon: "Lock",
    tag: "Access",
    shortDescription: "[Describe this stage — Secure user access allowing patients and clinical reporters to create verified sessions and manage reporting history.]",
    keyActions: [
      "User credentials verification",
      "Session establishment",
      "Profile access management"
    ]
  },
  {
    step: "02",
    id: "adr-report",
    title: "ADR Report Initiation",
    icon: "FilePlus",
    tag: "Intake",
    shortDescription: "[Describe this stage — Structured intake form prompting the user for medication taken, onset timing, severity, and observable symptoms.]",
    keyActions: [
      "Medication identification",
      "Symptom timeline recording",
      "Severity categorization"
    ]
  },
  {
    step: "03",
    id: "prescription-ocr",
    title: "Optional Prescription OCR",
    icon: "Scan",
    tag: "Vision / Extraction",
    isOptional: true,
    shortDescription: "[Describe this stage — Optional document upload enabling automated optical extraction of drug dosage, brand names, and prescribing metadata directly from prescription images.]",
    keyActions: [
      "Prescription slip upload",
      "Optical character extraction",
      "Automated field pre-filling"
    ]
  },
  {
    step: "04",
    id: "reaction-info",
    title: "Reaction Information",
    icon: "Info",
    tag: "Clinical Synthesis",
    shortDescription: "[Describe this stage — Contextual enrichment mapping user-reported side effects against standardized medical reaction terminologies and safety indicators.]",
    keyActions: [
      "Terminology normalization",
      "Reaction severity flagging",
      "Safety guidance display"
    ]
  },
  {
    step: "05",
    id: "dashboard",
    title: "Statistics / Dashboard",
    icon: "LayoutDashboard",
    tag: "Analytics",
    shortDescription: "[Describe this stage — Visual analytics dashboard aggregating individual report history, common reaction frequencies, and trends across logged medications.]",
    keyActions: [
      "Interactive frequency charts",
      "Personalized report logs",
      "Aggregate trend monitoring"
    ]
  }
];
