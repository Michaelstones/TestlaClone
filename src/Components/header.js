import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { selectCars } from "../features/car/carslice";
import { useSelector } from "react-redux";
function Header() {
  const [sideMenu, setSideMenu] = useState(false);
  const cars = useSelector(selectCars);
  const handleClick = () => {
    setSideMenu((prev) => !prev);

    // console.log(sideMenu);
  };
  return (
    <Container>
      <p>
        <a href="#">
          <img src="./images/logo.svg" alt="logo" />
        </a>
      </p>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a href="!#" key={index}>
                Model S
              </a>
            );
          })}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={handleClick} />
      </RightMenu>
      <BurgerNav show={sideMenu}>
        <BtnWrapper>
          <Customclose onClick={handleClick}>
            <img src="./images/Icon.png" width="30px" alt="" />
          </Customclose>
        </BtnWrapper>
        {cars &&
          cars.map((car, index) => {
            return (
              <li key={index}>
                <a href="#">{car}</a>
              </li>
            );
          })}
        <li>
          <a href="#">existing inventory</a>
        </li>
        <li>
          <a href="#">used inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cyber Truck</a>
        </li>
        <li>
          <a href="#">RoadSter</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 3.75rem;
  position: fixed;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    margin-right: 10px;
    font-weight: 600;
    flex-wrap: nowrap;
    text-transform: uppercase;
  }
  @media (max-width: 40em) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 10px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  width: 18.75rem;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  z-index: 100;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: start;
  text-transform: uppercase;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 0.95rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Customclose = styled.div`
  cursor: pointer;
`;
