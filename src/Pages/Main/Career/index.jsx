import { useEffect, useState } from "react";
import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo } from "../../../Sconstant";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import billingData from "../../../data/billing.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Billings", path: "/" },
];

export const CareerPage = () => {
  const handleBtnAction = (action, student) => {
    console.log(`Action: ${action}`, student);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const billingTableData =
    billingData &&
    billingData.map((item) => ({
      id: item.billing_id,
      name: item.customer_name,
      invoice: item.invoice_number,
      date: item.invoice_date,
      due_date: item.due_date,
      total_amount: `Rs. ${item.total_amount}/-`,
      tax: `Rs. ${item.tax_amount}/-`,
      discount:
        item.discount_amount > 0 ? `Rs. ${item.discount_amount}/-` : "-",
      status_info: item.status,
      created_by: item.created_by,
    }));

  const tableHeaders =
    billingTableData.length > 0
      ? Object.keys(billingTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Billings"}
          pagePath={pagePaths}
          data={billingTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={[
            "id",
            "name",
            "invoice",
            "total_amount",
            "tax",
            "status_info",
          ]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["status_info"]}
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
