import { ReactNode } from "react";

type PhotoProps = {
  legend: string;
  children: ReactNode;
}

export default function Photo({legend, children}: PhotoProps){
  return(
    <>
      {children}
      <p>{legend}</p>
    </>
  );
}