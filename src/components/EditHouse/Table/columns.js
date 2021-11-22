import  ColumnFilter  from '../Functions/ColumnFilter'


export const COLUMNS = [
  {
    Header: "House Id",
    Footer: "House Id",
    accessor: "house_id",
    Filter: ColumnFilter,
    disableFilters: true
  },
  {
    Header: "House Type",
    Footer: "House Type",
    accessor: "house_type",
    Filter: ColumnFilter
  },
  {
    Header: "Type Name",
    Footer: "Type Name",
    accessor: "type_name",
    Filter: ColumnFilter
  },
  {
    Header: "Status",
    Footer: "Status",
    accessor: "status",
    Filter: ColumnFilter
  },
  {
    Header: "GBO, m2",
    Footer: "GBO",
    accessor: "gbo",
    Filter: ColumnFilter
  },
  {
    Header: "Roomcount",
    Footer: "Roomcount",
    accessor: "roomcount",
    Filter: ColumnFilter
  },
  {
    Header: "Terrace",
    Footer: "Terrace",
    accessor: "terrace",
    Filter: ColumnFilter
  },
  {
    Header: "Orientation",
    Footer: "Orientation",
    accessor: "orientation",
    Filter: ColumnFilter
  },
  {
    Header: "Price",
    Footer: "Price",
    accessor: "price",
    Filter: ColumnFilter
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
