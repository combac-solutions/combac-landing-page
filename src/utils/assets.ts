export const getAssetPath = (path: string) => {
  if (!path || path.startsWith("http") || path.startsWith("#") || path.startsWith("mailto:") || path.startsWith("tel:")) return path;
  
  // Remove leading dots and slashes
  const cleanPath = path.replace(/^\.?\//, "");
  
  // Return path starting with ./ as requested
  return `./${cleanPath}`;
};
