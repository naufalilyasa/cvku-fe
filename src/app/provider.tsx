import { Suspense } from "react";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense>
      <>
        {/* put provider here... */}
        {children}
      </>
    </Suspense>
  );
};
