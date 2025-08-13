import { useEffect, useState } from "react";
import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo } from "../../../Sconstant";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import accountData from "../../../data/account.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Account Details", path: "/" },
];

export const HumanResourcesPage = () => {
  const handleBtnAction = (action, student) => {
    console.log(`Action: ${action}`, student);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const accountTableData =
    accountData &&
    accountData.map((item) => ({
      id: item.account_id,
      name: item.account_name,
      account_type: item.account_type,
      account_code: item.account_code,
      parent_account: item.parent_account,
      status: item.status,
      created_by: item.created_by,
    }));

  const tableHeaders =
    accountTableData.length > 0
      ? Object.keys(accountTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Account Details"}
          pagePath={pagePaths}
          data={accountTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={[
            "id",
            "name",
            "account_type",
            "parent_account",
            "status",
          ]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["account_type", "parent_account", "status"]}
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
