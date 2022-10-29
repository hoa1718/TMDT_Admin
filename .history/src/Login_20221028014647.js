import "./Login.css"
import "./slide.js"
function App() {
  return (
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Tạo tài khoản</h1>
          
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Đăng nhập</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Quên mật khẩu</a>
          <button>Đăng nhập</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Chào mừng trở lại!</h1>
            <p>
              Để tiếp tục liên lạc với chúng tôi vui lòng đăng nhập lại.
            </p>
            <button className="ghost" id="signIn">
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
