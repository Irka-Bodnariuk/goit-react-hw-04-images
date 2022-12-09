import { Component } from 'react';

import { fetchImages } from '../api';

import { Box } from './App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    error: null,
    isLoading: false,
  };
  handleSubmit = async query => {
    this.setState({
      images: [],
      query,
      page: 1,
    });
  };
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      try {
        this.setState({ isLoading: true, error: null });
        const images = await fetchImages(this.state.query, this.state.page);

        this.setState({ images: images.hits });
      } catch (error) {
        this.setState({
          error: 'У нас не получилось взять данные, попробуйте еще разочек 😇',
        });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <Box>
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery items={this.state.images} onClick={this.onClick} />

        <Loader visible={this.state.isLoading} />
        <Button onClick={this.loadMore} />
      </Box>
    );
  }
}
