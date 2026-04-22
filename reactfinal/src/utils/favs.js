export const getFavs = () =>
  JSON.parse(localStorage.getItem("pokefavs") || "[]");

export const saveFavs = (favs) =>
  localStorage.setItem("pokefavs", JSON.stringify(favs));