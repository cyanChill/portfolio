export const pagesData = [
  { classification: "home", path: "/" },
  { classification: "about", path: "/about" },
  // Start of Project Pages
  { classification: "project", path: "/projects/project-1" },
  { classification: "project", path: "/projects/project-2" },
  // End of Project Pages
  { classification: "blog", path: "/blog/preview" },
  { classification: "contact", path: "/contact" },
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
  ],
  backend: [
    { name: "NPM", image: "/images/technologies/npm.svg" },
    { name: "NodeJS", image: "/images/technologies/nodejs.svg" },
    { name: "Express", image: "/images/technologies/express.svg" },
  ],
  database: [
    { name: "Firebase", image: "/images/technologies/firebase.svg" },
    { name: "MongoDB", image: "/images/technologies/mongodb.svg" },
  ],
  hosting: [
    { name: "Heroku", image: "/images/technologies/heroku.svg" },
    { name: "Netlify", image: "/images/technologies/netlify.svg" },
  ],
  other: [
    { name: "Git", image: "/images/technologies/git.svg" },
  ]
};
