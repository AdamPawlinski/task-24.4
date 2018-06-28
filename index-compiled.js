const formatDate = timeInSeconds => {
  // timeInSeconds = parseFloat(timeInSeconds);
  timeInSeconds = timeInSeconds.toFixed();
  switch (timeInSeconds) {
    case timeInSeconds >= 3600:
      if (timeInSeconds % 3600 === 0) {
        return `${timeInSeconds / 3600}h`;
      } else {
        return `${timeInSeconds / 3600}h ${timeInSeconds / 60}m ${timeInSeconds % 60}s`;
      }
      break;
    case timeInSeconds >= 60:
      if (timeInSeconds % 60 === 0) {
        return `${timeInSeconds}m`;
      } else {
        return `${timeInSeconds}m ${timeInSeconds % 60}s`;
      }
      break;
    case timeInSeconds = "":
      return '0s';
      break;
    default:
      return `${timeInSeconds}s`;
  }
  return timeInSeconds;
};

module.exports = formatDate;
