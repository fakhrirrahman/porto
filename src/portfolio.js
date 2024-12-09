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
  username: "Fakhrir Rahman",
  title: "Hi all, I'm Fakhrir",
  subTitle: emoji(
    "Backend Developer yang sedang menempuh studi di Universitas Ahmad Dahlan (UAD).  Saya berfokus pada pengembangan aplikasi backend dengan teknologi seperti Node.js, Laravel, dan Nest.js"
  ),
    // resumeLink:
    //   "https://drive.google.com/file/d/1NiSbewKY359jiggPz7HxFRNg4Z9QOdED/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/fakhrirrahman",
  linkedin: "https://www.linkedin.com/in/fakhrir-rahman-b916b4221/",
  gmail: "fakhrirrahman7@gmail.com",
  facebook: "https://facebook.com/fakhrir.rahman.1/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND DEVELOPER YANG FOKUS PADA PENGEMBANGAN APLIKASI BACKEND",
  skills: [
    emoji(
      //im backend developer web developer
      "⚡ Develop highly backend applications with Laravel, Node.js, and Nest.js" 
    ),
    emoji("⚡ Develop RESTful API"),
    emoji(
      "⚡ Develop a database with MySQL, PostgreSQL, and MongoDB"
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
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universitas Ahmad Dahlan", 
      logo: require("./assets/images/logo-warna.png"),
      subHeader: "Informatics Engineering",
      duration: "2021 - Present",
      desc: "Hi, I'm a student at Ahmad Dahlan University majoring in Informatics Engineering. I am currently in the 7th semester and I am focusing on backend development.",
      descBullets: [
        "improve my skills in backend development",
        "learn more about the latest technology in the world of programming",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Farida MUA",
      companylogo: require("./assets/images/Firda.png"),
      date: "June 2024 – Juli 2024",
      desc: "Farida MUA is a website that provides makeup services for weddings, graduations, and other events. I am responsible for developing the website and managing the website.",
      descBullets: [
        "improve the website",
        "add new features to the website",
      ]
    },
    {
      role: "Backend Developer",
      company: "Terrarium",
      companylogo: require("./assets/images/logo.png"),
      date: "May 2024 – May 2024",
      desc: "im a backend developer at Terrarium, I am responsible for developing the backend of the website and managing the website.",
    },
    {
      role: "bebas developer",
      company: "Bias Promosindo jaya",
      companylogo: require("./assets/images/logo2.png"),
      date: "Maret 2024 – Sep 2024",
      desc: "Bias Promosindo Jaya is a company engaged in the field of promotional items. I am responsible for developing the website and managing the website.",
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/IdeaBox_v4_color.png"),
      projectName: "Ideabox",
      projectDesc: "Ideabox is a website that provides ideas for those of you who are confused about what to do. This website provides ideas for various activities that you can do.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dev.v2.telkom.ideaboxapp.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Screenshot 2024-12-06 130456.png"),
      projectName: "Eventeer",
      projectDesc: "Eventeer is a website that provides information about events that are happening in your city. This website provides information about various events that you can attend.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://eventeer.id/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Bangkit Academy batch 2",
      subtitle:
        "BANGKIT ACADEMY 2023 BY GOOGLE, GOTO, TRAVELOKA YAYASAN DICODING INDONESIA ",
      image: require("./assets/images/channels4_profile.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1NiSbewKY359jiggPz7HxFRNg4Z9QOdED/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    
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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "081347515007",
  email_address: "fakhrirrahman7@gmail.com"
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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
