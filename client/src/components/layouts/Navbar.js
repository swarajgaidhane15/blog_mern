import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <NavContainer>
            <nav className="navbar navbar-expand-lg navbar-light px-5 py-0">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="MyBlogDude" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-article"><i className="fa fa-plus-circle" aria-hidden="true"></i>  Add Article</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </NavContainer>
    )
}

export default Navbar;

const NavContainer = styled.div`
    background: var(--dark-green);
    .nav-link {
        color: #fff !important;
        &:hover {
            background: var(--light-green);
        }
    }
    img {
        width: 90px;
    }
    img:active {
        outline: none !important;
    }
`;
