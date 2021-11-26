import { getTeams, Team } from "~/team";
import { LoaderFunction, useLoaderData, Link, Outlet } from "remix";

export let loader: LoaderFunction = getTeams;

export default function Index() {
  const teams = useLoaderData();

  return (
    <div className="remix__page">
      <main>
        <ul>
          {teams.map((team: Team) => (
            <li key={team.id}>
              <Link to={`${team.id}`}>{team.name}</Link>
            </li>
          ))}
        </ul>
      </main>
      <aside>
        <Outlet />
      </aside>
    </div>
  );
}
