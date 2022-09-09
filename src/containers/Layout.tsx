import { FC } from "react";
import { ChildrenProps } from "../types";

const Layout: FC<ChildrenProps> = ({children}) => {
  return (
    <div className="h-screen">
        <header>

        </header>

        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout