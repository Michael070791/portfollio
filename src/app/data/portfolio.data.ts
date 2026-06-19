import { PortfolioProfile } from '../types/portfolio.types';

export const portfolioProfile: PortfolioProfile = {
  displayName: 'Alhassan Michael Araphat (MSc.)',
  role: 'Assistant Research Scientist',
  organization: 'CSIR-INSTI',
  secondaryRole: 'CEO, Kodynex Solutions',
  heroEyebrow: 'Assistant Research Scientist at CSIR-INSTI',
  headline: 'Software Engineer Building Practical, Reliable Systems',
  summary:
    'Software engineer with 4+ years of experience building .NET APIs, React interfaces, and cross-platform applications for research, public-sector, and product teams.',
  experienceSummary:
    'I work across API design, web and mobile interfaces, research support, and deployment workflows. My strength is turning institutional and product goals into maintainable software that teams can use and improve.',
  heroFocusAreas: [
    'Transforming ideas into dependable software platforms',
    'Modern .NET APIs backed by clean engineering practices',
    'React and mobile experiences that users can trust',
    'DevOps workflows that make releases faster and safer',
  ],
  email: 'am.araphat@csir.org.gh',
  phone: '+233541319428',
  github: 'https://github.com/Michael070791',
  linkedin: 'https://www.linkedin.com/in/alhassan-michael-8ab0b8118/',
  resumeHref:
    'mailto:am.araphat@csir.org.gh?subject=Request%20for%20Resume&body=Hello%20Araphat%2C%20I%20would%20like%20to%20request%20your%20resume.',
  profileImageSrc: 'images/mike.jpeg',
  profileImageAlt: 'Portrait of Alhassan Michael Araphat',
  experienceMetrics: [
    { value: '4+', label: 'Years Experience' },
    { value: 'CSIR-INSTI', label: 'Current Appointment' },
    { value: '.NET + React', label: 'Core Stack' },
    { value: 'Mobile', label: 'Cross-Platform Work' },
  ],
  techBadges: ['.NET', 'React', 'Azure', 'Docker'],
  researchInterests: [
    'Intelligent Cyber-Physical Systems',
    'Secure Distributed and Cloud-Native Architectures',
    'AI-Augmented Software Engineering and Governance',
    'Real-Time Communication Systems',
    'Embedded and Edge Computing',
    'Industrial and Environmental AI Applications',
  ],
  experience: [
    {
      organization: 'Council for Scientific and Industrial Research (CSIR), Ghana',
      employmentType: 'Full-time',
      duration: '3 yrs 5 mos',
      location: 'Accra, Greater Accra Region, Ghana',
      summary: 'Software development, research support, and project coordination for CSIR-INSTI digital initiatives.',
      roles: [
        {
          title: 'Assistant Research Scientist',
          period: 'Oct 2023 - Present',
          duration: 'Present',
        },
        {
          title: 'Principal Technologist',
          period: 'Oct 2022 - Nov 2023',
          duration: '1 yr 2 mos',
          summary: 'Prepared research proposals, managed software work, and coordinated digital projects across the institute.',
        },
      ],
      highlights: [
        "Developed a centralized platform for tracking CSIR-Ghana's 5-year strategic plan.",
        'Built API and web application workflows for structured institutional reporting.',
        'Supported research planning, software management, and project coordination.',
      ],
      skills: ['C#', 'HTML5', 'Research Proposals', 'Project Coordination'],
    },
    {
      organization: 'Talents2Germany - Arbeitgeber',
      employmentType: 'Contract',
      duration: '3 mos',
      location: 'Frankfurt, Germany | Remote',
      summary:
        'Supported candidates and clients interested in working with Talents2Germany and pursuing employment opportunities in Germany.',
      roles: [
        {
          title: 'Process Consultant',
          period: 'Aug 2023 - Oct 2023',
          duration: '3 mos',
        },
      ],
      highlights: [
        'Reviewed resumes, refined candidate profiles, and assessed applicant fit for the Talents2Germany process.',
        'Interviewed interested candidates and clients, then guided qualified applicants through the work-in-Germany pathway.',
        'Managed the company LinkedIn page, published polished candidate portfolio posts, and generated new leads.',
        'Scheduled and hosted virtual meetings while tracking candidate progress through the process.',
      ],
      skills: ['Resume Review', 'Client Interviews', 'Lead Generation', 'LinkedIn Management'],
    },
    {
      organization: 'CICON.App',
      employmentType: 'Contract',
      duration: '1 yr 7 mos',
      location: 'United Kingdom',
      roles: [
        {
          title: 'Mobile Application Developer',
          period: 'May 2021 - Nov 2022',
          duration: '1 yr 7 mos',
        },
      ],
      highlights: [
        'Developed user-facing features for a cross-platform mobile application.',
        "Reviewed teammates' code and refactored modules to improve maintainability.",
        'Resolved critical bugs and improved product stability.',
      ],
      skills: ['Firebase', 'Bitbucket', 'Cross-Platform Mobile', 'Code Review'],
    },
    {
      organization: 'Council for Scientific and Industrial Research (CSIR), Ghana',
      duration: '1 yr 1 mo',
      location: 'Accra, Ghana',
      roles: [
        {
          title: 'National Service Personnel',
          period: 'Sep 2019 - Sep 2020',
          duration: '1 yr 1 mo',
        },
      ],
    },
    {
      organization: 'BidOn Technology',
      employmentType: 'Part-time',
      duration: '2 yrs 2 mos',
      location: 'Cherkasy Region, Ukraine',
      roles: [
        {
          title: 'Junior Software Developer',
          period: 'Oct 2015 - Nov 2017',
          duration: '2 yrs 2 mos',
        },
      ],
      highlights: [
        'Built web and desktop application features with an engineering team.',
        'Reviewed code, resolved defects, and improved software quality.',
      ],
      skills: ['C#', 'Web Development', 'Desktop Applications'],
    },
  ],
  education: [
    {
      institution: 'Cherkasy State Technological University',
      degree: 'MSc. Computer Engineering, Major in Computer Systems and Networks',
      period: '2017 - 2019',
      details: ['Graduate study in computer systems, networks, and applied engineering.'],
    },
    {
      institution: 'Cherkasy State Technological University',
      degree: 'BSc. Computer Engineering, Major in Computer Systems and Networks',
      period: '2013 - 2017',
      details: ['Undergraduate foundation in computer engineering and networked systems.'],
    },
  ],
  skillGroups: [
    {
      title: 'Frontend & Client',
      items: ['React', 'Next.js', 'Angular', 'Xamarin Forms', '.NET MAUI'],
    },
    {
      title: 'Backend',
      items: ['C#', '.NET Core', '.NET 8 APIs'],
    },
    {
      title: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redis'],
    },
    {
      title: 'Cloud & Hosting',
      items: ['Azure App Services', 'Azure VMs', 'Azure Container Services', 'Vercel'],
    },
    {
      title: 'DevOps & Release',
      items: ['Docker', 'Kubernetes', 'Azure DevOps CI/CD', 'Containerized Deployment'],
    },
    {
      title: 'Infrastructure & Delivery',
      items: ['Terraform', 'Git', 'Bitbucket', 'Azure DevOps Boards', 'Azure DevOps Repos'],
    },
    {
      title: 'Workflow',
      items: ['Linux', 'Software Craftsmanship', 'Code Review', 'Research Writing', 'Adaptable to New Technologies'],
    },
  ],
  projects: [
    {
      title: 'AfriAddress',
      kind: 'private-case-study',
      summary:
        'Full-stack address and mapping platform for African localisation, with geospatial search, Plus Codes, offline-first submissions, multilingual support, and community verification.',
      highlights: [
        'Built address creation, verification, discovery, geocoding, and routing workflows with .NET, Angular, PostgreSQL/PostGIS, Docker, and OSRM.',
        'Implemented Plus Code support, offline submissions, multilingual localisation, secure authentication, and verification flows.',
        'Added health checks, observability foundations, and API-ready structures for future integrations.',
      ],
      stack: [
        '.NET 8',
        'Angular 17',
        'PostgreSQL/PostGIS',
        'Docker',
        'OSRM',
      ],
      imageSrc: 'images/Screenshot from 2026-02-27 20-57-40.png',
      imageAlt: 'AfriAddress mobile map interface preview',
      primaryCtaLabel: 'Discuss Project',
      primaryCtaHref: '#contact',
    },
    {
      title: 'Carelink Telehealth Platform',
      kind: 'private-case-study',
      summary:
        'Full-stack telehealth platform built with .NET, Next.js, PostgreSQL, Docker, and Azure for secure clinical workflows and provider teams.',
      highlights: [
        'Built workflows for onboarding, appointments, EHR records, vitals, lab orders, prescriptions, referrals, analytics, notifications, and video consultations.',
        'Designed backend services with .NET APIs, EF Core, PostgreSQL, JWT and Google OAuth authentication, background email, and cloud storage.',
        'Added Docker Compose, health checks, structured logging, monitoring, tests, and CI/CD for Azure deployment.',
      ],
      stack: [
        '.NET 8',
        'Next.js',
        'PostgreSQL',
        'Docker Compose',
        'Azure',
        'GitHub Actions',
      ],
      imageSrc: 'images/carelink.png',
      imageAlt: 'Carelink telehealth platform preview',
      projectUrlLabel: 'Private deployment, link available on request',
      primaryCtaLabel: 'Discuss Project',
      primaryCtaHref: '#contact',
    },
    {
      title: 'CSIR Strategic Plan Tracking Platform',
      kind: 'private-case-study',
      summary:
        'Centralized platform for monitoring CSIR-Ghana strategic plan execution and improving structured reporting for decision-makers.',
      highlights: [
        'Developed API and web workflows for tracking institutional objectives and progress.',
        'Structured reporting views around CSIR planning and monitoring needs.',
        'Supported maintainable architecture, deployment, and operational follow-up.',
      ],
      stack: ['C#', '.NET APIs', 'Azure', 'Monitoring'],
      imageSrc: 'images/csir-spme.png',
      imageAlt: 'CSIR strategic plan monitoring and evaluation platform preview',
      primaryCtaLabel: 'Case Study',
      primaryCtaHref: '#contact',
    },
    {
      title: 'BEST Forum Ghana Platform',
      kind: 'public-project',
      summary:
        'Public web platform for BEST Forum Ghana, supporting a national forum on environmental sustainability, science, technology, and stakeholder engagement.',
      highlights: [
        'Delivered core application work across Next.js, a .NET API, SQL database, and Azure hosting.',
        'Built features that improve forum visibility, stakeholder access, and public communication.',
        'Set up automated Azure deployment pipelines for more consistent production updates.',
      ],
      stack: [
        'Next.js',
        '.NET API',
        'SQL Database',
        'Azure',
        'Automated Pipelines',
      ],
      imageSrc: 'images/bestforum.png',
      imageAlt: 'BEST Forum Ghana platform preview',
      projectUrlHref: 'https://bestforum.mesti.gov.gh/',
      projectUrlLabel: 'bestforum.mesti.gov.gh',
      primaryCtaLabel: 'View Project',
      primaryCtaHref: 'https://bestforum.mesti.gov.gh/',
      secondaryCtaLabel: 'Discuss Contribution',
      secondaryCtaHref: '#contact',
    },
    {
      title: 'CICON Circular Concierge App',
      kind: 'public-project',
      summary:
        'Contributed mobile features to CICON, a circular concierge app for digital wardrobes, garment impact, and care, repair, rental, resale, donation, and recycling journeys.',
      highlights: [
        'Developed user-facing features for wardrobe management, garment lifecycle visibility, and service discovery.',
        'Worked on flows using care labels, material composition, price, and location data.',
        'Supported product features connected to partner integrations and QR-led wardrobe journeys.',
      ],
      stack: [
        'Mobile App',
        'Digital Wardrobe',
        'Circular Fashion',
        'Partner Integrations',
      ],
      imageSrc: 'images/cicon.webp',
      imageAlt: 'CICON circular concierge mobile app preview',
      projectUrlHref: 'https://www.cicon.app/',
      projectUrlLabel: 'cicon.app',
      primaryCtaLabel: 'View Project',
      primaryCtaHref: 'https://www.cicon.app/',
      secondaryCtaLabel: 'Discuss Contribution',
      secondaryCtaHref: '#contact',
    },
    {
      title: 'Containerized Release Work',
      kind: 'private-case-study',
      summary:
        'Practical deployment work using containers, CI/CD, and Kubernetes-oriented practices to make application releases more consistent.',
      highlights: [
        'Standardized Docker-based workflows for application environments.',
        'Applied Azure DevOps pipelines to improve release repeatability.',
        'Used Kubernetes-oriented practices where orchestration and resilience were needed.',
      ],
      stack: ['Docker', 'Kubernetes', 'Azure DevOps', 'Cloud Deployment'],
      imageSrc: '',
      imageAlt: 'Placeholder media for containerized release work case study',
      primaryCtaLabel: 'Case Study',
      primaryCtaHref: '#contact',
    },
    {
      title: 'Selected GitHub Work',
      kind: 'public-profile',
      summary:
        'Public repositories and code samples covering application engineering, APIs, and platform-oriented development.',
      highlights: [
        'Provides public code samples for recruiters and technical reviewers.',
        'Shows breadth across client applications, backend services, and tooling.',
        'Complements the private case studies shown in this portfolio.',
      ],
      stack: ['GitHub', '.NET', 'Cross-Platform Apps', 'Experiments'],
      imageSrc: '',
      imageAlt: 'Placeholder media for public GitHub work',
      projectUrlHref: 'https://github.com/Michael070791',
      projectUrlLabel: 'github.com/Michael070791',
      primaryCtaLabel: 'View GitHub',
      primaryCtaHref: 'https://github.com/Michael070791',
    },
  ],
  publications: [
    {
      title: 'EFFECTIVENESS OF IMPLEMENTING MPLS VPN COMPUTER NETWORK FOR "BUSYINTERNET" ISP (GHANA)',
      status: "Master's Thesis",
      description:
        'Master\'s thesis on MPLS VPN implementation for BusyInternet ISP in Ghana, focused on network design, performance, and reliability.',
      tags: ['MPLS VPN', 'Computer Networks', 'ISP Infrastructure', "Master's Thesis"],
    },
    {
      title:
        'Topic modelling of the "fix the country" protest in Ghana using the Latent Dirichlet Allocation (LDA) and Jaccard Similarity approach',
      status: 'Published Article | JASIT 2024',
      description:
        'Published article applying LDA and Jaccard Similarity to analyse discourse around the Fix the Country protest in Ghana.',
      tags: ['LDA', 'Jaccard Similarity', 'Topic Modelling', 'Social Media Analysis'],
      urlHref: 'https://csirjasit.org/index.php/journal/article/view/5',
      urlLabel: 'csirjasit.org article',
    },
  ],
  socialLinks: [
    { label: 'Email', href: 'mailto:am.araphat@csir.org.gh', icon: 'email' },
    { label: 'Phone', href: 'tel:+233541319428', icon: 'phone' },
    {
      label: 'GitHub',
      href: 'https://github.com/Michael070791',
      icon: 'github',
      displayText: 'Michael070791',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alhassan-michael-8ab0b8118/',
      icon: 'linkedin',
      displayText: 'Alhassan Michael Profile',
    },
  ],
};
