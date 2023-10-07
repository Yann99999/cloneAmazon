const Links = ({title, links}) => {
    return (
        <div className="w-1/2 md:w-auto mb-4 md:mb-0">
            <h4 className="font-bold mb-2">{title}</h4>
            <ul className="text-xs w-3/4">
                <li className="link-footer">
                    <a href="#">{links[0]}</a>
                </li>
                <li className="link-footer">
                    <a href="#">{links[1]}</a>
                </li>
                <li className="link-footer">
                    <a href="#">{links[2]}</a>
                </li>
                <li className="link-footer">
                    <a href="#">{links[3]}</a>
                </li>
                <li className="link-footer">
                    <a href="#">{links[4]}</a>
                </li>
            </ul>
        </div>
    )
}

export default Links