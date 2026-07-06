/* ============================================================================
   CRISC  ::  contentData.js
   Exam facts, per-domain metadata + objectives, PBQ format definitions,
   curated external resources, the Exam-Mechanics and Career-Guidance readers,
   and the target objects the textbook-dense domain reading modules populate
   (CRISC.reading[1..4], appended from the lazy-loaded content modules).

   This file loads first and establishes the global CRISC namespace consumed
   by quizEngine.js, flashEngine.js, and app.js.

   Authored by Professor Rizwan Virani.
   ========================================================================== */
window.CRISC = window.CRISC || {};

/* SINGLE SOURCE OF TRUTH for every exam figure. The dashboard cards, mock-exam
   engine, scoring, analytics, readiness projection, and history readouts all
   READ from this object — no exam figure is duplicated as a literal elsewhere.

   Like the CISA and CISM, the CRISC is a FIXED-FORM, linear exam (not adaptive):
   150 multiple-choice questions in a single 4-hour appointment, scored on
   ISACA's 200–800 scale with 450 to pass. `itemsMin`/`itemsMax` are therefore
   equal, and `maxQuestions` (the full-length mock) matches the real exam length. */
CRISC.exam = {
  code: "CRISC",
  name: "CRISC",
  fullName: "Certified in Risk and Information Systems Control",
  vendor: "ISACA",
  format: "Fixed form",          // 150 linear multiple-choice items (not adaptive)
  minutes: 240,                  // 4 hours
  itemsMin: 150, itemsMax: 150,
  itemsLabel: "150",
  maxQuestions: 150,             // full-length mock length = the real fixed length
  scaleLow: 200, scaleHigh: 800, passing: 450,
  domains: 4,
  launched: "2010",
  body: "ISACA"
};

/* Per-domain metadata. `objectives` mirror the official ISACA CRISC Exam
   Content Outline (Effective 2025) at the subtopic level. `weight` is the
   official domain weight; `sectionCount` is the number of dense reading
   sections this platform authors for the domain (one per subtopic, with the
   broad subtopics split so each domain's section count is roughly proportional
   to its weight). */
CRISC.domainMeta = [
  { id: 1, weight: 26, color: "d1", icon: "🏛", title: "Governance", sectionCount: 15,
    short: "Establishing the governance IT risk is managed within: strategy, roles and accountability, policies, enterprise risk management, the three lines of defense, and risk appetite and tolerance.",
    objectives: [
      { id: "1A1", t: "Strategy, Goals & Objectives" },
      { id: "1A2", t: "Organizational Structure & Governance Roles" },
      { id: "1A3", t: "Roles, Responsibilities & Accountability (RACI)" },
      { id: "1A4", t: "Organizational Culture & Ethics" },
      { id: "1A5", t: "Policies & Standards" },
      { id: "1A6", t: "Business Processes & Resilience (BCP/DRP)" },
      { id: "1A7", t: "Organizational Asset Management" },
      { id: "1B1", t: "Enterprise Risk Management (ERM)" },
      { id: "1B2", t: "IT Risk & Enterprise Risk Alignment" },
      { id: "1B3", t: "The Three Lines of Defense" },
      { id: "1B4", t: "The Enterprise Risk Profile" },
      { id: "1B5", t: "Risk Appetite & Risk Tolerance" },
      { id: "1B6", t: "Risk Governance Frameworks (COBIT, ISO 31000, COSO ERM)" },
      { id: "1B7", t: "Legal, Regulatory & Contractual Requirements" },
      { id: "1B8", t: "Governance vs. Management & Board Oversight" }
    ] },
  { id: 2, weight: 22, color: "d2", icon: "🔍", title: "Risk Assessment", sectionCount: 12,
    short: "Identifying and analyzing IT risk: risk events, threats and vulnerabilities, risk scenarios, the BIA, qualitative and quantitative analysis, and inherent versus residual risk.",
    objectives: [
      { id: "2A1", t: "Risk Events & Loss-Event Types" },
      { id: "2A2", t: "Threat Modeling & the Threat Landscape" },
      { id: "2A3", t: "Vulnerability Management" },
      { id: "2A4", t: "Risk Scenario Development & Evaluation" },
      { id: "2A5", t: "Risk Identification Techniques" },
      { id: "2B1", t: "Risk Assessment Concepts & Standards" },
      { id: "2B2", t: "Business Impact Analysis (BIA)" },
      { id: "2B3", t: "The Risk Register" },
      { id: "2B4", t: "Qualitative Risk Analysis" },
      { id: "2B5", t: "Quantitative Risk Analysis (SLE, ALE, ARO)" },
      { id: "2B6", t: "Inherent, Current & Residual Risk" },
      { id: "2B7", t: "Risk Ranking, Heat Maps & Prioritization" }
    ] },
  { id: 3, weight: 32, color: "d3", icon: "🛡", title: "Risk Response and Reporting", sectionCount: 18,
    short: "The largest domain: responding to and reporting on IT risk — response options, risk and control ownership, control design and testing, KRIs/KCIs, and reporting to leadership.",
    objectives: [
      { id: "3A1", t: "Risk Response Options" },
      { id: "3A2", t: "Risk & Control Ownership" },
      { id: "3A3", t: "Vendor & Supply-Chain Risk Management" },
      { id: "3A4", t: "Issues, Findings, Exceptions & Exemptions" },
      { id: "3A5", t: "Risk Acceptance & Formal Sign-off" },
      { id: "3B1", t: "Control Frameworks, Types & Standards" },
      { id: "3B2", t: "Control Categories (Preventive/Detective/Corrective)" },
      { id: "3B3", t: "Control Design & Selection" },
      { id: "3B4", t: "Control Implementation & Integration" },
      { id: "3B5", t: "Control Testing & Effectiveness Evaluation" },
      { id: "3C1", t: "Risk Action Plans" },
      { id: "3C2", t: "Data Collection, Aggregation, Analysis & Validation" },
      { id: "3C3", t: "Key Risk Indicators (KRIs)" },
      { id: "3C4", t: "Key Control & Key Performance Indicators (KCIs/KPIs)" },
      { id: "3C5", t: "Risk & Control Monitoring Techniques" },
      { id: "3C6", t: "Risk Reporting (Heat Maps, Scorecards, Dashboards)" },
      { id: "3C7", t: "Reporting to Management & the Board" },
      { id: "3C8", t: "Monitoring & Reporting of Emerging Risk" }
    ] },
  { id: 4, weight: 20, color: "d4", icon: "🔐", title: "Technology and Security", sectionCount: 11,
    short: "The technology and security IT risk lives in: enterprise architecture, operations and DevOps, the SDLC, resilience (RTO/RPO), emerging tech, identity and access, and data privacy.",
    objectives: [
      { id: "4A1", t: "Technology Roadmaps & Enterprise Architecture (EA)" },
      { id: "4A2", t: "IT Operations Management (Change, Assets, DevOps)" },
      { id: "4A3", t: "System Development Life Cycle (SDLC)" },
      { id: "4A4", t: "Data Lifecycle Management" },
      { id: "4A5", t: "Portfolio & Project Management (Agile)" },
      { id: "4A6", t: "Technology Resilience & Disaster Recovery (RTO/RPO)" },
      { id: "4A7", t: "Emerging Technologies (Cloud, AI, IoT)" },
      { id: "4B1", t: "Security Concepts, Frameworks & Standards" },
      { id: "4B2", t: "Identity, Access & Core Security Controls" },
      { id: "4B3", t: "Security & Risk Awareness & Training" },
      { id: "4B4", t: "Data Privacy & Data Protection Principles" }
    ] }
];

/* The four PBQ formats — one per domain. CRISC has no simulations, so these are
   risk-decision scenarios (authentic to the exam's scenario items): each poses a
   described business situation and asks for the BEST governance, risk-assessment,
   risk-response/reporting, or technology-and-security action, field by field.
   `domainColor` drives the badge tint. */
CRISC.pbqFormats = [
  { id: 1, icon: "🏛", domainColor: 1, obj: "1A3 / 1B3 / 1B5", badge: "GOVERNANCE", title: "Direct IT Risk Governance",
    desc: "Work a governance scenario field by field — place accountability across the three lines of defense, set risk appetite and tolerance, choose the correct governance artifact, and align IT risk to enterprise risk management.",
    long: "You are the IT risk practitioner establishing risk governance. For each item, assign <b>accountability</b> across the organizational structure and the <b>three lines of defense</b> (business/risk owners, risk and compliance functions, internal audit), set or apply the correct <b>risk appetite and risk tolerance</b>, choose the right <b>governance artifact</b> (policy vs. standard vs. procedure vs. guideline), and make the <b>alignment</b> decision that ties IT risk to the enterprise risk profile and business objectives — with the board retaining ultimate accountability." },
  { id: 2, icon: "🔍", domainColor: 2, obj: "2A4 / 2B2 / 2B5", badge: "RISK ASSESSMENT", title: "Assess & Analyze IT Risk",
    desc: "Run a risk-assessment scenario: build and evaluate a risk scenario, run the BIA, choose qualitative vs. quantitative analysis and compute where needed, and rate inherent versus residual risk for the register.",
    long: "You own the IT risk assessment. For each field, develop and evaluate the correct <b>risk scenario</b> (threat, vulnerability, asset, event, impact), apply the right <b>business impact analysis</b> finding, decide between <b>qualitative and quantitative</b> analysis and compute where needed (SLE = AV × EF, ALE = SLE × ARO), distinguish <b>inherent, current and residual risk</b>, and record the result correctly in the <b>risk register</b> with a defensible likelihood and impact rating." },
  { id: 3, icon: "🛡", domainColor: 3, obj: "3A1 / 3A2 / 3B3 / 3C3", badge: "RISK RESPONSE", title: "Respond to & Report on Risk",
    desc: "Manage a response-and-reporting scenario: select the correct risk-response option, assign risk and control ownership, choose the control design or testing action, and select the KRI/KCI and reporting artifact leadership needs.",
    long: "You direct risk response and reporting. For each item, select the correct <b>risk-response option</b> (accept, mitigate, transfer, avoid) against the stated <b>risk appetite/tolerance</b>, assign <b>risk and control ownership</b> correctly, make the right <b>control design, selection, implementation, or testing</b> decision, build a defensible <b>risk action plan</b>, and choose the correct <b>metric (KRI / KCI / KPI)</b> and <b>reporting artifact</b> (heat map, scorecard, dashboard) to communicate risk to management and the board." },
  { id: 4, icon: "🔐", domainColor: 4, obj: "4A2 / 4A6 / 4B2", badge: "TECH & SECURITY", title: "Apply Technology & Security Risk Judgment",
    desc: "Direct a technology scenario: evaluate change/DevOps and SDLC risk, apply the data-lifecycle and resilience (RTO/RPO) decision, assess emerging-technology and privacy exposure, and select the correct security control.",
    long: "You assess technology and security risk. For each field, evaluate the correct <b>IT operations, change-management, DevOps, or SDLC</b> risk decision, apply the right <b>data-lifecycle</b> and <b>resilience</b> metric (Recovery Time Objective, Recovery Point Objective, BIA finding) the requirement demands, weigh the exposure of an <b>emerging technology</b> (cloud, AI, IoT) or a <b>data-privacy</b> obligation, and select the correct <b>identity, access, or core security control</b> to treat the risk." }
];

/* Curated free study resources. */
CRISC.resources = [
  { icon: "📄", title: "Official ISACA CRISC Exam Content Outline", host: "isaca.org",
    url: "https://www.isaca.org/credentialing/crisc",
    desc: "The authoritative blueprint — every domain, sub-area, and subtopic ISACA can test, with the official domain weightings (Governance 26%, Risk Assessment 22%, Risk Response & Reporting 32%, Technology & Security 20%). Use it as your master checklist." },
  { icon: "📘", title: "CRISC Review Manual (RM) & QAE Database", host: "isaca.org",
    url: "https://www.isaca.org/credentialing/crisc/crisc-exam-preparation",
    desc: "The ISACA CRISC Review Manual is the canonical text, and the official Questions, Answers & Explanations (QAE) database is the standard practice-question companion, both mapped to the four domains." },
  { icon: "📗", title: "COBIT 2019 & the Risk IT Framework", host: "isaca.org",
    url: "https://www.isaca.org/resources/cobit",
    desc: "COBIT 2019 is ISACA's governance-and-management framework and the Risk IT Framework is its IT-risk companion — the separation of governance from management, the risk scenarios, and the objectives that underpin Domain 1 (Governance) and Domain 3 (Risk Response & Reporting)." },
  { icon: "📚", title: "NIST RMF & ISO 31000 / 27005 Risk Standards", host: "csrc.nist.gov",
    url: "https://csrc.nist.gov/projects/risk-management",
    desc: "When a risk or control definition must be exact, go to the source: the NIST Risk Management Framework (SP 800-37), NIST SP 800-30 (risk assessment), ISO 31000 (enterprise risk management), ISO/IEC 27005 (information security risk), and COSO ERM inform the governance, assessment, and response domains." },
  { icon: "🎥", title: "CRISC Domain Walkthrough Videos (Hemang Doshi, others)", host: "youtube.com",
    url: "https://www.youtube.com/results?search_query=CRISC+exam+domain+review",
    desc: "Free domain overviews and concept walkthroughs. Widely used community channels reinforce the IT risk-practitioner perspective — identify, assess, respond, and report — that the exam rewards." },
  { icon: "👥", title: "r/CRISC — Community Study Plans & “I Passed” Threads", host: "reddit.com/r/CRISC",
    url: "https://www.reddit.com/r/CRISC/",
    desc: "Crowd-sourced study plans, exam-experience intel, and pass write-ups. Read recent posts for where candidates get stuck and how the CRISC's risk-practitioner mindset differs from hands-on technical exams." }
];

/* ---- Reader: Exam Mechanics card ---- */
CRISC.examMechanics = [
  { heading: "Format: a fixed-form, 150-question exam", body:
    "<p>The <strong>ISACA CRISC</strong> exam is a <strong>fixed-form, linear</strong> examination: <strong>150 multiple-choice questions</strong> delivered in a single <strong>4-hour (240-minute)</strong> appointment. Like the CISA and CISM, and unlike the adaptive ISC2 exams, the CRISC is <em>not</em> computer-adaptive — every candidate answers the same number of items, and you may <strong>move freely: skip, flag, and return</strong> to any question before you submit. A number of the 150 items are <strong>unscored pretest questions</strong> ISACA is trialing for future forms; you cannot tell them apart from scored items, so treat every question as if it counts.</p>" +
    "<p>Because you can navigate the whole form, budget your time and <strong>answer every question</strong> — there is <strong>no penalty for a wrong answer</strong>, so a blank is strictly worse than a guess. With 150 items in 240 minutes you have roughly <strong>1.6 minutes per question</strong>, plus time for a review pass over your flagged items.</p>" +
    "<div class='callout exam'><div class='lbl'>Exam tip</div>Make a first pass answering everything you know, <strong>flagging</strong> the hard ones, then return. Never leave an item blank — an educated guess on a narrowed-down item is free expected value.</div>" },
  { heading: "Scoring: the 200–800 scale and the 450 line", body:
    "<p>CRISC is reported as a <strong>scaled score from 200 to 800</strong>, and the passing standard is <strong>450</strong>. A scaled score is a conversion of your raw score (number of scored items correct) onto a common scale so that different exam forms are comparable and fair — it is <em>not</em> a percentage. A <strong>800</strong> is a perfect score; <strong>200</strong> is the lowest possible; <strong>450</strong> is the minimum standard of knowledge required to pass.</p>" +
    "<p>Your score is based on the <strong>total number of scored items answered correctly, regardless of domain</strong>. ISACA reports <strong>domain-level results for information only</strong> — the domain percentages tell you how much of the exam draws on each domain, but they are not scored separately, and you do not need to “pass” each domain individually. You receive a preliminary pass/fail on screen, with the official scaled score by email within about 10 working days.</p>" +
    "<blockquote>This platform's mock exam reports a scaled score using a transparent linear approximation of the 200–800 band against the 450 line. Use it as a <em>relative</em> readiness signal — “am I consistently clearing 450 on full-length practice?” — not as a literal prediction of your official result.</blockquote>" },
  { heading: "Question style and the CRISC mindset", body:
    "<p>CRISC items are <strong>“best answer”</strong> questions written from the perspective of an <strong>IT risk practitioner</strong> — the professional who identifies, assesses, responds to, and reports on IT risk, and advises the business, rather than a hands-on administrator or an independent auditor. Frequently more than one option is technically defensible — your job is to choose the answer a risk practitioner would consider <em>best</em> given the business context and the organization's risk appetite. Watch the qualifiers: <strong>MOST</strong>, <strong>BEST</strong>, <strong>FIRST</strong>, and <strong>GREATEST</strong> change the correct answer entirely.</p>" +
    "<ul><li><strong>Think in risk, not just controls.</strong> The exam rewards identifying and analyzing risk, then choosing a response proportionate to the risk appetite — business alignment over configuration detail. When an option says “deploy the tool” and another says “assess the risk and assign an owner,” the risk practitioner's role usually favors understanding and owning the risk first.</li><li><strong>Business objectives and risk appetite win.</strong> The <em>best</em> answer keeps risk within the organization's stated appetite and supports its objectives. Risk management exists to enable informed business decisions, not to eliminate all risk.</li><li><strong>Follow the correct order.</strong> Governance frames risk; identification precedes analysis; assessment precedes response; a response precedes monitoring and reporting; ownership is assigned before treatment.</li><li><strong>Root cause over symptom.</strong> Prefer the answer that addresses the underlying risk or control gap and assigns accountability rather than the immediate technical symptom.</li></ul>" +
    "<div class='callout'><div class='lbl'>Strategy</div>For every scenario, ask: <em>“What would an IT risk practitioner — accountable for identifying, assessing, responding to, and reporting risk to the business — do or decide FIRST here?”</em> That framing resolves most “two answers look right” situations.</div>" },
  { heading: "Eligibility, experience, and maintenance", body:
    "<p>To become certified you need a minimum of <strong>three (3) years of cumulative work experience</strong> performing the tasks of a CRISC professional — managing IT risk and designing, implementing, or maintaining information systems controls — <strong>across at least two of the four CRISC domains</strong>. Unlike some ISACA credentials, CRISC has <strong>no experience waivers or substitutions</strong>. You may <strong>take the exam first</strong> and then submit your experience — you have <strong>five years from passing</strong> to apply for certification, and the experience must have been earned within the ten years preceding the application.</p>" +
    "<p>The exam registration fee is <strong>US$575 for ISACA members</strong> and <strong>US$760 for non-members</strong>; certification then requires a <strong>US$50 application processing fee</strong>. Registration opens a <strong>twelve-month eligibility window</strong>, and you have <strong>four attempts within a rolling 12-month period</strong> to pass. Once certified, you maintain CRISC with <strong>Continuing Professional Education (CPE)</strong> — a minimum of 20 hours annually and 120 over each three-year cycle — plus the annual maintenance fee and adherence to ISACA's <strong>Code of Professional Ethics</strong>.</p>" +
    "<div class='callout scenario'><div class='lbl'>Note</div>CRISC is <strong>ANSI/ISO-IEC 17024:2012 accredited</strong> and recognized in the U.S. DoD 8140 qualification program for risk-management workforce roles. It may be funded through your program — connect with the Program Director or your professor about voucher opportunities before you register.</div>" },
  { heading: "Exam-day logistics", body:
    "<p>The CRISC is delivered at <strong>PSI test centers</strong> or as an <strong>online remotely proctored</strong> exam. For an in-person sitting, arrive at least <strong>30 minutes early</strong> with a current, valid, government-issued photo ID whose name matches your registration. For a remote sitting, complete the system compatibility check in advance and be ready for a <strong>360° room scan and desk/mirror check</strong> at check-in.</p>" +
    "<p>The exam is <strong>closed-book</strong>: no notes, phones, smartwatches, calculators, or reference materials, and your workspace must be clear. Two short breaks are permitted with proctor approval, but the <strong>timer does not stop</strong> during a break. You cannot take screenshots or photos of any part of the exam, including the results screen.</p>" +
    "<div class='callout exam'><div class='lbl'>Mindset</div>The CRISC rewards <strong>risk judgment across the whole IT risk lifecycle</strong> — governance, identification and assessment, response and reporting, and the technology and security that risk lives in — not deep trivia in any one tool. You are being certified as a <em>risk practitioner and advisor</em>; answer every question from that altitude.</div>" }
];

/* ---- Reader: Career Guidance card ---- */
CRISC.careerGuidance = [
  { heading: "Where CRISC sits on the ladder", body:
    "<p><strong>CRISC (Certified in Risk and Information Systems Control) is the leading, globally recognized credential for IT risk management and information systems control.</strong> Administered by <strong>ISACA</strong> since 2010, it certifies that you can govern IT risk in the enterprise context; identify and assess IT risk; respond to and report on that risk; and understand the technology and security the risk lives in — all from the perspective of a <em>risk practitioner accountable to the business</em>. It is an <em>advanced, experience-based</em> credential — not entry level — sitting alongside CISM, CISA, and CGEIT at the governance, risk, and assurance tier.</p>" +
    "<p>For hiring managers, CRISC on a résumé is shorthand for “this person can identify, assess, respond to, and report on IT risk, and translate it into terms the business and the board can act on.” It is one of the most frequently <em>required</em> certifications in IT-risk, GRC, and enterprise-risk postings, and it is recognized in the U.S. DoD <strong>8140</strong> qualification program for risk-management roles.</p>" },
  { heading: "Why a risk credential matters", body:
    "<p>Organizations are accountable to regulators, boards, and customers for how they manage risk to information and technology — and they need professionals who can <em>identify, assess, respond to, and report</em> that risk as a disciplined program aligned to enterprise risk appetite, not just operate individual controls. That judgment is durable and transferable: tools and platforms change, but the discipline of building risk scenarios, analyzing likelihood and impact, choosing a proportionate response, assigning ownership, and reporting with KRIs does not. CRISC certifies exactly that layer, which is why it travels across industries, frameworks, and technologies.</p>" +
    "<p>The exam's deliberate <strong>risk-practitioner perspective</strong> is the point: employers want someone who can align IT risk with enterprise risk management, make risk-based recommendations a board will accept, and monitor and report on the risk and control environment — not simply someone who can configure a system.</p>" +
    "<div class='callout exam'><div class='lbl'>Why it matters</div>CRISC names the exact skill set IT-risk and GRC roles hire for: <strong>identifying, assessing, responding to, and reporting on IT risk</strong> in business terms that hold up to boards, executives, and regulators.</div>" },
  { heading: "Roles CRISC opens", body:
    "<p>CRISC aligns with a cluster of IT-risk, GRC, and control roles. Combined with experience it credibly qualifies you for:</p>" +
    "<ul>" +
    "<li><strong>IT Risk Analyst / IT Risk Manager</strong> — identifying, assessing, and treating IT risk across the enterprise. The whole exam maps to this job.</li>" +
    "<li><strong>GRC Analyst / GRC Manager</strong> — running governance, risk, and compliance processes, the risk register, and reporting (Domains 1, 3).</li>" +
    "<li><strong>Risk & Control Manager</strong> — owning control design, testing, and effectiveness across the control environment (Domain 3).</li>" +
    "<li><strong>Enterprise / Operational Risk Practitioner</strong> — aligning IT risk into enterprise risk management and the risk profile (Domains 1, 2).</li>" +
    "<li><strong>Third-Line Assurance / Internal Audit (IT risk)</strong> — providing independent assurance over the risk and control environment (Domains 2, 3).</li>" +
    "</ul>" },
  { heading: "Building the path around CRISC", body:
    "<p>CRISC pairs naturally with a broader governance, risk, and assurance career. A common trajectory: <em>a foundational security cert (Security+) → CISA or CISM (audit/security-management depth) → CRISC (IT risk management) → risk-leadership or CRO-track roles</em>. Because CRISC proves risk-management skill, many professionals add <strong>CISM</strong> for security management, <strong>CGEIT</strong> for enterprise IT governance, or <strong>CISA</strong> for audit and assurance — CRISC shares vocabulary and the CPE ecosystem with the other ISACA credentials. COBIT 2019 and Risk IT fluency strengthen the whole cluster.</p>" +
    "<div class='callout scenario'><div class='lbl'>Practical advice</div>CRISC is as much a <strong>risk-and-judgment mindset</strong> credential as a knowledge one. Pair it with demonstrable experience — building a risk scenario, running a risk assessment, owning the risk register, defining a KRI, presenting risk to leadership — because the experience requirement and most GRC interviews probe for real risk decisions you have made, not just facts you have memorized.</div>" }
];

/* Reading content is NOT bundled here. Each domain's dense reading sections live
   in their own module under assets/js/content/domainN.js and are fetched on
   demand by app.js the first time a Domain Study card is opened. This object is
   the shared target those modules populate: CRISC.reading[N] = [ ...sections ]. */
CRISC.reading = CRISC.reading || {};

/* Flashcard decks are likewise lazy-loaded from assets/js/content/flashN.js
   (100 cards per domain) and populate this object: CRISC.flash[N] = [ ...cards ]. */
CRISC.flash = CRISC.flash || {};
