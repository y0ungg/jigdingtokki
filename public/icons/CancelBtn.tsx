import * as React from "react";

function CancelBtn(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg width={35} height={35} fill="none" {...props}>
      <path fill="#fff" d="M3 3h29v29H3z" />
      <path
        fill="#FCACCD"
        d="M6 0h23v3H6zM6 32h23v3H6zM29 3h3v3h-3zM6 32H3v-3h3zM32 6h3v23h-3zM3 29H0V6h3zM29 29h3v3h-3zM6 6H3V3h3z"
      />
      <path
        fill="#FBE4ED"
        d="M8 15h2v2H8zM10 17h2v2h-2zM10 15h2v2h-2zM12 19h2v2h-2zM12 17h2v2h-2zM12 15h2v2h-2zM14 21h2v2h-2zM16 15h2v2h-2zM18 15h2v2h-2zM18 13h2v2h-2zM20 15h2v2h-2zM20 13h2v2h-2zM22 17h2v2h-2zM20 17h2v2h-2zM18 17h2v2h-2zM16 17h2v2h-2zM22 23h2v2h-2zM22 21h2v2h-2zM22 19h2v2h-2zM24 19h2v2h-2zM24 21h2v2h-2zM24 23h2v2h-2zM24 17h2v2h-2zM22 15h2v2h-2zM24 15h2v2h-2zM22 13h2v2h-2zM10 13h2v2h-2zM12 11h2v2h-2zM14 9h2v2h-2zM14 11h2v2h-2zM14 13h2v2h-2zM16 13h2v2h-2zM12 13h2v2h-2zM14 19h2v2h-2zM14 17h2v2h-2zM14 15h2v2h-2z"
      />
    </svg>
  );
}

const MemoCancelBtn = React.memo(CancelBtn);
export default MemoCancelBtn;
