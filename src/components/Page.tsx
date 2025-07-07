import { forwardRef, type ReactNode } from "react";
type PageType = {
  children?: ReactNode;
};
export const Page = forwardRef<HTMLDivElement, PageType>(
  ({ children }, ref) => {
    return (
      <div
        className="
                w-[796px]
                h-[1122px]
                border-2
                border-black
                bg-white
                shadow-2xl
                ml-2
                mt-2
                print:shadow-none
                print:shadow-0
                print:ml-0
                print:mt-0
                rounded-md
                "
      >
        <div ref={ref}>{children}</div>
      </div>
    );
  }
);
