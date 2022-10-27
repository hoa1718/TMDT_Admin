import React, { useState } from "react";
import { useLocation } from "react-router-dom";
function Detail() {
  const location = useLocation();
  const detail = location.state.detail;
  const showPassword = () => {
    const password = document.querySelector("#password");
    if (password.getAttribute("type") === "text") {
      password.setAttribute("type", "password");
      return;
    }
    password.setAttribute("type", "text");
  };
  return (
    <div className="container-fluid">
      <div className="mb-4 d-sm-flex align-items-center justify-content-between ">
        <h1 className="h3 mb-0 text-gray-800">Khách Hàng</h1>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Mã khách hàng: {detail.MaKhachHang}</h6>
          <button
            style={{ padding: "5px 10px", marginTop: "5px" }}
            className="table-btn hide"
          >
            <i style={{ paddingRight: "5px" }} className="fa-solid fa-lock"></i>
            Khoá
          </button>
        </div>
        <div className="card-body detailSite">
          <div className="detailSite-div">
            <span>Tên khách hàng:</span>
            <input value={detail.HoTen} type={"text"}></input>
          </div>
          <div className="detailSite-div">
            <span>Tên tài khoản:</span>
            <input value={detail.TaiKhoan} type={"text"}></input>
          </div>
          <div className="detailSite-div">
            <span>Mật khẩu:</span>
            <input
              id="password"
              type={"password"}
              value={"aaa"}
            ></input>
            <button>
              <i
                onClickCapture={() => {
                  showPassword();
                }}
                className="fa-solid fa-eye"
              ></i>
            </button>
          </div>
          <div className="detailSite-div">
            <span>Ngày sinh:</span>
            <input type={"date"} style={{width:"30%"}}></input>

            <span style={{marginLeft:"20px"}}>Email:</span>
            <input type={"text"}></input>
          </div>
          <div className="detailSite-div">
            <span >Điểm thưởng:</span>
            <input disabled value="100" type={"text"} style={{width:"30%"}}></input>

            <span>Vai trò:</span>
            <select type={"text"} >
              <option value={1}>Quản trị viên</option>
              <option value={2}>Khách hàng</option>
            </select>
          </div>
          <div className="detailSite-div">
            <p>Địa chỉ:</p>
            {detail.Locate.map((item, i) => {
              return (
                <div>
                  <span>{i + 1}.</span>
                  <span>Địa chỉ</span>
                  <input style={{width:"400px"}} type={"text"} value={item.DiaChi}></input>
                  <span>SĐT</span>
                  <input style={{width:"200px"}} type={"text"} value={item.SDT}></input>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button className="form-input-btn">Cập nhật</button>
    </div>
  );
}

export default Detail;
