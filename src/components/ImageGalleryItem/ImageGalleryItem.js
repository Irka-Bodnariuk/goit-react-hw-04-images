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
