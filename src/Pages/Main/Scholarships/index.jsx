import { useEffect, useState } from "react";
import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo } from "../../../Sconstant";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import planningData from "../../../data/productionplans.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "List of productions planning", path: "/" },
];

export const ScholarshipsPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const workOrderTableData =
    planningData &&
    planningData.map((item) => ({
      id: item.plan_id,
      name: item.product_name,
      center: item.work_center,
      qty: `${item.planned_quantity} items`,
      unit: item.unit_of_measure,
      start_date: item.planned_start_date,
      end_date: item.planned_end_date,
      priority:
        item.priority === "High"
          ? "high"
          : item.priority === "Medium"
          ? "medium"
          : "low",
      update: item.status,
      created_by: item.created_by,
    }));

  const tableHeaders =
    workOrderTableData.length > 0
      ? Object.keys(workOrderTableData[0]).filter((key) => key !== "image")
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
        created_by: false,
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
          pageTitle={"Manage Productions Planning"}
          pagePath={pagePaths}
          data={workOrderTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name", "unit", "center", "update"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["center", "update", "unit"]}
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
