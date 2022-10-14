import Table from "../../components/admin/Table/Table_SanPham";
import Modal from "../../components/admin/Modal/Modal_AddSP";
function SanPham() {
    return (
    <div className="container-fluid">
        <div className="mb-4 d-sm-flex align-items-center justify-content-between ">
          <h1 className="h3 mb-0 text-gray-800">Sản phẩm</h1>
          <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Tạo sản phẩm</a>
        </div>
        <Table></Table>
        <Modal></Modal>
    </div>
    );
  }
  
  export default SanPham;