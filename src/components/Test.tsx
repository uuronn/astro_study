import React from "react";

type Props = {
  content: string;
  children: any;
};

export const Test = ({ content, children }: Props): JSX.Element => {
  return (
    <h1>
      testtesttest
      {children}
    </h1>
  );
};
