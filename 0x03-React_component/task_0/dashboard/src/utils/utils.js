const getFullYear = () => {
  return new Date().getFullYear();
};

const getFooterCopy = (isIndex = false) =>
  isIndex ? "Copyright Holberton School" : "Holberton School main dashboard";

const getLatestNotification = () => {
  return "<strong>Urgent requirement</strong> - complete by EOD";
};

export { getFullYear, getFooterCopy, getLatestNotification };
