import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ items, onSelect }) => {
  return (
    <Gallery>
      <ImageGalleryItem items={items} onSelect={onSelect} />
    </Gallery>
  );
};
