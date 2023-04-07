import * as React from "react";

function StageC(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg width={107} height={30} fill="none" {...props}>
      <path fill="#FBEFF6" d="M6 3h95v24H6z" />
      <path
        d="M13 21.667V19h14.667v2.667H13zm12-8V15h1.333v2.667h-2.666v-1.334h-1.334V15H21v-1.333h-1.333V15h-1.334v1.333H17v1.334h-2.667V15h1.334v-1.333H17v-1.334h1.333V11h1.334V8.333h2.666v4h1.334v1.334H25zm4 8V8.333h6.667V11h-4v2.667h2.666v2.666h-2.666V19h4v2.667H29zM39.667 23V8.333h2.666V23h-2.666zm-4-6.667v-2.666H37V8.333h1.333V23H37v-6.667h-1.333zm9.333 4V9.667h1.333V8.333H53v1.334h1.333v10.666H53v1.334h-6.667v-1.334H45zM55.667 23V8.333h2.666V23h-2.666zm-8-4h4v-8h-4v8zM61 21.667v-4h1.333v-4h1.334V11H61V8.333h8V11h-2.667v2.667h1.334v4H69v4h-2.667V19h-2.666v2.667H61zM71.667 23V8.333h2.666V23h-2.666zm12.005-1.333V19h2.666v1.333h4v-4h-4v-2.666h4V11h-4v1.333h-2.666V9.667h1.333V8.333h6.667v1.334h1.333V15h-1.333v1.333h1.333v5.334h-1.333V23h-6.667v-1.333h-1.333zM6 0h95v3H6zM6 27h95v3H6zM101 3h3v3h-3zM6 27H3v-3h3zM104 6h3v18h-3zM3 24H0V6h3zM101 24h3v3h-3zM6 6H3V3h3z"
        fill="#FCACCD"
      />
      <path fill="#FBEFF6" d="M101 6h3v18h-3z" />
      <path fill="#FFCAE0" d="M97 14h2v2h-2zM7 14h2v2H7z" />
      <path fill="#FBEFF6" d="M3 6h3v18H3z" />
    </svg>
  );
}

const MemoStageC = React.memo(StageC);
export default MemoStageC;
