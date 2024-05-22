import lostImg from "../../assets/lost.gif";
import winImg from "../../assets/victory.gif";
import {
  PLAY_AGAIN,
  THE_CORRECT_WORD_WAS,
  YOU_FOUND_WORD,
  CONGRATS,
  GAME_OVER,
} from "../description/data";
import Button from "./Button";
export default function PopUp({ isWin, word, playAgain }) {
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <img src={isWin ? winImg : lostImg} className="img-model" alt="" />
          <p className="font-model">{isWin ? CONGRATS : GAME_OVER}</p>
          <div className="correctWordOrNot">
            {isWin ? YOU_FOUND_WORD : THE_CORRECT_WORD_WAS}
            <span className="correctWord">{word}</span>
          </div>
          <Button className="play-agian" onClick={playAgain}>
            {PLAY_AGAIN}
          </Button>
        </div>
      </div>
    </>
  );
}
