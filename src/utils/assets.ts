export const getAssetPath = (path: string | undefined) => {
  if (!path || path.startsWith("http") || path.startsWith("#") || path.startsWith("mailto:") || path.startsWith("tel:")) return path || "";
  
  // Ensure it starts with a leading slash to be root-relative
  const cleanPath = path.replace(/^\.?\/?/, "/");
  
  return cleanPath;
};
