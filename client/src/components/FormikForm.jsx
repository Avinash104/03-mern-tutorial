import { useFormik } from "formik"

export default function Form() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(values)
      alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <div className="">
      <h1 className="text-red-700 text-5xl">Formik Form</h1>
      <form onSubmit={formik.onSubmitHandler}>
        <label htmlFor="username"> Username </label>
        <input
          name="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          className="border-gray-200 rounded-lg px-2 border-2 my-5 "
        />
        <br />
        <label htmlFor="email"> Email </label>
        <input
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="border-gray-200 rounded-lg px-2 border-2 my-5 "
        />
        <br />
        <label htmlFor="password"> Password </label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="border-gray-200 rounded-lg px-2 border-2 "
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
