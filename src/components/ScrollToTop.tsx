import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Track SPA route change in Google Analytics
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('config', 'G-8JVJ9VCFN4', {
        page_path: pathname + search,
      });
    }
  }, [pathname, search]);

  return null;
}
