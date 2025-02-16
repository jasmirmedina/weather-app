const qt = {
  below5:
    "Brrr, it's chilly! Perfect weather for snuggling up with a warm drink.",
  "5to15": "A lovely cool day, ideal for a refreshing walk in the park.",
  "15to25": "Ah, sunshine! A beautiful day to enjoy the outdoors.",
  "25to35": "It's getting hot! Time for ice cream and a cool dip in the water.",
  above35: "Whoa, it's scorching! Stay hydrated and find some shade.",
};

export default function quotes(op) {
  if (op < 5) {
    return qt.below5;
  } else if (op < 15) {
    return qt["5to15"];
  } else if (op < 25) {
    return qt["15to25"];
  } else if (op < 35) {
    return qt["25to35"];
  } else {
    return qt.above35;
  }
}
