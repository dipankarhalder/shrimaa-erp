import { useEffect, useState } from "react";
import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo } from "../../../Sconstant";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import qualityData from "../../../data/quality.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Quality Controls", path: "/" },
];

export const CertificatesPage = () => {
  const handleBtnAction = (action, student) => {
    console.log(`Action: ${action}`, student);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const qualityTableData =
    qualityData &&
    qualityData.map((item) => ({
      id: item.qc_id,
      name: item.product_name,
      insp_type: item.inspection_type,
      insp_date: item.inspection_date,
      inspector: item.inspector,
      result: item.result,
      defects: item.defects_found,
      status_info: item.status,
      work_center: item.work_center,
    }));

  const tableHeaders =
    qualityTableData.length > 0
      ? Object.keys(qualityTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Quality Controls"}
          pagePath={pagePaths}
          data={qualityTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name", "insp_type", "result", "status_info"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["insp_type", "result", "status_info"]}
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
