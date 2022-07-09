import { FC } from "react";
import { Drawer } from "antd";

interface DetailsProps {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const Details: FC<DetailsProps> = ({
  open = true,
  onClose,
  children,
}) => {
  return (
    <Drawer
      visible={open}
      placement="bottom"
      onClose={onClose}
      width={720}
      height={400}
    >
      {children}
    </Drawer>
  );
};
