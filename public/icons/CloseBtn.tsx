import * as React from "react";

function CloseBtn(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg width={25} height={25} fill="none" {...props}>
      <path d="M0 0h25v25H0V0z" fill="#FFEBF3" />
      <path fill="#FBD0E2" d="M0 0h22v3H0z" />
      <path fill="#F59AC0" d="M3 22h22v3H3z" />
      <path fill="#F59AC0" d="M22 3h3v22h-3z" />
      <path
        fill="#FBD0E2"
        d="M3 22H0V0h3zM14 14h-3v-3h3zM17 11h-3V8h3zM17 17h-3v-3h3zM11 17H8v-3h3zM11 11H8V8h3z"
      />
    </svg>
  );
}

const MemoCloseBtn = React.memo(CloseBtn);
export default MemoCloseBtn;
