// Utility to get correct image path for GitHub Pages
export const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/website-oz-eftpos' : '';
  return `${basePath}${path}`;
};
