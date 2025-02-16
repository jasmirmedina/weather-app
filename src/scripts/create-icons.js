import { createIcons, Wind, WindArrowDown, CloudFog, CloudRain } from "lucide";

export default function cI() {
  createIcons({
    icons: {
      Wind,
      WindArrowDown,
      CloudFog,
      CloudRain,
    },
    attrs: {
      stroke: "#ffffff99",
      width: 20,
      height: 20,
    },
  });
}
