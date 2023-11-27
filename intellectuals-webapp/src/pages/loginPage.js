import React from 'react';
import {GlobalNav, HeroSection} from "../homepage";
import Container from "react-bootstrap/Container";
import LoginModule from "../components/loginModule";

const LoginPage = () => {
    return (
        <div style={{backgroundColor: '#000000'}}>
            <GlobalNav />
            <LoginModule />
        </div>
    )
};

export default LoginPage;