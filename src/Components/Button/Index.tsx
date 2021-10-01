import React from "react";

const Button = ({ name }: { name: string }): JSX.Element => (
  <div>Hey {name}, say hello to Button.</div>
);

export default Button;
