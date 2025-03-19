import { ISkill } from '@/sections/Skills';

const skillsSectionData: Array<{ title: string; skillList: Array<ISkill> }> = [
  {
    title: 'Frontend – Building Engaging User Interfaces',
    skillList: [
      {
        localPath: '/static/icons/nextjs.png',
        label: 'Next.js',
        level: 'Advanced',
      },
      {
        localPath: '/static/icons/react.png',
        label: 'React.js / React Native',
        level: 'Advanced',
      },
      {
        localPath: '/static/icons/html-css.svg',
        label: 'HTML / CSS',
        level: 'Advanced',
      },
      {
        localPath: '/static/icons/ts.png',
        label: 'Javascript / Typescript',
        level: 'Advanced',
      },
      {
        localPath: '/static/icons/react-testing-library.png',
        label: 'React Testing Library',
        level: 'Advanced',
      },
      {
        localPath: '/static/icons/cypress.webp',
        label: 'Cypress.io',
        level: 'Intermediate',
      },
      {
        localPath: '/static/icons/angular.png',
        label: 'Angular',
        level: 'Beginner',
      },
    ],
  },
  {
    title: 'Backend – Crafting Robust APIs',
    skillList: [
      {
        localPath: '/static/icons/nodejs.png',
        label: 'Node.js / Express.js',
        level: 'Advanced',
      },
      {
        localPath: '/static/icons/jest.png',
        label: 'Jest',
        level: 'Advanced',
      },
      {
        localPath: '/static/icons/java.webp',
        label: 'Java',
        level: 'Beginner',
      },
      {
        localPath: '/static/icons/spring-boot.png',
        label: 'Spring Boot',
        level: 'Beginner',
      },
    ],
  },
  {
    title: 'Data Management – Database Design and Query Optimization',
    skillList: [
      {
        localPath: '/static/icons/mongodb.png',
        label: 'MongoDB',
        level: 'Advanced',
      },
      {
        localPath: '/static/icons/postgresql.jpg',
        label: 'PostgreSQL',
        level: 'Intermediate',
      },
      {
        localPath: '/static/icons/elasticsearch.svg',
        label: 'Elasticsearch',
        level: 'Beginner',
      },
    ],
  },
  {
    title: 'Cloud & DevOps – Scaling, Automating, and Deploying',
    skillList: [
      {
        localPath: '/static/icons/ci-cd.png',
        label: 'CI/CD',
        level: 'Advanced',
      },
      {
        localPath: '/static/icons/docker.webp',
        label: 'Docker / Docker Compose',
        level: 'Advanced',
      },
      {
        localPath: '/static/icons/azure.png',
        label: 'Microsoft Azure',
        level: 'Advanced',
      },
      {
        localPath: '/static/icons/terraform.png',
        label: 'Terraform',
        level: 'Intermediate',
      },
      {
        localPath: '/static/icons/ansible.webp',
        label: 'Ansible',
        level: 'Intermediate',
      },
      {
        localPath: '/static/icons/amazon-web-services-s3.png',
        label: 'AWS S3',
        level: 'Intermediate',
      },
      {
        localPath: '/static/icons/cloudflare.png',
        label: 'Cloudflare',
        level: 'Beginner',
      },
      {
        localPath: '/static/icons/heroku.webp',
        label: 'Heroku',
        level: 'Beginner',
      },
    ],
  },
  {
    title: 'Additional Skills – Design, Payment Integration, and More',
    skillList: [
      {
        localPath: '/static/icons/agile.png',
        label: 'Agile',
        level: 'Advanced',
      },
      {
        localPath: '/static/icons/figma.png',
        label: 'Figma',
        level: 'Intermediate',
      },
      {
        localPath: '/static/icons/ps.png',
        label: 'Photoshop',
        level: 'Intermediate',
      },
      {
        localPath: '/static/icons/stripe.jpg',
        label: 'Stripe Payment',
        level: 'Intermediate',
      },
      {
        localPath: '/static/icons/electronjs.png',
        label: 'Electron.js',
        level: 'Beginner',
      },
    ],
  },
];

export default skillsSectionData;
