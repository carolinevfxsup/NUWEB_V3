export const getAssetUrl = (path: string) => {
  console.log('getAssetUrl path:', path);
  if (!path) return '';
  
  let result = path;
  
  if (path.startsWith('http') || path.startsWith('/src/') || path.startsWith('data:') || path.includes('nos_')) {
    result = path;
  } else {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // Remove 'images/' prefix if it exists
    let finalPath = cleanPath.startsWith('images/') ? cleanPath.slice(7) : cleanPath;
    
    const PROJECT_ID = 'muncxkojigqqaakscbjs';
    const BUCKET = 'Src';
    
    result = `https://${PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET}/assets/${finalPath}`;
  }

  // If it's a Supabase image URL, apply format=webp optimization
  if (result.includes('supabase.co')) {
    const lowerPath = result.toLowerCase();
    const isImage = lowerPath.endsWith('.jpg') || lowerPath.endsWith('.jpeg') || lowerPath.endsWith('.png') || lowerPath.endsWith('.webp') || lowerPath.includes('.jpg') || lowerPath.includes('.jpeg') || lowerPath.includes('.png');
    const isGif = lowerPath.endsWith('.gif');
    const isVideo = lowerPath.endsWith('.mp4') || lowerPath.endsWith('.webm') || lowerPath.endsWith('.ogg');
    
    if (isImage && !isGif && !isVideo && !result.includes('format=webp')) {
      result = `${result}${result.includes('?') ? '&' : '?'}format=webp`;
    }
  }

  return result;
};

export const showcases = [
  {
    title: 'Salt Lily',
    subtitle: 'Scaling Jewellery Content',
    imageSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/necklace_and_hoops.png',
    slug: '/showcase/salt-lily',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/salt-lily-zoom.mp4',
  },
  {
    title: 'Quinta Do Pinto — Concept Film',
    subtitle: 'Tradition, Made Contemporary',
    imageSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/QDP-FILM/Saved_frame_from_WINE_CM(2)_2K_202609070948.jpeg',
    slug: '/showcase/quinta-do-pinto-concept-film',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/QDP-FILM/WINE_CM_16_9_FULL.mp4',
    mobileVideoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/QDP-FILM/WINE_9_16_Full.mp4',
    videoPoster: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/ANIMATION/0803_CP_WEB.jpg',
  },
  {
    title: 'Google I/O 2026',
    subtitle: 'TPU Film / VFX Comp',
    imageSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/IO.gif',
    slug: '/googleio',
  },
  {
    title: 'Franks Web AD SS27',
    subtitle: 'Web AD SS27',
    imageSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/2Artboard%205-100.jpg',
    slug: '/showcase/franks-web-ad-ss27',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/FRANKS.mp4',
  },
  {
    title: 'Quinta Do Pinto',
    subtitle: 'Wine Branding',
    imageSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-wine-brands.png',
    slug: '/showcase/quinta-do-pinto',
  },
  {
    title: 'O Palmeiral',
    subtitle: 'Social Automation / Content',
    imageSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-automation-control.jpeg',
    slug: '/showcase/o-palmeiral',
  },
  {
    title: 'Franks Australia',
    subtitle: 'From pattern to production',
    imageSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/2Artboard%205-100.jpg',
    slug: '/showcase/franks-australia',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/Beach_Franks1.mp4',
  },
  {
    title: 'NOS AI Summer Campaign',
    subtitle: 'Human-AI Collaboration',
    imageSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NOS/Header/youtube-thumbnail-o_t0w0LUUuY-maxresdefault.jpg',
    slug: '/showcase/nos-ai-campaign',
  },
];