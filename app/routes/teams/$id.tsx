import { Link, Outlet } from "remix";

export default function Team() {
  return (
    <>
      <ul>
        <li>
          <Link to="">Overview</Link>
        </li>
        <li>
          <Link to="players">Players</Link>
        </li>
        <li>
          <Link to="schedule">Schedule</Link>
        </li>
        <li>
          <Link to="stats">Stats</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}
