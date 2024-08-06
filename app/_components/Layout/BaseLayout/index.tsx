import { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};
export default function BaseLayout(props: Props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
}
