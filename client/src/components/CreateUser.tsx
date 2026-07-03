import { Button } from "@/components/ui/button";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "./ui/card";
import InputMask3 from "./ui/input-mask-03";
import RadioGroup12 from "./ui/radio-group-12";
import { KnobSlider } from "./ui/knob-slider";
import { useState } from "react";
import { toast } from "sonner";

function CreateUser() {
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [martialState, setMartialState] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestData = {
      username,
      age,
      email,
      password,
      martialState,
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/api/create-user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(requestData),
        },
      );

      const data = await response.json();

      if (data.success) {
        toast.success(data.message || "User created successfully");
      } else {
        toast.error(data.message || "Failed to create user");
      }
    } catch (error) {
      toast.error("Failed to create user");
      console.error("Error creating user:", error);
    } finally {
      setUsername("");
      setEmail("");
      setPassword("");
      setMartialState("");
      setAge(0);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-full max-w-md my-5">
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <FieldSet>
                  <FieldLegend>Create User</FieldLegend>
                  <FieldDescription>
                    Fill in the details below to create a new user
                  </FieldDescription>
                  <FieldGroup className="grid grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="username">Username</FieldLabel>
                      <Input
                        id="username"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id="email"
                        placeholder="Email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Field>
                  </FieldGroup>
                  <InputMask3 password={password} setPassword={setPassword} />

                  <Field>
                    <FieldLabel htmlFor="marital-status">
                      Marital Status
                    </FieldLabel>
                    <RadioGroup12
                      value={martialState}
                      onValueChange={setMartialState}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="age">Age</FieldLabel>
                    <div className="flex justify-center items-center">
                      <KnobSlider
                        value={age}
                        min={0}
                        max={60}
                        onChange={setAge}
                        size={200}
                      />
                    </div>
                  </Field>
                </FieldSet>
                <FieldSeparator />

                <Field orientation="horizontal">
                  <Button type="submit">Create User</Button>
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CreateUser;
