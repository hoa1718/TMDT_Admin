import React, { useState } from "react";
import logo from "../../../logo.png";

function Modal({ open, close }) {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(logo);
  const changeImage = (e) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  if (!open) return null;
  return (
    <div className="overplay">
      <div className="form">
        <div className="form-image">
          <img src={imgData} className alt="l"></img>
          <label htmlFor="imageUpload">Thêm ảnh</label>
          <input
            id="imageUpload"
            type={"file"}
            accept=".jpg, .jpeg, .png"
            onChange={(e) => {
              changeImage(e);
            }}
          ></input>
        </div>
        <div className="form-infor">
          <button onClick={close} className="closeBtn">
            X
          </button>
          <h2>Thêm sản phẩm</h2>
          <form className="form-input" style={{ paddingLeft: "20px" }}>
            <div className="form-input-div">
              <label>Tên sản phẩm:</label>
              <input
                id="TenSP"
                name="TenSP"
                type="text"
                style={{ width: "80%" }}
              ></input>
            </div>
            <div className="form-input-div">
              <label style={{ width: "50px" }}>Phim:</label>
              <select
                id="Phim"
                name="Phim"
                style={{ marginRight: "17px", width: "250px" }}
              ></select>
              <label style={{ width: "100px" }}>Trọng lượng:</label>
              <input
                id="TrongLuong"
                name="TrongLuong"
                style={{ width: "240px" }}
              ></input>
            </div>
            <div className="form-input-div">
             
            </div>
            <div className="form-input-div">
              <label style={{ width: "50px" }}>Cao:</label>
              <input
                id="Cao"
                name="Cao"
                style={{ marginRight: "17px", width: "160px" }}
              ></input>
              <label style={{ width: "40px" }}>Dài:</label>
              <input
                id="Dai"
                name="Dai"
                style={{ marginRight: "17px", width: "160px" }}
              ></input>
              <label style={{ width: "52px" }}>Rộng:</label>
              <input id="Rong" name="Rong" style={{ width: "160px" }}></input>
            </div>
            <div className="form-input-div ">
              <label style={{ width: "70px" }}>Hãng:</label>
              <select
                id="Hang"
                name="Hang"
                style={{ marginRight: "17px", width: "250px" }}
              ></select>
            </div>
            <button className="form-input-btn">Xác nhận</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
