import { boolean, z } from "zod";

export const exampleSchema = z
  .object({
    //-------------Input-------------
    name: z
      .string()
      .min(3, { message: "Name should atleast be 3 Characters" })
      .max(30, { message: "Name can only be maximum of 30 Characters" }),
    //-------------Input-------------

    password: z
      .string({ required_error: "Password is required." })
      .describe("Your secure password")
      .min(6, { message: "Password should atleast be 6 Characters" })
      .max(30, { message: "Password can only be maximum of 30 Characters" }),

    passwordConfirm: z
      .string({ required_error: "Password is required." })
      .describe("Your secure password")
      .min(6, { message: "Password should atleast be 6 Characters" })
      .max(30, { message: "Password can only be maximum of 30 Characters" }),

    //-------------Phone-------------
    phone: z.string().min(10, { message: "Please Enter Phone Number" }),
    //-------------Number-------------
    age: z.coerce
      .number({ invalid_type_error: "Age number must be a number." })
      .min(1, { message: "Age number must be at least 1." })
      .max(10, { message: "Age number must be at most 10." }),
    //-------------Switch-------------
    sendMail: z.boolean(),
    //-------------Select-------------
    field: z.string({
      required_error: "Please select you Field.",
    }),
    //-------------Combobox-------------
    language: z.string({
      required_error: "Please select a language.",
    }),
    //-------------CustomCheckbox-------------
    termsandservice: z.literal<boolean>(true), //Must be True
    //-------------CustomCheckboxGroup-------------
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    //-------------CustomRadioGroup-------------
    notificationType: z.string({
      required_error: "Please select a Notification Type.",
    }),
    //-------------CustomDatePicker-------------
    birthday: z.coerce.date({
      required_error: "A date of birth is required.",
    }),

    //-------------TextArea-------------
    bio: z
      .string()
      .min(10, {
        message: "Bio must be at least 10 characters.",
      })
      .max(160, {
        message: "Bio must not be longer than 30 characters.",
      }),
    //-------------CustomDateRangePicker-------------
    content: z.string(),
    timeline: z
      .object({
        from: z.coerce.date().refine((data) => new Date(), {
          message: "Start date must be in the future",
        }),
        to: z.coerce.date(),
      })
      .refine((data) => data.to > data.from, {
        message: "End date cannot be earlier than start date.",
        path: ["to"],
      }),

    //-------------CustomMultiSelect-------------
    multiselect: z.array(
      z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
      }
    ),

    //-------------Image-------------
    image: z.string({
      required_error: "Please Upload Image.",
    }),


  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords must match.",
    path: ["passwordConfirm"],
  });
