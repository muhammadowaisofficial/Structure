import { AlertTriangle, BadgeAlert, CheckCircle2, Info, XCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export enum AlertTypes {
    DEFAULT = 'DEFAULT',
    INFO = 'INFO',
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    ERROR = 'ERROR'
  }
  
  const iconsMapping = {
    [AlertTypes.DEFAULT]: <BadgeAlert className="h-4 w-4" />,
    [AlertTypes.INFO]: <Info className="h-4 w-4" />,
    [AlertTypes.SUCCESS]: <CheckCircle2 className="h-4 w-4" />,
    [AlertTypes.WARNING]: <AlertTriangle className="h-4 w-4" />,
    [AlertTypes.ERROR]: <XCircle className="h-4 w-4" />
  };
  
  const classesMapping = {
    [AlertTypes.DEFAULT]: 'nyn-background-card nyn-text nyn-border',
    [AlertTypes.INFO]: 'bg-blue-300 text-blue-700 border border-blue-400 [&>svg]:text-blue-700',
    [AlertTypes.SUCCESS]: 'bg-green-300 text-green-700 border border-green-400 [&>svg]:text-green-700',
    [AlertTypes.WARNING]: 'bg-yellow-300 text-yellow-700 border border-yellow-400 [&>svg]:text-yellow-700',
    [AlertTypes.ERROR]: 'bg-red-300 text-red-700 border border-red-400 [&>svg]:text-red-700'
  };
  
  const titleMapping = {
    [AlertTypes.DEFAULT]: 'Alert!',
    [AlertTypes.INFO]: 'Information!',
    [AlertTypes.SUCCESS]: 'Success!',
    [AlertTypes.WARNING]: 'Warning!',
    [AlertTypes.ERROR]: 'Error!'
  };



  type Props = {
    type: AlertTypes;
    title?: string;
    message: string;
    className?: string;
    onClose?: () => void;
  }

const CustomAlert = (props: Props) => {
    const { className = '', type, title = titleMapping[type], message, onClose } = props;

  return (
    <Alert
      className={`custom-alert ${type.toLowerCase()} [&:has(svg)]:pl-10 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-3 [&>svg]:top-4 rounded p-3 ${
        classesMapping[type]
      } ${className}`}>
      {iconsMapping[type]}
      <AlertTitle className="custom-alert-title mb-1.5 font-semibold flex flex-row  items-center text-[18px]">
        {title}
        {/* <span className="custom-alert-close ml-auto" tabIndex={1} role="button" onClick={onClose} onKeyDown={onClose}>
          <X className="w-4 h-4" />
        </span> */}
      </AlertTitle>
      <AlertDescription className="custom-alert-message">{message}</AlertDescription>
    </Alert>
  )
}

export default CustomAlert