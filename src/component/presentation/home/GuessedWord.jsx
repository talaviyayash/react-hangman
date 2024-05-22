import { memo } from "react";

const WrapInDiv = memo(function WrapInDiv({ valueIsAlradayGuessed, value }) {
  return (
    <>
      <div>{valueIsAlradayGuessed && value}</div>
    </>
  );
});

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
