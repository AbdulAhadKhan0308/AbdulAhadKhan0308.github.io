import { education, experience, site } from "../data";
import { Section } from "../components/Section";
import { TimelineEntry } from "../components/TimelineEntry";
import { external, textLink } from "../components/styles";

const subheading = "text-sm font-semibold uppercase tracking-wider text-zinc-500";

export function About() {
  return (
    <Section
      id="about"
      title="About"
      intro={
        <>
          My work experience and education. You can also{" "}
          <a href={site.resumeUrl} {...external} className={textLink}>
            view my resume
          </a>
          .
        </>
      }
    >
      <h3 className={subheading}>Experience</h3>
      <ol className="mt-6 space-y-10">
        {experience.map((job) => (
          <TimelineEntry
            key={`${job.role}-${job.period}`}
            logo={job.logo}
            title={job.role}
            subtitle={job.company}
            period={job.period}
            location={job.location}
          >
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-zinc-700 marker:text-zinc-300">
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </TimelineEntry>
        ))}
      </ol>

      <h3 className={`mt-16 ${subheading}`}>Education</h3>
      <ol className="mt-6 space-y-8">
        {education.map((school) => (
          <TimelineEntry
            key={school.institution}
            logo={school.logo}
            title={school.institution}
            subtitle={school.field}
            period={school.period}
          />
        ))}
      </ol>
    </Section>
  );
}
