import { Modal } from 'components/Modal/Modal.styled';
import { GaleryImg, GaleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ items, onClick }) => {
  return (
    <>
      {items.map(({ id, webformatURL, largeImageURL, user }) => (
        <GaleryItem key={id}>
          <GaleryImg
            src={webformatURL}
            alt={user}
            onClick={() => {
              onClick(largeImageURL);
            }}
          />
          <Modal />
        </GaleryItem>
      ))}
    </>
  );
};
