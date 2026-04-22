export function getTypeColor(type) {
  const colors = {
    grass:    { bg: "#86efac", border: "#16a34a", badge: "#4ade80", text: "#14532d" },
    fire:     { bg: "#fca5a5", border: "#dc2626", badge: "#f97316", text: "#7f1d1d" },
    water:    { bg: "#93c5fd", border: "#1d4ed8", badge: "#60a5fa", text: "#1e3a8a" },
    bug:      { bg: "#d9f99d", border: "#65a30d", badge: "#a3e635", text: "#365314" },
    normal:   { bg: "#e4e4e7", border: "#71717a", badge: "#d4d4d8", text: "#27272a" },
    poison:   { bg: "#d8b4fe", border: "#7e22ce", badge: "#c084fc", text: "#3b0764" },
    electric: { bg: "#fde68a", border: "#ca8a04", badge: "#fbbf24", text: "#713f12" },
    ground:   { bg: "#fed7aa", border: "#c2410c", badge: "#fb923c", text: "#7c2d12" },
    fairy:    { bg: "#fbcfe8", border: "#be185d", badge: "#f472b6", text: "#831843" },
    fighting: { bg: "#fca5a5", border: "#991b1b", badge: "#ef4444", text: "#450a0a" },
    psychic:  { bg: "#fda4af", border: "#be123c", badge: "#fb7185", text: "#4c0519" },
    rock:     { bg: "#d6d3d1", border: "#78716c", badge: "#a8a29e", text: "#1c1917" },
    ghost:    { bg: "#c4b5fd", border: "#5b21b6", badge: "#8b5cf6", text: "#2e1065" },
    ice:      { bg: "#bae6fd", border: "#0369a1", badge: "#7dd3fc", text: "#0c4a6e" },
    dragon:   { bg: "#93c5fd", border: "#1e40af", badge: "#3b82f6", text: "#172554" },
    default:  { bg: "#f4f4f5", border: "#a1a1aa", badge: "#e4e4e7", text: "#18181b" },
  };
  return colors[type] || colors.default;
}