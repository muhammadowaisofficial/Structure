import React, { useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from 'next/dynamic';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { cn } from "@/lib/utils";

const Quill = dynamic(() => import('react-quill'), { ssr: false });

interface Props {
  control: any;
  label: string;
  labelClassName?: string;
  name: string;
  className?: string;
  description?: string;
  descriptionClassName?: string;
  placeholder?: string;
}

const modules= {
  'toolbar': [
    [{ 'font': [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [ 'bold', 'italic', 'underline', 'strike' ],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'script': 'super' }, { 'script': 'sub' }],
    ["blockquote", "code-block"],
    [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
    [ 'direction', { 'align': [] }],
    [ 'link', 'image', 'video', 'formula' ],
    [ 'clean' ]
]
}


const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "align",
  "script",
  "background",
  "code-block"
];

const CustomRichTextEditor = (props: Props) => {
  const {
    control,
    label,
    name = "",
    className = "",
    labelClassName = "",
    description = "",
    descriptionClassName = "",
    placeholder = "Type here"
  } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={cn("", labelClassName)}>{label}</FormLabel>
          <FormControl>
            <Quill
              modules={modules}
              formats={formats}
              theme="snow"
              placeholder={placeholder}
              value={field.value}
              onChange={field.onChange}
            />
          </FormControl>
          <FormDescription className={cn("", descriptionClassName)}>
            {description}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default CustomRichTextEditor