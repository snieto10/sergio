let arrScore1 = [3, 4, 5];

let arrScore2 = [0, 1, 2];

function winner(arrScore1, arrScore2) {
  let winnerNumber = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let arr of winnerNumber) {
    let champions = 0;
    console.log(1, champions);
    if (
      arrScore1.includes(arr[0]) &&
      arrScore1.includes(arr[1]) &&
      arrScore1.includes(arr[2])
    ) {
      champions = 1;
    }
    console.log(2, champions);
    if (
      arrScore2.includes(arr[0]) &&
      arrScore2.includes(arr[1]) &&
      arrScore2.includes(arr[2]) &&
      champions === 0
    ) {
      champions = 2;
    }
  }
}
