import { useState } from "react";
import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";

import Button from "./pages/Button";
import Barchart from "./pages/Barchart";
import Table from "./pages/Table";
import Home from "./pages/Home";
import { SideNav } from "greg-lib-1";
import darkLogo from "./darkLogo.svg";
import "./App.css";

const StyledButton = styled.button`
  z-index: 999999;
  color: black;

  img {
    width: 40%;
    transition: width 0.1s ease-in-out;
  }

  &:hover img {
    width: 41%;
    transition: width 0.1s ease-in-out;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  height: 100%;
  cursor: pointer;
`;

const Nav = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  overflow-x: hidden;
  overflow: hidden;
  height: 100%;
  margin: 50% 0 0 0;
  text-align: left;

  ul {
    list-style-type: none;
    width: 100%;
    cursor: pointer;
    li {
      display: flex;
      height: 50px;
      align-items: center;
      a {
        text-decoration-line: none;
        width: 100%;
        padding-left: 20%;
        color: #666;
        :hover {
          font-weight: 600;
          color: #fff;
        }
      }
      :hover {
        background: #d8d7d6;
        color: #fff;
        width: 100%;
      }
    }
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 5%;
  margin-right: 5%;
  text-align: center;
  justify-content: space-around;
`;

const Indicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

const App = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const handleLinkClick = (event) => {
    event.stopPropagation();
  };
  return (
    <StyledDiv>
      <SideNav isOpen={isSideNavOpen} onClick={toggleSideNav}>
        <Indicator>
          <StyledButton>
            <img width="40%" src={darkLogo} alt="example logo" />
          </StyledButton>
        </Indicator>
        <Nav>
          {isSideNavOpen ? (
            <ul>
              <li>
                <StyledLink to="/" onClick={handleLinkClick}>
                  Home
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/button" onClick={handleLinkClick}>
                  Button
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/table" onClick={handleLinkClick}>
                  Table
                </StyledLink>
              </li>
              {/* <li>
                                <StyledLink
                                    to="/badge"
                                    onClick={handleLinkClick}
                                >
                                    Badge
                                </StyledLink>
                            </li> */}
              <li>
                <StyledLink to="/barchart" onClick={handleLinkClick}>
                  Barchart
                </StyledLink>
              </li>
            </ul>
          ) : null}
        </Nav>
      </SideNav>
      <StyledContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button" element={<Button />} />
          <Route path="/barchart" element={<Barchart />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </StyledContent>
    </StyledDiv>
  );
};

export default App;
