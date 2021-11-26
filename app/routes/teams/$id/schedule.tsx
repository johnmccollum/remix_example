import { LoaderFunction, useLoaderData } from "remix";
import { getSchedule } from "~/team";

export let loader: LoaderFunction = ({ params: { id: teamId } }) => {
  return teamId ? getSchedule(teamId) : null;
};

export default function Schedule() {
  const schedule = useLoaderData();
  return (
    <>
      <p>Schedule:</p>
      <p>
        Next up: {schedule.teams.away.team.name} @{" "}
        {schedule.teams.home.team.name}
      </p>
      <p>{schedule.gameDate}</p>
    </>
  );
}
