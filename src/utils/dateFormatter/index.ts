// format 2017-11-04T18:50:21.651Z -> 04.11.2017
export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяц начинается с 0
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};
