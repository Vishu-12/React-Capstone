import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleCheckbox = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    let newErrors = { ...errors };
    if (
      formData.name.trim().length === 0 ||
      formData.name === undefined ||
      formData.name === null
    ) {
      newErrors.name = "Name is required";
    } else {
      newErrors.name = "";
    }
    if (
      formData.email.trim().length === 0 ||
      formData.email === undefined ||
      formData.email === null
    ) {
      newErrors.email = "Email is required";
    } else {
      newErrors.email = "";
    }
    if (
      formData.username.trim().length === 0 ||
      formData.username === undefined ||
      formData.username === null
    ) {
      newErrors.username = "Username is required";
    } else {
      newErrors.username = "";
    }
    if (
      formData.mobile.trim().length === 0 ||
      formData.mobile === undefined ||
      formData.mobile === null
    ) {
      newErrors.mobile = "Mobile is required";
    } else {
      newErrors.mobile = "";
    }
    if (!formData.checkbox) {
      newErrors.checkbox = "Please accept the terms and conditions";
    } else {
      newErrors.checkbox = "";
    }
    setErrors({ ...newErrors });
    if (
      newErrors.name === "" &&
      newErrors.email === "" &&
      newErrors.mobile === "" &&
      newErrors.username === "" &&
      newErrors.checkbox === ""
    ) {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/genre");
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          height: "100vh",
          width: "50vw",
          position: "relative",
        }}
      >
        <img
          src="../assets/heroImage.png"
          alt="Image not found"
          style={{ height: "99vh", width: "50vw" }}
        />
        <p
          style={{
            position: "absolute",
            left: "3rem",
            bottom: "5rem",
            fontSize: "50px",
            color: "white",
            background: "transparent",
            width: "35vw",
          }}
        >
          Discover new things on Superapp
        </p>
      </div>
      <form
        style={{
          display: "flex",
          gap: "1rem",
          width: "50vw",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "40vw",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <p className="super-app">Super app</p>
          <p style={{ color: "white" }}>Create your new account</p>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              placeholder="Name"
              style={{
                border: `${errors.name.length > 0 ? "1px solid red" : "none"}`,
                borderRadius: "5px",
                padding: "10px",
                width: "23vw",
                color: "white",
                background: "#292929",
              }}
            />
            <p style={{ color: "red" }}>{errors.name}</p>
          </div>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              placeholder="UserName"
              style={{
                border: `${
                  errors.username.length > 0 ? "1px solid red" : "none"
                }`,
                borderRadius: "5px",
                padding: "10px",
                width: "23vw",
                color: "white",
                background: "#292929",
              }}
            />
            <p style={{ color: "red" }}>{errors.username}</p>
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Email"
              style={{
                border: `${errors.email.length > 0 ? "1px solid red" : "none"}`,
                borderRadius: "5px",
                padding: "10px",
                width: "23vw",
                color: "white",
                background: "#292929",
              }}
            />
            <p style={{ color: "red" }}>{errors.email}</p>
          </div>
          <div>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              onChange={handleChange}
              placeholder="Mobile"
              style={{
                border: `${
                  errors.mobile.length > 0 ? "1px solid red" : "none"
                }`,
                borderRadius: "5px",
                padding: "10px",
                width: "23vw",
                color: "white",
                background: "#292929",
              }}
            />
            <p style={{ color: "red" }}>{errors.mobile}</p>
          </div>
          <div
            style={{
              width: "23vw",
            }}
          >
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              onClick={handleCheckbox}
            />
            <label
              htmlFor="checkbox"
              style={{
                color: "#cfd1d0",
                marginLeft: ".5rem",
                fontSize: "13px",
              }}
            >
              Share my registration data with Superapp
            </label>

            <p style={{ color: "red" }}>{errors.checkbox}</p>
          </div>
          <button
            style={{
              padding: "10px",
              borderRadius: "20px",
              background: "#72DB73",
              color: "white",
              border: "none",
              cursor: "pointer",
              width: "23vw",
              fontWeight: "600",
            }}
            type="submit"
          >
            SIGN UP
          </button>
          <p style={{ color: "#cfd1d0", fontSize: "12px", width: "23vw" }}>
            By clicking on Sign up. you agree to Superapp{" "}
            <span style={{ color: "#72DB73" }}>
              Terms and Conditions of Use
            </span>
          </p>
          <p style={{ color: "#adadad", fontSize: "12px", width: "23vw" }}>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
            <span style={{ color: "#72DB73" }}>Privacy Policy</span>
          </p>
        </div>
      </form>
    </div>
  );
}
