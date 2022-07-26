import Item from "./Item";


function List({ user, empresa}) {
    return (
        <ul>
            <Item name={user.name} empresa={empresa.company} />
        </ul>

    )
}
export default List