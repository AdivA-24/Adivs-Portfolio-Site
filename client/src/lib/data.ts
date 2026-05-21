import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const RESUME_DATA = {
  name: "Adiv Ahsan",
  title: "Software Engineer II",
  email: "adiv.ahsan1@gmail.com",
  phone: "321-482-3522",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/AdivA-24",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/adiv-ahsan",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:adiv.ahsan1@gmail.com",
      icon: Mail,
    },
    {
      name: "Resume",
      url: "/resume.pdf",
      icon: FileText,
    },
  ],
  summary:
    "Software Engineer II at PMG building cross-warehouse data infrastructure, NL-to-SQL agents, and high-throughput pipelines. BS in Computer Science, Rice University.",
  education: {
    school: "Rice University",
    degree: "BS in Computer Science",
    year: "May 2024",
    gpa: "3.7/4.0",
  },
  experience: [
    {
      company: "PMG",
      location: "Dallas, TX",
      roles: [
        {
          title: "Software Engineer II",
          period: "Oct 2025 — Present",
          description: "Data infrastructure and AI agents.",
          highlights: [
            "Architected a cross-warehouse API (Node.js, Cube.js) enabling business logic queries across Redshift, BigQuery, and Snowflake; scaled to 10K+ daily requests and reduced time-to-insight by 95% for 60+ enterprise clients.",
            "Engineered a LangGraph natural-language-to-SQL agent, injecting cached unique dimension values from MongoDB to improve query generation accuracy from 57% to 86% across 20K+ monthly queries.",
            "Integrated the dbt MetricFlow engine into the cross-warehouse API, exposing customizable semantic layers across 8+ internal applications and abstracting complex SQL joins.",
            "Designed a two-tier TTL Redis cache for cross-warehouse query results with schema-aware invalidation, reducing p95 job duration by ~80% (164s → 28s).",
            "Scaled a high-throughput CSV export pipeline (BullMQ, Redis, MongoDB, S3) to process 200GB+ of campaign data daily at 99.8% uptime.",
            "Refactored legacy database publishing onto an event-driven SQS and ECS Fargate pipeline, eliminating 2K+ daily errors through automatic retries and dead-letter queue recovery.",
          ],
        },
        {
          title: "Software Engineer I",
          period: "June 2024 — Oct 2025",
          description: "Full-stack engineering on the data platform.",
          highlights: [],
        },
      ],
    },
    {
      company: "Chera Health",
      location: "Remote, US",
      roles: [
        {
          title: "Software Engineer Intern",
          period: "June 2023 — Aug 2023",
          description: "",
          highlights: [
            "Engineered end-to-end meal plan assignment system using Python, Flask, React, TypeScript, and PostgreSQL, automating dietician workflows and cutting manual setup time from 2+ hours to 15 minutes.",
            "Developed automated testing framework utilizing Selenium WebDriver with ChromeDriver integration, implementing structured logging that reduced manual QA effort by 80% and caught 5+ critical production issues pre-launch.",
          ],
        },
      ],
    },
    {
      company: "Prudential Financial",
      location: "Newark, NJ",
      roles: [
        {
          title: "Software Engineer Intern",
          period: "May 2022 — Aug 2022",
          description: "",
          highlights: [
            "Implemented ECS container monitoring service (Python, Boto3) streaming real-time metrics to Splunk dashboards, reducing incident diagnosis time by 67% for 20+ production services.",
            "Built a centralized onboarding portal (Node.js, React, AWS Lambda) consolidating setup guides and technical docs for new engineers, ramping up developer onboarding by 45%.",
          ],
        },
      ],
    },
  ],
  projects: [
    {
      title: "PMG Data Foundation",
      period: "Dec 2025",
      tech: ["TypeScript", "Node.js", "ReactFlow", "dbt MetricFlow"],
      description:
        "Led an 8-person team to ship a graph-based semantic layer UI that lets clients customize their data lineage without manual SQL. Designed the Express API contract behind a self-hosted dbt MetricFlow runtime alongside backend engineers, gathering requirements from analysts and media teams to map user flows.",
      award: "Hackathon Winner",
    },
    {
      title: "Multilingual Visual Question Answering",
      period: "Oct 2025 — Nov 2025",
      tech: ["PyTorch", "Hugging Face", "LLaVA-1.6"],
      description:
        "Engineered a cross-lingual VQA system integrating the LLaVA-1.6 model with a custom PyTorch inference pipeline; achieved an 85% answer quality improvement across low-resource languages including Uyghur and Kurdish.",
    },
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
    frameworks: [
      "Node.js",
      "Express.js",
      "React",
      "Next.js",
      "Cube.js",
      "LangGraph",
      "dbt MetricFlow",
    ],
    cloud: [
      "AWS (Redshift, ECS, Lambda, SQS, S3)",
      "Docker",
      "Terraform",
      "BullMQ",
    ],
    databases: ["MongoDB", "Redis", "PostgreSQL", "Redshift", "Snowflake", "BigQuery"],
  },
};
