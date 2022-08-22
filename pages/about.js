import styles from "../styles/About.module.css";
import { technologies } from "../data";
import IdWidget from "../components/Identifiers/IdWidget";
import SEO from "../components/Optimizations/SEO";

const About = () => {
  return (
    <>
      <SEO
        pageName="About Me"
        description="Here's a little bit about me and my journey."
      />

      <div className={styles.wrapper}>
        <div className={styles.about}>
          <div className={styles.aboutContent}>
            <h1 className="glitch-v2" data-val="About Me">
              <span>About Me</span>
            </h1>

            <p className={styles.aboutBkg}>
              Introduced to the world of web development in my first year as a
              highschooler lit a spark that led to me pursuing this career and
              passion.
            </p>

            <p>
              Today, I&apos;m enjoying every second of creating web applications
              and learning how I can improve and refine my skills in this
              diverse space.
            </p>

            <p>
              I work with <strong>React</strong>, <strong>NextJS</strong>,{" "}
              <strong>JavaScript (ES6+)</strong>, <strong>CSS</strong>, and{" "}
              <strong>HTML</strong> to create a great user experience. I also
              learned how to use <strong>Firebase</strong> and{" "}
              <strong>MongoDB</strong> as backend databases and{" "}
              <strong>NodeJS</strong> and <strong>Express</strong> for the
              backend experience. I&apos;ve also used <strong>NextJS</strong> to
              create an all-in-one fullstack application.
            </p>
          </div>
        </div>

        <div className={styles.techContainer}>
          <section className={styles.technology}>
            <p>Frontend Technologies</p>
            <div>
              {technologies.frontend.map((tech) => (
                <IdWidget key={tech.name} {...tech} />
              ))}
            </div>
          </section>

          <section className={styles.technology}>
            <p>Backend Technologies</p>
            <div>
              {technologies.backend.map((tech) => (
                <IdWidget key={tech.name} {...tech} />
              ))}
            </div>
          </section>

          <section className={styles.technology}>
            <p>Other Technologies</p>
            <div>
              {technologies.other.map((tech) => (
                <IdWidget key={tech.name} {...tech} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
