import { ISkill } from '@/sections/Skills';

const skillsSectionData: Array<{ title: string; skillList: Array<ISkill> }> = [
  {
    title: 'Frontend – Building Engaging User Interfaces',
    skillList: [
      {
        localPath: '/icons/nextjs.png',
        label: 'Next.js',
        level: 'Advanced',
      },
      {
        localPath: '/icons/react.png',
        label: 'React.js / React Native',
        level: 'Advanced',
      },
      {
        localPath: '/icons/html-css.svg',
        label: 'HTML / CSS',
        level: 'Advanced',
      },
      {
        localPath: '/icons/ts.png',
        label: 'Javascript / Typescript',
        level: 'Advanced',
      },
      {
        localPath: '/icons/react-testing-library.png',
        label: 'React Testing Library',
        level: 'Advanced',
      },
      {
        localPath: '/icons/cypress.webp',
        label: 'Cypress.io',
        level: 'Intermediate',
      },
      {
        localPath: '/icons/angular.png',
        label: 'Angular',
        level: 'Beginner',
      },
    ],
  },
  {
    title: 'Backend – Crafting Robust APIs',
    skillList: [
      {
        localPath: '/icons/nodejs.png',
        label: 'Node.js / Express.js',
        level: 'Advanced',
      },
      {
        localPath: '/icons/jest.png',
        label: 'Jest',
        level: 'Advanced',
      },
      {
        localPath: '/icons/java.webp',
        label: 'Java',
        level: 'Beginner',
      },
      {
        localPath: '/icons/spring-boot.png',
        label: 'Spring Boot',
        level: 'Beginner',
      },
    ],
  },
  {
    title: 'Data Management – Database Design and Query Optimization',
    skillList: [
      {
        localPath: '/icons/mongodb.png',
        label: 'MongoDB',
        level: 'Advanced',
      },
      {
        localPath: '/icons/postgresql.jpg',
        label: 'PostgreSQL',
        level: 'Intermediate',
      },
      {
        localPath: '/icons/elasticsearch.svg',
        label: 'Elasticsearch',
        level: 'Beginner',
      },
    ],
  },
  {
    title: 'Cloud & DevOps – Scaling, Automating, and Deploying',
    skillList: [
      {
        localPath: '/icons/ci-cd.png',
        label: 'CI/CD',
        level: 'Advanced',
      },
      {
        localPath: '/icons/docker.webp',
        label: 'Docker / Docker Compose',
        level: 'Advanced',
      },
      {
        localPath: '/icons/azure.png',
        label: 'Microsoft Azure',
        level: 'Advanced',
      },
      {
        localPath: '/icons/terraform.png',
        label: 'Terraform',
        level: 'Intermediate',
      },
      {
        localPath: '/icons/ansible.webp',
        label: 'Ansible',
        level: 'Intermediate',
      },
      {
        localPath: '/icons/amazon-web-services-s3.png',
        label: 'AWS S3',
        level: 'Intermediate',
      },
      {
        localPath: '/icons/cloudflare.png',
        label: 'Cloudflare',
        level: 'Beginner',
      },
      {
        localPath: '/icons/heroku.webp',
        label: 'Heroku',
        level: 'Beginner',
      },
    ],
  },
  {
    title: 'Additional Skills – Design, Payment Integration, and More',
    skillList: [
      {
        localPath: '/icons/agile.png',
        label: 'Agile',
        level: 'Advanced',
      },
      {
        localPath: '/icons/figma.png',
        label: 'Figma',
        level: 'Intermediate',
      },
      {
        localPath: '/icons/ps.png',
        label: 'Photoshop',
        level: 'Intermediate',
      },
      {
        localPath: '/icons/stripe.jpg',
        label: 'Stripe Payment',
        level: 'Intermediate',
      },
      {
        localPath: '/icons/electronjs.png',
        label: 'Electron.js',
        level: 'Beginner',
      },
    ],
  },
];

export default skillsSectionData;
