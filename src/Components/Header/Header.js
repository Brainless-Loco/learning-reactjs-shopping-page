import React from 'react';
import './Header.css'
import logo from '../../logo.svg'

const Header = () => {
    const linkNames = ["Home","Movies","Offer","Watch Online"];
    const links = ["www.facebook.com/_who.is.tc_","www.facebook.com/_who.is.tc_","www.facebook.com/_who.is.tc_","www.facebook.com/_who.is.tc_"];
    let i =0;
    return (
        <div className="">
            <nav className="navbar px-5 navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand font-weight-bold text-info" href="www.facebook.com/_who.is.tc_">
                    <img className="img-fluid logo App-logo" src={logo} alt=""/>Movie Wala
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="www.facebook.com/_who.is.tc_navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        {
                            linkNames.map(linkName =>
                                <li className="nav-item px-2 font-weight-bold" key={i}>
                                    <a className="nav-link text-primary" href={links[i++]}>{linkName}</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;