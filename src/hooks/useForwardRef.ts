import React from "react";

export const useForwardRef = <T>(
  ref: React.ForwardedRef<T>,
  initialValue: any = null
) => {
  const targetRef = React.useRef<T | null>(initialValue);

  React.useEffect(() => {
    if (!ref) return;

    if (typeof ref === "function") {
      ref(targetRef.current);
    } else {
      targetRef.current = ref.current;
    }
  }, [ref]);

  return targetRef;
};
