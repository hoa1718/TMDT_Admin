import "../../style.css"
function Dashboard() {
  return (
    <div className="row">
      {/* Earnings (Monthly) Card Example */}
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Thu Nhập (Tháng)
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  $40,000
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-calendar fa-2x text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Earnings (Monthly) Card Example */}
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Thu nhập (Ngày)
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  $215,000
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-dollar-sign fa-2x text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Earnings (Monthly) Card Example */}
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-danger shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                  Đơn hàng chưa xử lý
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  2
                </div>
              </div>
              <div className="col-auto">
                <i class="fas fa-solid fa-cash-register fa-2x text-gray-300"></i>
            
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pending Requests Card Example */}
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                  Tổng đơn hôm nay  
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
              </div>
              <div className="col-auto">
                <i class="fas fa-solid fa-receipt fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
