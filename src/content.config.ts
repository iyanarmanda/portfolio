import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";


const site = defineCollection({
  loader: file("src/content/site.yaml"), 
  schema: z.object({
    name: z.string(),
    role: z.string(),
    email: z.string(),
    github: z.string(),
    linkedin: z.string(),
    status: z.string(),
    domain: z.string(),
    ogSkills: z.array(z.string())
  })
});

const hero = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/hero" }),
  schema: z.object({
    greeting: z.string(),
  })
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    tech: z.array(z.string()),
    year: z.string(),
    url: z.string(),
    order: z.number().default(0),
  })
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    startDate: z.string(),
    endDate: z.string().default('Present'),
    order: z.number().default(0),
  })
});

const skills = defineCollection({
  loader: file("src/content/skills.yaml"),
  schema: z.object({
    category: z.string(),
    items: z.array(z.string())
  })
});

const certificates = defineCollection({
  loader: file("src/content/certificates.yaml"),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    year: z.string(),
    img: z.string(),
  })
});

export const collections = { site, hero, projects, experience, skills, certificates };

