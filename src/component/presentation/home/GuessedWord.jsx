import { memo } from "react";

export default memo(GuessedWord);

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
