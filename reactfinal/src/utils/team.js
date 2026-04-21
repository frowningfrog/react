export const getTeam = () =>
  JSON.parse(localStorage.getItem("poketeam") || "[]");

export const saveTeam = (team) =>
  localStorage.setItem("poketeam", JSON.stringify(team));
