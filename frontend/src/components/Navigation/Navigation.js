import React, { useState } from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import { menuItems } from '../../utils/menuItems';

function Navigation({ active, setActive }) {
  return (
    <NavStyled>
      <div className="nav">
        <div className="user-con">
          <img src={avatar} alt="" />
          <div className="text">
            <h2>Phetmaja</h2>
            <p>Your Money</p>
          </div>
        </div>
        <div className="nav__menu">
          <ul className="menu-items">
            {menuItems.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={active === item.id ? 'active' : ''}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }
  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }
  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }

  @media screen and (max-width: 750px) {
    position: fixed;
    bottom: 0;
    height: 80px;
    width: 100%;
    z-index: 1000;
    padding: 0;
    background: #ffffff;
    border: none;

    border-radius: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .nav {
      height: 80px;
    }
    .nav__menu {
      height: 80px;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #ffffff;
      box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
      border-radius: 1.5rem;
      transition: 0.3s;
      padding: 2rem 1.5rem 4rem;
      text-align: center;
    }
    .user-con {
      display: none;
    }
    .menu-items {
      padding: 0;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }
    .active {
      color: rgba(34, 34, 96, 1) !important;
      i {
        color: rgba(34, 34, 96, 1) !important;
      }
      &::before {
        display: none;
      }
    }

    ul li span {
      display: none;
    }
  }
`;

export default Navigation;
