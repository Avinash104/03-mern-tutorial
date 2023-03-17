import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <div>
      <h1>
        Do you have an account?
        <Link to="/login">Login here</Link>
      </h1>
      <h1>
        Don't have an account?{" "}
        <Link to="/signup">Create an account here..!</Link>
      </h1>
    </div>
  )
}

export default Homepage
