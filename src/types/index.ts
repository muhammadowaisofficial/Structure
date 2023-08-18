export type Info = {
  id: string;
  name: string;
  images: string[];
};

export type Item ={
  value: string;
  label: string;
}

// export type Item = [
//   { value: "1", label: "Cat" },
//   { value: "2", label: "Dog" },
//   { value: "3", label: "Fox" },
//   { value: "4", label: "Elephant" },
//   { value: "5", label: "Unicorn" }
// ];

export type SocialButtonProps = {
  href: string;
  children: React.ReactNode;
};

export type Option = {
  label: string
  value: string
  icon?: React.ComponentType<{ className?: string }>
}


export interface DataTableSearchableColumn<TData> {
  id: keyof TData
  title: string
}

export interface DataTableFilterableColumn<TData>
  extends DataTableSearchableColumn<TData> {
  options: Option[]
}
