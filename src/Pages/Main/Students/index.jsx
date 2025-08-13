import { useEffect, useState } from "react";
import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo } from "../../../Sconstant";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import bomData from "../../../data/bom.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Bills", path: "/" },
];

export const StudentsPage = () => {
  const handleBtnAction = (action, student) => {
    console.log(`Action: ${action}`, student);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const bomTableData =
    bomData &&
    bomData.map((item) => {
      const componentString = item.components
        .map((itm) => `${itm.name}`)
        .join(", ");

      return {
        id: item.bom_id,
        name: item.product.name,
        effective: item.product.effective_date,
        components:
          componentString.length > 50
            ? componentString.slice(0, 50) + "..."
            : componentString,
        rev: item.product.revision,
        unit: item.product.unit_of_measure,
        status: item.metadata.status,
        created_by: item.metadata.created_by,
      };
    });

  const tableHeaders =
    bomTableData.length > 0
      ? Object.keys(bomTableData[0]).filter((key) => key !== "image")
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
        unit: false,
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
          pageTitle={"Manage Material Bills"}
          pagePath={pagePaths}
          data={bomTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={[
            "id",
            "name",
            "rev",
            "unit",
            "created_by",
            "status",
          ]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["rev", "unit", "status"]}
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

// useEffect(() => {
//     const handleResize = () => {
//       setVisibleColumns((prev) => ({
//         ...prev,
//         parent_name: false,
//         address: false,
//       }));
//       // const width = window.innerWidth;
//       // if (width < breakpoints.md) {
//       //   setVisibleColumns((prev) => ({
//       //     ...prev,
//       //     sec: false,
//       //     email: false,
//       //     status: false,
//       //     parent_name: false,
//       //   }));
//       // } else if (width < breakpoints.lg) {
//       //   setVisibleColumns((prev) => ({
//       //     ...prev,
//       //     parent_name: false,
//       //   }));
//       // } else {
//       //   setVisibleColumns((prev) => ({
//       //     ...prev,
//       //   }));
//       // }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
