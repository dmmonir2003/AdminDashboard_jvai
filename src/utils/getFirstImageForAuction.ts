// Add this helper function at the top of your component files
export const getFirstImageForAuction = (
  imageUrl: string | string[] | null | undefined,
): string => {
  // If it's an array, get the first element
  if (Array.isArray(imageUrl) && imageUrl.length > 0) {
    const firstImage = imageUrl[0];
    return firstImage && firstImage.trim() ? firstImage : "/placeholder.jpg";
  }

  // If it's a string, check if it's valid
  if (typeof imageUrl === "string" && imageUrl.trim() !== "") {
    return imageUrl.trim();
  }

  // Fallback
  return "/placeholder.jpg";
};
