"use client";
import { useState } from "react";

import CustomCollapsible from "@/components/customui/CustomCollapsible";
import { Icons } from "@/lib/Icons";

const CollapsibleExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card flex w-[320px] flex-col gap-2 rounded border p-4">
      <h4 className="mb-4 w-full text-center">Collapsible</h4>
      <CustomCollapsible
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
        trigger={<p>Collapsible (Default Icon)</p>}
        displayedContent={
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Items
          </div>
        }
        collapsedContent={
          <>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              Item 1
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              Item 2
            </div>
          </>
        }
      />
      <CustomCollapsible
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
        trigger={<p>Collapsible (Custom Icon)</p>}
        triggerIcon={<Icons.spinner className="h-4 w-4" />}
        displayedContent={
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Items
          </div>
        }
        collapsedContent={
          <>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              Item 1
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              Item 2
            </div>
          </>
        }
      />
    </div>
  );
};

export default CollapsibleExample;