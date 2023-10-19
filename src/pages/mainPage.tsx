import styled from "styled-components";
import fullLogo from '../assets/full-logo.svg'
import GradientButton, {ButtonType} from "../UI/gradientButton";
import {useNavigate} from 'react-router-dom'

const MainPage = () => {
    const navigate = useNavigate()

    return (
        <MainContainer>
            <Header>
                <img src={fullLogo} alt="Noushi"/>
                <ul>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Tools</a></li>
                    <li><a href="#">Case study</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <GradientButton onClick={() => navigate('/html/introduction-to-HTML')} $styleType={ButtonType.outlined}>Start For Free</GradientButton>
            </Header>
            main
        </MainContainer>
    );
};

const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 40px`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  img{
    width: 165px;
  }
  ul{
    display: flex;
    padding: 0;
    margin: 0;
    li{
      list-style: none;
      margin: 0;
      a{
        all: unset;
      }
    }
    li + li{
      margin-left: 25px;
    }
  }`

export default MainPage;