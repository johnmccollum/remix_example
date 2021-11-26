import type { LoaderFunction } from "remix";
import { useLoaderData, Outlet, Link } from "remix";
import { getTeams, Team } from "~/team";

export default function Index() {
  return (
    <div className="remix__page">
      <main>
        <p>
          There's nothing here. Go to <Link to="/teams">/teams</Link>
        </p>
      </main>
    </div>
  );
}
