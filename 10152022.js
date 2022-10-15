// Build a sliding puzzle game
// Use the last week of challenges to build the game.

const gameGrid = [
  [
    "https://i.imgur.com/zhpfEVe.png",
    "https://i.imgur.com/u10nOUw.png",
    "https://i.imgur.com/sEQOcGq.png"
  ],
  [
    "https://i.imgur.com/ggUqmPE.png",
    "https://i.imgur.com/0GB90f6.png",
    "https://i.imgur.com/nN4kAp6.png"
  ],
  [
    "https://i.imgur.com/cj9s8XS.png",
    "https://i.imgur.com/G1kBgAO.png",
    "https://i.imgur.com/BOkhyd6.png"
  ]
];

const blankSpace = [0, gameGrid[0].length - 1];

const blankUrl = "https://i.imgur.com/IGnmVTp.png";

const gridWithBlank = gameGrid.map((subArray, ind) => {
  if (ind === blankSpace[0]) {
    const sub = subArray.map((x) => x);

    return sub.map((val, i) => {
      if (i === blankSpace[1]) {
        return blankUrl;
      }
      return val;
    });
  }
  return subArray.map((x) => x);
});

const Winner = (props) => {
  return <h2>You won! It took you {props.moves} moves!</h2>;
};

const GameBoard = (props) => {
  return (
    <section id="gameBoard">
      {props.grid.map((arr, arrInd) => {
        return arr.map((val, valInd) => {
          return (
            <div
              className="gameSquare"
              onClick={() => {
                return props.onMove(arrInd, valInd);
              }}
            >
              <img src={val} alt={`Tile ${valInd + 1}`} id={val} />
            </div>
          );
        });
      })}
    </section>
  );
};

const Game = () => {
  const [grid, setGrid] = React.useState([...gridWithBlank].map((x) => [...x]));
  const [isWin, setIsWin] = React.useState(false);
  const [moveCount, setMoveCount] = React.useState(0);

  const blankSubArr = grid.findIndex((x) => x.includes(blankUrl));
  const blankIndex = grid[blankSubArr].indexOf(blankUrl);

  function checkWin(arr1, arr2) {
    arr1 = arr1.flat();
    arr2 = arr2.flat();

    let result = setIsWin(true);
    for (let i = 0; i <= arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        result = setIsWin(false);
        break;
      }
    }

    return result;
  }

  function moveBlankLeft(curGrid, blankChar) {
    const index = curGrid.indexOf(blankChar);
    curGrid.splice(index, 1);
    curGrid.splice(index - 1, 0, blankChar);
    checkWin(gridWithBlank, curGrid);
    return curGrid;
  }

  function moveBlankRight(curGrid, blankChar) {
    const index = curGrid.indexOf(blankChar);
    curGrid.splice(index, 1);
    curGrid.splice(index + 1, 0, blankChar);
    checkWin(gridWithBlank, curGrid);
    return curGrid;
  }

function moveBlankUp(curGrid, blankGrid) {
  for (let i = 0; i < curGrid.length; i++) {
    if (curGrid[i].includes(blankGrid)) {
      let nestedIndex = curGrid[i].indexOf(blankGrid)
      curGrid[i][nestedIndex] = curGrid[i - 1][nestedIndex]
      curGrid[i - 1][nestedIndex] = blankGrid
    }
  }

  checkWin(gridWithBlank, curGrid);
  return curGrid;
}

function moveBlankDown(curGrid, blankGrid) {
  for (let i = 0; i < curGrid.length - 1; i++) {
    if (curGrid[i].includes(blankGrid)) {
      let nestedIndex = curGrid[i].indexOf(blankGrid)
      curGrid[i][nestedIndex] = curGrid[i + 1][nestedIndex]
      curGrid[i + 1][nestedIndex] = blankGrid
      break
    }
  }

  checkWin(gridWithBlank, curGrid);
  return curGrid;
}

  const shuffleGrid = () => {
    setIsWin(false);
    const tempFlatGrid = [...grid].map((x) => [...x]).flat();

    for (let i = tempFlatGrid.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = tempFlatGrid[i];
      tempFlatGrid[i] = tempFlatGrid[j];
      tempFlatGrid[j] = temp;
    }

    const tempGrid = [];
    while (tempFlatGrid.length) {
      tempGrid.push(tempFlatGrid.splice(0, 3));
    }

    setGrid(tempGrid);
  };

  const resetGame = () => {
    setGrid([...gridWithBlank].map((x) => [...x]));
    setIsWin(false);
    setMoveCount(0);
  };

  const handleMove = (arrInd, valInd) => {
    const newGrid = [...grid].map((x) => [...x]);

    if (arrInd === blankSubArr) {
      const gridDimension = newGrid.length;
      if (valInd - blankIndex === 1) {
        // move right
        const modifiedArr = [];
        for (let i = 0; i < newGrid.length; i++) {
          if (i === blankSubArr) {
            modifiedArr.push(moveBlankRight(newGrid[i], blankUrl));
          } else {
            modifiedArr.push(newGrid[i]);
          }
        }

        checkWin(gridWithBlank, modifiedArr);
        setGrid([...modifiedArr].map((x) => x));
        setMoveCount(moveCount + 1);
      } else if (valInd - blankIndex === -1 && blankIndex % gridDimension) {
        // move left
        const modifiedArr = [];
        for (let i = 0; i < newGrid.length; i++) {
          if (i === blankSubArr) {
            modifiedArr.push(moveBlankLeft(newGrid[i], blankUrl));
          } else {
            modifiedArr.push(newGrid[i]);
          }
        }

        checkWin(gridWithBlank, modifiedArr);
        setGrid([...modifiedArr].map((x) => x));
        setMoveCount(moveCount + 1);
      }
    } else if (arrInd !== blankSubArr && valInd === blankIndex) {
      if (arrInd - blankSubArr === 1) {
        // move down
        setGrid([...moveBlankDown(newGrid, blankUrl)].map((x) => x));
        setMoveCount(moveCount + 1);
      } else if (arrInd - blankSubArr === -1) {
        // move up
        setGrid([...moveBlankUp(newGrid, blankUrl)].map((x) => x));
        setMoveCount(moveCount + 1);
      }
    }
  };

  return (
    <div>
      <button onClick={() => shuffleGrid()}>Shuffle</button>
      <button onClick={() => resetGame()}>New Game</button>
      {isWin ? (
        <Winner moves={moveCount} />
      ) : (
        <GameBoard
          onMove={(arrInd, valInd) => handleMove(arrInd, valInd)}
          grid={grid}
        />
      )}
    </div>
  );
};

ReactDOM.render(<Game />, document.getElementById("root"));