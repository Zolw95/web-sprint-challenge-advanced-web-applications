import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Bubbles from './Bubbles';
import ColorList from './ColorList';
import { axiosWithAuth } from './axiosWithAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [loading, setLoading] = useState(true);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getColors();
  }, []);

  const getColors = () => {
    axiosWithAuth()
      .get('/colors')
      .then((res) => {
        setColorList(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <p>Bubbles</p>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        getColors={getColors}
        loading={loading}
        setLoading={setLoading}
      />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;
