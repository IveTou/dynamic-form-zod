import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Hello</h1>
      <ul>
        <li><Link to='/static'>STATIC FORM</Link></li>
        <li><Link to='/dynamic'>DYNAMIC FORM</Link></li>
      </ul>
    </>
  )
}

export default Home;