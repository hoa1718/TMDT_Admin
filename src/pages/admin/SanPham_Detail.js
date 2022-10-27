import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../logo.png";
function Detail() {
  const location = useLocation();
  const detail = location.state.detail;
  const [newPictures, setNewPictures] = useState([{ data: logo }]);
  const addImage = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setNewPictures(() => [
          ...newPictures,
          { logo: e.target.files[0], data: reader.result },
        ]);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const removeImage = (e,i) => {
    e.target.parentNode.parentNode.remove();
    newPictures.splice(i,1);
  };
  return (
    <div className="container-fluid">
      <div className="mb-4 d-sm-flex align-items-center justify-content-between ">
        <h1 className="h3 mb-0 text-gray-800">Sản Phẩm</h1>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Mã sản phẩm: {detail.MaSP}</h6>
          <button
            style={{ padding: "5px 10px", marginTop: "5px" }}
            className="table-btn hide"
          >
            <i
              style={{ paddingRight: "5px" }}
              className="fa-sharp fa-solid fa-eye-slash"
            ></i>
            Ẩn
          </button>
        </div>
        <div className="card-body detailSite">
          <div className="detailSite-div">
            <span>Tên sản phẩm:</span>
            <input type={"text"} value={detail.TenSP}></input>
          </div>
          <div className="detailSite-div">
            <span>Phim:</span>
            <select></select>
          </div>
          <div className="detailSite-div">
            <span>Hãng:</span>
            <select></select>
          </div>
          <div className="detailSite-div">
            <span>Cao:</span>
            <input
              style={{ width: "10%", marginRight: "10px" }}
              type={"text"}
            ></input>
            <span>Dài:</span>
            <input
              style={{ width: "10%", marginRight: "10px" }}
              type={"text"}
            ></input>
            <span>Rộng:</span>
            <input style={{ width: "10%" }} type={"text"}></input>
          </div>
          <div className="detailSite-div">
            <span>Trọng lượng:</span>
            <input type={"text"}></input>
          </div>
          <div className="detailSite-div">
            <p>Hình ảnh:</p>
            {newPictures.map((item, i) => {
              return (
                <div className="detail-img" key={i}>
                  <img src={item.data} alt="item-img"></img>
                  <button className="table-btn">
                    <i
                      style={{padding:"5px"}}
                      onClick={(e) => {
                        removeImage(e,i);
                      }}
                      className="fas fa-solid fa-trash"
                    ></i>
                  </button>
                </div>
              );
            })}
            <label htmlFor="imageUpload" className="btn-addImg">
              +
            </label>
            <input
              onChange={(e) => {
                addImage(e);
              }}
              id="imageUpload"
              type={"file"}
              accept=".jpg, .jpeg, .png"
              style={{ display: "none" }}
            ></input>
          </div>
        </div>
      </div>
      <button className="form-input-btn">Cập nhật</button>
    </div>
  );
}

export default Detail;
