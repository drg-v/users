import { useEffect, useRef } from 'react';

function useOutsideClick(
  handler: () => void | undefined,
  listenCapturing = true,
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(this: HTMLElement, ev: MouseEvent) {
      if (ref.current && !ref.current.contains(ev.target as Node)) {
        handler();
      }
    }

    document.addEventListener(
      'click',
      handleClick as EventListener,
      listenCapturing,
    );

    return () => document.removeEventListener(
      'click',
      handleClick as EventListener,
      listenCapturing,
    );
  }, [handler, listenCapturing]);

  return ref;
}

export default useOutsideClick;
