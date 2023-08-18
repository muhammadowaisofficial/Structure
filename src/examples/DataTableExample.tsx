import AddModal from "@/components/Modals/AddModal";
import DeleteModal from "@/components/Modals/DeleteModal";
import EditModal from "@/components/Modals/EditModal";
import MultiDeleteModal from "@/components/Modals/MultiDeleteModal";
import ViewModal from "@/components/Modals/ViewModal";
import CustomDataTable, { multiDeleteType } from "@/components/customui/CustomDataTable/CustomDataTable";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Icons } from "@/lib/Icons";
import { dataTableType } from "@/schemas/dataTableSchema";
import { ColumnDef } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";

async function getData(): Promise<dataTableType[]> {
  const res = await fetch(
    "https://my.api.mockaroo.com/data_table_schema.json?key=41a0b810"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const DataTableExample = () => {
  const [tableData, setTableData] = useState<dataTableType[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const data = async () => {
      setIsFetching(true);
      const result = await getData();
      if (result) {
        setTableData(result);
        setIsFetching(false);
      } else {
        setIsFetching(false);
      }
    };
    data();
  }, []);

  const filters = [
    {
      id: "1",
      columnKey: "gender",
      columnTitle: "Genders",
      options: [
        {
          id: "1",
          value: "Male",
          label: "Male",
        },
        {
          id: "2",
          value: "Female",
          label: "Female",
        },
      ],
    },
    {
      id: "2",
      columnKey: "card_type",
      columnTitle: "Card Types",
      options: [
        {
          id: "1",
          value: "jcb",
          label: "JCB",
        },
        {
          id: "2",
          value: "americanexpress",
          label: "American Express",
        },
        {
          id: "3",
          value: "visa",
          label: "Visa",
        },
        {
          id: "4",
          value: "diners-club-enroute",
          label: "Diners Club Enroute",
        },
        {
          id: "4",
          value: "china-unionpay",
          label: "China Unionpay",
        },
        {
          id: "5",
          value: "visa-electron",
          label: "Visa Electron",
        },
        {
          id: "6",
          value: "maestro",
          label: "Maestro",
        },
        {
          id: "7",
          value: "mastercard",
          label: "Mastercard",
        },
        {
          id: "8",
          value: "bankcard",
          label: "Bankcard",
        },
      ],
    },
  ];

  return (
    <CustomDataTable
      columns={Columns}
      data={tableData}
      filters={filters}
      isFetching={isFetching}
      accountType="Client"
      addModal={<AddModal />}
      addDataAuthorizedUsers={["Admin", "Super Admin", "Client"]}
      multiDeleteModal={<MultiDeleteModal />}
      multiDeleteDataAuthorizedUsers={["Admin", "Super Admin", "Client"]}
    />
  );
};

export default DataTableExample;

export const Columns: ColumnDef<dataTableType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          className="-ml-4"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <Icons.ArrowDownUp className="ml-4 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-4"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <Icons.ArrowDownUp className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "age",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-4"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Age
          <Icons.ArrowDownUp className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "gender",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-4"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Gender
          <Icons.ArrowDownUp className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-4"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <Icons.ArrowDownUp className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "card_type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-4"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CardType
          <Icons.ArrowDownUp className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const cardType = [
        {
          id: 1,
          value: "jcb",
          label: "JCB",
        },
        {
          id: 2,
          value: "americanexpress",
          label: "American Express",
        },
        {
          id: 3,
          value: "visa",
          label: "Visa",
        },
        {
          id: 4,
          value: "diners-club-enroute",
          label: "Diners Club Enroute",
        },
        {
          id: 4,
          value: "china-unionpay",
          label: "China Unionpay",
        },
        {
          id: 5,
          value: "visa-electron",
          label: "Visa Electron",
        },
        {
          id: 6,
          value: "maestro",
          label: "Maestro",
        },
        {
          id: 7,
          value: "mastercard",
          label: "Mastercard",
        },
        {
          id: 8,
          value: "bankcard",
          label: "Bankcard",
        },
      ].find((cardType) => cardType.value === row.getValue("card_type"));

      if (!cardType) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {/* {cardType?.icon && (
                  <cardType.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                )} */}
          <span>{cardType.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          className="-ml-4"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <Icons.ArrowDownUp className="ml-4 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    header: () => <div>Actions</div>,
    // cell: ({ row }) => <DataTableRowActions row={row} />
    cell: ({ row }) => (
      <div className="justify-left flex flex-wrap items-center">
        <EditModal data={row} />
        <ViewModal data={row} />
        <DeleteModal data={row} />
      </div>
    ),
  },
];
