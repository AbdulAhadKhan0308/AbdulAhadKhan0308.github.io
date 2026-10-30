import { profiles } from "../data";
import { ProfileCard } from "../components/ProfileCard";
import { Section } from "../components/Section";

export function Profiles() {
  return (
    <Section id="links" title="Profiles" intro="Coding profiles and competitive programming ratings.">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {profiles.map((profile) => (
          <li key={profile.name}>
            <ProfileCard profile={profile} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
