import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';
import { Spiner } from './Loader.styled';

export const Loader = ({ visible }) => {
  return (
    <Spiner>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={visible}
      />
    </Spiner>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};
