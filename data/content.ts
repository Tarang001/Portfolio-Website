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
      // demo: "https://agentic-resume-assistant.vercel.app",
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
      slug: "auth-service",
      name: "Interactive Floor Plan Editor",
      problem: "Existing floor planning tools lack real-time interactivity, flexibility, and simplicity for quick spatial design and experimentation.",
      solution: "Developed a browser-based editor enabling users to add, move, resize, and label rooms using an intuitive React interface.",
      outcome: "Delivered a smooth, real-time floor design experience with optimized canvas rendering achieving consistent 60 FPS interactions.",
      challenge: "Balancing React state management with HTML5 Canvas rendering while maintaining performance during continuous drag and resize actions.",
      stack: ["Node.js", "TypeScript", "PostgreSQL", "React", "HTML5"],
      github: "https://github.com/Tarang001/floor-plan-editor",
      overview:
        "A secure authentication system implementing cookie-based JWT sessions with sliding refresh tokens and automatic token family invalidation.",
      architecture:
        "Express API with login, refresh, and logout routes using JWT cookies, Postgres-backed refresh tokens, and Redis caching.",
      tradeoffs:
        "Chose opaque refresh tokens and httpOnly cookies for security, accepting minimal database lookups and added CSRF protection complexity.",
      nextSteps:
        "Plan to add device fingerprinting, PKCE-based OAuth flow, and comprehensive audit logging for enhanced anomaly detection.",
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
