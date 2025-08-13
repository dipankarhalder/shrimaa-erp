import { useEffect, useState } from "react";
import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo } from "../../../Sconstant";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import salaryData from "../../../data/salary.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Salary Info", path: "/" },
];

export const StudyMaterialsPage = () => {
  const handleBtnAction = (action, student) => {
    console.log(`Action: ${action}`, student);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const salaryTableData =
    salaryData &&
    salaryData.map((item) => ({
      id: item.employee_id,
      name: item.name,
      designation: item.designation,
      department: item.department,
      basic_salary: `Rs. ${item.basic_salary}/-`,
      tax: `Rs. ${item.deductions.tax}/-`,
      pf: `Rs. ${item.deductions.pf}/-`,
      net_salary: `Rs. ${item.net_salary}/-`,
    }));

  const tableHeaders =
    salaryTableData.length > 0
      ? Object.keys(salaryTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Salaries"}
          pagePath={pagePaths}
          data={salaryTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={[
            "id",
            "name",
            "designation",
            "net_salary",
            "department",
          ]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["designation", "department"]}
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
