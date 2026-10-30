import { track } from "../analytics";
import type { Profile } from "../types";
import { Card } from "./Card";
import { ArrowUpRightIcon } from "./icons";

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <Card
      href={profile.href}
      onClick={() => track("profile-click", { profile: profile.name })}
      className="flex items-center gap-3 p-4 pr-8"
    >
      <img src={profile.logo} alt="" className="size-10 shrink-0 rounded-lg object-contain" />
      <div className="min-w-0">
        <p className="font-medium text-zinc-900">{profile.name}</p>
        <p className="text-sm text-zinc-600">{profile.detail}</p>
      </div>
      <ArrowUpRightIcon className="absolute right-3 top-3 size-4 text-zinc-400 transition group-hover:text-brand-700" />
    </Card>
  );
}
