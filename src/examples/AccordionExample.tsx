import CustomAccordion from '@/components/customui/CustomAccordion'

const AccordionExample = () => {
    const accordionData = [
        {id:"1",title:"Title 1",message:"Description 1"},
        {id:"2",title:"Title 2",message:"Description 2"},
        {id:"3",title:"Title 3",message:"Description 3"},
    ]
  return (
    <div className="card flex w-[320px] flex-col gap-2 rounded border p-4">
        <h4 className="mb-4 w-full text-center">Accordion</h4>
        <p className="mb-3">Single Accordion</p>
        <CustomAccordion list={accordionData} type='single' />
        <p className="mb-3">Multiple Accordion</p>
        <CustomAccordion list={accordionData} type='multiple' />
      </div>
  )
}

export default AccordionExample