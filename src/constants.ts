export const getAssetUrl = (path: string) => {
  console.log('getAssetUrl path:', path);
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Remove 'images/' prefix if it exists
  let finalPath = cleanPath.startsWith('images/') ? cleanPath.slice(7) : cleanPath;
  
  const PROJECT_ID = 'muncxkojigqqaakscbjs';
  const BUCKET = 'Src';
  
  // If the path already contains a hyphen and ends in .jpeg, it's likely a direct filename
  if (finalPath.includes('-') && finalPath.endsWith('.jpeg')) {
     return `https://${PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET}/assets/${finalPath}`;
  }

  // Fallback: convert slashes to hyphens and try to match the user's flat structure
  // We keep the original path as well in case some are in folders
  return `https://${PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET}/assets/${finalPath}`;
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
    title: 'Google I/O 2026',
    subtitle: 'TPU Film / VFX Comp',
    imageSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/IO.gif',
    slug: '/googleio',
  },
  {
    title: 'Franks Australia',
    subtitle: 'From pattern to production',
    imageSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/2Artboard%205-100.jpg',
    slug: '/showcase/franks-australia',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/Beach_Franks1.mp4',
  },
];
