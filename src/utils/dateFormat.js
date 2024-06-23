export default function formatDate(timestamp) {
  const date = new Date(timestamp);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  return date.toLocaleDateString("th-TH", options);
}
