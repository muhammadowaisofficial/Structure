import { boolean, z } from "zod";


enum languages { 
  en="English",
  fr="French",
  de="German",
  es= "Spanish",
  pt= "Portuguese",
  ru= "Russian",
  ja= "Japanese",
  ko= "Korean",
  zh= "Chinese",
};

enum items {
  "recents"="Recents",
  "home"="Home",
  "applications"="Applications",
  "desktop"="Desktop",
  "downloads"="Downloads",
  "documents"="Documents",

};
 
export const expample2Schema = z.object({
  name: z
  .string()
  .min(3, { message: "Name should atleast be 3 Characters" })
  .max(30, { message: "Name can only be maximum of 30 Characters" }),
  phone: z.string().min(10, { message: "Please Enter Phone Number" }),
  language: z.nativeEnum(languages).describe("Please select a language."),
  termsAndService: z.literal<boolean>(true), //Must be True
  items: z.nativeEnum(items).describe("You have to select at least one item."),
  // items: z.array(z.string()).refine((value) => value.some((item) => item), {
  //   message: "You have to select at least one item.",
  // }),
});