import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";

type Props ={
    imageSrc:string,
    className?:string,
}

const CustomAvatar = (props:Props) => {
    const {imageSrc,className} = props
  return (
    <Avatar className={cn("",className)}>
      <AvatarImage src={imageSrc} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
