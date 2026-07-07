import { HiLockClosed } from "react-icons/hi2";

import { Input } from "./input";
import { Label } from "./label";

const InputMask3 = ({
  password,
  setPassword,
}: {
  password: string;
  setPassword: (value: string) => void;
}) => {
  return (
    <div className="w-full! space-y-3">
      <Label htmlFor="password" className="flex items-center gap-2">
        Password
      </Label>

      <div className="relative w-full">
        <Input
          id="password"
          placeholder="password"
          className="w-full focus-visible:ring-primary/20 focus-visible:border-primary/50 bg-muted/50 pl-8 focus-visible:ring-2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <HiLockClosed className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
      </div>

      <p className="text-muted-foreground text-xs">* Min 8 length</p>
    </div>
  );
};

export default InputMask3;
