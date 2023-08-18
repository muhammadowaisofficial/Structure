import { ReactNode } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/ui/card";
import { cn } from "@/lib/utils";


type Props = {
    headerClassName?:string,
    contentClassName?:string,
    footerClassName?:string,
    title?:string,
    titleClassName?:string,
    description?:string,
    descriptionClassName?:string,
    className?: string,
    children: ReactNode
    footerChildren?: ReactNode
}

const CustomCard = (props:Props) => {
    const {title='', titleClassName='', description='',descriptionClassName='', headerClassName='', contentClassName='', footerClassName='', className='',footerChildren, children} = props;
  return (
    <Card className={cn("",className)}>
        {
            title != '' || description != '' ?

        <CardHeader className={cn("p-4 pb-0",headerClassName)}>
            {
                title != '' ? <CardTitle className={cn("",titleClassName)}>{title}</CardTitle> : null
            }
            {
                description != '' ? <CardTitle className={cn("",descriptionClassName)}>{description}</CardTitle> : null
            }
        </CardHeader>
        : null
        }
        <CardContent className={cn("p-4 ",contentClassName)}>
            {children}
        </CardContent>
        {
            footerChildren && 
            <CardFooter className={cn("p-4 pt-0",footerClassName)}>
                {footerChildren}
            </CardFooter>
        }
    </Card>
  )
}

export default CustomCard