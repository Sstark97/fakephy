import { FC } from "react";
import Searcher from "@components/Searcher";
import AppProvider from "@context/AppProvider";
import { ChildrenProps } from "../types";

const Layout: FC<ChildrenProps> = ({ children }) => {
  return (
    <AppProvider>
      <div className="h-full bg-neutral-900">
        <header className="h-1/5">
          <Searcher />
        </header>

        <main className="h-4/5">{children}</main>
      </div>
    </AppProvider>
  );
};

export default Layout;
