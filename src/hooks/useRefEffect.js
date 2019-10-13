import { useEffect } from 'react';

const useRefEffect = ({ effect, ref = {} }) => {
  useEffect(() => {
    effect( ref.current );
  }, [effect, ref]);
};

export default useRefEffect;
