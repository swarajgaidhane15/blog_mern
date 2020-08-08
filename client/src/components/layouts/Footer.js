import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <span>
                &copy; {new Date().getFullYear()} All rights reserved!
            </span>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    background: #344;
    height: 4rem;
    width: 100%;
    text-align: center;
    bottom: 0;

    span {
        position: relative;
        top: 1.5rem;
        color: #fff;
    }
`;

