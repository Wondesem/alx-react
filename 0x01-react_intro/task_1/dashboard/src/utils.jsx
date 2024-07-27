const getFullYear = () => {
  return new Date().getFullYear();
};

const getFooterCopy = (isIndex = false) =>
  isIndex ? "Holberton School" : "Holberton School main dashboard";

const getLatestNotification = () => (
  <div>
    <strong>Urgent requirement</strong> - complete by EOD
  </div>
);
export { getFullYear, getFooterCopy, getLatestNotification };
