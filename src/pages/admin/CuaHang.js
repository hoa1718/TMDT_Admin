function CuaHang() {
  return (
  <div className="container-fluid">
    <div className="mb-4 d-sm-flex align-items-center justify-content-between ">
      <h1 className="h3 mb-0 text-gray-800">Giới thiệu cửa hàng</h1>
    </div>
    <div className="card shadow mb-4">
        <div className="card-header py-3">
        </div>
        <div className="card-body detailSite">
          <div className="detailSite-div">
            <span>Tên cửa hàng:</span>
            <input type={"text"}></input>
          </div>
          <div className="detailSite-div">
            <span>Địa chỉ:</span>
            <input type={"text"}></input>
          </div>
          <div className="detailSite-div">
            <span>Số điện thoại:</span>
            <input type={"text"}></input>
          </div>
          <div className="detailSite-div">
            <span>Số tài khoản:</span>
            <input type={"text"}></input>
          </div>
          <div className="detailSite-div">
            <span>Ngân hàng:</span>
            <input type={"text"}></input>
          </div>
        </div>
      </div>
      <button className="form-input-btn">Cập nhật</button>
  </div>
  );
}
export default CuaHang;
