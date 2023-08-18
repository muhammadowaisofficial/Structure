import CustomAlert, { AlertTypes } from "@/components/customui/CustomAlert";

const AlertExample = () => {
  return (
    <div className="card flex w-[320px] flex-col gap-2 rounded border p-4">
      <h4 className="mb-4 w-full text-center">Alert</h4>
      <CustomAlert
        type={AlertTypes.DEFAULT}
        message="New version available!"
        className="mb-3"
        onClose={() => console.log("Alert closed")}
      />
      <CustomAlert
        type={AlertTypes.INFO}
        message="New version available!"
        className="mb-3"
        onClose={() => console.log("Alert closed")}
      />
      <CustomAlert
        type={AlertTypes.SUCCESS}
        message="New version available!"
        className="mb-3"
        onClose={() => console.log("Alert closed")}
      />
      <CustomAlert
        type={AlertTypes.WARNING}
        message="New version available!"
        className="mb-3"
        onClose={() => console.log("Alert closed")}
      />
      <CustomAlert
        type={AlertTypes.ERROR}
        title="Error!"
        message="New version available!"
        className="mb-3"
        onClose={() => console.log("Alert closed")}
      />
    </div>
  );
};

export default AlertExample;
