import { useEffect, useState } from "react";
import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo } from "../../../Sconstant";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import attenData from "../../../data/attendance.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Attendances", path: "/" },
];

export const SchedulesPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const attendTableData =
    attenData &&
    attenData.map((item) => ({
      id: item.employee_id,
      name: item.name,
      day1: item.day1,
      day2: item.day2,
      day3: item.day3,
      day4: item.day4,
      day5: item.day5,
      day6: item.day6,
      day7: item.day7,
    }));

  const tableHeaders =
    attendTableData.length > 0
      ? Object.keys(attendTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Attendances"}
          pagePath={pagePaths}
          data={attendTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["name"]}
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
