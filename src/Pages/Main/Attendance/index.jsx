import { useEffect, useState } from "react";
import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo } from "../../../Sconstant";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import performData from "../../../data/perfom.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Performance", path: "/" },
];

export const AttendancePage = () => {
  const handleBtnAction = (action, student) => {
    console.log(`Action: ${action}`, student);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const performTableData =
    performData &&
    performData.map((item) => ({
      id: item.employee_id,
      name: item.name,
      designation: item.designation,
      department: item.department,
      period: item.review_period,
      perform: `${item.performance_score}% / Attend - ${item.attendance_score}`,
      rating: item.rating,
      goal: item.goals_met,
      remarks: item.remarks,
    }));

  const tableHeaders =
    performTableData.length > 0
      ? Object.keys(performTableData[0]).filter((key) => key !== "image")
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
        department: false,
        // remarks: false,
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
          pageTitle={"Manage Performance"}
          pagePath={pagePaths}
          data={performTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={[
            "id",
            "name",
            "period",
            "designation",
            "department",
            "perform",
            "attendance",
            "goals_met",
            "rating",
          ]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["period", "designation", "department", "rating"]}
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
