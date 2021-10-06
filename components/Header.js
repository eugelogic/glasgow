const Header = ({ children }) => {

    return(
        <div className="header">
            <h1 className="site-title">{children}</h1>
        </div>
    )
}

export default Header