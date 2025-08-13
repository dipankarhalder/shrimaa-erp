import { useEffect, useState } from "react";
import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo } from "../../../Sconstant";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";

import settingsData from "../../../data/settings.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Settings", path: "/" },
];

export const SettingsPage = () => {
  const handleBtnAction = (action, student) => {
    console.log(`Action: ${action}`, student);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const settingsTableData =
    settingsData &&
    settingsData.map((item) => ({
      id: item.settingId,
      name: item.name,
      description: item.description,
      status_info:
        item.type === "boolean" && item.value
          ? "Yes"
          : item.value
          ? item.value
          : "In-active",
      is_editable: item.isEditable ? "Active" : "In-active",
    }));

  const tableHeaders =
    settingsTableData.length > 0
      ? Object.keys(settingsTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Settings"}
          pagePath={pagePaths}
          data={settingsTableData}
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
