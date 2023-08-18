import CustomAspectRatio from "@/components/customui/CustomAspectRatio";

const AspectRatioExample = () => {
  return (
    <div className="card flex w-[320px] flex-col gap-2 rounded border p-4">
      <h4 className="mb-4 w-full text-center">Aspect Ratio</h4>
      <CustomAspectRatio ratio={16 / 3}>
        <div className="red h-full w-full bg-red-500 flex items-center justify-center">16 / 3</div>
      </CustomAspectRatio>
      <CustomAspectRatio ratio={1}>
        <div className="red h-full w-full bg-red-500 flex items-center justify-center">4 / 4</div>
      </CustomAspectRatio>
    </div>
  );
};

export default AspectRatioExample;
