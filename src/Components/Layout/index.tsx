import React from "react";
import Header from "../Header";
import * as P from "./styled";

interface Props {
  children:any
}

const Layout = ({children}:Props) => {
  return (
    <P.Box>
      <Header />
      {children}
    </P.Box>
  );
};

export default Layout;