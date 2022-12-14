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
  username: "Aqilah Syahirah",
  title: "Hi all, I'm Aqilah",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://studentusm-my.sharepoint.com/:b:/g/personal/aqilahera_student_usm_my/EathWzDInctCrCXNyJ8P2ckBUWdTgxA5zCdkaJRH3FnoBw?e=pA6K9A", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aqilahshi",
  linkedin: "https://www.linkedin.com/in/aqilah-syahirah-5959b6228/",
  gmail: "aqilahera@gmail.com",
  instagram: "https://www.instagram.com/aqilahsyahirah___/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universiti Sains Malaysia",
      logo: require("./assets/images/usm.png"),
      subHeader: "Bachelor of Science in Computer Science, Major: Software Engineering",
      duration: "September 2019 - August 2023",
      descBullets: [
        "Current CGPA of 3.43, Dean's List Semester 2, Semester 4"
      ]
    },
    {
      schoolName: "Kolej Matrikulasi Pulau Pinang",
      logo: require("./assets/images/kmpp.png"),
      subHeader: "Foundation in pure science",
      duration: "April 2018 - March 2019",
      descBullets: ["CGPA 3.75"]
    },
    {
      schoolName: "Sekolah Menengah Agama Al-Irshad",
      logo: require("./assets/images/smai.png"),
      subHeader: "Sijil Pelajaran Malaysia",
      duration: "January 2013 - December 2017",
      descBullets: ["SPM: 10As, 1B"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
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
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Teaching Assistant for Software Engineering",
      company: "Universiti Sains Malaysia",
      companylogo: require("./assets/images/usm.png"),
      date: "October 2022 – Present",
      desc: "Responsible to conduct tutorial session for all Year 2 CS students",
      descBullets: [
        "Help students to strengthen foundations of software engineering including aspects of software processes, requirements engineering, system modelling, system architecture and system design, system implementation, system testing, system maintenance and project management",
        "The focus is on the discipline required as best practices using Agile method"
      ]
    },
    {
      role: "Front-End Developer Intern",
      company: "Telebort",
      companylogo: require("./assets/images/Telebortt.png"),
      date: "March 2022 – August 2022",
      desc: "Responsible in creating a brand new website for the company.",
      descBullets: [
        "Gather and analyze user requirements from the stakeholder",
        "Create user flows, wireframes, prototypes, and mockups",
        "Translate user requirements into style guides, design systems, design patterns and attractive user interfaces"
      ]
    },
    {
      role: "Data Annotator",
      company: "Universiti Sains Malaysia",
      companylogo: require("./assets/images/usm.png"),
      date: "Aug 2021 – April 2022",
      desc: "Assisted Master research students in developing the Malay Emotion and Crypto Currency Tweet Corpus to evaluate models for linguistically based emotion classification.",
      descBullets: [
        "Managed to annotate 21 000+ Malay tweets individually",
        "Collaborated with 2 annotators and the 2 researchers for annotation discussion"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/telebort.png"),
      projectName: "Telebort Website",
      projectDesc: "Responsible in developing a brand new website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.telebort.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/hlb.png"),
      projectName: "Can you hack it, ASEAN addition",
      projectDesc: "Create a website MoneyMe that aims for children and teach them on how to manage their saving effectively.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Techinical Reports 🏆 "),
  subtitle:
    "Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "GRAPH ALGORITHM RANDOM CITY",
      subtitle:
        "A small project that visualizes a graph with 5 nodes of capital state and verifies the status of the graph when the vertex is allocated.",
      image: require("./assets/images/phyton.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/aqilahshi/Graph-Algorithms-Random-City"
        }
      ]
    },
    {
      title: "RIZQI SDG SOLUTION",
      subtitle:
        "“Rizqi” is a Web App for the USM community that plays an important role in collecting and distributing surplus food and non-food for the needy, provided that the food that is going to be distributed is still edible.",
      image: require("./assets/images/feed.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/aqilahshi/Rizqi-SDGs-Solution"
        }
      ]
    },

    {
      title: "JOURNAL STUDIO",
      subtitle: "Create a website that can help to keep track of the thoughts, ideas, and tasks in simple way. This online notepad can help for organizing notes and reminders or as a place to store important information",
      image: require("./assets/images/html.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Github", 
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Talks Sections

const talkSection = {
  title: "Youtube",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "My Creative Resume CAT 402",
      subtitle: "Aqilah Syahirah binti Shahabudin_148346",
      slides_url: "https://youtu.be/imkBpwNlHiQ",
      event_url: "https://www.linkedin.com/in/aqilah-syahirah-5959b6228/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "016-4429436",
  email_address: "aqilahera@gmail.com"
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
  achievementSection,
  talkSection,
  contactInfo,
  isHireable
};
