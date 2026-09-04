export const getWebpUrl = (url: string): string => {
  if (typeof url !== 'string') return url;
  if (url.toLowerCase().endsWith('.gif') || url.toLowerCase().endsWith('.mp4') || url.toLowerCase().endsWith('.webm')) return url;
  if (url.includes('supabase.co') && !url.includes('format=webp')) {
    return `${url}${url.includes('?') ? '&' : '?'}format=webp`;
  }
  return url;
};
