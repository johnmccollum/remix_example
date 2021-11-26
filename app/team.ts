export type Team = {
  id: number;
  name: string;
  teamName: string;
  firstYearOfPlay: string;
  venue: { name: string; city: string };
  officialSiteUrl: string;
};

export type Player = {
  jerseyNumber: string;
  person: { id: number; fullName: string };
  position: { name: string };
};

export async function getTeams() {
  let response = await fetch("https://statsapi.web.nhl.com/api/v1/teams");
  let { teams } = await response.json();

  return teams;
}

export async function getTeam(teamId: string) {
  let response = await fetch(
    `https://statsapi.web.nhl.com/api/v1/teams/${teamId}`
  );
  let { teams } = await response.json();

  return teams[0];
}

export async function getPlayers(teamId: string) {
  let response = await fetch(
    `https://statsapi.web.nhl.com/api/v1/teams/${teamId}?expand=team.roster`
  );
  let { teams } = await response.json();

  return teams[0].roster.roster;
}

export async function getSchedule(teamId: string) {
  let response = await fetch(
    `https://statsapi.web.nhl.com/api/v1/teams/${teamId}?expand=team.schedule.next`
  );

  const { teams } = await response.json();
  return teams[0].nextGameSchedule.dates[0].games[0];
}

export async function getStats(teamId: string) {
  let response = await fetch(
    `https://statsapi.web.nhl.com/api/v1/teams/${teamId}?expand=team.stats`
  );

  const { teams } = await response.json();
  return teams[0].teamStats[0].splits[0].stat;
}
