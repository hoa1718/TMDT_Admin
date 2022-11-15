import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import formatNum from "../../../Format/Format";
import NhapHangService from "../../../services/NhapHangService";
import queryString from "query-string";


function TableNhap({phieuNhap,setPhieuNhap}) {

  const [ngayNhap, setNgayNhap] = useState(null);

  const searchPhieuNhap = async (data) => {
    try {
      const res = await NhapHangService.getSearchNhapHang(data);
      console.log(res);
      setPhieuNhap(res.data); 
    } catch (error) {}
  };

  useEffect(() => {
    const id = setTimeout(() => {
      const data = {
        ngayNhap:ngayNhap||null,
      };
      const query = queryString.stringify(data);

      searchPhieuNhap(query);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [ngayNhap]);

  // let a=new Date("2020-05-13T11:50:21.817Z");

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
                      value={ngayNhap}
                      type="date"
                      className="form-control form-control-sm"
                      aria-controls="dataTable"
                      onChange={(e)=>setNgayNhap(e.target.value)}
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
                  style={{ width: "90%" }}
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
                        style={{ width: 120 }}
                      >
                        Mã Phiếu
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="dataTable"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Position: activate to sort column ascending"
                        style={{ width: 130 }}
                      >
                        Ngày lập
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
                    </tr>
                  </thead>

                  <tbody>
                    {phieuNhap.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td className="sorting_1"><Link to={"./"+item.IdPhieuNhap} state={{ detail: item }}>{item.IdPhieuNhap}</Link></td>
                          <td>{new Date(item.NgayNhap).toLocaleDateString()}</td>
                          <td>{item.SL}</td>
                          <td>{formatNum(item.Tong)}</td>
                        </tr>
                      );
                    })}
                    
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

export default TableNhap;
