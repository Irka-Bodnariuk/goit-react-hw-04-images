import { Overlay } from './Modal.styled';

export const Modal = ({ largeImageURL, user }) => {
  return (
    <>
      <Overlay className="overlay">
        <Modal className="modal">
          <img src={largeImageURL} alt={user} />
        </Modal>
      </Overlay>
    </>
  );
};
