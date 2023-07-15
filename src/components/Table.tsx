import React from "react";
import Image from "next/image";
import { tableData, rowAction, headingType } from "@/types/tableData";

interface TableProps {
  title: string;
  data: tableData[];
  headings: headingType[];
}

const Table = ({ title, headings, data }: TableProps) => {
  return (
    <>
      <p className="table-caption">{title}</p>
      <div className="w-full h-full bg-table-background p-8 rounded-lg">
        {data && title && (
          <table className="table w-full h-full">
            <tr className="table-row">
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
                    className="table-row border-2 border-t-gray-200"
                    key={item.name}
                  >
                    <td className="table-cell w-1/4 text-sm">{item.name}</td>
                    <td className="table-cell w-3/4">
                      <div className="flex flex-row w-fit">
                        {item.actions.map((action: rowAction) => (
                          <a href={action.href} className="pr-2">
                            <Image
                              src={action.src}
                              width={30}
                              height={30}
                              alt={`${item.name} icon`}
                            />
                          </a>
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
