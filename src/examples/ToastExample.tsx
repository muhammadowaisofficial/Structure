"use client"
import CustomToast from "@/components/customui/CustomToast";

const ToastExample = () => {
  const toast = CustomToast();
  return (
    <div className="card flex w-[320px] flex-col gap-2 rounded border p-4">
      <h4 className="mb-4 w-full text-center">Toast</h4>
      <div
        className="text-sm font-medium text-cyan-600"
        onClick={() => toast("Simple Toaster!")}
      >
        Show Toast
      </div>
      <div
        className="text-sm font-medium text-yellow-600"
        onClick={() => toast("Toaster Description!", "Toaster Title")}
      >
        Show Toast with Title
      </div>
    </div>
  );
};

export default ToastExample;