import { useEffect, useState } from "react";
import { wordList } from "../description/data";
export default function useHome() {
  const [correctGuessedWord, setCorrectGuessedWord] = useState([]);
  const [wrongGuessedWord, setWrongGuessedWord] = useState([]);
  const [wordWithHint, setWordWithHint] = useState({});

  function addLetter(word) {
    const guesseIsCorrect =
      wordWithHint?.splitedArray?.includes(word) &&
      !correctGuessedWord.includes(word);
    if (guesseIsCorrect) {
      setCorrectGuessedWord([...correctGuessedWord, word]);
    } else {
      setWrongGuessedWord([...wrongGuessedWord, word]);
    }
  }
  function selectRandomeWord() {
    const len = wordList.length;
    const word = Math.floor(Math.random() * (len - 0) + 0);
    const wordObj = { ...wordList[word] };
    wordObj.splitedArray = wordObj.word.split("");
    setWordWithHint(wordObj);
  }
  function restart() {
    setCorrectGuessedWord([]);
    setWrongGuessedWord([]);
    selectRandomeWord();
  }
  function winOrNot() {
    const matchEnd = wordWithHint?.splitedArray?.reduce((win, val) => {
      return !win ? false : correctGuessedWord.includes(val) ? true : false;
    }, true);
    return matchEnd;
  }
  useEffect(() => {
    selectRandomeWord();
  }, []);
  return {
    winOrNot,
    wordWithHint,
    correctGuessedWord,
    wrongGuessedWord,
    addLetter,
    restart,
    playerLose: wrongGuessedWord.length == 6,
  };
}
