/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Keysie Sanchez",
  title: "Hey there, I'm Keysie",
  subTitle: emoji(
    "Data & AI Engineer 🚀 with 5+ years of experience in IT, building scalable data pipelines, AI solutions, and cloud-based platforms. Skilled at transforming complex data into insights and automation for global companies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1TtV7umxmBu3Y82HpNg893Bv0QZ8UVFoI/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Keysie27",
  linkedin: "https://www.linkedin.com/in/keysiesanchezrosario/",
  gmail: "keysiesr@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Data Engineer & AI Specialist passionate about building scalable data platforms and intelligent solutions.",
  skills: [
    emoji(
      "⚡ Design and orchestrate large-scale ETL/ELT pipelines with dbt, Dagster, and Snowflake."
    ),
    emoji(
      "⚡ Build real-time data ingestion and streaming solutions using Apache Kafka and AWS."
    ),
    emoji(
      "⚡ Develop NLP and multi-agent AI solutions to transform complex data into insights."
    ),
    emoji(
      "⚡ Optimize data models and warehouse performance, reducing cost and increasing efficiency."
    ),
    emoji(
      "⚡ Deliver hands-on training in AI, Data Science, and Robotics to professionals worldwide."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fas fa-snowflake"
    },
    {
      skillName: "dbt",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "QuickSight",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Sigma",
      fontAwesomeClassname: "fas fa-superscript"
    },
    {
      skillName: "Looker",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "SQL/NoSQL Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Apache Kafka",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "Dagster",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Apache Spark",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fas fa-tasks"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git / GitHub",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Machine Learning / AI",
      fontAwesomeClassname: "fas fa-robot"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "SOME COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/nectarvetLogo.png"),
      projectName: "NectarVet",
      projectDesc: "All-in-one cloud-based veterinary platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.nectarvet.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thryvLogo.webp"),
      projectName: "Thryv",
      projectDesc:
        "SaaS business management platform for small and medium-sized businesses",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.thryv.com/"
        }
      ]
    },
    {
      image: require("./assets/images/kanvasLogo2.png"),
      projectName: "Kanvas",
      projectDesc:
        "Operational engine that unifies systems and extends digital stacks for businesses",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.kanvas.dev/"
        }
      ]
    },
    {
      image: require("./assets/images/mctekLogo.png"),
      projectName: "Mctekk",
      projectDesc:
        "Software company that builds B2B platforms, marketplaces, and mobile apps",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.mctekk.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Clients / Consulting Section

const clientsSection = {
  title: "My Clients",
  subtitle:
    "SOME ORGANIZATIONS I HAVE COLABORATED WITH THROUGH CONSULTING, TEACHING, AND TALKS",
  logos: [
    {
      image: require("./assets/images/infotecLogo.jpg"),
      name: "INFOTEC"
    },
    {
      image: require("./assets/images/huaweiLogo.png"),
      name: "HUAWEI"
    },
    {
      image: require("./assets/images/ecopetrolLogo.png"),
      name: "Ecopetrol"
    },
    {
      image: require("./assets/images/eysLogo.png"),
      name: "E&S Global"
    },
    {
      image: require("./assets/images/aciemLogo.webp"),
      name: "ACIEM"
    },
    {
      image: require("./assets/images/itlaLogo.png"),
      name: "ITLA"
    },
    {
      image: require("./assets/images/infotepLogo.png"),
      name: "INFOTEP"
    },
    {
      image: require("./assets/images/girls_in_tech_logo.png"),
      name: "Girls in Tech"
    }
  ],
  display: true // Set false to hide this section
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements "),
  subtitle: "Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "WhiteBox XAI Agent",
      subtitle:
        "I developed a VS Code Extension that uses NLP to help developers to train ML models",
      image: require("./assets/images/whitebox_logo.png"),
      imageAlt: "WhiteBox XAI Agent Logo",
      footerLink: [
        {
          name: "Open in Marketplace",
          url: "https://marketplace.visualstudio.com/items?itemName=PublisherTemp.whitebox-xai-agent"
        }
      ]
    },
    {
      title: "HCIA AI Certification",
      subtitle:
        "Was among the first 10 in LATAM to achieve the Huawei Cloud HCIA-AI certification",
      image: require("./assets/images/huaweicertLogo.png"),
      imageAlt: "Huawei certification",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1tADO4kvH6n8gfsR_0aKmBB1zVsvBXjNy/view?usp=sharing"
        }
      ]
    },
    {
      title: "ICT International Chinese Competition Winner",
      subtitle:
        "Winner of the Cloud, BigData and AI track of the ICT Competition in 2023",
      image: require("./assets/images/ict_ceremony.jpg"),
      footerLink: [
        {
          name: "About the competition",
          url: "https://www.huawei.com/minisite/ict-competition-2024-2025-global/en/index.html"
        }
      ]
    },
    {
      title: "Studied Data Analytics in Canada",
      subtitle:
        "Awarded the Emerging Leaders in the Americas Program for Data Analytics studies in Canada",
      image: require("./assets/images/educanadaLogo.jpg"),
      footerLink: [
        {
          name: "About the program",
          url: "https://www.educanada.ca/index.aspx?lang=eng"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-6179978214",
  email_address: "keysiesr@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  clientsSection,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
