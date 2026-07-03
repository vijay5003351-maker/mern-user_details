import { Label } from "./label";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Check, X } from "lucide-react";

const RadioGroup12 = ({
  value,
  onValueChange,
}: {
  value: string;
  onValueChange: (value: string) => void;
}) => {
  return (
    <RadioGroup
      value={value}
      onValueChange={onValueChange}
      className="w-full justify-items-center sm:grid-cols-2"
    >
      <Label
        htmlFor={`yes`}
        className="border-input has-data-[state=checked]:border-primary/60 has-data-[state=checked]:bg-accent/40 relative flex w-full max-w-50 flex-col items-center gap-3 rounded-lg border p-4 shadow-xs transition"
      >
        <RadioGroupItem
          value="yes"
          id={`yes`}
          className="order-1 size-5 after:absolute after:inset-0 [&_svg]:size-3"
        />
        <div className="flex justify-center items-center gap-2 text-center">
          <Check className="text-green-500 size-5" />
          <p className="justify-center font-medium">YES</p>
        </div>
      </Label>

      <Label
        htmlFor={`no`}
        className="border-input has-data-[state=checked]:border-primary/60 has-data-[state=checked]:bg-accent/40 relative flex w-full max-w-50 flex-col items-center gap-3 rounded-lg border p-4 shadow-xs transition"
      >
        <RadioGroupItem
          value="no"
          id={`no`}
          className="order-1 size-5 after:absolute after:inset-0 [&_svg]:size-3"
        />
        <div className="flex justify-center items-center gap-2 text-center">
          <X className="text-red-500 size-5" />
          <p className="justify-center font-medium">No</p>
        </div>
      </Label>
    </RadioGroup>
  );
};

export default RadioGroup12;
