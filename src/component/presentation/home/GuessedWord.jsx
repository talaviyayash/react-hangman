import { memo } from "react";
import WrapInDiv from "../../shared/WrapInDiv";

function GuessedWord({ correctGuessedWord, wordWithHint }) {
  return (
    <>
      {wordWithHint?.splitedArray?.map((value, index) => {
        const valueIsAlradayGuessed = correctGuessedWord.includes(value);
        return (
          <WrapInDiv
            key={index}
            valueIsAlradayGuessed={valueIsAlradayGuessed}
            value={value}
          />
        );
      })}
    </>
  );
}
export default memo(GuessedWord);
