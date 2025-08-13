import { useEffect, useState } from "react";
import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo } from "../../../Sconstant";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import reportData from "../../../data/report.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Reports", path: "/" },
];

export const ReportsPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const reportTableData =
    reportData &&
    reportData.map((item) => ({
      id: item.report_id,
      name: item.report_name,
      module: item.module,
      owner: item.created_by,
      created_date: item.created_date,
      last_run: item.last_run,
      status: item.status,
      format: item.format,
    }));

  const tableHeaders =
    reportTableData.length > 0
      ? Object.keys(reportTableData[0]).filter((key) => key !== "image")
      : [];

  const [visibleColumns, setVisibleColumns] = useState(() =>
    tableHeaders.reduce((acc, col) => {
      acc[col] = true;
      return acc;
    }, {})
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleColumns((prev) => ({
        ...prev,
        id: false,
      }));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppMainLayoutCover>
      <TopBar location={locationInfo} />
      <AppTableDataInformation>
        <TableInfo
          pageTitle={"Manage Reports"}
          pagePath={pagePaths}
          data={reportTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name", "module", "status", "format"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["module", "status", "format"]}
          visibleColumns={visibleColumns}
          onToggleColumn={(col) =>
            setVisibleColumns((prev) => ({
              ...prev,
              [col]: !prev[col],
            }))
          }
          onAction={handleBtnAction}
        />
      </AppTableDataInformation>
    </AppMainLayoutCover>
  );
};
