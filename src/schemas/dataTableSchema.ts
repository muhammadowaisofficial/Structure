import { z } from "zod";


export const dataTableSchema = z.object({
  id: z.number(),
  name: z.string().min(3, { message: "Name Required" }),
  email: z
    .string()
    .min(1, { message: "Email is Required" })
    .email({ message: "Must be a valid Email" }),
  gender: z.string({
    required_error: "Please select you Field.",
  }),
  card_type: z.string({
    required_error: "Please select you Field.",
  }),
  // date: z.coerce.date({
  //   required_error: "Date is required.",
  // }),
  date: z.string().min(3, { message: "Date Required" }),
  price: z.string().min(3, { message: "Price Required" }),
  age: z.number().min(3, { message: "Age Required" }),
//   status: z.enum(["backlog", "todo", "in progress", "done", "canceled"]),
});

export type dataTableType = z.infer<typeof dataTableSchema>;
