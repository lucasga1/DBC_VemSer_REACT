import { Link } from "react-router-dom";
import { Li } from "./Item.styled"
function Item({ value, url }) {
  return (
    <Li><Link to={url} >{value}</Link></Li>
  )
}
export default Item;