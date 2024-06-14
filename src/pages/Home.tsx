import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Hello</h1>
      <ul>
        <li><Link to='/stand'>STANDALONE FORM</Link></li>
      </ul>
    </>
  )
}

export default Home;