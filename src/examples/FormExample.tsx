"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import CustomForm from "@/components/customui/CustomForm";
import CustomButton from "@/components/customui/CustomButton";
import CustomInput from "@/components/customui/CustomInput";
import CustomTextArea from "@/components/customui/CustomTextArea";
import CustomPhone from "@/components/customui/CustomPhone";
import CustomDatePicker from "@/components/customui/CustomDatePicker";
import CustomDateRangePicker from "@/components/customui/CustomDateRangePicker";
import CustomSelect from "@/components/customui/CustomSelect";
import CustomCombobox from "@/components/customui/CustomCombobox";
import CustomCheckbox from "@/components/customui/CustomCheckbox";
import CustomCheckboxGroup from "@/components/customui/CustomCheckboxGroup";
import CustomRadioGroup from "@/components/customui/CustomRadioGroup";
import CustomSwitch from "@/components/customui/CustomSwitch";
import CustomRichTextEditor from "@/components/customui/CustomRichTextEditor";
import { exampleSchema } from "@/schemas/expampleSchema";
import CustomMultiSelect from "@/components/customui/CustomMultiSelect";
import CustomUploadFile from "@/components/customui/CustomUploadFile";
import CustomFileUpload from "@/components/customui/CustomFileUpload";
import ImageUpload from "@/components/ImageUpload";
import CustomImageUpload from "@/components/customui/CustomImageUpload";

const FormExample = () => {
  const form = useForm<z.infer<typeof exampleSchema>>({
    resolver: zodResolver(exampleSchema),
    defaultValues: {
      name: "",
      password: "",
      passwordConfirm: "",
      age: 0,
      phone: "",
      bio: "",
      termsandservice: false,
      sendMail: false,
      items: ["recents", "home"],
    },
  });

  async function onSubmit(values: z.infer<typeof exampleSchema>) {
    console.log(values);
  }

  const items = [
    {
      id: "recents",
      label: "Recents",
    },
    {
      id: "home",
      label: "Home",
    },
    {
      id: "applications",
      label: "Applications",
    },
    {
      id: "desktop",
      label: "Desktop",
    },
    {
      id: "downloads",
      label: "Downloads",
    },
    {
      id: "documents",
      label: "Documents",
    },
  ];
  const languages = [
    { id: "1", value: "English" },
    { id: "2", value: "French" },
    { id: "3", value: "German" },
    { id: "4", value: "Spanish" },
    { id: "5", value: "Portuguese" },
    { id: "6", value: "Russian" },
    { id: "7", value: "Japanese" },
    { id: "8", value: "Korean" },
    { id: "9", value: "Chinese" },
  ];
  const langs = [
    { id: "1", value: "English" },
    { id: "2", value: "French" },
    { id: "3", value: "German" },
    { id: "4", value: "Spanish" },
    { id: "5", value: "Portuguese" },
    { id: "6", value: "Russian" },
    { id: "7", value: "Japanese" },
    { id: "8", value: "Korean" },
    { id: "9", value: "Chinese" },
  ];

  const notificationType = [
    { id: "1", label: "All new messages", value: "all" },
    { id: "2", label: "Direct messages and mentions", value: "mentions" },
    { id: "3", label: "Nothing", value: "none" },
  ];
  const fields = [
    { id: "1", name: "Web Developer", value: "Web Developer" },
    { id: "2", name: "Software Developer", value: "Software Developer" },
    { id: "3", name: "Admin", value: "Admin" },
  ];

  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
    {
      value: "wordpress",
      label: "WordPress",
    },
    {
      value: "express.js",
      label: "Express.js",
    },
    {
      value: "nest.js",
      label: "Nest.js",
    },
  ];

  return (
    <div className="card flex w-[320px] flex-col gap-2 rounded border p-4">
      <h4 className="w-full text-center">Form</h4>

      <CustomForm form={form} onSubmit={form.handleSubmit(onSubmit)}>
        <CustomInput
          control={form.control}
          label="Name"
          name="name"
          description="Please Enter your Name"
          placeholder="Fahad"
        />
        <CustomInput
          control={form.control}
          label="Password"
          name="password"
          type="password"
          description="Please Enter your Password"
          placeholder="••••••••"
        />
        <CustomInput
          control={form.control}
          label="Confirm Password"
          name="passwordConfirm"
          type="password"
          description="Please Confirm your Password"
          placeholder="••••••••"
        />
        <CustomInput
          control={form.control}
          label="Age"
          name="age"
          type="number"
          min={0}
          step={1}
          description="Please Enter your Age"
          placeholder="Age"
        />
        <CustomPhone control={form.control} label="Phone" name="phone" />
        <CustomSwitch
          control={form.control}
          label="Newsletter"
          name="sendMail"
          description="Keeps you upto dated."
        />
        <CustomSelect
          control={form.control}
          name="field"
          placeholder="Select Field"
          options={fields}
          label="Field"
          description="Please Select your Field"
        />
        <CustomTextArea control={form.control} label="Bio" name="bio" />
        <CustomCombobox
          form={form}
          control={form.control}
          label="Languages"
          name="language"
          placeHolder="Select Language"
          options={languages}
          optionsEmptyPlaceholder="No Language Found."
        />
        <CustomCheckbox
          control={form.control}
          label="I accept the Terms of Services"
          name="termsandservice"
          // description="By selecting this you will automatilly be accepting out Terms if Services."
          description={
            <>
              I agree to the{" "}
              <button
                className="w-fit text-primary underline"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Terms and conditions clicked.");
                }}
              >
                terms and conditions
              </button>
              .
            </>
          }
        />
        <CustomCheckboxGroup
          control={form.control}
          label={"Directories"}
          name="items"
          description="Select the items you want to display in the sidebar."
          options={items}
        />
        <CustomRadioGroup
          control={form.control}
          label="Notifications"
          name="notificationType"
          options={notificationType}
          description="By selecting this you will automatilly be accepting Notification Types."
        />
        <CustomDatePicker
          control={form.control}
          name="birthday"
          description="When were you born."
          label="Birthday"
          placeholder="Birthday"
        />
        <CustomDateRangePicker
          control={form.control}
          name="timeline"
          description="Choose your timeline"
          label="TimeLine"
          placeholder="Timeline"
        />

        <CustomMultiSelect
          form={form}
          control={form.control}
          label="Languages"
          name="multiselect"
          placeHolder="Select Language"
          options={langs}
          optionsEmptyPlaceholder="No Language Found."
        />

        <CustomRichTextEditor
          control={form.control}
          label="Content"
          name="content"
        />

        <CustomImageUpload form={form} control={form.control} name="image" />

        <CustomButton type="submit">Submit</CustomButton>
      </CustomForm>
    </div>
  );
};

export default FormExample;
