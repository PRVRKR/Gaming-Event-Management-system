import React, {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginUser}) => {

  const navigate = useNavigate()

  const [ user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const login = () => {
      axios.post("http://localhost:9002/login", user)
      .then(res => {
          alert(res.data.message)
          setLoginUser(res.data.user)
          navigate("/PlayGames")
      })
  }
  return (
    <div>
      <div className="container">
  <div className="row align-items-center justify-content-center">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 b-height">
      <div className="row b-wrapper">
        <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 b-min-height pt-5">
          <div className="b-title text-center mt-5">
            <h1 className="user_title">Hey Gamers!!!</h1>
            <p className="user_subTitle">
              Welcome again please fill
              <br />
              up the details to continue further
            </p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div className="b-form text-center">
            <div className="b-form-title">
              <h1 className="form_title">Login Account</h1>
              <p>
                <span>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f logo1" />
                  </a>
                </span>
                <span>
                  <a href="https://twitter.com/i/flow/login">
                    <i className="fab fa-twitter logo2" />
                  </a>
                </span>
                <span>
                  <a href="https://www.instagram.com/accounts/login/?">
                    <i className="fab fa-instagram logo3" />
                  </a>
                </span>
              </p>
              <p className="b-subtext">or use your email for login</p>
            </div>
            <form method="post" action="">
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  name="email" value={user.email} onChange={handleChange}
                />
                <i className="fas fa-envelope b-font" />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="password" value={user.password} onChange={handleChange}
                  placeholder="Password"
                />
                <i className="fas fa-unlock-alt b-font" />
              </div>
              <div className="form-group">
                <span className="b-forgot">Forgot your password?</span>
              </div>
              <button type="button" className="sign_up" onClick={login}>
                Login
              </button>
              <div className="popup" id="popup">
                <img src="https://www.pngfind.com/pngs/m/16-162780_check-tick-icons-png-vector-free-icons-and.png" />
                <h2>Hey Buddy!</h2>
                <p>
                  Welcome Back Hustlers.
                  <br />
                  Let's join and compete the tournament with your friends.
                </p>
                <button
                  className="button2"
                  type="button"
                  onclick="closePopup()"
                >
                  OK
                </button>
              </div>
              <p className="mt-3 text-info">
                If you are new here please{" "}
                <button onClick={() => navigate("/Signup")}>
                  SignUp?
                </button>
              </p>
              <div className="icon">
                <a href="file:///D:/vs%20code/new/index.html">
                  <i className="bi bi-house-fill" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Login
