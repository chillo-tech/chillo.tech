const monthNames = ["Jan.", "Feb.", "Mars", "Avril", "Mai", "Juin", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

export const dateFormat = (dateAsString: {dateAsString: string}) => {
  const currentDate = new Date(dateAsString);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = `0${currentDate.getDate()}`.slice(-2);

  return `${day} ${monthNames[month]} ${year}`
}