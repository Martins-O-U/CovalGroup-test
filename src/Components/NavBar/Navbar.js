import React from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";


export default function Navbar(props) {
    const onLogout = () => {
        localStorage.clear();
    };
    return (
        <StyledDiv>
            <header>
                <nav>
                    <div className="nav-div">
                        <NavLink exact to="/">Home</NavLink>
                    </div>
                    <div className="nav-div-2">
                        <NavLink to="/">About</NavLink>
                        <NavLink to="/register">Register</NavLink>
                        <NavLink to="/login">Log In</NavLink>
                        <NavLink onClick={onLogout} to="/">Log Out</NavLink>
                    </div>
                </nav>
            </header>

        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    nav{
        display: flex;
        justify-content: space-between;

        .nav-div{
            margin-left: 2px;
        }

        .nav-div-2{
            margin-right: 5px;
        }

        a{
            margin: 2px 5px;
            text-decoration: none;
            color: black;
            padding: 3px 6px;
            border-radius: 5px;
        }

        a:hover{
            background: dodgerblue;
            color: white;
        }

       
    }
`;