import React, {useEffect} from 'react';
import styled from "styled-components";
import {motion, useAnimationControls} from "framer-motion";
import close from '../assets/close.svg'

interface ModalWindowProps{
    children?: React.ReactNode,
    isVisible: boolean,
    setIsVisible: (visible: boolean) => void,
}

const ModalWindow = ({children, isVisible, setIsVisible}: ModalWindowProps) => {
    const windowAnim = useAnimationControls()

    useEffect(() => {
        if (isVisible) {
            windowAnim.start({rotate: 0, scale: 1})
        } else {
            windowAnim.start({rotate: -180, scale: 0.2})
        }
    }, [isVisible])

    return (
        <BG
            $visibility={isVisible}
            onClick={() => setIsVisible(false)}
        >
            <motion.div
                initial={{rotate: -180}}
                animate={windowAnim}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <Window>
                    <CloseContainer>
                        <motion.img
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            whileTap={{
                                scale: 0.8,
                                rotate: -90,
                                borderRadius: "100%"
                            }}
                            src={close}
                            onTap={() => setIsVisible(false)}
                        />
                    </CloseContainer>
                    {children}
                </Window>
            </motion.div>
        </BG>
    );
};

interface BGProps{
    $visibility: boolean,
}

const BG = styled.div<BGProps>`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => props.$visibility ? 'visible' : 'hidden'};
  opacity: ${props => props.$visibility ? 1 : 0};

   transition: opacity 200ms, visibility 200ms ${props => props.$visibility ? 0 : 200}ms;
`

const Window = styled.div`
  background-color: white;
  min-height: 100px;
  min-width: 200px;
  padding: 25px;
  color: black;
  border-radius: 10px;
  position: relative;`

const CloseContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  img{
    width: 25px;
    height: 25px;
  }`

export default ModalWindow;