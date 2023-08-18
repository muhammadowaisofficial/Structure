import { useToast } from '@/ui/use-toast';

const CustomToast = () => {
    const { toast: toaster } = useToast();
  return (description: string, title: string = '') => {
    toaster(Object.assign({description},title && {title}))
  }
}

export default CustomToast