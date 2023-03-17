import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const [formValidationError, setFormValidationError] = useState("")

  const onChangeHandler = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value

    setFormData({ ...formData, [name]: value })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(formData)
    fetch("http://localhost:5000/api/users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setFormValidationError(data.reason)
      })
      .catch((err) => {
        console.log(err.message)
      })

    navigate("/")
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username"> Username </label>
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={onChangeHandler}
          className="border-gray-200 rounded-lg px-2 border-2 my-5"
        />
        <br />
        <label htmlFor="password"> Password </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onChangeHandler}
          className="border-gray-200 rounded-lg px-2 border-2 "
        />
        <br />
        <summary className="text-red-400 text-sm">
          {formValidationError}
        </summary>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default LoginForm
