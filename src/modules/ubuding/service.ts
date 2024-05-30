function getRandom(n: number, m: number) {
  var num = Math.floor(Math.random() * (m - n + 1) + n);
  return num * 1;
}

const color = [
  "aqua",
  "aquamarine",
  "cadetblue",
  "darkcyan",
  "cornflowerblue",
  "darkslateblue",
  "skyblue",
  "#d46f16",
  "deepskyblue",
  "#5c16bd",
];

export const getImages = (count: number) => {
  return new Promise((resolve) => {
    resolve({
      list: Array(50)
        .fill(1)
        .map((_, index) => {
          const deg = getRandom(0, 360);
          const i = getRandom(0, 9);
          const from = color[i];
          const k = getRandom(0, 9);
          console.log(i, k);
          const to = color[k];
          const height = getRandom(500, 160);
          return {
            id: index + count,
            height,
            deg,
            from,
            to,
          };
        }),
      hasData: true,
    });
  });
};
