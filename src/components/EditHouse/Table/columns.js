export const COLUMNS = [
  {
    Header: "House Id",
    Footer: "House Id",
    accessor: "house_id",
  },
  {
    Header: "House Type",
    Footer: "House Type",
    accessor: "house_type",
  },
  {
    Header: "Type Name",
    Footer: "Type Name",
    accessor: "type_name",
  },
  {
    Header: "Status",
    Footer: "Status",
    accessor: "status",
  },
  {
    Header: "GBO, m2",
    Footer: "GBO",
    accessor: "gbo",
  },
  {
    Header: "Roomcount",
    Footer: "Roomcount",
    accessor: "roomcount",
  },
  {
    Header: "Terrace",
    Footer: "Terrace",
    accessor: "terrace",
  },
  {
    Header: "Orientation",
    Footer: "Orientation",
    accessor: "orientation",
  },
  {
    Header: "Price",
    Footer: "Price",
    accessor: "price",
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "House Id",
    Footer: "House Id",
    accessor: "house_id",
  },
  {
    Header: "HouseType",
    Footer: "HouseType",
    columns: [
      {
        Header: "House Type",
        Footer: "House Type",
        accessor: "house_type",
      },
      {
        Header: "Type Name",
        Footer: "Type Name",
        accessor: "type_name",
      },
    ],
  },
  {
    Header: "HouseInfo",
    Footer: "HouseInfo",
    columns: [
      {
        Header: "Status",
        Footer: "Status",
        accessor: "status",
      },
      {
        Header: "GBO, m2",
        Footer: "GBO",
        accessor: "gbo",
      },
      {
        Header: "Roomcount",
        Footer: "Roomcount",
        accessor: "roomcount",
      },
      {
        Header: "Terrace",
        Footer: "Terrace",
        accessor: "terrace",
      },
      {
        Header: "Orientation",
        Footer: "Orientation",
        accessor: "orientation",
      },
      {
        Header: "Price",
        Footer: "Price",
        accessor: "price",
      },
    ],
  },
];
