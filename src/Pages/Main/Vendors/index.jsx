import { useEffect, useState } from "react";
import { TopBar } from "../../../Components/Main/TopBar/index";
import { locationInfo } from "../../../Sconstant";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import vendorData from "../../../data/vendors.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Vendors", path: "/" },
];

export const VendorsPage = () => {
  const handleBtnAction = (action, student) => {
    console.log(`Action: ${action}`, student);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const vendorTableData =
    vendorData &&
    vendorData.map((item) => ({
      id: `VID${item.vid}`,
      name: item.name,
      phone: item.phone,
      email: item.email,
      status: item.status,
      create_at: item.create_at,
      address: item.address,
      approve: item.approve,
    }));

  const tableHeaders =
    vendorTableData.length > 0
      ? Object.keys(vendorTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Vendors"}
          pagePath={pagePaths}
          data={vendorTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name", "status"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["status"]}
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
