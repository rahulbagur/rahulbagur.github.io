import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { studyBySlug } from "../content";
import ProofGallery from "./ProofGallery";

const CasePage = () => {
  const { slug } = useParams();
  const study = slug ? studyBySlug(slug) : undefined;

  useEffect(() => {
    document.title = study
      ? `${study.title} | Rahul Bagur`
      : "Rahul Bagur | GTM and revenue operations";
    return () => {
      document.title = "Rahul Bagur | GTM and revenue operations";
    };
  }, [study]);

  if (!study) {
    return (
      <section className="block case-page">
        <div className="wrap">
          <h1>That case is not on this site.</h1>
          <p className="intro">
            <Link to="/#work">Back to the work</Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <article className="block case-page">
      <div className="wrap">
        <p className="back-link">
          <Link to="/#work">All work</Link>
        </p>
        <h1>{study.title}</h1>
        <p className="lead">{study.summary}</p>

        <h2>Context</h2>
        <p>{study.context}</p>

        <h2>Problem</h2>
        <p>{study.problem}</p>

        <h2>What I did</h2>
        <ul>
          {study.did.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Results</h2>
        <ul className="result-list">
          {study.results.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Proof</h2>
        <p>
          Redacted screenshots and charts. The figures are the ones in the results
          above.
        </p>
        <ProofGallery items={study.proof} />
      </div>
    </article>
  );
};

export default CasePage;
