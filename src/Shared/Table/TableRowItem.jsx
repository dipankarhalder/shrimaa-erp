import React from "react";
import {
  Share,
  Edit,
  Delete,
  CheckVerify,
  CheckPlus,
  GreenTick,
} from "../Icons";
import { letterColors } from "../../Sconstant";
import { ActionTableButton } from "./style";

export const TableRowItem = React.memo(
  ({
    item,
    dataTableInfo,
    visibleColumns,
    viewBtn,
    enableStatus,
    selected,
    onToggleRow,
    onAction,
  }) => {
    return (
      <tr key={item.id}>
        <td>
          <input
            type="checkbox"
            checked={selected}
            onChange={() => onToggleRow(item.id)}
          />
        </td>
        {dataTableInfo.map((key) => {
          if (!visibleColumns[key]) return null;

          if (key === "status") {
            return (
              <td key={key}>
                <span
                  className={
                    item[key] ? "app_status_actv" : "app_status_inactv"
                  }
                >
                  {item[key] ? "Active" : "In-active"}
                </span>
              </td>
            );
          }

          if (key === "registration") {
            return (
              <td key={key}>
                <span className={item[key] ? "app_reg_actv" : "app_reg_inactv"}>
                  {item[key] ? "Required" : "Not Required"}
                </span>
              </td>
            );
          }

          if (key === "approve") {
            return (
              <td key={key}>
                <span
                  className={item[key] ? "app_tick_actv" : "app_tick_inactv"}
                  onClick={() => (item[key] ? "" : onAction("approve", item))}
                  title={item[key] ? "Approved" : "Not Approved"}
                >
                  <GreenTick />
                </span>
              </td>
            );
          }

          if (key === "priority") {
            return (
              <td key={key}>
                <span
                  className={
                    item[key] === "high"
                      ? "app_high"
                      : item[key] === "medium"
                      ? "app_medium"
                      : "app_low"
                  }
                >
                  {item[key] === "high"
                    ? "High"
                    : item[key] === "medium"
                    ? "Medium"
                    : "Low"}
                </span>
              </td>
            );
          }

          if (key === viewBtn) {
            const initial = item.name?.charAt(0).toUpperCase();
            const bgColor = letterColors[initial] || "#ccc";

            return (
              <td key={key}>
                <button
                  className="app_share"
                  onClick={() => onAction("view", item)}
                >
                  {item.image ? (
                    <div className="app_table_image">
                      <img src={item.image} alt={item.name} />
                    </div>
                  ) : (
                    <div
                      className="app_fallback"
                      style={{
                        backgroundColor: bgColor,
                        border: `1px solid ${bgColor}`,
                      }}
                    >
                      {item.name?.charAt(0)}
                    </div>
                  )}
                  <p>{item[key].toString()}</p> <Share />
                </button>
              </td>
            );
          }

          return <td key={key}>{item[key]}</td>;
        })}

        <ActionTableButton>
          {enableStatus && (
            <button
              className={item.status ? "status" : "update_status"}
              onClick={() => onAction("status", item)}
            >
              {item.status ? <CheckVerify /> : <CheckPlus />}
            </button>
          )}
          <button className="edit" onClick={() => onAction("edit", item)}>
            <Edit />
          </button>
          <button className="delete" onClick={() => onAction("delete", item)}>
            <Delete />
          </button>
        </ActionTableButton>
      </tr>
    );
  }
);
