'use client'
import CustomButton from "@/components/customui/CustomButton";

const ButtonExample = () => {
  return (
    <div className="card flex w-[320px] flex-col gap-2 rounded border p-4">
      <h4 className="mb-4 w-full text-center">Buttons</h4>
      <p className="mb-3">States:</p>
      <CustomButton variant={"default"}   onClick={()=>console.log("Default Button Clicked")}>Not Loading</CustomButton>
      <CustomButton variant={"default"} isLoading loadingText="Loading with Loading Text" onClick={()=>console.log("Default Button Clicked")}>Default</CustomButton>
      <CustomButton variant={"default"} isLoading  onClick={()=>console.log("Default Button Clicked")}>Loading without Loading Text</CustomButton>

      <p className="mt-3">Variants:</p>
      <CustomButton variant={"default"}  onClick={()=>console.log("Default Button Clicked")}>Default</CustomButton>
      <CustomButton variant={"destructive"}  onClick={()=>console.log("Destructive Button Clicked")}>Destructive</CustomButton>
      <CustomButton variant={"outline"}  onClick={()=>console.log("Outline Button Clicked")}>Outline</CustomButton>
      <CustomButton variant={"secondary"}  onClick={()=>console.log("Secondary Button Clicked")}>Secondary</CustomButton>
      <CustomButton variant={"ghost"}  onClick={()=>console.log("Ghost Button Clicked")}>Ghost</CustomButton>
      <CustomButton variant={"link"}  onClick={()=>console.log("Link Button Clicked")}>Link</CustomButton>

      <p className="mt-3">Sizes:</p>
      <CustomButton variant={"default"} size={"default"}  onClick={()=>console.log("Default Button Clicked")}>Default</CustomButton>
      <CustomButton variant={"default"} size={"xs"}  onClick={()=>console.log("Default Button Clicked")}>XS</CustomButton>
      <CustomButton variant={"default"} size={"sm"}  onClick={()=>console.log("Default Button Clicked")}>SM</CustomButton>
      <CustomButton variant={"default"} size={"md"}  onClick={()=>console.log("Default Button Clicked")}>MD</CustomButton>
      <CustomButton variant={"default"} size={"lg"}  onClick={()=>console.log("Default Button Clicked")}>LG</CustomButton>

      <p className="mt-3">Rounded:</p>
      <CustomButton rounded={"default"} onClick={()=>console.log("Default Button Clicked")}>Default</CustomButton>
      <CustomButton  rounded={"none"} onClick={()=>console.log("Default Button Clicked")}>None</CustomButton>
      <CustomButton  rounded={"sm"} onClick={()=>console.log("Default Button Clicked")}>SM</CustomButton>
      <CustomButton  rounded={"md"} onClick={()=>console.log("Default Button Clicked")}>MD</CustomButton>
      <CustomButton  rounded={"lg"} onClick={()=>console.log("Default Button Clicked")}>LG</CustomButton>
      <CustomButton  rounded={"xl"} onClick={()=>console.log("Default Button Clicked")}>XL</CustomButton>
      <CustomButton  rounded={"full"} width={"fit"} className="w-10 h-10" onClick={()=>console.log("Default Button Clicked")}>Full</CustomButton>

      <p className="mt-3">Width:</p>
      <CustomButton width={"fit"} onClick={()=>console.log("Default Button Clicked")}>Fit</CustomButton>
      <CustomButton width={"full"} onClick={()=>console.log("Default Button Clicked")}>Full</CustomButton>
      <CustomButton width={"default"} onClick={()=>console.log("Default Button Clicked")}>Default</CustomButton>

    </div>
  );
};

export default ButtonExample;