import * as React from "react";

function BackBtn(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg width={107} height={35} fill="none" {...props}>
      <path fill="#fff" d="M6 3h95v29H6z" />
      <path
        fill="#FCACCD"
        d="M6 0h95v3H6zM6 32h95v3H6zM101 3h3v3h-3zM6 32H3v-3h3zM104 6h3v23h-3zM3 29H0V6h3zM101 29h3v3h-3zM6 6H3V3h3z"
      />
      <path fill="#fff" d="M101 6h3v23h-3zM3 6h3v23H3z" />
      <path
        d="M23 22.833V20.5h12.833v2.333H23zm1.167-11.666h10.5v8.166h-2.334V13.5h-8.166v-2.333zm22.166 10.5V20.5H40.5v1.167h5.833zM37 18.167V13.5h4.667v-1.167H37v-1.166h7v3.5h-4.667v1.166h5.834v2.334H37zm9.333 0v-7h2.334v7h-2.334zM38.167 24v-4.667h10.5V24h-10.5zm18.67-1.167V11.167h2.334v3.5h3.5v-3.5h2.334v11.666h-8.167zM66.172 24V11.167h2.334v4.666h1.166v2.334h-1.166V24H66.17zm-7-3.5h3.5V17h-3.5v3.5zm12.834-9.333h4.666V17h3.5v-3.5h-2.333v-2.333h4.667V17h1.166v2.333h-4.666V24H76.67v-4.667h-5.833V17h3.5v-3.5h-2.333v-2.333zm12.833 11.666V20.5h2.333v-1.167h1.167V17h1.167v-3.5h-4.667v-2.333h7v7H90.67V20.5h-1.166v1.167h-1.167v1.166h-3.5zM94.17 24V11.167h2.334V24H94.17zM11 19H8v-3h3zM14 16h-3v-3h3zM17 13h-3v-3h3zM14 22h-3v-3h3zM17 25h-3v-3h3z"
        fill="#FCACCD"
      />
    </svg>
  );
}

const MemoBackBtn = React.memo(BackBtn);
export default MemoBackBtn;
