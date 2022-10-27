import Table from "../../components/admin/Table/Table_SanPham";
import Modal from "../../components/admin/Modal/Modal_AddSP";
import React, { useState } from "react";
function SanPham() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="container-fluid">
      <div className="mb-4 d-sm-flex align-items-center justify-content-between ">
        <h1 className="h3 mb-0 text-gray-800">Sản phẩm</h1>
        <button
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          onClick={() => setOpen(true)}
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Tạo sản phẩm
        </button>
      </div>
      <Table></Table>
      <Modal open={isOpen} close={() => setOpen(false)}></Modal>
    </div>
  );
}

export default SanPham;
