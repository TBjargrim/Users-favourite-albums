import React from "react";
import REACTDOM from "react-dom";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
// import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const portalRoot = document.getElementById("portal-root");

const Modal = ({ open, close, children, x, y }) => {
  return REACTDOM.createPortal(
    open ? (
      <Background>
        <ModalBackdrop onClick={() => close(false)} />
        <ModalBox>
          <CloseButton onClick={() => close(false)} />
          {children}
        </ModalBox>
      </Background>
    ) : null,
    portalRoot
  );
};

export default Modal;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
`;

const ModalBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 70%;
  width: 60%;
  background-color: white;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  z-index: 101;
  padding: 40px;
`;

const CloseButton = styled(GrClose)`
  position: absolute;
  top: 7%;
  right: 7%;
  font-size: 20px;
  cursor: pointer;
`;
