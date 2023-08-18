import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/ui/accordion";

type Props = {
  className?: string;
  type?: 'single' | 'multiple' | undefined; // How many Accordion items should be open at one time
  list: { id: string, title: string; message: string }[];
}

const CustomAccordion = (props: Props) => {
  const { type = 'single', list, className = '' } = props;
  return (
    <Accordion type={type} className="custom-accordion w-full mb-4 ">
      {list.map((item) => (
        <AccordionItem key={item.id} value={`item-${item.id}`} className={`custom-accordion-item border  ${className} ${list[0] === item ? "rounded-t" : ""} ${list[list.length - 1] === item ? "rounded-b" : ""}`}>
          <AccordionTrigger className="custom-accordion-title hover:no-underline text-[20px] font-semibold p-2">{item.title}</AccordionTrigger>
          <AccordionContent className="custom-accordion-message px-2">{item.message}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default CustomAccordion