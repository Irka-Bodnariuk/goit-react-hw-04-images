import PropTypes from 'prop-types';
import { GaleryImg, GaleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ items, onSelect }) => {
  return (
    <>
      {items.map(({ id, webformatURL, largeImageURL, user }) => (
        <GaleryItem key={id}>
          <GaleryImg
            src={webformatURL}
            alt={user}
            onClick={() => {
              onSelect(largeImageURL);
            }}
          />
        </GaleryItem>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};
