import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { StyledImg, StyledImageModal, StyledTitelModal } from "./Theme";

const Photo = ({ url, title, photoId, photo, photos }) => {
  const [open, setOpen] = useState(false);

  const [x, setX] = useState({ x: {} });
  const [y, setY] = useState({ y: {} });
  let clickedId = photo.id;

  function printMousePos(id) {
    if (clickedId === photoId) {
      setOpen(true);
    }
    let xCount = id.clientX;
    let yCount = id.clientY;
    setX(xCount);
    setY(yCount);
  }

  return (
    <>
      <StyledImg
        key={clickedId}
        src={url}
        onClick={(id) => {
          printMousePos(id);
        }}
      />

      <Modal
        url={url}
        title={title}
        open={open}
        close={() => setOpen(false)}
        clickedId={clickedId}
        photos={photos}
        x={x}
        y={y}
      >
        <StyledTitelModal>{title}</StyledTitelModal>
        <StyledImageModal src={url} />
      </Modal>
    </>
  );
};
export default Photo;
