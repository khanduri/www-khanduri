export const NAVIGATION = ["about", "learn", "experience", "projects", "education"];


export const ABOUT = [
  {
    "type": "text",
    "content": "Hi there! I'm Prashant Khanduri"
  },
  {
    "type": "text",
    "content": "I'm originally from India. Although most of my school days were spent in India (New Delhi), a few of them slipped into Nepal (Kathmandu), Canada (Waterloo) and United States (Los Angeles)"
  },
  {
    "type": "text",
    "content": "On a day to day basis, I tell computers what to do and they seem to obey me (for the most part). I end up getting paid for <a class='link-inv' href='#experience'>some of it</a>, the other portion ends up on a <a class='link-inv' href='https://github.com/khanduri/''>public domain</a>"
  },
  {
    "type": "text",
    "content": "I also <a class='link-inv' href='http://khanduri.github.io/''>blog</a>, but I haven't really scoped out the topics I'd like to talk about. For now, I'm just using it to collect ideas that I find interesting. I hope someday a pattern will emerge"
  },
  // {
  //   "type": "text",
  //   "content": "In case you're wondering, the above picture is me trying to slide down Mt Rainier (Paradise snowplay area) and not doing a great job at it. I like the picture though"
  // },
  {
    "type": "text",
    "content": "You know a lot about me now! .. <a class='link-inv' href='#contact' className='page-scroll'>Ok your turn</a>"
  }
];


export const EDUCATION = {
  "institutes": [
    {
      "title": "University of Southern California",
      "link": "https://viterbischool.usc.edu/",
      "loc": "Los Angeles, CA",
      "course": "Masters in Computer Science",
      "desc": "Specialization in Human Language technology (Applied Artificial Intelligence)",
      "dates": "2008 - 2009"
    },
    {
      "title": "University of Waterloo",
      "link": "https://uwaterloo.ca/electrical-computer-engineering/",
      "loc": "Ontario, Canada",
      "course": "Bachelor in Applied Science – Computer Engineering (Honors)",
      "desc": "Option in Software Engineering",
      "dates": "2003 - 2008"
    }
  ]
};


export const EXPERIENCE = [
  {
    "fa_class": "fa fa-spin fa-th-large",
    "title": "Diffy",
    "link": "https://github.com/opendiffy/diffy",
    "loc": "San Fransisco, CA / NCR, India",
    "dates": "2018 - current",
    "position": "Co-Founder / CTO",
    "body": [
      {
        "team_desc": "An open source tool that allows developers to catch bugs before they are pushed to production",
        "duties": [
          "Define the open core and hosted strategies for Diffy",
          "Architect the hosted solution with a focus on generating review insights",
          "Evangelize Diffy at conferences"
        ]
      }
    ]
  },
  {
    "fa_class": "fa fa-credit-card",
    "title": "Affirm",
    "link": "https://www.affirm.com/",
    "loc": "San Fransisco, CA",
    "dates": "2015 - 2018",
    "position": "Engineering Manager",
    "body": [
      {
        "team_name": "Platform team",
        "team_desc": "The team is responsible for building our own proprietary financial platform, as well as our real-time high-throughput data processing pipeline",
        "duties": [
          "Build and maintain the underwriting pipeline for all product flows",
          "Architect the offline infrastructure to be used by Data Science for iterating and improving credit and fraud models"
        ]
      }
    ]
  },
  {
    "fa_class": "fa fa-heartbeat",
    "title": "Jawbone",
    "link": "https://jawbone.com/",
    "loc": "San Fransisco, CA",
    "dates": "2014 - 2015",
    "position": "Senior Software Engineer",
    "body": [
      {
        "team_name": "Insights & Intelligence team",
        "team_desc": "The team is responsible for building an intelligent guide that helps our users make good health choices",
        "duties": [
          "Building the core intelligence for the Smart Coach brand",
          "Building the Insights system and the internal CRM system to manage the insight content"
        ]
      }
    ]
  },
  {
    "fa_class": "fa fa-comment",
    "title": "Hearsay Social",
    "link": "https://hearsaysystems.com/",
    "loc": "San Fransisco, CA",
    "dates": "2012 - 2014",
    "position": "Full stack developer",
    "body": [
      {
        "team_name": "Engagement team",
        "team_desc": "Team's goal was to keep the user engagement up and unblock any onboarding issues (growing the monthly active users)",
        "duties": [
          "Designed and developed a notification platform for our software",
          "Worked on building the analytics and reporting framework"
        ]
      }
    ]
  },
  {
    "fa_class": "fab fa-windows",
    "title": "Microsoft Inc",
    "link": "https://www.bing.com",
    "loc": "Seattle, WA",
    "dates": "2009 - 2012",
    "position": "SDE II",
    "body": [
      {
        "team_name": "Bing - Relevance",
        "team_desc": "Team was responsible for ranking the top documents in Bing's algorithmic web search results (Top 100K queries)",
        "duties": [
          "Developing new algorithms to extract ranking signals and features from petabytes of user browsing activity logs",
          "Using data mining and machine learning techniques to optimize user satisfaction metrics"
        ]
      },
      {
        "team_name": "Windows Live",
        "team_desc": "Worked with two separate groups (Service Management / Monetization) on delivering project critical components",
        "duties": [
          "Implemented a service for syncing data from a system store to a DHCP server (for the server to hand out correct IP leases required for PXE booting)",
          "Helped design the next generation monetization solution to better target Hotmail users"
        ]
      }
    ]
  },
  {
    "fa_class": "fa fa-code",
    "title": "Internships",
    "loc": "Various Locations",
    "dates": "2004 - 2009",
    "position": "Intern",
    "body": [
      {
        "team_name": "Microsoft Corporation",
        "team_desc": "Windows Live Mesh - May 2009 – Aug 2009",
        "duties": [
          "Created an assembly that provisioned a delegated authentication token management service"
        ]
      },
      {
        "team_name": "Amazon.com Inc",
        "team_desc": "Personalization - Aug 2007 - Dec 2007",
        "duties": [
          "Worked on a ranking mechanism to generate a tag set which describe the list recommended items"
        ]
      },
      {
        "team_name": "Sun Microsystems",
        "team_desc": "Complex Systems Group - Jan 2006 - Apr 2006",
        "duties": [
          "Participated in the design and development of a simulation infrastructure for the behavioral analysis of wireless sensor networks"
        ]
      },
      {
        "team_name": "Amazon.com Inc",
        "team_desc": "Digital Media Technologies - May 2005 - Aug 2005",
        "duties": [
          "Worked on the variety of upgrades to the digital media pipeline (mainly the first internal REST client to the S3 service)"
        ]
      },
      {
        "team_name": "Epson Canada",
        "team_desc": "Barcode Recognition - Jan 2004 - Apr 2004",
        "duties": [
          "Developed a universal 2D barcode decoding application for hand-held image-scanners"
        ]
      }
    ]
  }
];

export const PROFILE = {
  "name": {
    "first": "Prashant",
    "last": "Khanduri"
  },
  "desc": {
    "first": "Solutions Architect - Runner - Tennis Enthusiast",
    "second": "Currently in New Delhi, India"
  },
  "contact": {
    "github": "khanduri",
    "twitter": "khandurip",
    "linkedin": "prashantkhanduri",
    "facebook": "prashant.khanduri"
  }
};


export const LEARN = {
  "current": {
    "languages": [
      ["javascript", 80],
      ["python", 90]
    ],
    "tools": [
      ["vim", 90],
      ["visual code", 70],
      ["shell-scripting", 90]
    ],
    "frameworks": [
      ["gatsby", 70],
      ["react", 60],
      ["react native", 60],
      ["expo", 50],
      ["flask", 80]
    ]
  },
  "past": {
    "languages": [
      ["C#", 70],
      ["Java ", 70],
      ["PHP", 50],
      ["Perl", 40],
      ["C / C++ ", 70],
      ["Self", 60],
      ["objective-c", 60]
    ],
    "tools": [
      ["eclipse", 60],
      ["x-code", 60],
      ["visual-studio", 80]
    ],
    "frameworks": [
      ["django", 80],
      ["angular", 60],
      ["yeoman", 60],
      ["code-igniter", 50],
      ["cake-php", 40],
      ["mason", 50]
    ]
  }
};
