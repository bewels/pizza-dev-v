import React from 'react';

import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const Container = styled.div`
    max-height: 100vh;
    background: #fff;

    text-align: center;

    padding: 20px 0;
    nav {
        height: 100%;
        ul{
            display: grid;
            grid-template-rows: repeat(2, 50px);
            gap: 20px;
            grid-auto-rows: 1fr;
            align-items: flex-end;
            justify-content: center;

            list-style: none;

            height: 100%;
            li {
                width: 60px;
                height: 60px;

                display: flex;
                justify-content: center;
                align-items:center;

                border-radius: 50%;


                i {
                    font-size: 20px;
                }

                
            }
            .active{
                border-radius: 50%;
                color: #fff;
                background: #F99404;
            }

            a{
                text-decoration: none;
                color: #000;
            }
        }
    }
`

export default function Navigation () {
    return (
        <Container>
            <nav>
                <ul>
                    <NavLink to="/pizza" activeClassName='active'>
                        <li>
                            <i className="bi bi-house-door"></i>
                        </li>
                    </NavLink>
                    <NavLink to="/liked" activeClassName='active'>
                        <li>
                            <i className="bi bi-heart"></i>
                        </li>
                    </NavLink>
                    <li><i className="bi bi-box-arrow-right"></i></li>
                </ul>
            </nav>
        </Container>
    );
}