import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <MainContainer>
            <h1>Welcome to <br />MyBlogDude!</h1>
        </MainContainer>
    )
}

export default Header;

//Main Container
const MainContainer = styled.header`
    background: url(../../images/bg.jpg) no-repeat center/cover;
    height: 25rem;

    h1 {
        transform: translate(-50%, -50%);
        color: #000;
        font-weight: 900;
        position: absolute;
        top: 25%;
        left: 50%;
        text-align: center;
        line-height: 4rem;
        word-spacing: 2px;
    }
`;
