"use client";
import { UploadCloud } from "lucide-react";
import React, { useState } from "react";

const CustomFileUpload = () => {
  const [image, setImage] = useState("");

  const uploadImage = (files: FileList | null) => {
    console.log(files);
  };

  return (
    <div className="flex w-full  flex-col items-center justify-center rounded-md border border-dashed p-4 text-sm">
      <input
        type="file"
        multiple
        onChange={(e) => {
          uploadImage(e.target.files);
        }}
      />
      <UploadCloud className="h-20 w-20 text-muted-foreground" />
      {/* <p className="text-base text-muted-foreground">Upload Image (max 4MB)</p> */}
    </div>
  );
};

export default CustomFileUpload;
