import { projects } from "../data";
import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";

export function Projects() {
  return (
    <Section id="projects" title="Projects" intro="A selection of projects I've built and contributed to.">
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
