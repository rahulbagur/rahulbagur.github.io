import {
  cases,
  gtmSkills,
  metrics,
  profiles,
  projects,
  resumeHref,
  roles,
  technicalSkills,
  toolGroups,
} from "../content";

const External = ({ href, children }: { href: string; children: string }) => (
  <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">
    {children}
    <span className="sr-only"> (opens in a new tab)</span>
  </a>
);

const Page = () => {
  return (
    <>
      <section className="hero" aria-labelledby="positioning">
        <div className="wrap">
          <h1 id="positioning">
            <span className="name">Rahul Bagur</span>
            <span className="role-line">GTM and revenue operations.</span>
          </h1>
          <div className="split hero-split">
            <div>
              <p className="lead">
                I build the outbound, CRM and reporting systems a sales team runs on.
              </p>
              <p className="sub">
                Growth &amp; Strategy Lead at Team Counsel, Bengaluru. Before that, partner
                and sales funnels at CoinDCX and Pickcel.
              </p>
              <div className="actions">
                <a className="button" href={resumeHref} download="Rahul_Bagur_Resume.pdf">
                  Download resume
                </a>
                <span className="action-links">
                  <a className="text-link" href="#case-studies">
                    See the work
                  </a>
                  <External href={profiles.linkedin}>LinkedIn</External>
                </span>
              </div>
            </div>
            <dl className="metrics" aria-label="Selected results">
              {metrics.map((metric) => (
                <div className="metric" key={metric.value}>
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="block about" aria-labelledby="about">
        <div className="wrap">
          <h2 id="about">About</h2>
          <div className="about-copy">
            <p>
              I joined Team Counsel in February 2026 as its first GTM hire. There was no
              CRM, no sending setup and no outbound process. Over the year I stood up
              Instantly, then Apollo, Salesforge and Zoho CRM, ran campaigns across India,
              the US and the UK, and coached our SDR.
            </p>
            <p>
              Before that I spent two years in sales and partnerships at CoinDCX, using
              Databricks and MoEngage on the Business Partner vertical and Prime funnels,
              and running demos and outbound at Pickcel.
            </p>
            <p>
              When a tool doesn't exist, I build it with AI coding tools and work through
              the bugs until I understand how it works.
            </p>
            <p>
              I am looking for GTM Strategy &amp; Operations, RevOps, Growth Ops or Sales Ops
              roles.
            </p>
            <div className="about-degree">
              <h3>Education</h3>
              <p>B.Tech, Aerospace Engineering</p>
              <p>Jain University, 2022</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="experience">
        <div className="wrap">
          <h2 id="experience">Experience</h2>
          <div className="roles">
            {roles.map((role) => (
              <article className="role" key={role.org}>
                <div className="role-meta">
                  <p>{role.when}</p>
                  {role.where ? <p>{role.where}</p> : null}
                </div>
                <div>
                  <h3>{role.org}</h3>
                  {role.posts.map((post) => (
                    <div className="post" key={post.title}>
                      <p className="title">{post.title}</p>
                      {post.note ? <p className="note">{post.note}</p> : null}
                      <ul>
                        {post.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block cases" aria-labelledby="case-studies">
        <div className="wrap">
          <h2 id="case-studies">Case studies</h2>
          {cases.map((item) => (
            <article className="case" key={item.title}>
              <div className="case-title">
                <h3>{item.title}</h3>
              </div>
              <div className="case-row">
                <h4>Problem</h4>
                <p>{item.problem}</p>
              </div>
              <div className="case-row">
                <h4>What I did</h4>
                <p>{item.did}</p>
              </div>
              <div className="case-row result">
                <h4>Result</h4>
                <p>{item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="block" aria-labelledby="projects">
        <div className="wrap">
          <h2 id="projects">Projects</h2>
          <p className="intro">
            Tools I built with AI coding tools. The repositories are private.
          </p>
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <h3>{project.title}</h3>
              <p className="stack">{project.stack}</p>
              <p>{project.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="block" aria-labelledby="skills">
        <div className="wrap">
          <h2 id="skills">Skills and tools</h2>
          <p className="intro">Grouped by the work.</p>
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
              <p>{technicalSkills}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block contact" aria-labelledby="contact">
        <div className="wrap">
          <h2 id="contact">Contact</h2>
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

      <footer className="site-footer">
        <div className="wrap footer-line">
          <p>Rahul Bagur, Bengaluru</p>
          <p>
            <a href={`mailto:${profiles.email}`}>{profiles.email}</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Page;
