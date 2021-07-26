//IMPLEMENTED BASED ON STUDENT_STORE EXEMPLAR

import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import apiClient from "../../services/apiClient"
import "./register.css"

export default function Register({ user, setUser }) {
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })


  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    if (event.target.name === "passwordConfirm") {
      if (event.target.value !== form.password) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  //Where request is being handled.
  const handleOnSubmit = async () => {
    setIsProcessing(true)
    setErrors((e) => ({ ...e, form: null }))

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
      setIsProcessing(false)
      return
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }))
    }

    const { data, error } = await apiClient.registerUser({ first_name: form.first_name, last_name: form.last_name, email: form.email, username: form.username, password: form.password, is_admin: form.is_admin })
    console.log(data)
    if (error) setErrors(setErrors((e) => ({ ...e, form: error })))
    if (data) {
      setUser(data.user)
      apiClient.setToken(data.token)
    }

    setIsProcessing(false)

  }
    // redirect, when user registers
    useEffect(() => {
      if (user?.email) {
        navigate("/");
      }
    }, [user, navigate]);

  return (
    <div className="Register">
      <div className="card">
        <img src="https://i.imgur.com/sWPy8f9.png" alt="Welcome User Img" width="175px" height="175px" padding-top="28px"></img>
        <h2 className="topScreen">Create Account</h2>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <div className="input-field">
            <label htmlFor="firstName"></label>
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              value={form.name}
              onChange={handleOnInputChange}
              className="bar"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="input-field">
          <label htmlFor="lastName"></label>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.name}
              onChange={handleOnInputChange}
              className="bar"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email"
              value={form.email}
              onChange={handleOnInputChange}
              className="bar"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <input
              type="username"
              name="username"
              placeholder="Enter a valid username"
              value={form.username}
              onChange={handleOnInputChange}
              className="bar"
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              placeholder="Enter a secure password"
              value={form.password}
              onChange={handleOnInputChange}
              className="bar"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="passwordConfirm"></label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Confirm your password"
              value={form.passwordConfirm}
              onChange={handleOnInputChange}
              className="bar"
            />
            {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
          </div>

          <button className="btn" disabled={isProcessing} onClick={handleOnSubmit} font-size="48px" width="216px">
            {isProcessing ? "Loading..." : "Create Account"}
          </button>
        </div>

        <div className="footer">
          <p>
            Already have an account? Login <Link to="/login">here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
