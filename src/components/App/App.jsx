import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { fetchImages } from '../api';

import { Box } from './App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    urlImage: null,
    totalHits: 0,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      try {
        this.setState({ isLoading: true });
        const images = await fetchImages(query, page);
        this.setState(ptevState => ({
          images: [...ptevState.images, ...images.hits],
          totalHits: Math.ceil(images.totalHits / 12),
        }));
        if (images.hits.length === 0) {
          toast.error('Не вийшло знайти зображення, спробуйте щось інше.');
        }
        this.setState({ isLoading: true });
      } catch (error) {
        toast.error('Ой, щось пішло не так, спробуйте оновити сторінку.');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  closeModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      this.setState({
        urlImage: null,
      });
    }
  };

  handleSubmit = query => {
    this.setState({
      images: [],
      query,
      page: 1,
      totalHits: 0,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  selectImage = urlImage => {
    this.setState({
      urlImage,
    });
  };

  render() {
    const { urlImage, images, isLoading, totalHits, page } = this.state;
    return (
      <Box>
        {urlImage !== null && (
          <Modal image={urlImage} onClick={this.closeModal} />
        )}
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && (
          <ImageGallery items={images} onSelect={this.selectImage} />
        )}
        {totalHits > page && <Button onClick={this.loadMore} />}
        {isLoading && <Loader visible={isLoading} />}
        <Toaster containerStyle={{ top: '100px' }} />
      </Box>
    );
  }
}
