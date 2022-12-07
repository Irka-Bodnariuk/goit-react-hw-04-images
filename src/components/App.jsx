import { Component } from 'react';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
        <Button />
        <Loader />
        <Modal />
      </div>
    );
  }
}
