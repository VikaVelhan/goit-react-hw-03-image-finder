import { React, Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { fetchImages } from '..//service/fetchImages';
export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, images, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      fetchImages(query, page).then(resp => {
        this.setState(({ images }) => ({
          images: page === 1 ? [...resp.hits] : [...images, ...resp.hits],
        }));
      });
    }
  }

  handleSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <Button />
        <ImageGallery images={this.state.images} />
        <Modal />
      </div>
    );
  }
}
