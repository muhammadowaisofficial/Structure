import { z } from "zod";

enum Sports {
  Football = "football",
  Basketball = "basketball",
  Baseball = "baseball",
  Hockey = "hockey",
  None = "none",
}

export const expample1Schema = z.object({
  username: z
    .string({ required_error: "Username is required." })
    .min(2, { message: "Username must be at least 2 characters." }),


  password: z
    .string({ required_error: "Password is required." })
    .describe("Your secure password")
    .min(8, { message: "Password must be at least 8 characters." }),

  passwordConfirm: z
    .string({ required_error: "Password is required." })
    .describe("Your secure password")
    .min(8, { message: "Password must be at least 8 characters." }),


  favouriteNumber: z.coerce
    .number({ invalid_type_error: "Favourite number must be a number." })
    .min(1, { message: "Favourite number must be at least 1." })
    .max(10, { message: "Favourite number must be at most 10." })
    .default(1)
    .optional(),

  acceptTerms: z
    .boolean()
    .describe("Accept terms and conditions.")
    .refine((value) => value,
      {
        message: "You must accept the terms and conditions.", path: ["acceptTerms"],
      }),

  sendMeMails: z.boolean().optional(),
  birthday: z.coerce.date().optional(),

  //color: z.enum(["red", "green", "blue"]).optional(),

  color: z
    .enum(["red", "green", "blue"])
    //.optional()
    .describe("Choose Any Colour"),


  // Another enum example
  marshmallows: z
    .enum(["not many", "a few", "a lot", "too many"])
    .describe("How many marshmallows fit in your mouth?"),

  // Native enum example
  sports: z.nativeEnum(Sports).describe("What is your favourite sport?"),

  bio: z
    .string()
    .min(10, { message: "Bio must be at least 10 characters." })
    .max(160, { message: "Bio must not be longer than 30 characters." })
    .optional(),

  customParent: z.string().optional(),

})
.refine(data => data.password === data.passwordConfirm, {
  message: "Passwords must match.",
  path: ['passwordConfirm']
});
