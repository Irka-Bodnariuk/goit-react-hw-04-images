import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { fetchImages } from '../api';

import { Box } from './App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';

export const App = () => {
  const [images, setImages] = useState(() => []);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [urlImage, setUrlImage] = useState(null);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (query === '') {
      return;
    }

    window.addEventListener('keydown', closeModal);
    const fatchImg = async () => {
      try {
        setIsLoading(true);

        const { hits, totalHits } = await fetchImages(query, page);
        if (hits.length === 0) {
          toast.error('Не вийшло знайти зображення, спробуйте щось інше. 😿');
          return;
        }
        setImages(state => [...state, ...hits]);
        setTotalHits(Math.ceil(totalHits / 12));

        setIsLoading(true);
      } catch (error) {
        toast.error('Ой, щось пішло не так, спробуйте оновити сторінку. 😿');
      } finally {
        setIsLoading(false);
      }
    };
    fatchImg();
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [page, query]);

  const closeModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      setUrlImage(null);
    }
  };

  const handleSubmit = query => {
    if (query === '') {
      toast.error('Ви нічого не ввели 🙀!');
      return;
    }
    setImages([]);
    setQuery(query);
    setPage(1);
    setTotalHits(0);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Box>
      {urlImage !== null && <Modal image={urlImage} onClick={closeModal} />}
      <Searchbar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery items={images} onSelect={setUrlImage} />
      )}
      {totalHits > page && <Button onClick={loadMore} />}
      {isLoading && <Loader visible={isLoading} />}
      <Toaster containerStyle={{ top: '100px' }} />
    </Box>
  );
};
