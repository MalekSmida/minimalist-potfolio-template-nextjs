import { IExperience } from '@/components/ExperienceCard';

const careerSectionData: { descriptionList: string[]; experienceList: Array<IExperience> } = {
  descriptionList: [
    'Crafting secure, high-performance web applications with a focus on leadership, clean architecture, and scalable solutions.',
  ],
  experienceList: [
    {
      _id: 'sopra-steria',
      contractType: 'Full-time job',
      company: 'SOPRA STERIA',
      dates: 'April 2023 - Dec 2024',
      position: 'Tech Lead, Senior Full-stack Engineer',
      iconPath: '/static/icons/sopra-steria.webp',
      iconWidth: 100,
      iconHeight: 100,
      summary:
        'Led development of online contract submission platform, increasing dematerialization rate from 50% to 90% while managing multiple applications and mentoring team members.',
      contributions: [
        'Lead dev on an online platform for submitting work-study contracts for public employers with the tech stack: Next.js/React.js, Node.js/Express.js, MongoDB, Nginx reverse proxy, Docker.',
        'We gained the trust of our client (and their clients as well) by achieving success in stabilizing and improving the application, as the rate of dematerialization jumped from 50% (2022) to 83% (2023) then 90% (2024). The client team reported that assistance tickets are no longer bug reports but users asking questions to discover the application.',
        'At the start of the mission, we recovered a delay of 3 months along with an evolution of 1 month in only 2 months by developing strategies to manage priorities and versions.',
        'After the success of the first application, I also took on the charge of another one (same client), which manages work-study contracts sent from the first application, with the tech stack: Spring Boot, Angular, Tomcat, PostgreSQL, Elasticsearch.',
        'Direct contact with the client and analysis of needs, mostly within 24 hours, depending on priority.',
        'Grow the team members through delegation, technical challenges, and encourage experimentation.',
        'Here are some challenges we went through as a team:',
        '-> System maintenance and updates, including OS upgrades/migrations and version updates across Next.js, Node.js, Nginx, Angular, PostgreSQL, Java, Spring Boot, Tomcat, and Elasticsearch.',
        '-> Enhanced performance and error handling by implementing database indexing, streamlining queries, adding early filtering, and reducing database calls—achieving a 98% improvement in response time and data size.',
        '-> Implementation of advanced React memorization, which boosted application performance.',
        '-> Study, impact study, refactor, and implementation of third-party APIs.',
        'Configure the server and help improve CI/CD pipelines using GitLab CI, Ansible playbook, Docker, Docker Compose, and Terraform.',
        'Improve existing processes and prepare docs such as installation manuals, local config of projects, management of DB, and management of VM.',
        'Implementation of version and branching strategy which allows us to manage multiple versions with ease.',
        'Manage priorities, costing, and estimation of version delivery on both short-term and long-term scales.',
        'Along with the team, we continuously share ideas with the client and push to improve the applications.',
        'Uphold quality expectations: reusability, SOLID principles, craftsmanship.',
        'Develop a reputation within SOPRA STERIA as the go-to person for React projects.',
        'Animation of demos on a team level (pair programming, etc.), project/client level (sharing strategies, etc.), and company level (for example: Git best practices).',
        'Taking responsibility and acting autonomously.',
      ],
    },
    {
      _id: 'clevertech-france',
      contractType: 'Full-time job',
      company: 'CleverTech France',
      dates: 'March 2022 - March 2023',
      position: 'Head of Frontend, Senior Full-stack JS',
      iconPath: '/static/icons/clevertech-france.webp',
      iconWidth: 80,
      iconHeight: 80,
      summary:
        'Architected mobile/web applications and e-commerce solutions while improving performance by 50%, implementing security best practices and establishing team-wide development standards.',
      contributions: [
        'Architect and develop a mobile/web application (Android, iOS) using React.js, Next.js, React Native, Redux Toolkit, MUI and TailwindCSS',
        'Create reusable components and share them with the team to improve productivity and reduce code duplication',
        'Follow mobile-first approach to create responsive design following UI/UX best practices',
        'Challenge and grow the team members through technical designs and project milestones, encourage experimentation and uphold quality expectations',
        'Institute best practices and proper coding standards across the team through processes like code review and the implementation of ESLint/Prettier/Typescript.',
        'Guide the team to e2e testing world using Cypress',
        'Help Implement continuous integration and continuous delivery using docker and Jenkins’s pipeline along with proper branching strategy for our projects',
        'Continually making suggestions around how to make us better (better code, faster delivery, easier maintenance, etc.…)',
        'Work on Azure services (App service, Static web app) and well understand Azure architecture (subscription, resource group, service principle)',
        'Value collaboration to deliver “pixel-perfect” and “users first” experiences',
        'Frequent 1:1s and feedback to ensure the well-being of the team as well as their deliverables',
        'Mentor and develop team through live demo, sharing reports and explaining complex technical topics in a clear and concise way',
        'Dig into other areas of the product as needed not only frontend',
        'Improve project performance which decreases loading time by 50% (LCP, TTI ...etc.): Reducing bundle size by 48%, Implement lazy loading (React lazy and suspense), Reduce assets size by 80%, Use React profiler and memorization to reduce rendering',
        'Measure and improve project performance using tools like: Source map explorer, Web vitals and Devtools',
        'Improve security through the implementation of security headers (HSTS, CSP, X-XSS-Protection, X-Frame-Options, X-Content-Type-Options ...), Perform a security audit and correct vulnerabilities, Implement Oauth2 logic by rotating the Refresh token',
        'Prepare project architecture and help implement 3rd party API (like IDCheck)',

        'Architect and develop an E-commerce web application using Next.js/Typescript and Storyblok as Headless CMS to dynamically manage and render content',
        'Create reusable components and responsive UI following Mobile First design principals, manage internationalization and dynamic routing',
        'Work on user experience of Storyblok integration so that other teams (non dev) manage the application',
        'Work on application performance using: SSR (server-side rendering) and ISR (incremental static regeneration)',
        'Follow best practices (like Next.js Image optimization ...) and React patterns (hooks pattern, Composition pattern, adapt SOLID principles to React functional programming)',
        'Work with GitHub flow branching strategy, prepare Readme and document code using JSDoc',
        'Continuous Delivery working with GitHub and Vercel',
        'Configure continuous integration using Eslint to scan the code and create e2e tests using Cypress',
        'Create Storyblok custom field-type plugin: it fetches products from Shopify store using Shopify custom app (Storefront API) and render it into Storyblok as plugin (it is created using Vue.js 2)',
        'Develop a Shopify app and generate a Theme App Extension that renders Storyblok content inside Shopify Theme',
        'Configure Vite as a development tool, using modular programming, Typescript, testing, and minimizing DOM manipulation inside the Theme App Extension of Shopify',
        'Conduct React Profiling of the application and share ideas with the team to improve performance, such as image optimization',
        'Test the project on different browsers and operating systems using Browserstack',
        'Develop a Cloudflare Worker that caches calls to the Storyblok API: According to our architecture and clients, we estimate that the cache reduces load on the server by 99%, reducing costs for the company, and using the CDN improves response time by an average of 50%',
      ],
    },
    {
      _id: 'freelance',
      contractType: 'Freelance',
      dates: 'Nov 2020 - Jan 2022',
      position: 'Full-stack Engineer, UX Designer',
      iconPath: '/static/icons/fallback.webp',
      iconWidth: 90,
      iconHeight: 90,
      summary:
        'Managed complete development lifecycle from design to deployment, building responsive applications with real-time features, payment systems, and authentication workflows.',
      contributions: [
        'Manage software development life cycle: Planning, Requirements, Design, Build, Document, Test, Deployment and Maintenance',
        'Design application that follows user experience and user interface best practices using Figma',
        'Develop Backend using Express.js / Node.js to create RESTful API',
        'Use Atlas MongoDB cloud for database management',
        'Assemble responsive Frontend using React.js / Redux',
        'Most of application UI is built from scratch',
        'Apply third party authentication using Google Auth and Facebook Auth',
        'Integrate Real Time video chat, text chat and share screen using WEBRTC',
        'Utilize cloud media documents (pictures, pdf) using Cloudinary',
        'Integrate mailing system using Node-mailer, SendGrid and Google mail',
        'Integrate full payment workflow on collaboration with Stripe: Onboarding user in Stripe Connect and create Express account then Transfer money and Payout. Also Charge client using Stripe Payment Intent through Card',
        'Organize the work and track progress following Agile Scrum methodology using Trello',
        'Deploy Application using Netlify and Heroku',
        'Time management: Manage time in efficient way to achieve maximum productivity as I am working on both freelance project and my full-time job',
      ],
    },
    {
      _id: 'xperiencia',
      contractType: 'End of studies internship',
      company: 'Xperiencia',
      dates: 'Feb 2020 - Aug 2020',
      position: 'MERN Stack Developer',
      iconPath: '/static/icons/fallback.webp',
      iconWidth: 90,
      iconHeight: 90,
      summary:
        'Developed usability testing web and desktop application (with Electron), implementing real-time emotion recognition analysis and WebSocket chat functionality.',
      contributions: [
        'Help company clients test their prototypes by developing usability testing desktop application which reduces their project loss, and build the application using Electron',
        'Manage software development life cycle including requirements analysis and architecture design',
        'Develop UI/UX friendly interfaces using React.js / Sass as frontend and Nodejs / Express.js as backend along with MongoDB / NoSQL and implement a real-time chat using WebSocket / Socket.IO',
        'Implement user authentication as well as a security service using Json Web Token (JWT) for authorization',
        'Implement Face-api.js library & WebRTC to gather statistics based on real-time emotion recognition analysis',
        'Follow Scrum Agile methodology and organize work using Trello',
        'Help team members attain their project goals through code reviews and continuous motivation',
      ],
    },
    {
      _id: 'fabskill',
      contractType: 'Summer internship, Part-time job',
      company: 'Fabskill',
      dates: 'July 2019 - Oct 2019',
      position: 'Full Stack Developer',
      iconPath: '/static/icons/fabskill.webp',
      iconWidth: 90,
      iconHeight: 90,
      summary:
        'Enhanced user experience and developed internal management dashboard that significantly increased sales team productivity through real-time KPI tracking',
      contributions: [
        'Implement new feature in company platform to enhance user experience',
        'Cooperate to help increase sales team productivity by developing internal management dashboard using Angular.js, Bootstrap and CodeIgniter along with other tools like Git and FileZilla',
        "Our dashboard also displays daily statistics and Key Performance Indicators that are essential for determining the team's work strategy",
        'Follow Agile methodology and manage workload using Trello',
      ],
    },
  ],
};

export default careerSectionData;
