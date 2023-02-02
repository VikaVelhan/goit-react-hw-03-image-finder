import { React, Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';

import { fetchImages } from '..//service/fetchImages';
export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
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

  handleLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        {this.state.images.length !== 0 && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
