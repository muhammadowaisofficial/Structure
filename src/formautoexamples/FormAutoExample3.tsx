import AutoForm, { AutoFormSubmit } from "@/components/auto-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import  {expample3Schema} from "@/schemas/expample3Schema";

function FormAuto() {
  return (
    <>
      <div className="mx-auto my-6 max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle>AutoForm Example 3</CardTitle>
            <CardDescription>
              Automatically generate a form from a Zod schema.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <AutoForm
              formSchema={expample3Schema}
              onSubmit={console.log}
               fieldConfig={{
                password: {
                  inputProps: {
                    type: "password",
                    placeholder: "••••••••",
                  },
                },
                passwordConfirm: {
                  inputProps: {
                    type: "password",
                    placeholder: "••••••••",
                  },
                },
               }}
            >
              <AutoFormSubmit>Send now</AutoFormSubmit>
            </AutoForm>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default FormAuto;