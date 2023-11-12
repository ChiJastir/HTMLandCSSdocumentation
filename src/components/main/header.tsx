// import {store} from "@/shared";
// import { ThemeEnum } from "@styles/styled";
// import {BurgerButton} from "@/shared";
// import styled from "styled-components";
// import { useRef, useState } from "react";
// import { useResize } from "@/shared";
// import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom"
// import {Button} from "@/shared";
// import {HeaderNavigation} from "@/entities";
// import {FullLogo} from "@/shared";
//
// const Header = () => {
//     const [width] = useResize()
//     const isBigDisplay = width > 960
//
//     const [menuOpened, setMenuOpened] = useState<boolean>(false)
//     const mobileMenu = useRef<HTMLUListElement | null>(null)
//
//     const navigate = useNavigate()
//
//     const isDark = store.getState().themeSlice.themeValue.type === ThemeEnum.dark
//
//     const { t } = useTranslation()
//
//     return (
//         <MainHeader>
//             <nav>
//                 <Logo $isDark={isDark}>
//                     <FullLogo/>
//                 </Logo>
//                 {isBigDisplay && <HeaderNavigation/>}
//                 {isBigDisplay ?
//                     <Button
//                         onClick={ () => navigate("/html/introduction-to-HTML") }
//                     >
//                         {t('mainHeaderGetStartedButton')}
//                     </Button>
//                 :
//                     <div
//                         style={{ width: '50px' }}
//                         onClick={ () => setMenuOpened(!menuOpened) }
//                     >
//                         <BurgerButton
//                             isOpen={!menuOpened}
//                             setIsOpen={setMenuOpened}
//                         />
//                     </div>
//                 }
//             </nav>
//             {!isBigDisplay &&
//                 <HeaderNavigation
//                     $vertical
//                     innerRef={mobileMenu}
//                     style={{maxHeight: menuOpened ? mobileMenu.current?.offsetWidth : 0}}
//                     onClick={() => setMenuOpened(false)}
//                 />
//             }
//         </MainHeader>
//     );
// };
//
// const MainHeader = styled.header`
//   & > nav:first-child{
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 25px 0;
//   }
// `
//
// const Logo = styled.div<{$isDark: boolean}>`
//   width: 165px;
//
//   svg{
//     width: 100%;
//     height: 100%;
//     cursor: pointer;
//
//     path:last-child{
//       fill: ${props => props.$isDark ? 'white' : 'black'};
//     }
//   }
// `
//
// export default Header;