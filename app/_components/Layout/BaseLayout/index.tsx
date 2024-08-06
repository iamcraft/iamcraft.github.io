import { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};
export default function BaseLayout(props: Props) {
  return (
    <>
      <Header />
      <main className="min-h-80 bg-accent2">{props.children}</main>
      <footer></footer>
    </>
  );
}
