import { LoaderFunction, useLoaderData } from "remix";
import { getStats } from "~/team";

export let loader: LoaderFunction = ({ params: { id: teamId } }) => {
  return teamId ? getStats(teamId) : null;
};

export default function Stats() {
  const stats = useLoaderData();
  return (
    <>
      <p>Stats</p>
      <ul>
        <li>Games played: {stats.gamesPlayed}</li>
        <li>Games won: {stats.wins}</li>
        <li>Games lost: {stats.losses}</li>
        <li>Games lost in overtime: {stats.ot}</li>
      </ul>
    </>
  );
}
