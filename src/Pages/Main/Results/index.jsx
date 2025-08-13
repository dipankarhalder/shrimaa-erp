import { useEffect, useState } from "react";
import moment from "moment";
import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo } from "../../../Sconstant";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import resourceData from "../../../data/resourceschedules.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Resource Schedule", path: "/" },
];

export const ResultsPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const resourceTableData =
    resourceData &&
    resourceData.map((item) => ({
      id: item.schedule_id,
      name: item.resource_name,
      emp_id: item.resource_id,
      emp_type: item.resource_type,
      task: item.assigned_task,
      start_date: moment(item.start_time).format("MMM Do YY"),
      end_date: moment(item.end_time).format("MMM Do YY"),
      work_order: item.linked_work_order,
      info: item.status,
      created_by: item.created_by,
      created_at: item.created_at,
    }));

  const tableHeaders =
    resourceTableData.length > 0
      ? Object.keys(resourceTableData[0]).filter((key) => key !== "image")
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
        emp_type: false,
        created_at: false,
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
          pageTitle={"Manage Resource Schedule"}
          pagePath={pagePaths}
          data={resourceTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={[
            "id",
            "name",
            "emp_id",
            "emp_type",
            "task",
            "work_order",
            "info",
          ]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["task", "info", "work_order"]}
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
