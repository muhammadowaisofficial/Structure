import AutoForm, { AutoFormSubmit } from "@/components/auto-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { expample1Schema } from "@/schemas/expample1Schema";

function FormAuto() {
  return (
    <>
      <div className="mx-auto my-6 max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle>AutoForm Example 1</CardTitle>
            <CardDescription>
              Automatically generate a form from a Zod schema.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <AutoForm
              formSchema={expample1Schema}
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
                favouriteNumber: {
                  description: "Your favourite number between 1 and 10.",
                },
                acceptTerms: {
                  inputProps: {
                    required: true,
                  },
                  description: (
                    <>
                      I agree to the{" "}
                      <button
                        className="text-primary underline"
                        onClick={(e) => {
                          e.preventDefault();
                          alert("Terms and conditions clicked.");
                        }}
                      >
                        terms and conditions
                      </button>
                      .
                    </>
                  ),
                },

                birthday: {
                  description: "We need your birthday to send you a gift.",
                },
                
                //  color:{
                //    fieldType: "radio",
                // //   fieldType: "checkbox",
                //  },

              
                sendMeMails: {
                  fieldType: "switch",
                },

                bio: {
                  fieldType: "textarea",
                },

                marshmallows: {
                  fieldType: "radio",
                },

                customParent: {
                  renderParent: ({ children }) => (
                    <div className="flex items-end gap-3">
                      <div className="flex-1">{children}</div>
                      <div>
                        <Button type="button">Check</Button>
                      </div>
                    </div>
                  ),
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