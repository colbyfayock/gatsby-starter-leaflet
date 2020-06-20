import { useEffect } from 'react';

export default function useRefEffect({ effect, ref = {} }) {
  useEffect(() => {
    effect( ref.current );
  }, [effect, ref]);
}
