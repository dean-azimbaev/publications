import { ColumnsType } from "antd/lib/table";

import { IPublication } from "../../interfaces";

export const columns: ColumnsType<IPublication> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (category) => category.name,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (type) => type.name,
  },
  {
    title: "Keywords",
    dataIndex: "keywords",
    key: "keywords",
    render: (keywords: string[]) => keywords.join(", ").trim(),
  },
];
