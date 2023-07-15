import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { tableData, rowAction, headingType } from "@/types/tableData";
import makeUrlFriendly from "@/utils/makeUrlFriendly";

interface TableProps {
  title: string;
  data: tableData[];
  headings: headingType[];
}

const Table = ({ title, headings, data }: TableProps) => {
  const pathname = usePathname();

  return (
    <>
      <p className="table-caption text-2xl pb-5 font-medium">{title}</p>
      <div className="w-full h-full bg-table-background px-8 rounded-lg">
        {data && title && (
          <table className="table w-full h-full">
            <tr className="table-row h-16">
              {headings &&
                headings.map((heading: headingType) => (
                  <th
                    className={`table-cell ${
                      heading.width && `w-${heading.width}`
                    } text-left text-sm`}
                  >
                    {heading.name}
                  </th>
                ))}
            </tr>
            <tbody className="table-row-group">
              {data &&
                data.map((item: tableData) => (
                  <tr
                    className="table-row border-t-2 border-border-separator h-16"
                    key={item.name}
                  >
                    <td className="table-cell w-1/4 text-sm font-normal">
                      {item.name}
                    </td>
                    <td className="table-cell w-3/4">
                      <div className="flex flex-row w-fit">
                        {item.actions.map((action: rowAction) => (
                          <Link
                            href={`${pathname}/${makeUrlFriendly(item.name)}`}
                            key={action.query}
                            className="pr-3"
                          >
                            {action.children}
                          </Link>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Table;
