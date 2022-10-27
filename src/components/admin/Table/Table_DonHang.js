import { Link } from "react-router-dom";
import React, { useState } from "react";
function TableDonHang() {
  const [donHang, setDonHang] = useState([
    { MaDonHang: 1, NgayLap: 1, DiaChi: "SVH", SL: 10, details:[1,2] },
  ]);
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Danh Sách</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <div
            id="dataTable_wrapper"
            className="dataTables_wrapper dt-bootstrap4"
          >
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div id="dataTable_filter" className="dataTables_filter">
                  <label>
                    Search:
                    <input
                      type="search"
                      className="form-control form-control-sm"
                      aria-controls="dataTable"
                    />
                  </label>
                </div>
              </div>
            </div>
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
                        style={{ width: 100 }}
                      >
                        Mã đơn hàng
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="dataTable"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Position: activate to sort column ascending"
                        style={{ width: 120 }}
                      >
                        Ngày lập
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="dataTable"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Office: activate to sort column ascending"
                        style={{ width: 200 }}
                      >
                        Địa chỉ
                      </th>

                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="dataTable"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Start date: activate to sort column ascending"
                        style={{ width: 60 }}
                      >
                        Số lượng
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="dataTable"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Salary: activate to sort column ascending"
                        style={{ width: 144 }}
                      >
                        Tổng
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="dataTable"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Salary: activate to sort column ascending"
                        style={{ width: 160 }}
                      >
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {donHang.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td className="sorting_1">
                            <Link to={"./"+item.MaDonHang} state={{ detail: item }}>{item.MaDonHang}</Link>
                          </td>
                          <td>{item.NgayLap}</td>
                          <td>{item.DiaChi}</td>
                          <td>{item.SL}</td>
                          <td></td>
                          <td>
                            <button className="table-btn apply">Xác nhận</button>
                            <button className="table-btn cancel">Huỷ đơn</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <div
                  className="dataTables_info"
                  id="dataTable_info"
                  role="status"
                  aria-live="polite"
                >
                  Showing 1 to 10 of 57 entries
                </div>
              </div>
              <div className="col-sm-12 col-md-7">
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="dataTable_paginate"
                >
                  <ul className="pagination">
                    <li
                      className="paginate_button page-item previous disabled"
                      id="dataTable_previous"
                    >
                      <a
                        href="#"
                        aria-controls="dataTable"
                        data-dt-idx={0}
                        tabIndex={0}
                        className="page-link"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="paginate_button page-item active">
                      <a
                        href="#"
                        aria-controls="dataTable"
                        data-dt-idx={1}
                        tabIndex={0}
                        className="page-link"
                      >
                        1
                      </a>
                    </li>
                    <li className="paginate_button page-item ">
                      <a
                        href="#"
                        aria-controls="dataTable"
                        data-dt-idx={2}
                        tabIndex={0}
                        className="page-link"
                      >
                        2
                      </a>
                    </li>

                    <li
                      className="paginate_button page-item next"
                      id="dataTable_next"
                    >
                      <a
                        href="#"
                        aria-controls="dataTable"
                        data-dt-idx={7}
                        tabIndex={0}
                        className="page-link"
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableDonHang;
