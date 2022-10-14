import Table from "../../components/admin/Table/Table_DonHang";
function DonHang() {
  return (
    <div className="container-fluid">
      <div className="mb-4 d-sm-flex align-items-center justify-content-between ">
        <h1 className="h3 mb-0 text-gray-800">Đơn Hàng</h1>
        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Tạo đơn</a>
      </div>
    <Table></Table>
  </div>
  );
}

export default DonHang;
