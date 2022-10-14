import Table from "../../components/admin/Table/Table_KhachHang";
function KhachHang() {
  return (
    <div className="container-fluid">
      <div className="mb-4 d-sm-flex align-items-center justify-content-between ">
        <h1 className="h3 mb-0 text-gray-800">Khách hàng</h1>
      </div>
    <Table></Table>
  </div>
  );
}

export default KhachHang;
