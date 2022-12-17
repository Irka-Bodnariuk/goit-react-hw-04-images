import PropTypes from 'prop-types';
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

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
