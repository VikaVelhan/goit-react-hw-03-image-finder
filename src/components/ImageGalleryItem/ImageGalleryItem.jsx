import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ image }) => {
  const { webformatURL } = image;

  return (
    <li className={css.ImageGalleryItem}>
      <img src={webformatURL} alt="img" className={css.ImageGalleryItemImage} />
    </li>
  );
};
export default ImageGalleryItem;
