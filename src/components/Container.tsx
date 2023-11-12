import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  px?: string;
  py?: string;
  radius?: string;
  bg?: string;
  width?: string;
  height?: string;
}
function Container({ children }: Props) {
  return (
    <div className={`w-full max-w-[1440px] mx-auto px-8`}>
      {children}
    </div>
  )
}

export default Container