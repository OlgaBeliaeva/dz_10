
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CatImage.module.css'; // Импорт стилей

const CatImage = () => {
  const [catImageUrl, setCatImageUrl] = useState('');

  const fetchCatImage = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      setCatImageUrl(response.data[0].url);
    } catch (error) {
      console.error('Ошибка при загрузке изображения:', error);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Random Cat Image</h1>
      {catImageUrl && <img src={catImageUrl} alt="Random Cat" className={styles.catImage} />}
      <button onClick={fetchCatImage} className={styles.button}>Load New image</button>
    </div>
  );
};

export default CatImage;