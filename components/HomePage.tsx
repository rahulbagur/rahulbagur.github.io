import { Link } from "react-router-dom";
import {
  buildingWithAi,
  gtmSkills,
  profiles,
  resumeHref,
  studies,
  toolGroups,
} from "../content";

const External = ({ href, children }: { href: string; children: string }) => (
  <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">
    {children}
    <span className="sr-only"> (opens in a new tab)</span>
  </a>
);

const HomePage = () => {
  return (
    <>
      <section className="hero" aria-labelledby="positioning">
        <div className="wrap">
          <h1 id="positioning">
            <span className="name">Rahul Bagur</span>
            <span className="role-line position-line">
              I build the outbound, CRM and reporting systems a sales team runs on.
            </span>
          </h1>
          <div className="actions">
            <a className="button" href="#work">
              See the work
            </a>
            <a className="text-link" href={resumeHref} download="Rahul_Bagur_Resume.pdf">
              Download resume
            </a>
          </div>
        </div>
      </section>

      <section className="block" id="work" aria-labelledby="work-heading">
        <div className="wrap">
          <h2 id="work-heading">Selected work</h2>
          <div className="work-list">
            {studies.map((study) => (
              <Link key={study.slug} className="work-card" to={`/work/${study.slug}`}>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
                <p className="work-result">{study.result}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="block about" id="about" aria-labelledby="about-heading">
        <div className="wrap">
          <h2 id="about-heading">About</h2>
          <div className="about-copy">
            <p>
              Growth and Strategy Lead at Team Counsel in Bengaluru, and its first GTM
              hire. Before that I spent two years in sales and partnerships at CoinDCX
              and Pickcel, including a Business Partner vertical that reached $30M+ in
              monthly trading volume.
            </p>
            <p>
              When a tool doesn't exist, I build it with AI coding tools and work through
              the bugs until I understand how it works.
            </p>
            <p>
              I am looking for GTM Strategy &amp; Operations, RevOps, Growth Ops or Sales
              Ops roles.
            </p>
            <div className="about-degree">
              <h3>Education</h3>
              <p>B.Tech, Aerospace Engineering</p>
              <p>Jain University, 2022</p>
            </div>
          </div>

          <div className="skills-grid">
            <div>
              <h3>GTM and RevOps</h3>
              <ul className="skill-list">
                {gtmSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Tools by function</h3>
              <table className="tool-table">
                <caption className="sr-only">Tools used, grouped by function</caption>
                <thead>
                  <tr>
                    <th scope="col">Function</th>
                    <th scope="col">Tools</th>
                  </tr>
                </thead>
                <tbody>
                  {toolGroups.map((group) => (
                    <tr key={group.fn}>
                      <th scope="row">{group.fn}</th>
                      <td>{group.tools}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="technical">
              <h3>Building with AI</h3>
              <p>{buildingWithAi}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block contact" id="contact" aria-labelledby="contact-heading">
        <div className="wrap">
          <h2 id="contact-heading">Contact</h2>
          <p className="intro">
            Open to GTM Strategy &amp; Ops, RevOps, Growth Ops and Sales Ops roles.
          </p>
          <p className="email-line">
            <a className="email" href={`mailto:${profiles.email}`}>
              {profiles.email}
            </a>
          </p>
          <div className="actions contact-actions">
            <a className="button" href={resumeHref} download="Rahul_Bagur_Resume.pdf">
              Download resume
            </a>
            <span className="action-links">
              <External href={profiles.linkedin}>LinkedIn</External>
              <External href={profiles.github}>GitHub</External>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
