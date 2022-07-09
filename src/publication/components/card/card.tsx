import { FC } from "react";
import { Image } from "antd";
import { IPublication } from "../../interfaces";

export const Card: FC<IPublication> = ({ cover, name }) => {
  return (
    <div>
      <Image width={200} src={cover} />
      <span>Name: {name}</span>
    </div>
  );
};
