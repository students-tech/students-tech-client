import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LablesProps {
  title: string;
  label: string;
  type: string;
  required: boolean;
  placeholder: string;
  value: any;
  onChange: any;
}

const RegistrationLabel: React.FC<LablesProps> = ({
  label,
  type,
  required,
  placeholder,
  value,
  onChange,
  title,
}) => {
  return (
    <div className="flex flex-col space-y-1.5 mb-4">
      <Label htmlFor={label} className="font-bold">
        {title}
      </Label>
      <Input
        id={label}
        name={label}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default RegistrationLabel;
