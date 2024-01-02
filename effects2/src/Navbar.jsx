import { Link } from "react-router-dom";

export default function Navbar() {
  return <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/shahar-form">Shahar Form</Link></li>
      <li><Link to="/books">Catalog</Link></li>
    </ul>
  </nav>;
}