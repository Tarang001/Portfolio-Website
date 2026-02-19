// ============================================================
// DATA — Edit this file to customize all portfolio content.
// No logic files need to be touched when updating content.
// ============================================================

export const PERSON = {
    name: "Tarang",
    // One-line positioning statement — engineering-focused, no buzzwords
    positioning: "I build systems that are boring in the right ways.",
    // Short descriptor shown below name
    descriptor: "CS student · Software Developer · System thinker",
    // Used in SEO metadata
    tagline: "Software engineer focused on product development and clean architecture.",
    location: "New Delhi, India",
    email: "starang526@gmail.com",
    github: "https://github.com/Tarang001",
    linkedin: "https://linkedin.com/in/tarang001",
  };
  
  // ============================================================
  // PROJECTS
  // Add a new object to this array to add a new project.
  // The `slug` field becomes the URL: /projects/[slug]
  // ============================================================
  export interface Project {
    slug: string;
    name: string;
    problem: string;     // What problem did this solve?
    solution: string;    // How did you solve it?
    outcome: string;     // Measurable result or key learning
    challenge: string;   // One-line key engineering challenge
    stack: string[];
    github: string;
    demo?: string;       // Optional: leave undefined if no live demo
    // --- Detail page fields ---
    overview: string;
    architecture: string;
    tradeoffs: string;
    nextSteps: string;
  }
  
  export const PROJECTS: Project[] = [
    {
      slug: "Agentic-Resume-Assistant",
      name: "Agentic Resume Assistant",
      problem: "Static resumes fail to convey contextual depth, real-time reasoning, and nuanced explanations of professional experience.",
      solution: "Built an agentic AI assistant using structured career knowledge, tool-based reasoning, and human-in-the-loop escalation.",
      outcome: "Enabled dynamic, personalized representation of my professional profile beyond limitations of traditional resumes or portfolios.",
      challenge: "Designing robust guardrails and escalation paths to ensure contextual accuracy while preventing hallucinations and credential over-representation..",
      stack: ["Python", "Gradio", "Google Gemini API"],
      github: "https://github.com/Tarang001/-Agentic-Resume-Assistant",
      demo: "https://agentic-resume-assistant.vercel.app",
      overview:
        "An agentic AI assistant that uses structured career knowledge, tool-based reasoning, and human-in-the-loop escalation to create a dynamic, personalized representation of my professional profile beyond limitations of traditional resumes or portfolios.",
      architecture:
        "The agentic assistant is built using Gradio, a Python library for building custom AI interfaces. It uses the Google Gemini API for AI reasoning and the Gemini API for text generation. The assistant is able to reason about my professional profile and create a dynamic, personalized representation of my professional profile beyond limitations of traditional resumes or portfolios.",
      tradeoffs:
        "The agentic assistant is built using Gradio, a Python library for building custom AI interfaces. It uses the Google Gemini API for AI reasoning and the Gemini API for text generation. The assistant is able to reason about my professional profile and create a dynamic, personalized representation of my professional profile beyond limitations of traditional resumes or portfolios.",
      nextSteps:
        "Add more tools to the agentic assistant to reason about my professional profile and create a dynamic, personalized representation of my professional profile beyond limitations of traditional resumes or portfolios.",
    },
    {
      slug: "event-pipeline",
      name: "Real-Time Event Pipeline",
      problem: "An analytics dashboard was running batch SQL aggregations every 10 minutes, making data stale and dashboards laggy.",
      solution: "Replaced batch jobs with a Kafka-based event pipeline feeding pre-aggregated materialized views, consumed by a lightweight WebSocket server.",
      outcome: "Dashboard data latency went from 10 min → under 3 seconds. Batch job infrastructure was decommissioned.",
      challenge: "Ensuring exactly-once semantics for aggregation updates without distributed transactions.",
      stack: ["Node.js", "Kafka", "TypeScript", "PostgreSQL", "WebSocket", "Docker Compose"],
      github: "https://github.com/alexrivera/event-pipeline",
      demo: "https://pipeline-demo.vercel.app",
      overview:
        "A streaming data pipeline that ingests application events from a Kafka topic, aggregates them in-memory using a tumbling window, and flushes to Postgres materialized views. A Node.js WebSocket server pushes diffs to connected dashboards in real time.\n\nBuilt as a learning project to understand the tradeoffs between stream and batch processing first-hand rather than from textbooks.",
      architecture:
        "Producer → Kafka topic (3 partitions) → Consumer group (2 workers) → in-process aggregator → Postgres upsert → WebSocket broadcast. Each consumer owns a partition to avoid contention. Aggregation state is held in a Map keyed by window + dimension. On flush, workers upsert into Postgres and send a diff payload to the WS server via an internal HTTP call.",
      tradeoffs:
        "Chose at-least-once delivery with idempotent upserts over trying to guarantee exactly-once at the Kafka level. This is simpler operationally and correct as long as the upsert key is stable (event_id + window_start). Downside: if the aggregator crashes mid-window, the window reprocesses from the last committed offset, which may double-count partial windows. Acceptable for analytics; unacceptable for billing.",
      nextSteps:
        "Store window state in Redis so it survives consumer restarts without re-reading the entire partition. Also want to add a dead-letter queue for malformed events and a simple schema registry to version event shapes.",
    },
    {
      slug: "auth-service",
      name: "Lightweight Auth Service",
      problem: "A side-project API was using JWTs stored in localStorage — a classic XSS target — with no refresh token rotation.",
      solution: "Replaced with an httpOnly cookie-based session system with short-lived access tokens, refresh token rotation, and a token family invalidation strategy.",
      outcome: "Eliminated the XSS token theft vector. Auth logic is now a standalone service that can be reused across projects.",
      challenge: "Implementing refresh token rotation without race conditions on concurrent requests.",
      stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Express"],
      github: "https://github.com/alexrivera/auth-service",
      overview:
        "A self-contained authentication service implementing the cookie+JWT pattern with sliding refresh tokens. The key security property is token family invalidation: if a refresh token is reused (possible sign of theft), the entire token family is invalidated, logging out all sessions.\n\nBuilt because every tutorial I found used either a naive JWT-in-localStorage approach or a heavyweight OAuth library that obscured what was actually happening.",
      architecture:
        "Express API with three routes: /login, /refresh, /logout. Access tokens are 15-minute JWTs in httpOnly cookies. Refresh tokens are opaque 256-bit random strings stored in Postgres with a `family_id` and `used` flag. Redis caches the access token allow-list for fast validation without hitting Postgres on every request.",
      tradeoffs:
        "Used opaque refresh tokens instead of JWT refresh tokens so they can be individually invalidated without a blocklist. This requires a DB lookup on every refresh, but refresh happens at most every 15 minutes per user, so the load is negligible. Chose httpOnly cookies over Authorization headers to prevent XSS token theft at the cost of needing CSRF protection.",
      nextSteps:
        "Add device fingerprinting to flag anomalous refresh requests. Also want to implement PKCE for a potential public-facing OAuth flow and add audit logging for all auth events.",
    },
  ];
  
  // ============================================================
  // SKILLS — Grouped by proficiency bucket
  // No percentages. No progress bars.
  // ============================================================
  export const SKILLS = {
    strong: [
      "Python", "C++", "C", "JavaScript", "TypeScript", "Node.js", "React", "Next.js",
      "PostgreSQL", "Flask", "REST APIs", "Git", "HTML", "CSS", "Bootstrap", "Tailwinnd CSS",
    ],
    working: [
      "Redis","MongoDB", "MySQL",
      "GraphQL", "Linux", "Bash",
    ],
    exploring: [
      "AWS (EC2/S3/RDS)", "System Design",
      "Distributed Systems",
    ],
  };
  
  // ============================================================
  // HOW I THINK — The critical differentiator section
  // ============================================================
  export const THINKING = {
    paragraphs: [
      "When I encounter a problem, I first resist the urge to open an editor. I try to understand the shape of it — is this a data problem, a concurrency problem, a latency problem, or an organizational problem wearing an engineering costume? The answer changes the solution entirely.",
      "I break systems down by asking: what are the invariants? What must always be true, regardless of failure? Once I know those, I can reason about edge cases systematically rather than by intuition.",
      "When debugging, I treat a system like a black box with hypotheses. I change one variable at a time and measure. I've learned that the most seductive explanation is rarely the correct one — the bug is usually in the code I was most confident about.",
      "For learning new technology, I build the smallest thing that forces me to confront the hardest part first. Reading documentation is fine. Actually hitting the failure mode is how understanding gets durable.",
    ],
  };
  
  // ============================================================
  // EXPERIENCE — Timeline items
  // ============================================================
  export interface TimelineItem {
    year: string;
    title: string;
    org: string;
    description: string;
  }
  
  export const TIMELINE: TimelineItem[] = [
    {
      year: "Jun 2025 - Aug 2025",
      title: "Digitization Intern",
      org: "Navyug Infosolutions",
      description:
        "Worked on the digitization of the documents of a Defence Department of the Government of India as part of a game development project.",
    },
    {
      year: "2024-Present",
      title: "President of Akshar-The Literary Society",
      org: "School of Engineering, JNU",
      description:
        "Organized and conducted various literary events, workshops, and competitions. Led a team of 10+ volunteers to ensure the smooth functioning of the society.",
    },
    {
      year: "2023-2027",
      title: "BTech in Computer Science and Engineering",
      org: "Jawaharlal Nehru University",
      description:
        "Relevant coursework: Operating Systems, Database Internals, Algorithms, Computer Networks, Computer Architecture, etc.",
    },
  ];