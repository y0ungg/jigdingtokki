import * as React from "react";

function Ask(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={22} height={22} fill="none" {...props}>
      <path
        fill="#FBD0E2"
        d="M0 6h2v2H0zM20 6h2v2h-2zM0 8h2v2H0zM20 8h2v2h-2zM0 10h2v2H0zM20 10h2v2h-2zM0 12h2v2H0zM20 12h2v2h-2zM0 14h2v2H0zM20 14h2v2h-2zM18 16h2v2h-2zM16 18h2v2h-2zM4 18h2v2H4zM2 16h2v2H2zM6 20h2v2H6zM8 20h2v2H8zM10 20h2v2h-2zM12 20h2v2h-2zM14 20h2v2h-2zM4 2h2v2H4zM10 15.833h2v2h-2zM10 12.5h2v2h-2zM11.333 10.5h2v2h-2zM13.333 8.5h2v2h-2zM13.333 6.5h2v2h-2zM11.333 4.5h2v2h-2z"
      />
      <path
        fill="#FBD0E2"
        d="M8.667 4.5H12v2H8.667zM6.667 6.5h2v2.667h-2zM2 4h2v2H2zM6 0h2v2H6zM8 0h2v2H8zM10 0h2v2h-2zM12 0h2v2h-2zM14 0h2v2h-2zM16 2h2v2h-2zM18 4h2v2h-2z"
      />
    </svg>
  );
}

const MemoAsk = React.memo(Ask);
export default MemoAsk;
