import { useState } from 'react';

const useModal = () => {
  const [visible, setVisible] = useState(false);
  function checkOut() {
    setVisible(!visible);    
  }
  return {checkOut, visible}
};

export default useModal;