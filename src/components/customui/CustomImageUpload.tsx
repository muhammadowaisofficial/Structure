"use client";
import { Loader2, UploadCloud } from "lucide-react";
import React, { useRef, useState } from "react";
import Axios from "axios";
import NextImage from "../NextImage";
import { Image } from "cloudinary-react";
import { cn } from "@/lib/utils";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";


type Props = {
    control: any;
    label?: string;
    labelClassName?: string;
    name: string;
    description?: string;
    descriptionClassName?: string;
    messageClassName?: string;
    form:any
  };


const CustomImageUpload = (props:Props) => {
    const {
        control,
        label,
        name = "",
        labelClassName = "",
        description = "",
        descriptionClassName = "",
        messageClassName = "",
        form
      } = props;

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const inputFileref = useRef<HTMLInputElement>(null);

  const uploadImage = async (files: FileList | null) => {
    // console.log(files[0]);
    setLoading(true);
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "gqrd39hm");

    await Axios.post(
      "https://api.cloudinary.com/v1_1/du9mnn6p5/image/upload",
      formData
    ).then((response) => {
      setImage(response.data);
      setLoading(false);
      form.setValue(name, response.data.url);
    });
  };

  const onDivClick = () => {
    inputFileref.current.click();
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={cn("", labelClassName)}>{label}</FormLabel>
          <FormControl>
            <div className="flex w-full  flex-col items-center justify-center rounded-md border border-dashed p-4 text-sm">
              {loading && (
                <Loader2 className="h-10 w-10 animate-spin text-muted-foreground" />
              )}
              {image != "" ? (
                <div className=" flex w-full items-center justify-start gap-4">
                  <div className="preview  object-contain ">
                    {/* <NextImage src={image?.url} alt="uploaded Image" fill /> */}
                    <Image
                      style={{ width: 100 }}
                      cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                      publicId={image?.url}
                    />
                  </div>
                  <div className="name ">
                    <p className="text">
                      {image?.original_filename}.{image?.format}
                    </p>
                  </div>
                </div>
              ) : (
                !loading && (
                  <div
                    className="h-ful flex w-full flex-col items-center justify-center"
                    onClick={onDivClick}
                  >
                    <input
                      type="file"
                      ref={inputFileref}
                      hidden
                      onChange={(e) => {
                        uploadImage(e.target.files);
                        
                      }}
                    />
                    <UploadCloud className="h-20 w-20 text-muted-foreground" />
                    <p className="text-base text-muted-foreground">
                      Upload Image
                    </p>
                  </div>
                )
              )}
            </div>
          </FormControl>
          <FormDescription className={cn("", descriptionClassName)}>
            {description}
          </FormDescription>
          <FormMessage className={cn("", messageClassName)} />
        </FormItem>
      )}
    />
  );
};

export default CustomImageUpload;
