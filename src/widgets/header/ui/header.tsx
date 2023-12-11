import styled from "styled-components";
import React, {HTMLAttributes, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom"

import {HeaderNavigation} from "@/entities";

import {BurgerButton, Button, FullLogo, ThemeEnum, useResize} from "@/shared";

export const Header: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    const [width] = useResize()
    const isBigDisplay = width > 960

    const [menuOpened, setMenuOpened] = useState<boolean>(false)
    const mobileMenu = useRef<HTMLUListElement | null>(null)

    const navigate = useNavigate()

    const { t } = useTranslation()

    return (
        <MainHeader {...props}>
            <nav>
                <Logo>
                    <FullLogo/>
                </Logo>
                {isBigDisplay && <HeaderNavigation/>}
                {isBigDisplay ?
                    <Button
                        onClick={ () => navigate("/html/introduction-to-HTML") }
                    >
                        {t('mainHeaderGetStartedButton')}
                    </Button>
                    :
                    <div
                        style={{ width: '50px' }}
                        onClick={() => setMenuOpened(!menuOpened)}
                    >
                        <BurgerButton
                            isOpen={!menuOpened}
                            setIsOpen={setMenuOpened}
                        />
                    </div>
                }
            </nav>
            {!isBigDisplay &&
                <HeaderNavigation
                    $vertical
                    innerRef={mobileMenu}
                    style={{maxHeight: menuOpened ? mobileMenu.current?.offsetWidth : 0}}
                    onClick={() => setMenuOpened(false)}
                />
            }
        </MainHeader>
    );
};

const MainHeader = styled.header`
  & > nav:first-child{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;
  }
`

const Logo = styled.div`
  width: 165px;

  svg{
    width: 100%;
    height: 100%;
    cursor: pointer;

    path:last-child{
      fill: ${props => props.theme.type === ThemeEnum.dark ? 'white' : 'black'};
    }
  }
`