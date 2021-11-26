import { useLoaderData, LoaderFunction } from "remix";
import { getTeam } from "~/team";

export let loader: LoaderFunction = ({ params: { id: teamId } }) => {
  return getTeam(teamId!);
};

export default function Index() {
  const team = useLoaderData();

  return (
    <>
      <p>
        The <a href={team.officialSiteUrl}>{team.teamName}</a> first played in{" "}
        {team.firstYearOfPlay}. They currently play at the {team.venue.name},
        which is in {team.venue.city}.
      </p>
    </>
  );
}
