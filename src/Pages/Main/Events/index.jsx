import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo } from "../../../Sconstant";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import { RevenueChart } from "../../../Components/Main/Dashboard/RevenueChart";
import { ExpensesGrossProfitChart } from "../../../Components/Main/Dashboard/ExpensesGrossProfitChart";
import { AccountsLineChart } from "../../../Components/Main/Dashboard/AccountsLineChart";
import { WarehouseRevenueChart } from "../../../Components/Main/Dashboard/WarehouseRevenueChart";
import { DepartmentLineChart } from "../../../Components/Main/Dashboard/DepartmentLineChart";
import { GenderDoughnutChart } from "../../../Components/Main/Dashboard/GenderDoughnutChart";
import { DepartmentRevenueDoughnut } from "../../../Components/Main/Dashboard/DepartmentRevenueDoughnut";

export const EventsPage = () => {
  return (
    <AppMainLayoutCover>
      <TopBar location={locationInfo} />
      <AppTableDataInformation>
        <div className="app_analisys_heading">
          <h2>All Analysis Informations</h2>
        </div>
        <div className="app_new_half_data">
          <RevenueChart heights={120} />
          <ExpensesGrossProfitChart heights={120} />
        </div>
        <div className="app_new_half_data">
          <AccountsLineChart heights={120} />
          <WarehouseRevenueChart heights={120} />
        </div>
        <div className="app_new_half_data">
          <DepartmentRevenueDoughnut />
          <DepartmentLineChart />
          <GenderDoughnutChart />
        </div>
      </AppTableDataInformation>
    </AppMainLayoutCover>
  );
};
