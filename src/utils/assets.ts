export const getAssetPath = (path: string | undefined) => {
  if (!path || path.startsWith("http") || path.startsWith("#") || path.startsWith("mailto:") || path.startsWith("tel:")) return path || "";

  // Remove leading dots and slashes, then join with base URL if necessary
  const cleanPath = path.replace(/^\.?\/?/, "");

  // Always return an absolute path from the domain root
  return `/${cleanPath}`;
};
