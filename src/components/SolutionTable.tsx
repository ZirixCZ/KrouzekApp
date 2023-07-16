import { SubmissionInterface } from "@/types/solutions";

const SolutionTable = (props: {
  rows: SubmissionInterface[];
  handleOpen: () => void;
  isDesktop: boolean;
}) => {
  return (
    <div className="w-full h-full bg-table-background rounded-lg mb-14">
      <table className="table w-full h-full">
        <tbody className="table-row-group">
          {props.rows.length > 0 &&
            props.rows.map((item: SubmissionInterface, index: number) => (
              <tr
                className={`table-row h-16 ${
                  index > 0 ? "border-t-2 border-border-separator" : ""
                }`}
                key={index}
              >
                <td className="table-cell w-1/4 text-sm font-normal px-4">
                  {item.language}
                </td>
                <td className="table-cell w-3/4 text-sm font-normal">
                  {item.date}
                </td>
                <td className="table-cell w-1/4 text-sm font-normal px-4">
                  <a
                    onClick={
                      props.isDesktop
                        ? props.handleOpen
                        : () => alert("download")
                    }
                    className="cursor-pointer"
                  >
                    <u>{props.isDesktop ? "Open" : "Download"}</u>
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SolutionTable;
