export function Navbar(props){
    return(
        <nav className={`d-flex my-2 justify-content-between border border-1 p-2 ${props.Theme}`}>
            <div>
                <span className="fw-bold fs-4">{props.BrandTitle}</span>
            </div>
            <div>
                {
                    props.MenuItems.map(item=><span key={item} className="mx-3">{item}</span>)
                }
            </div>
            <div className={`${props.showSignin}`}>
                <button className={`${props.btnTheme}`}>Sign In</button>
            </div>
        </nav>
    )
}