export const extractDateFromCreatedAt = (createdAt) => {
  const date = new Date(createdAt);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
export const extractTime = (timestamp) => {
  const date = new Date(timestamp);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  
  return `${formattedHours}:${formattedMinutes}`;
};
