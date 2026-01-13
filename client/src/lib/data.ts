import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const RESUME_DATA = {
  name: "Adiv Ahsan",
  title: "Software Engineer",
  email: "adiv.ahsan1@gmail.com",
  phone: "321-482-3522",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/AdivA-PMG",
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
    }
  ],
  summary: "Software Engineer with a BS in Computer Science from Rice University. Experienced in building scalable APIs, data pipelines, and full-stack applications. Passionate about cloud architecture and data engineering.",
  education: {
    school: "Rice University",
    degree: "BS in Computer Science",
    year: "May 2024",
    gpa: "3.7/4.0"
  },
  experience: [
    {
      company: "PMG Advertising Agency",
      roles: [
        {
          title: "Software Engineer II",
          period: "Oct 2025 - Present",
          description: "Building cross-data warehouse APIs and scalable data infrastructure.",
          highlights: [
            "Built cross-data warehouse API leveraging Node.js and Express.js with Cube.js analytics framework enabling business logic queries across Redshift, BigQuery, and Snowflake.",
            "Designed two-tiered Redis caching architecture with schema-aware invalidation, reducing p95 API latency from 12s to <1s.",
            "Engineered high-throughput CSV export pipeline utilizing BullMQ job queues and Redis caching.",
            "Enhanced natural language query assistant using OpenAI GPT-5.2 API."
          ]
        },
        {
          title: "Software Engineer I",
          period: "June 2024 - Oct 2025",
          description: "Full stack development and data engineering focusing on high-volume enterprise clients.",
          highlights: []
        }
      ]
    },
    {
      company: "Chera Health",
      roles: [
        {
          title: "Software Engineer Intern",
          period: "June 2023 - Aug 2023",
          description: "Remote, US",
          highlights: [
            "Engineered end-to-end meal plan assignment system using Python, Flask, React, TypeScript, and PostgreSQL.",
            "Built Stripe payment platform with subscription management.",
            "Developed automated testing framework utilizing Selenium WebDriver."
          ]
        }
      ]
    },
    {
      company: "Prudential Financial",
      roles: [
        {
          title: "Software Engineer Intern",
          period: "May 2022 - Aug 2022",
          description: "Newark, NJ",
          highlights: [
            "Implemented ECS container monitoring service streaming real-time metrics to Splunk.",
            "Automated Kubernetes deployment workflows using Python and kubectl.",
            "Created a technical onboarding MVP using Node.js, React, and AWS Lambda."
          ]
        }
      ]
    }
  ],
  projects: [
    {
      title: "PMG Data Studio",
      tech: ["TypeScript", "Node.js", "dbt MetricFlow"],
      description: "Designed and built customizable semantic layer democratizing data integration for non-technical users.",
      award: "Hackathon Winner"
    },
    {
      title: "Multilingual Visual Question Answering",
      tech: ["PyTorch", "Hugging Face", "LLMs"],
      description: "Engineered cross-lingual VQA system integrating LLaVA-1.6 model with custom PyTorch inference pipeline."
    }
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
    frameworks: ["Node.js", "Express.js", "React", "Flask", "PyTorch", "Cube.js"],
    cloud: ["AWS (S3, ECS, Lambda)", "Docker", "Kubernetes", "Terraform"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Redshift", "Snowflake", "BigQuery"]
  }
};
