import AutoForm, { AutoFormSubmit } from "@/components/auto-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import  {expample2Schema} from "@/schemas/expample2Schema";

function FormAuto() {
  return (
    <>
      <div className="mx-auto my-6 max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle>AutoForm Example 2</CardTitle>
            <CardDescription>
              Automatically generate a form from a Zod schema.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <AutoForm
              formSchema={expample2Schema}
              onSubmit={console.log}
               fieldConfig={{
                termsAndService: {
                  fieldType: "checkbox",
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
          
                 items: {
                  //fieldType: "radio",
                  //fieldType: "checkbox",
                  //label={"Directories"}
                  description:"Select the items you want to display in the sidebar."
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