import "./Header.css";
import Header2 from "./Header2";
import {
    Container,
    Center,
    Stack,
    Flex,
    Box,
    Heading,
    Text as h1,
    Button,
    Divider,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
  } from "@chakra-ui/react";

function Header() {
  return (
    <div className="header">
      <Image
          alt={"Login Image"}
          objectFit={"cover"}
          borderRadius='full'
          padding={'10px'}
          // sizes='sm'
          boxSize='200px'
          src={
            "https://images.unsplash.com/photo-1568963116276-951d46efd437?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
          }
        />
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <button className="header_searchIcon ">Search</button>
      </div>

      {/* <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello, Guest</span>
          <span className="header_optionLineTwo"><button>Logout</button></span>
        </div>
      </div> */}
        {/* <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo"> Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
          <span className="header_optionLineTwo header_basketCount">0</span>
        </div> */}
      {/* <Header2/> */}
    </div>
  );
}

export default Header;
