import { Link } from "react-router-dom";

function Item({ value, url }) {
  return (
    <li><Link to={url} >{value}</Link></li>
  )
}
export default Item;