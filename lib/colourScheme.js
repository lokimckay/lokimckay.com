// colours
// BF0603 orange red
// F8F0FB magnolia white

// F0C808 086788 06AED5 CE348F ocean yellow pink

const tagMappings = {
  code: "purple",
  game: "green",
  cgModelling: "orange",
  vfx: "pink",
};

const previewThemes = {
  orange: {
    backgroundColor: "#290A00",
    title: "#FF3F00",
    text: "white",
  },
  blue: {
    backgroundColor: "rgba(0,0,0,0.85)",
    title: "#279AF1",
    text: "white",
  },
  green: {
    backgroundColor: "#012713",
    title: "#0CF574",
    text: "white",
  },
  yellow: {
    backgroundColor: "#271A02",
    title: "#F6AE2D",
    text: "white",
  },
  pink: {
    backgroundColor: "#270219",
    title: "#DE0D92",
    text: "white",
  },
  purple: {
    backgroundColor: "#0E0029",
    title: "#8A4FFF",
    text: "white",
  },
};

export const getThemeFromTag = tag => {
  return previewThemes[tagMappings[tag]];
};
