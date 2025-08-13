import { useEffect, useState } from "react";
import { TopBar } from "../../../Components/Main/TopBar/index";
import { locationInfo } from "../../../Sconstant";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import productData from "../../../data/products.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Products", path: "/" },
];

export const ProductsPage = () => {
  const handleBtnAction = (action, student) => {
    console.log(`Action: ${action}`, student);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const productTableData =
    productData &&
    productData.map((item, idx) => ({
      id: `PD${idx + 1}`,
      name: item.name,
      sku: item.sku,
      image: item.images.map((itm) => itm.url),
      price: `Rs. ${item.stock_price}/-`,
      stock_price: `Rs. ${item.price}/-`,
      manuf_date: item.manufacture_date,
      expire_date: item.expire_date,
      category: item.category,
      vendor: item.vendor,
      description: item.description,
    }));

  const tableHeaders =
    productTableData.length > 0
      ? Object.keys(productTableData[0]).filter((key) => key !== "image")
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
        category: false,
        description: false,
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
          pageTitle={"Manage Products"}
          pagePath={pagePaths}
          data={productTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name", "category", "vendor"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["category", "vendor"]}
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
