export function getTypeColor(type) {
    switch (type) {
    case "grass": return "green";
    case "fire": return "orange";
    case "water": return "royalblue";
    case "bug": return "palegreen";
    case "normal": return "lightgray";
    case "poison": return "plum";
    case "electric": return "gold";
    case "ground": return "peru";
    case "fairy": return "pink";
    case "fighting": return "darkred";
    case "psychic": return "lightpink";
    case "rock": return "tan";
    case "ghost": return "rebeccapurple";
    case "ice": return "lightblue";
    case "dragon": return "steelblue";
    default: return "white";
  }
}