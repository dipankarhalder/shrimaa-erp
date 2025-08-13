import { useEffect, useState } from "react";
import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo } from "../../../Sconstant";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import workOrderData from "../../../data/workorders.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Work Order", path: "/" },
];

export const AssignmentPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const workOrderTableData =
    workOrderData &&
    workOrderData.map((item) => ({
      id: item.work_order_id,
      name: item.product_name,
      center: item.work_center,
      qty: `${item.quantity} items`,
      start_date: item.planned_start_date,
      end_date: item.planned_end_date,
      due_date: item.due_date,
      status: item.status,
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
          pageTitle={"Manage Work Order"}
          pagePath={pagePaths}
          data={workOrderTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name", "center", "status"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["center", "status"]}
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
