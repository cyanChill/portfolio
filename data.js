export const pagesData = [
  { id: "home", path: "/" },
  { id: "about", path: "/about" },
  { id: "project", path: "/projects" },
  // Start of Project Pages
  { id: "odinworks", path: "/projects/odinworks" },
  { id: "next-instagram", path: "/projects/next-instagram" },
  { id: "gradschoolzero", path: "/projects/gradschoolzero" },
  { id: "pcpartslist", path: "/projects/pc-parts-list" },
  { id: "doelist", path: "/projects/doelist" },
  { id: "space-tourism", path: "/projects/space-tourism" },
  { id: "shopping-cart", path: "/projects/shopping-cart" },
  // End of Project Pages
  { id: "blog", path: "/blog/preview" },
  { id: "contact", path: "/contact" },
];

export const technologies = {
  frontend: [
    { name: "HTML5", image: "/images/technologies/html5.svg" },
    { name: "CSS3", image: "/images/technologies/css3.svg" },
    { name: "JavaScript", image: "/images/technologies/javascript.svg" },
    { name: "React", image: "/images/technologies/react.svg" },
    { name: "NextJS", image: "/images/technologies/nextjs.svg" },
    { name: "Bootstrap", image: "/images/technologies/bootstrap.svg" },
    { name: "Sass", image: "/images/technologies/sass.svg" },
    { name: "Pug", image: "/images/technologies/pug.svg" },
  ],
  backend: [
    { name: "NodeJS", image: "/images/technologies/nodejs.svg" },
    { name: "Express", image: "/images/technologies/express.svg" },
    { name: "PassportJS", image: "/images/technologies/passportjs.svg" },
    { name: "Firebase", image: "/images/technologies/firebase.svg" },
    { name: "MongoDB", image: "/images/technologies/mongodb.svg" },
    { name: "Mongoose", image: "/images/technologies/mongoose.svg" },
  ],
  other: [
    { name: "Git", image: "/images/technologies/git.svg" },
    { name: "NPM", image: "/images/technologies/npm.svg" },
    { name: "Heroku", image: "/images/technologies/heroku.svg" },
    { name: "Netlify", image: "/images/technologies/netlify.svg" },
    { name: "Workbox", image: "/images/technologies/workbox.svg" },
    { name: "Webpack", image: "/images/technologies/webpack.svg" },
  ],
};

export const technologiesObj = {
  Bootstrap: "/images/technologies/bootstrap.svg",
  CSS3: "/images/technologies/css3.svg",
  Express: "/images/technologies/express.svg",
  Firebase: "/images/technologies/firebase.svg",
  Git: "/images/technologies/git.svg",
  Heroku: "/images/technologies/heroku.svg",
  HTML5: "/images/technologies/html5.svg",
  JavaScript: "/images/technologies/javascript.svg",
  "JSON Server": "/images/technologies/json-server.svg",
  MongoDB: "/images/technologies/mongodb.svg",
  Mongoose: "/images/technologies/mongoose.svg",
  Netlify: "/images/technologies/netlify.svg",
  NextJS: "/images/technologies/nextjs.svg",
  NodeJS: "/images/technologies/nodejs.svg",
  NPM: "/images/technologies/npm.svg",
  PassportJS: "/images/technologies/passportjs.svg",
  Pug: "/images/technologies/pug.svg",
  React: "/images/technologies/react.svg",
  "React-Router": "/images/technologies/react-router.svg",
  Sass: "/images/technologies/sass.svg",
  Webpack: "/images/technologies/webpack.svg",
  Workbox: "/images/technologies/workbox.svg",
};

export const projectsData = {
  odinworks: {
    reverse: false,
    title: "Odinworks",
    description:
      "This is an app that works similarly to Facebook. You can add/remove friends, create posts with images, and comment on those posts. This implements the JamStack, with the backend hosted on Heroku and the frontend on Netlify. In addition, you can sign into the app using your Facebook credentials.",
    thumbnail: {
      vertical1: "/images/projects/odinworks-1.webp",
      vertical2: "/images/projects/odinworks-2.webp",
      wide: "/images/projects/odinworks-wide.webp",
    },
    tags: [
      "NodeJS",
      "Express",
      "PassportJS",
      "MongoDB",
      "Firebase",
      "React",
      "React-Router",
    ],
    links: {
      github: "https://github.com/cyanChill/OdinWorks",
      live: "https://odin-works.netlify.app/login",
    },
  },
  "next-instagram": {
    reverse: true,
    title: "Next-Instagram",
    description:
      "This is an Instagram clone built mainly using NextJS. It contains features such as media sharing and chat messaging. This app uses Firebase to store the images and MongoDB for all other data.",
    thumbnail: {
      vertical1: "/images/projects/next-instagram-1.webp",
      vertical2: "/images/projects/next-instagram-2.webp",
      wide: "/images/projects/next-instagram-wide.webp",
    },
    tags: ["NextJS", "MongoDB", "Firebase", "Heroku"],
    links: {
      github: "https://github.com/cyanChill/NextJS-Instagram",
      live: "https://cyanchill-instagram.herokuapp.com/",
    },
  },
  gradschoolzero: {
    reverse: false,
    title: "GradSchoolZero",
    description:
      "This is a mock graduation management application using JSON Server as a mock database. With this app, an admin user (Registrar user) can add classes, students, and instructors while also controlling the periods when students can register for classes, when classes are running, and when grades are to be due.",
    thumbnail: {
      vertical1: "/images/projects/gradschoolzero-1.webp",
      vertical2: "/images/projects/gradschoolzero-2.webp",
      wide: "/images/projects/gradschoolzero-wide.webp",
    },
    tags: ["React", "React-Router", "Bootstrap", "JSON Server"],
    links: {
      github: "https://github.com/CityDevsCCNY/GradSchoolZero",
      live: "",
    },
  },
  "pc-parts-list": {
    reverse: true,
    title: "PC Parts List",
    description:
      "This is an app which can work offline (with page caching) where you can create and share your PC builds. This was made purely on NodeJS instead of the typical front-end style and allows us to utilize server-side-technologies.",
    thumbnail: {
      vertical1: "/images/projects/pc-parts-list-1.webp",
      vertical2: "/images/projects/pc-parts-list-2.webp",
      wide: "/images/projects/pc-parts-list-wide.webp",
    },
    tags: ["NodeJS", "Express", "Pug", "MongoDB", "Workbox"],
    links: {
      github: "https://github.com/cyanChill/pc-parts-list",
      live: "",
    },
  },
  doelist: {
    reverse: false,
    title: "Doelist",
    description:
      "This is a PWA simple todo list app which you can organize your todos by categories and see them displayed in one of the categories accessed in the sidebar. This app is capable of being run offline.",
    thumbnail: {
      vertical1: "/images/projects/doelist-1.webp",
      vertical2: "/images/projects/doelist-2.webp",
      wide: "/images/projects/doelist-wide.webp",
    },
    tags: ["JavaScript", "Webpack", "Workbox"],
    links: {
      github: "https://github.com/cyanChill/Doelist",
      live: "https://doelist.netlify.app/",
    },
  },
  "space-tourism": {
    reverse: true,
    title: "Space Tourism Site",
    description:
      "This is my implementation of Frontend Mentor's Space Tourism multi-page website. I originally did this project in plain HTML, CSS, and JavaScript, then translated the project over to React and improved the overall project structure and styling along the way.",
    thumbnail: {
      vertical1: "/images/projects/space-tourism-1.webp",
      vertical2: "/images/projects/space-tourism-2.webp",
      wide: "/images/projects/space-tourism-wide.webp",
    },
    tags: ["React", "React-Router"],
    links: {
      github: "https://github.com/cyanChill/Space-Tourism-Site",
      live: "https://cyanchill-space-tourism.netlify.app/",
    },
  },
  "shopping-cart": {
    reverse: false,
    title: "Shopping Cart App",
    description:
      "This is a shopping cart app that's modeled after lttstore.com. You can login with a Google account and store your cart in Firebase instead of localstorage if you aren't logged in.",
    thumbnail: {
      vertical1: "/images/projects/shopping-cart-1.webp",
      vertical2: "/images/projects/shopping-cart-2.webp",
      wide: "/images/projects/shopping-cart-wide.webp",
    },
    tags: ["React", "React-Router", "Firebase"],
    links: {
      github: "https://github.com/cyanChill/React-Shopping-Cart-App/tree/main",
      live: "https://cyanchill-shopping-cart-app.netlify.app/",
    },
  },
};
