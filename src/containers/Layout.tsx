import { FC } from "react";
import Banner from "@components/Banner";
import Searcher from "@components/Searcher";
import AppProvider from "@context/AppProvider";
import { ChildrenProps } from "../types";

const Layout: FC<ChildrenProps> = ({ children }) => {
  return (
    <AppProvider>
      <div className="container mx-auto h-full">
        <header className="h-32 md:h-1/5 flex flex-col justify-evenly">
          <Banner />
          <Searcher />
        </header>

        <main className="h-3/4 md:h-4/5">{children}</main>
      </div>
    </AppProvider>
  );
};

export default Layout;
