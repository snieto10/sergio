import { useState } from "react";

function TicTacToe() {
  const [array, setArray] = useState(["", "", "", "", "", "", "", "", ""]);
  const [score1, setScore1] = useState([]);
  const [score2, setScore2] = useState([]);
  const [champion, setChampion] = useState(0);
  const [human, setHuman] = useState(0);
  const [computer, setComputer] = useState(0);

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
        setChampion(champions);
        setHuman(human + 1);
      }
      console.log(2, champions);
      if (
        arrScore2.includes(arr[0]) &&
        arrScore2.includes(arr[1]) &&
        arrScore2.includes(arr[2]) &&
        champions === 0
      ) {
        champions = 2;
        setChampion(champions);
        setComputer(computer + 1);
      }
    }
  }

  const handleClick = (index) => {
    let copyArray = [...array];
    copyArray[index] = "X";
    let findEmpty = copyArray.indexOf("");
    if (findEmpty !== -1) copyArray[findEmpty] = "O";
    setArray(copyArray);

    let arrScore1 = [...score1];
    arrScore1.push(index);
    setScore1(arrScore1);

    let arrScore2 = [...score2];
    arrScore2.push(findEmpty);
    setScore2(arrScore2);
    winner(arrScore1, arrScore2);
  };

  const handleNextGame = () => {
    setArray(["", "", "", "", "", "", "", "", ""]);
    setScore1([]);
    setScore2([]);
    setChampion(0);
  };
  const handleReset = () => {
    setArray(["", "", "", "", "", "", "", "", ""]);
    setScore1([]);
    setScore2([]);
    setChampion(0);
    setHuman(0);
    setComputer(0);
  };

  return (
    <>
      <div className="tictac-menu">
        <div className="human">Human: {human}</div>
        <button className="btn-nextgame" onClick={handleNextGame}>
          {" "}
          Next Game
        </button>
        <button className="btn-reset" onClick={handleReset}>
          {" "}
          Reset
        </button>
        <div className="computer">Computer: {computer}</div>
      </div>
      <div className={champion === 0 ? "main-box" : " main-box disallow"}>
        {array.map((element, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={array[index] === "" ? "box" : "box disallow"}
          >
            {element}
          </div>
        ))}
      </div>
    </>
  );
}

export default TicTacToe;
