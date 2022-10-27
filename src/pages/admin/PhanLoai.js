import React, { useState } from "react";
function Detail() {
  const removeItem = (e, i) => {
    e.target.parentNode.parentNode.remove();
  };
  return (
    <div className="container-fluid">
      <div className="mb-4 d-sm-flex align-items-center justify-content-between ">
        <h1 className="h3 mb-0 text-gray-800">Phân Loại</h1>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3"></div>
        <div className="card-body detailSite">
          <div className="detailSite-div">
            <span>Tên Phim:</span>
            <input type={"text"}></input>
          </div>
          <div className="detailSite-div">
            <span>Thể Loại:</span>
            <select></select>
          </div>
          <button className="form-input-btn" style={{ marginBottom: "10px" }}>
            Thêm
          </button>
          <div className="table-responsive">
            <div className="row">
              <div className="col-sm-12">
                <table
                  className="table table-bordered dataTable"
                  id="dataTable"
                  width="100%"
                  cellSpacing={0}
                  role="grid"
                  aria-describedby="dataTable_info"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr role="row">
                      <th
                        className="sorting sorting_asc"
                        tabIndex={0}
                        aria-controls="dataTable"
                        rowSpan={1}
                        colSpan={1}
                        aria-sort="ascending"
                        aria-label="Name: activate to sort column descending"
                        style={{ width: 60 }}
                      >
                        ID
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="dataTable"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Position: activate to sort column ascending"
                        style={{ width: 135 }}
                      >
                        Tên phim
                      </th>

                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="dataTable"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Start date: activate to sort column ascending"
                        style={{ width: 80 }}
                      >
                        Thể loại
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="dataTable"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Salary: activate to sort column ascending"
                        style={{ width: 100 }}
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <i
                          onClick={(e) => removeItem(e)}
                          className="fas fa-solid fa-trash"
                        ></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
