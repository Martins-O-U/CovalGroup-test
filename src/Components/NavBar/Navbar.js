import React from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";


export default function Navbar(props) {
    const onLogout = () => {
        localStorage.removeItem("coop_token");
    };
    return (
        <StyledDiv>
            <header>
                <div className="container-fluid d-none d-md-block">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6 col-md-6 custom_nav">
                            <h5 className="p-3">Coop<span id="lag">LAG</span></h5>
                        </div>
                        <div className="col-lg-6 col-xl-6 col-md-6 pt-3 custom_login">
                            {/* <button className="btn btn-outline-primary">Button 1</button>
                            <button className="btn btn-outline-primary">Button 2</button> */}
                            <NavLink to="/login"> <span id="login">Login</span> </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
.body_container{
    margin - bottom: 50px;
}

    button{
        padding: 5px 20px 5px 20px;
    }

    .custom_nav{
        padding - right: 0px
    }

    .custom_login{

        padding - left: 0px;
        padding-right: 100px;

        #login{
            float: right;
            cursor:pointer;
        }
    }

    h5{
        #lag{
            font - weight: bold;
        }
    }
    nav{
        display: flex;
        justify-content: space-between;

        .nav-div{
            margin - left: 2px;
        }

        .nav-div-2{
            margin - right: 5px;
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