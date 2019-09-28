import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default function formatDate(date) {
  const month = format(parseISO(date), 'MMMM', {
    locale: pt,
  });
  const monthFomat = month.charAt(0).toUpperCase() + month.slice(1);
  const newDate = format(parseISO(date), `d 'de' '${monthFomat}, às' HH'h'`, {
    locale: pt,
  });
  return newDate;
}
