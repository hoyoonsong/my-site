import { Link } from "react-router-dom";
import { HOME_MOMENTS } from "../data/homeMoments";
import { LINKEDIN } from "../data/projects";

export function Home() {
  return (
    <div className="page home">
      <div className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">
            Government · Web development · Problem solving
          </p>
          <h1 className="home-title">Howdy!</h1>
          <div className="home-prose">
            <p>
              I’m <strong>Hoyoon</strong>, a problem solver and Stanford student
              studying Political Science and Product Design.
            </p>
            <p>
              My life has been about asking difficult questions and crafting
              solutions in whatever role I've held--whether it be as:
              <ul>
                <li>Transportation Commissioner for Meridian, Idaho</li>
                <li>Web developer for nonprofits</li>
                <li>A member of the Stanford Speakers Bureau</li>
              </ul>
            </p>
          </div>
          <div className="home-actions">
            <Link to="/projects" className="btn btn--primary">
              Projects
            </Link>
            <a
              href={LINKEDIN}
              className="btn btn--ghost"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <figure className="home-hero-photo">
          <img
            src="/about/capitol-portrait.png"
            alt="Hoyoon Song in a suit with a Stanford pin, U.S. Capitol in the background"
            width={560}
            height={700}
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>

      <section className="home-snapshots" aria-label="Moments">
        <h2 className="home-snapshots-title">Some of my favorite moments</h2>
        <ul className="home-snapshots-grid">
          {HOME_MOMENTS.map((moment) => {
            const hasCaption = Boolean(moment.caption);
            return (
              <li key={moment.src}>
                <figure
                  className={
                    hasCaption
                      ? "home-snapshot home-snapshot--has-caption"
                      : "home-snapshot"
                  }
                >
                  <div className="home-snapshot__frame">
                    <img
                      src={moment.src}
                      alt={moment.alt}
                      width={400}
                      height={280}
                      loading="lazy"
                      decoding="async"
                    />
                    {hasCaption ? (
                      <span
                        className="home-snapshot__overlay"
                        aria-hidden="true"
                      >
                        <span className="home-snapshot__overlay-caption">
                          {moment.caption}
                        </span>
                      </span>
                    ) : null}
                  </div>
                  <figcaption className="home-snapshot__title">
                    {moment.title}
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
