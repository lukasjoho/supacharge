import { cn, generateStatusStrings } from '@/lib/utils';
import { ButtonProps } from 'react-day-picker';
import { Button } from '../ui/button';

interface FormSubmitButtonProps extends ButtonProps {
  label: string;
  isSubmitting: boolean;
}

const FormSubmitButton = ({
  label,
  isSubmitting,
  ...props
}: FormSubmitButtonProps) => {
  const { className } = props;
  const statusStrings = generateStatusStrings(label);
  return (
    <Button className={cn('', className)} type="submit">
      {isSubmitting ? statusStrings.submitting : statusStrings.default}
    </Button>
  );
};

export default FormSubmitButton;
