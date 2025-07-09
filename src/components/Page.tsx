import { forwardRef, type ReactNode } from "react";

type PageProps = {
  children?: ReactNode;
};

export const Page = forwardRef<HTMLDivElement, PageProps>(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-[796px] bg-white border border-black shadow-xl rounded-md p-8"
      style={{ minHeight: "1122px" }} // height minimum A4
    >
      {/* Garis batas A4 */}
      <div
        className="absolute left-0 right-0 border-t border-red-500"
        style={{ top: "1122px", height: "1px" }}
      />
      {children}
    </div>
  );
});
