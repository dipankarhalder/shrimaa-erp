import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo, mainPaths } from "../../../Sconstant";
import {
  Companies,
  Subscribers,
  Revenue,
  Income,
  NetProfit,
  Sale,
  Loans,
  Darrow,
  Danalysis,
  Uanalysis,
  Settings,
  Teams,
  Profile,
  TypeSample,
  Members,
  Rarrow,
  Billings,
  Plans,
  Stocks,
} from "../../../Shared/Icons";
import { AppMainLayoutCover, AppDeashboardSection } from "../style";
import { RevenueChart } from "../../../Components/Main/Dashboard/RevenueChart";
import { ExpensesGrossProfitChart } from "../../../Components/Main/Dashboard/ExpensesGrossProfitChart";
import { AccountsLineChart } from "../../../Components/Main/Dashboard/AccountsLineChart";
import { Link } from "react-router-dom";

const pagePaths = [{ label: "..Apps", path: "/" }];

export const DashboardPage = () => {
  return (
    <AppMainLayoutCover>
      <TopBar pageName="Dashboard" items={pagePaths} location={locationInfo} />
      <AppDeashboardSection>
        <div className="app_heading_section">
          <h2>
            Hello, <span>Himadri Chakraborti</span>
          </h2>
          <p>
            Wishing you a fantastic day - I hope everything is going smoothly
            and bringing you joy.
          </p>
        </div>
        <div className="app_list_overview_items">
          <div className="app_list_info">
            <div className="app_list_row">
              <div className="app_list_heading">
                <h3>Total Revenue</h3>
                <p>Rs. 12.46 Cr</p>
              </div>
              <div className="app_list_icons revenue">
                <Revenue />
              </div>
            </div>
            <div className="app_graph_sec">
              <ul className="upitem">
                <li className="app_graph_itm">
                  <Uanalysis />
                  <p>6.9%</p>
                </li>
                <li className="app_today">
                  <p>July 2025</p>
                  <Darrow />
                </li>
              </ul>
            </div>
          </div>
          <div className="app_list_info">
            <div className="app_list_row">
              <div className="app_list_heading">
                <h3>Total Income</h3>
                <p>Rs. 7.68 Cr</p>
              </div>
              <div className="app_list_icons income">
                <Income />
              </div>
            </div>
            <div className="app_graph_sec">
              <ul className="downitem">
                <li className="app_graph_itm">
                  <Danalysis />
                  <p>4.2%</p>
                </li>
                <li className="app_today">
                  <p>July 2025</p>
                  <Darrow />
                </li>
              </ul>
            </div>
          </div>
          <div className="app_list_info">
            <div className="app_list_row">
              <div className="app_list_heading">
                <h3>Net Profit</h3>
                <p>Rs. 5.13 Cr</p>
              </div>
              <div className="app_list_icons netprofit">
                <NetProfit />
              </div>
            </div>
            <div className="app_graph_sec">
              <ul className="upitem">
                <li className="app_graph_itm">
                  <Uanalysis />
                  <p>16.4%</p>
                </li>
                <li className="app_today">
                  <p>July 2025</p>
                  <Darrow />
                </li>
              </ul>
            </div>
          </div>
          <div className="app_list_info">
            <div className="app_list_row">
              <div className="app_list_heading">
                <h3>Total Sales</h3>
                <p>Rs. 8.32 Cr</p>
              </div>
              <div className="app_list_icons sale">
                <Sale />
              </div>
            </div>
            <div className="app_graph_sec">
              <ul className="upitem">
                <li className="app_graph_itm">
                  <Uanalysis />
                  <p>10.3%</p>
                </li>
                <li className="app_today">
                  <p>July 2025</p>
                  <Darrow />
                </li>
              </ul>
            </div>
          </div>
          <div className="app_list_info">
            <div className="app_list_row">
              <div className="app_list_heading">
                <h3>Material Cost</h3>
                <p>Rs. 4.86 Cr</p>
              </div>
              <div className="app_list_icons materials">
                <TypeSample />
              </div>
            </div>
            <div className="app_graph_sec">
              <ul className="downitem">
                <li className="app_graph_itm">
                  <Danalysis />
                  <p>4.3%</p>
                </li>
                <li className="app_today">
                  <p>July 2025</p>
                  <Darrow />
                </li>
              </ul>
            </div>
          </div>
          <div className="app_list_info">
            <div className="app_list_row">
              <div className="app_list_heading">
                <h3>Pending Loan</h3>
                <p>Rs. 3.24 Cr</p>
              </div>
              <div className="app_list_icons loans">
                <Loans />
              </div>
            </div>
            <div className="app_graph_sec">
              <ul className="upitem">
                <li className="app_graph_itm">
                  <p>Paid: 1.82 Cr (August 2025)</p>
                  <Darrow />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="app_add_new_items">
          <ul>
            <li>
              <div className="front_item">
                <Companies />
                <p>Warehouses</p>
                <Rarrow />
              </div>
            </li>
            <li>
              <div className="front_item">
                <Subscribers />
                <p>Products</p>
                <Rarrow />
              </div>
            </li>
            <li>
              <div className="front_item">
                <Plans />
                <p>Orders</p>
                <Rarrow />
              </div>
            </li>
            <li>
              <div className="front_item">
                <Billings />
                <p>Reports</p>
                <Rarrow />
              </div>
            </li>
            <li>
              <div className="front_item">
                <Settings />
                <p>Services</p>
                <Rarrow />
              </div>
            </li>
            <li>
              <div className="front_item">
                <Teams />
                <p>Customers</p>
                <Rarrow />
              </div>
            </li>
            <li>
              <div className="front_item">
                <Profile />
                <p>Employees</p>
                <Rarrow />
              </div>
            </li>
            <li>
              <div className="front_item">
                <Members />
                <p>Vendors</p>
                <Rarrow />
              </div>
            </li>
            <li>
              <div className="front_item">
                <Stocks />
                <p>Materials</p>
                <Rarrow />
              </div>
            </li>
          </ul>
        </div>
        <RevenueChart heights={60} />
        <ExpensesGrossProfitChart heights={60} />
        <AccountsLineChart heights={60} />
        <div className="app_more_link">
          <Link to={mainPaths.EVENTS}>More Options</Link>
        </div>
      </AppDeashboardSection>
    </AppMainLayoutCover>
  );
};
