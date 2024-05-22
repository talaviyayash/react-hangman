import hangman0 from "../../../assets/hangman-0.svg";
import hangman1 from "../../../assets/hangman-1.svg";
import hangman2 from "../../../assets/hangman-2.svg";
import hangman3 from "../../../assets/hangman-3.svg";
import hangman4 from "../../../assets/hangman-4.svg";
import hangman5 from "../../../assets/hangman-5.svg";
import hangman6 from "../../../assets/hangman-6.svg";
import useHome from "../../container/home.container";
import Button from "../../shared/Button";
import GuessedWord from "./GuessedWord";
import { alphabet } from "../../description/data";
import PopUp from "../../shared/PopUp";
import {
  HANGMAN_GAME,
  HINT,
  imgInArray,
  HOW_MANY_GUESSES,
  RESTART,
} from "../../description/data";
export default function Home() {
  const {
    winOrNot,
    wordWithHint,
    addLetter,
    correctGuessedWord,
    restart,
    wrongGuessedWord,
    playerLose,
  } = useHome();
  return (
    <>
      <div className="container">
        <div className="container-left inline">
          <img src={imgInArray[wrongGuessedWord.length]} alt="" />
          <div className="img-container"></div>
          <h1>{HANGMAN_GAME}</h1>
        </div>
        <div className="container-right">
          <div className="container-empty">
            <GuessedWord
              wordWithHint={wordWithHint}
              correctGuessedWord={correctGuessedWord}
            />
          </div>
          <div className="hint">
            {HINT} {wordWithHint?.hint}
          </div>
          <div className="GuessedWord">
            {HOW_MANY_GUESSES}
            <span className="red">{wrongGuessedWord.length} / 6 </span>
          </div>
          <div className="container-btn">
            {alphabet.map((value, index) => {
              const wordIsAlreadyGuessed =
                wrongGuessedWord.includes(value) ||
                correctGuessedWord.includes(value) ||
                playerLose;
              if (wordIsAlreadyGuessed) {
                return (
                  <Button
                    key={index}
                    disabled={true}
                    style={{ background: "rgb(118 122 189)" }}
                  >
                    {value}
                  </Button>
                );
              }
              return (
                <Button key={index} onClick={() => addLetter(value)}>
                  {value}
                </Button>
              );
            })}
          </div>
          <div className="restart">
            <Button className="restart-btn" onClick={restart}>
              {RESTART}
            </Button>
          </div>
        </div>
      </div>
      {playerLose && (
        <PopUp isWin={false} word={wordWithHint?.word} playAgain={restart} />
      )}
      {winOrNot() && (
        <PopUp isWin={true} word={wordWithHint?.word} playAgain={restart} />
      )}
    </>
  );
}
