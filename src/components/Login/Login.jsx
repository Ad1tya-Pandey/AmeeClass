import React from "react";
import "./login.css";
function Login() {
  return (
    <>
      <div
        className="login-card"
        style={{
          backgroundColor: "#17BF9E",
          width: "70%",
          margin: "0 auto",
          marginBottom: "40px",
          borderRadius: "20px",
          height: "60%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginTop: "30px",
            color: "white",
            padding: "20px",
          }}
        >
          Log-in
        </h1>
        <br />
        <form method="POST" action="/login" style={{ display: "inline", textAlign: "center" }}>
          <div style={{ display: "flex" }}>
            {/* <FaUserAlt /> */}
            <input
              className="in"
              type="text"
              name="email"
              placeholder="Username"
              required=""
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "10px",
              }}
            />
          </div>

          <br />
          <input
            className="in"
            type="password"
            name="pass"
            placeholder="Password"
            required=""
            style={{
              width: "50%",
              display: "flex",

              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "10px",
            }}
          />
          <br />
          <input
            type="submit"
            name="login"
            className="login login-submit"
            value="login"
            style={{
              marginBottom: "20px",
              padding: "10px",
              width: "150px",
              borderRadius: "20px",
              fontWeight: "bold",
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </form>

        <div
          className="login-help"
          style={{
            textAlign: "center",
            marginBottom: "20px",
            padding: "20px",
          }}
        >
          <a
            className="tag"
            href="/signup"
            style={{
              color: "white",
              marginBottom: "20px",
              textDecoration: "none",
              marginRight: "10px",
            }}
          >
            Register
          </a>{" "}
          •{" "}
          <a
            className="tag"
            href="recoverpassword.php"
            style={{
              color: "white",
              marginBottom: "20px",
              textDecoration: "none",
              marginLeft: "10px",
            }}
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
