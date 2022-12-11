import { ModalImg, Overlay } from './Modal.styled';

export const Modal = ({ image, onClick }) => {
  return (
    <Overlay onClick={onClick}>
      <ModalImg>
        <img src={image} alt={image} />
      </ModalImg>
    </Overlay>
  );
};
