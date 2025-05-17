
export default function NavaBar(props){

    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="/">About</a>
                    <a className="nav-item nav-link" href="/">Our Costumers</a>
                    <a className="nav-item nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
{/* 
                    <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/About">About</Link>
                    <Link className="nav-item nav-link" to="/addCustomer">Our Costumers</Link>
                    <Link className="nav-item nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">Disabled</Link> */}
                </div>
            </div>
            <div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox"  id="flexSwitchCheckDefault" onClick={props.HandleSetMode}/>
                    <label className="form-check-label" hatmlfor="flexSwitchCheckDefault">{props.mode ==='dark' ? 'Disable' : 'Enable'} Dark Mode</label>
                </div>
            </div>
        </nav>
    );
}

//export default NavaBar;