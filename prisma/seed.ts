import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.link.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.project.deleteMany();
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      name: 'Svyatoslav Bilyk',
      about: `I'm a software engineer with deep passion for coding. I lean towards simplicity, performance and reliability in systems, even if it's less trendy. Nobody likes putting out fires on weekends.

Mostly experienced in backend development, but along the way I've done my fair share of widget design and UX/UI tweaks — you could probably consider me a full-stack engineer.`,

      links: {
        create: [
          { type: 'LINKEDIN', url: 'https://www.linkedin.com/in/svyatoslav-bilyk-176497105/' },
        ],
      },

      skills: {
        create: [
          { title: 'PHP' },
          { title: 'JavaScript / ES6+' },
          { title: 'Node.js' },
          { title: 'TypeScript' },
          { title: 'NestJS' },
          { title: 'GraphQL' },
          { title: 'SQL / Relational Databases' },
          { title: 'API Development' },
          { title: 'Data Migration' },
          { title: 'WordPress' },
          { title: 'Docker' },
          { title: 'Linux' },
          { title: 'Prisma' },
          { title: 'Jenkins' },
          { title: 'Terraform' },
        ],
      },

      experience: {
        create: [
          {
            company: 'Gaia Inc',
            position: 'Senior Software Engineer',
            location: 'REMOTE',
            employment_type: 'CONTRACT',
            startDate: new Date('2022-06-01'),
            endDate: null,
            highlights: `- System decoupling: separating the marketing layer from the core business layer, reducing release time from 2 weeks to 2 days
- Internal publishing tools to improve marketing performance and standardize output
- Content synchronization system across environments
- Customized sitemap generation system (gathering data from multiple sources, enriching with Google-readable metadata)
- Third-party APIs integration
- ADA compliance audits
- GEO/SEO optimization with structured data
- AI-driven development (Cursor AI)`,
          },
          {
            company: 'OSN Media',
            position: 'PHP Developer',
            location: 'REMOTE',
            employment_type: 'CONTRACT',
            startDate: new Date('2018-11-01'),
            endDate: new Date('2022-06-01'),
            highlights: `- Highly customized WP media platform
- Internal tools development
- Continuous performance optimization
- SEO audit
- Domains registration and DNS configuration
- ACF-based workflows to streamline editorial tasks
- Backend architecture to reliably support 8M+ monthly visitors
- Integration with third-party services and APIs`,
          },
          {
            company: 'RZD Medicine',
            position: 'IT Specialist',
            location: 'REMOTE',
            employment_type: 'CONTRACT',
            startDate: new Date('2017-08-01'),
            endDate: new Date('2022-01-01'),
            highlights: `- WordPress internal tooling and widgets
- ADA-inspired accessibility features
- WordPress theme extension
- UI/UX elements design following brandbook
- Custom scripts development`,
          },
          {
            company: 'Freelance',
            position: 'PHP Programmer',
            location: 'REMOTE',
            employment_type: 'FREELANCE',
            startDate: new Date('2007-07-01'),
            endDate: new Date('2022-07-01'),
            highlights: `- Custom CMS tools, plugins, and content pipelines
- Linux server administration, performance tweaks, hardening and troubleshooting
- Tailored eCommerce solutions and small business websites
- Websites made with commercial WP themes`,
          },
          {
            company: 'Documentary Production Company',
            position: 'Translator',
            location: 'ON_SITE',
            employment_type: 'CONTRACT',
            startDate: new Date('2015-11-01'),
            endDate: new Date('2015-12-31'),
            highlights: `- Interviews interpretation preserving context for non-native speaking film crew`,
          },
        ],
      },

      projects: {
        create: [
          {
            title: 'CV Backend',
            description: 'Digital business card API built with NestJS, GraphQL, Prisma, and PostgreSQL',
            url: 'https://github.com/itsolman/cv-backend',
          },
        ],
      },
    },
  });

  console.log('Seeding succeeded');
}

main()
  .catch((e) => {
    console.error('Seeding failed with an error', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
