import React, { useState } from "react";


function Modal({ open, close }) {
  const [items,setItems]= useState([{name:"aa",price:100,quantity:1}]);
  const addItem = () => {
    let name = document.querySelector("#SanPham").value;
    let quantity = Number(document.querySelector("#SoLuong").value);
    let price = document.querySelector("#GiaNhap").value;
    if(name===null || quantity===null || price===null) return;
    let item={"name":name,"quantity":quantity,"price":price}
    setItems([...items,item]);
  };
  const minusQuantity = (e,i) => {
    
    let num = Number(e.target.nextElementSibling.innerText);
    if (num === 1) return;
    e.target.nextElementSibling.innerHTML = num - 1;
    items[i].quantity=num-1
  };
  const bonusQuantity = (e,i) => {
    let num = Number(e.target.previousElementSibling.innerText);
    e.target.previousElementSibling.innerHTML = num + 1;
    items[i].quantity=num+1;
  };
  const removeItem = (e,i) => {
    e.target.parentNode.parentNode.remove();
    items.splice(i,1);
  };
  if (!open) return null;
  return (
    <div className="overplay">
      <div className="form">
        <div className="form-infor" style={{ width: "100%" }}>
          <button onClick={close} className="closeBtn">
            X
          </button>
          <h2>Tạo Phiếu Nhập</h2>
          <form className="form-input" style={{width:"70%"}}>
            <div className="form-input-div">
              <label>Ngày nhập:</label>
              <input name="NgayNhap" type="date"></input>
            </div>
            <div className="form-input-div">
              <label>Sản phẩm: </label>
              <input
                id="SanPham"
                name="SanPham"
                type="text"
                placeholder="Tên sản phẩm"
              ></input>
              <label style={{ marginLeft: "80px" }}>Số lượng: </label>
              <input
                id="SoLuong"
                name="SoLuong"
                type="number"
                placeholder="Số lượng"
              ></input>
            </div>
            <div className="form-input-div">
            <label>Giá nhập: </label>
              <input
                id="GiaNhap"
                name="Giá nhập"
                type="number"
                placeholder="Giá nhập"
                style={{width:"80%"}}
              ></input>
            </div>
            <button onClick={addItem} type="button" className="form-input-btn">
              Thêm vào phiếu
            </button>
            <table className="form-input-table">
              <thead>
                <tr>
                  <th>Tên sản phẩm</th>
                  <th>Giá nhập</th>
                  <th>Số lượng</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item,i)=>{
                  return(
                  <tr className="table-result" key={i}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <i
                      onClick={(e) => minusQuantity(e,i)}
                      className="fa-solid fa-minus minus-btn"
                    ></i>
                    <span>{item.quantity}</span>
                    <i
                      onClick={(e) => bonusQuantity(e,i)}
                      className="fa-solid fa-plus plus-btn"
                    ></i>
                  </td>
                  <td>
                    <i
                      onClick={(e) => removeItem(e,i)}
                      className="fas fa-solid fa-trash"
                    ></i>
                  </td>
                  </tr>)
                })} 
              </tbody>
            </table>
            <button className="form-input-btn">Xác nhận</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
