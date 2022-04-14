import React, { useState } from 'react';

const useLoader = () => {
  const [loading, setLoading] = useState(false);

  return [loading ?  
  <div id="preloader">
    <div id="loader" />
  </div> 
  : null, () => setLoading(true), () => setLoading(false)];
};

export default useLoader;
