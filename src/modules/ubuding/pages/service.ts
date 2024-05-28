function getRandom(n: number, m: number) {
  var num = Math.floor(Math.random() * (m - n + 1) + n);
  return num * 1;
}

const imageH = new Map([
  [1, 520],
  [2, 510],
  [3, 490],
  [4, 520],
  [5, 510],
  [6, 510],
  [7, 500],
  [8, 500],
  [9, 480],
  [10, 500],
  [11, 500],
  [12, 500],
  [13, 510],
  [14, 500],
  [15, 490],
  [16, 500],
  [17, 520],
  [18, 500],
  [19, 480],
  [20, 510],
  [21, 450],
  [22, 500],
  [23, 420],
  [24, 500],
  [25, 420],
  [26, 420],
  [27, 500],
  [28, 420],
  [29, 500],
  [30, 480],
  [31, 420],
  [32, 480],
  [33, 420],
  [34, 450],
  [35, 420],
  [36, 500],
  [37, 500],
  [38, 420],
  [39, 420],
  [40, 420],
]);

export const getImages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        list: Array(50)
          .fill(1)
          .map(() => {
            const id = getRandom(1, 40);
            return {
              src: "/images/" + id + ".jpg",
              height: imageH.get(id),
            };
          }),
        hasData: true,
      });
    }, 2000);
  });
};
