import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {

  const navigate = useNavigate()

  const [ user, setUser] = useState({
      name: "",
      email:"",
      password:"",
      reEnterPassword: ""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const Signup = () => {
      const { name, email, password, reEnterPassword } = user
      if( name && email && password && (password === reEnterPassword)){
          axios.post("http://localhost:9002/Signup", user)
          .then( res => {
              alert(res.data.message)
              navigate("/login")
          })
      } else {
          alert("invlid input")
      }
      
  }
  return (
    <div>
      <div className="container">
  <div className="row align-items-center justify-content-center">
    <div className="col-xs-9 col-sm-12 col-md-12 col-lg-12 b-height">
      <div className="row b-wrapper">
        <div className="col-xs-9 col-sm-5 col-md-5 col-lg-5 b-min-height">
          <div className="b-title text-center mt-5">
            <h1 className="user_title">Welcome Gamers</h1>
            <p className="user_subTitle">
              To Participate in any E-sport events.
              <br /> Please create your account over here..
            </p>
          </div>
        </div>
        <div className="col-xs-9 col-sm-7 col-md-7 col-lg-7">
          <div className="b-form text-center">
            <div className="b-form-title">
              <h1 className="form_title">Create Account</h1>
              <p>
                <span>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f logo1" />
                  </a>
                </span>
                <span>
                  <a href="https://twitter.com/i/flow/signup">
                    <i className="fab fa-twitter logo2" />
                  </a>
                </span>
                <span>
                  <a href="https://www.instagram.com/accounts/emailsignup/?hl=en">
                    <i className="fab fa-instagram logo3" />
                  </a>
                </span>
              </p>
              <p className="b-subtext">or use your email for registration</p>
            </div>
            <form method="post" action="">
              <div className="form-group username">
                <input
                  className="form-control"
                  type="text"
                  name="name" value={user.name}
                  placeholder="Name"
                  required=""
                  onChange={ handleChange }
                />
                <i className="fas fa-user b-font" />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email" value={user.email}
                  placeholder="Email"
                  required=""
                  onChange={ handleChange }
                />
                <i className="fas fa-envelope b-font" />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="password" value={user.password}
                  placeholder="Password"
                  required=""
                  onChange={ handleChange }
                />
                <i className="fas fa-unlock-alt b-font" />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="reEnterPassword" value={user.reEnterPassword}
                  placeholder="re-enter Password"
                  required=""
                  onChange={ handleChange }
                />
                <i className="fas fa-unlock-alt b-font" />
              </div>
              <div className="form-group">
                <span className="b-forgot">Forgot your password?</span>
              </div>
              <button
                type="button"
                className="sign_up button1"
                onClick={Signup}
              >
                Sign Up
              </button>
              {/* <input type="submit" name="" id=""> */}
              <div className="popup" id="popup">
                <img src="https://www.pngfind.com/pngs/m/16-162780_check-tick-icons-png-vector-free-icons-and.png" />
                <h2>Thank you!</h2>
                <p>
                  Your details has been successfully submitted.
                  <br />
                  Now you can Play, Compete and Earn.
                </p>
                <button
                  className="button2"
                  type="button"
                  onClick={() => navigate("/login")}
                >
                  OK
                </button>
              </div>
              <p className="mt-4 text-info">
                Alerady have an Account?
                <button  onClick={() => navigate("/login")}>
                  {" "}
                  Login
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
export default Signup