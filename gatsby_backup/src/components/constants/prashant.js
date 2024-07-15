export const NAVIGATION = [
  "about",
  "experience",
  "skills",
  "projects",
  "education",
];

export const ABOUT = [
  {
    type: "text",
    content: "Hi there! I'm Prashant Khanduri",
  },
  {
    type: "text",
    content:
      "I'm originally from India. Although most of my school days were spent in India (New Delhi), a few of them slipped into Nepal (Kathmandu), Canada (Waterloo) and United States (Los Angeles)",
  },
  {
    type: "text",
    content:
      "On a day to day basis, I tell computers what to do and they seem to obey me (for the most part). I end up getting paid for <a class='link-inv' href='#experience'>some of it</a>, the other portion ends up on a <a class='link-inv' href='https://github.com/khanduri/''>public domain</a>",
  },
  {
    type: "text",
    content:
      "I also <a class='link-inv' href='http://khanduri.github.io/''>blog</a>, but I haven't really scoped out the topics I'd like to talk about. For now, I'm just using it to collect ideas that I find interesting. I hope someday a pattern will emerge",
  },
  // {
  //   "type": "text",
  //   "content": "In case you're wondering, the above picture is me trying to slide down Mt Rainier (Paradise snowplay area) and not doing a great job at it. I like the picture though"
  // },
  {
    type: "text",
    content:
      "You know a lot about me now! .. <a class='link-inv' href='#contact' className='page-scroll'>Ok your turn</a>",
  },
];

export const EDUCATION = {
  institutes: [
    {
      title: "University of Southern California",
      link: "https://viterbischool.usc.edu/",
      logo: "/images/prashant/usc.svg",
      loc: "Los Angeles, CA",
      course: "Masters in Computer Science Minor in AI / ML / Data pipelines",
      // desc: "Specialization in Human Language technology (Applied Artificial Intelligence)",
      dates: "2008 - 2009",
    },
    {
      title: "University of Waterloo",
      link: "https://uwaterloo.ca/electrical-computer-engineering/",
      logo: "/images/prashant/university-of-waterloo.svg",
      loc: "Ontario, Canada",
      course:
        "BASc - Computer Engineering (Honors) - Minor in Software Engineering",
      // desc: "Minor in Software Engineering",
      dates: "2003 - 2008",
    },
  ],
};

export const EXPERIENCE = [
  {
    fa_class: "fa fa-spin fa-th-large",
    logo: "/images/prashant/sn126.svg",
    title: "SN126 Inc",
    link: "https://sn126.com/",
    loc: "San Fransisco, CA -- NCR, India",
    dates: "2018 - current",
    position: "Co-Founder / CTO",
    body: [
      {
        team_desc:
          "An open source tool that allows developers to catch bugs before they are pushed to production",
        duties: [
          "Define the open core and hosted strategies for Diffy",
          "Architect the hosted solution with a focus on generating review insights",
        ],
      },
    ],
  },
  {
    fa_class: "fa fa-credit-card",
    logo: "/images/prashant/affirm.svg",
    title: "Affirm",
    link: "https://www.affirm.com/",
    loc: "San Fransisco, CA",
    dates: "2015 - 2018",
    position: "Engineering Manager",
    body: [
      {
        team_name: "Risk and Underwriting",
        team_desc:
          "The team is responsible for building our own proprietary financial platform, as well as our real-time high-throughput data processing pipeline",
        duties: [
          "Build and maintain the underwriting pipeline for all product flows",
          "Architect the offline infrastructure to be used by Data Science for iterating and improving credit and fraud models",
        ],
      },
    ],
  },
  {
    fa_class: "fa fa-heartbeat",
    logo: "/images/prashant/jawbone.png",
    title: "Jawbone",
    link: "https://jawbone.com/",
    loc: "San Fransisco, CA",
    dates: "2014 - 2015",
    position: "Senior Software Engineer",
    body: [
      {
        team_name: "Insights & Intelligence",
        team_desc:
          "The team is responsible for building an intelligent guide that helps our users make good health choices",
        duties: [
          "Building the core intelligence for the Smart Coach brand",
          "Building the Insights system and the internal CRM system to manage the insight content",
        ],
      },
    ],
  },
  {
    fa_class: "fa fa-comment",
    logo: "/images/prashant/hearsay.png",
    title: "Hearsay Social",
    link: "https://hearsaysystems.com/",
    loc: "San Fransisco, CA",
    dates: "2012 - 2014",
    position: "Full Stack Generalist Engineer",
    body: [
      {
        team_name: "Application Engagement Team",
        team_desc:
          "Team's goal was to keep the user engagement up and unblock any onboarding issues (growing the monthly active users)",
        duties: [
          "Designed and developed a notification platform for our software",
          "Worked on building the analytics and reporting framework",
        ],
      },
    ],
  },
  {
    fa_class: "fab fa-windows",
    logo: "/images/prashant/microsoft.svg",
    title: "Microsoft Inc",
    link: "https://www.bing.com",
    loc: "Seattle, WA",
    dates: "2009 - 2012",
    position: "Software Development Engineer II",
    body: [
      {
        team_name: "Bing - Core Page Relevance",
        team_desc:
          "Team was responsible for ranking the top documents in Bing's algorithmic web search results (Top 100K queries)",
        duties: [
          "Developing new algorithms to extract ranking signals and features from petabytes of user browsing activity logs",
          "Using data mining and machine learning techniques to optimize user satisfaction metrics",
        ],
      },
      {
        team_name: "Windows Live",
        team_desc:
          "Worked with two separate groups (Service Management / Monetization) on delivering project critical components",
        duties: [
          "Implemented a service for syncing data from a system store to a DHCP server (for the server to hand out correct IP leases required for PXE booting)",
          "Helped design the next generation monetization solution to better target Hotmail users",
        ],
      },
    ],
  },
  {
    fa_class: "fa fa-code",
    title: "Internships",
    // loc: "Various Locations",
    dates: "2004 - 2009",
    // position: "Intern",
    body: [
      {
        team_name: "Microsoft Corporation - Windows Live Mesh",
        team_desc: "Seattle, USA - May 2009 – Aug 2009",
        duties: [
          "Created an assembly that provisioned a delegated authentication token management service",
        ],
      },
      {
        team_name:
          "Amazon.com Inc - Recommendations and Personalization ( AI )",
        team_desc: "Seattle, USA - Aug 2007 - Dec 2007",
        duties: [
          "Worked on a ranking mechanism to generate a tag set which describe the list recommended items",
        ],
      },
      {
        team_name: "Sun Microsystems - Complex Systems Research Group",
        team_desc: "California, USA - Jan 2006 - Apr 2006",
        duties: [
          "Participated in the design and development of a simulation infrastructure for the behavioral analysis of wireless sensor networks",
        ],
      },
      {
        team_name: "Amazon.com Inc - Digital Media Technologies",
        team_desc: "Seattle, USA - May 2005 - Aug 2005",
        duties: [
          "Worked on the variety of upgrades to the digital media pipeline (mainly the first internal REST client to the S3 service)",
        ],
      },
      {
        team_name: "Epson Canada - Barcode Recognition",
        team_desc: "Toronto, Canada - Jan 2004 - Apr 2004",
        duties: [
          "Developed a universal 2D barcode decoding application for hand-held image-scanners",
        ],
      },
    ],
  },
];

export const PROFILE = {
  name: {
    first: "Prashant",
    last: "Khanduri",
  },
  desc: {
    first:
      "Solutions Architect - building roadmaps, setting objectives, delineating work, forecasting hiring requirements",
    second: "Currently in New Delhi, India",
  },
  contact: {
    linkedin: "prashantkhanduri",
    github: "khanduri",
    twitter: "khandurip",
    facebook: "prashant.khanduri",
  },
};

export const LEARN = {
  current: {
    languages: [
      ["javascript", 80],
      ["python", 90],
    ],
    frameworks: [
      ["gatsby", 60],
      ["nextjs", 70],
      ["react", 75],
      ["react native", 70],
      ["flask", 90],
    ],
    tools: [
      ["PostgreSQL", 90],
      ["MongoDB", 90],
      ["Redshift", 70],
      ["Celery", 90],
    ],
  },
  past: {
    languages: [
      ["C#", 70],
      ["Java ", 70],
      ["PHP", 50],
      ["Perl", 40],
      ["C / C++ ", 70],
      ["Self", 60],
      ["objective-c", 60],
    ],
    frameworks: [
      ["django", 80],
      ["angular", 60],
      ["yeoman", 60],
      ["expo", 50],
      ["code-igniter", 50],
      ["cake-php", 40],
      ["mason", 50],
    ],
    tools: [
      ["Looker", 60],
      ["Airflow", 60],
      ["Athena", 50],
      ["Kafka", 50],
    ],
  },
};
