import { useEffect, useState } from "react";
import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo } from "../../../Sconstant";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import taxData from "../../../data/tax.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Taxes", path: "/" },
];

export const StuffPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const taxTableData =
    taxData &&
    taxData.map((item) => ({
      id: item.tax_id,
      name: item.tax_name,
      type: item.tax_type,
      rate: `${item.rate}%`,
      applicable_on: item.applicable_on,
      status: item.status,
      created_by: item.created_by,
    }));

  const tableHeaders =
    taxTableData.length > 0
      ? Object.keys(taxTableData[0]).filter((key) => key !== "image")
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
        gender: false,
        blood_group: false,
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
          pageTitle={"Manage Taxes"}
          pagePath={pagePaths}
          data={taxTableData}
          addTextItem={"Add New Stuff"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name", "type", "rate", "status_info"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["type", "status_info"]}
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
