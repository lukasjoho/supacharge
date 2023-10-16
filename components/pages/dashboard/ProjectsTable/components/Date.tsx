import { format } from 'date-fns';

interface DateProps {
  date: string;
}

const FormattedDate = ({ date }: DateProps) => {
  return <div>{format(new Date(date), 'MMM dd, yyyy')}</div>;
};

export default FormattedDate;
