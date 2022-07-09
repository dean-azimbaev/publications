import { useEffect, useState, FC } from "react";
import { Table } from "antd";

import { Search } from "../search";
import { IPublication } from "../../interfaces";
import { PublicationsProps } from "./publications.props";
import { columns } from "./columns";

export const Publications: FC<PublicationsProps> = ({
  publications,
  loading = false,
  onSelected,
}) => {
  const [displayData, setDisplayData] = useState(publications);

  const handleSearch = (value: string) => {
    return setDisplayData(
      publications.filter(
        ({ id, name }) =>
          id.toString().includes(value) ||
          name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setDisplayData(publications);
  }, [publications]);

  return (
    <>
      <Search onSearch={handleSearch} />
      <Table
        dataSource={displayData}
        columns={columns}
        loading={loading}
        rowKey={(publication) => publication.id}
        pagination={false}
        onRow={(record: IPublication) => ({
          onClick: () => onSelected(record),
        })}
      />
    </>
  );
};
