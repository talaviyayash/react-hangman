import { memo } from "react";

function WrapInDiv({ valueIsAlradayGuessed, value }) {
  return (
    <>
      <div>{valueIsAlradayGuessed && value}</div>
    </>
  );
}

export default memo(WrapInDiv);
