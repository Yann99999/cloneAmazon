const List = ({title, links}) => {
    return (
        <>
            <h3 className="font-bold">{title}</h3>
            <ul className="pl-2 mb-2">
                <li className="item-left-list">
                    <a href="#">{links[0]}</a>
                </li>
                <li className="item-left-list">
                    <a href="#">{links[1]}</a>
                </li>
                <li className="item-left-list">
                    <a href="#">{links[2]}</a>
                </li>
                <li className="item-left-list">
                    <a href="#">{links[3]}</a>
                </li>
                <li className="item-left-list">
                    <a href="#">{links[4]}</a>
                </li>
                <li className="item-left-list">
                    <a href="#">{links[5]}</a>
                </li>
            </ul>
        </>
    )
}

export default List