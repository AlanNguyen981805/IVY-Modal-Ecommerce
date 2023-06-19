import React from 'react';
import SliderLeft from './SlideLeft';

const images = [
  'https://pubcdn.ivymoda.com/files/product/thumab/1400/2023/06/16/03b80e15ee9ce8d3b69dcfd5be33c5fb.JPG',
  'https://pubcdn.ivymoda.com/files/product/thumab/1400/2023/06/16/0636355fe05bdd88db7b0d9e7c055e1c.JPG',
  'https://pubcdn.ivymoda.com/files/product/thumab/1400/2023/06/16/6e30b466deb3904c51c2c61b033e232d.JPG',
  'https://pubcdn.ivymoda.com/files/product/thumab/1400/2023/05/17/11e490446d3a58295c89ff5ba4b2d8d2.jpg',
  'https://pubcdn.ivymoda.com/files/product/thumab/1400/2023/05/17/0c47ac9439361fda703f682a37375063.jpg',
  'https://pubcdn.ivymoda.com/files/product/thumab/1400/2023/05/08/8229d30505dcb06ba3c813ea0f825c9c.jpg',
];
const LeftDetail = () => {
  return (
    <div>
      <SliderLeft images={images} />
    </div>
  );
};

export default LeftDetail;
