import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import "./mydatatable.scss";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "ProductName", headerName: "Product Name", width: 130 },
];

const rows = [
  { id: 1, ProductName: "Coffee"},
  { id: 2, ProductName: "Non Coffee"},
  { id: 3, ProductName: "Cake"},
  { id: 4, ProductName: "Pastry"},
  { id: 5, ProductName: "Cookie"},
  { id: 6, ProductName: "Waffle"},
  { id: 7, ProductName: "Croissant"},
  { id: 8, ProductName: "Bun"},
  { id: 10, ProductName: "Toast Bread"},
  { id: 11, ProductName: "Bagle"},
  { id: 12, ProductName: "Bagguette"},
  { id: 13, ProductName: "Pudding"},
  { id: 14, ProductName: "Ice Cream"},
  { id: 15, ProductName: "Salad"}
];

const MyDatatable = ({ title }) => {
  return (
    <div className="myDatatable">
      <div className="myDatatableTitle">{title}</div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;