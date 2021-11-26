import { LoaderFunction, useLoaderData } from "remix";
import { getPlayers, Player } from "~/team";

export let loader: LoaderFunction = ({ params: { id: teamId } }) => {
  return teamId ? getPlayers(teamId) : null;
};

export default function Players() {
  const players = useLoaderData();
  return (
    <>
      <p>Players:</p>
      <ul>
        {players.map((player: Player) => (
          <li key={player.person.id}>
            #{player.jerseyNumber} - {player.person.fullName},{" "}
            {player.position.name}
          </li>
        ))}
      </ul>
    </>
  );
}
