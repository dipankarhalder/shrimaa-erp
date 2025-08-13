import styled from "styled-components";

export const AppMainLayoutCover = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  .app_analisys_heading {
    display: flex;
    width: 100%;

    & > h2 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: -24px;
    }
  }

  .app_new_half_data {
    display: flex;
    width: 100%;
    gap: 14px;
  }

  .app_full_width_graph {
    display: flex;
    width: 100%;
    border-radius: 8px;
    padding: 10px 16px;
    margin-top: 40px;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.tableborder};

    .app_graph_headfing {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      & > h2 {
        font-size: 16px;
        font-weight: 600;
      }

      .graph_btn_group {
        display: flex;
        gap: 6px;

        button {
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px 3px;
          border-radius: 6px;
          background: ${({ theme }) => theme.colors.tablehead};
          border: 1px solid ${({ theme }) => theme.colors.tablehead};

          &.active {
            color: ${({ theme }) => theme.colors.btnbg};
            background: ${({ theme }) => theme.colors.infobg};
            border: 1px solid ${({ theme }) => theme.colors.btnbg};
          }
        }
      }
    }
  }
`;

export const AppTableDataInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px 0;
`;

export const ApplicationCoverContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const AppMainPageHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const AppContentDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.tableborder};
`;

export const AppDeashboardSection = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 24px 0;
  flex-direction: column;

  .app_heading_section {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 30px;

    h2 {
      color: ${({ theme }) => theme.colors.gray};
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 3px;

      & > span {
        color: ${({ theme }) => theme.colors.btnbg};
        font-size: 18px;
        font-weight: 700;
        margin-left: 4px;
      }
    }

    & > p {
      color: ${({ theme }) => theme.colors.black};
      font-size: 13px;
      font-weight: 600;
    }
  }

  .app_more_link {
    display: flex;
    width: 100%;
    margin-top: 30px;
    justify-content: center;

    & > a {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  .app_list_overview_items {
    display: flex;
    width: 100%;
    gap: 12px;
    justify-content: space-between;

    .app_list_info {
      width: 20%;
      border-radius: 8px;
      padding: 11px 13px 9px 13px;
      flex-direction: column;
      background: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.tableborder};

      .app_list_row {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;

        .app_list_heading {
          display: flex;
          flex-direction: column;

          & > h3 {
            color: ${({ theme }) => theme.colors.gray};
            font-size: 13px;
            font-weight: 600;
          }

          & > p {
            font-size: 17px;
            font-weight: 700;
          }
        }

        .app_list_icons {
          width: 50px;
          height: 50px;
          display: flex;
          padding: 10px;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background: ${({ theme }) => theme.colors.tableborder};

          &.revenue {
            color: ${({ theme }) => theme.colors.warning};
            background: ${({ theme }) => theme.colors.warningbg};
          }

          &.income {
            color: ${({ theme }) => theme.colors.success};
            background: ${({ theme }) => theme.colors.successbg};
          }

          &.netprofit {
            color: ${({ theme }) => theme.colors.info};
            background: ${({ theme }) => theme.colors.infobg};
          }

          &.sale {
            color: ${({ theme }) => theme.colors.error};
            background: ${({ theme }) => theme.colors.errorbg};
          }

          &.materials {
            color: ${({ theme }) => theme.colors.ylow};
            background: ${({ theme }) => theme.colors.ylowbg};
          }

          &.loans {
            color: ${({ theme }) => theme.colors.secured};
            background: ${({ theme }) => theme.colors.securedbg};
          }
        }
      }

      .app_graph_sec {
        display: flex;
        width: 100%;
        margin-top: 12px;

        & > ul {
          display: flex;
          width: 100%;
          justify-content: space-between;

          & > li {
            gap: 6px;
            display: flex;
            align-items: center;

            & > span {
              width: 18px;
              height: 18px;

              & > svg {
                width: 18px;
                height: 18px;
              }
            }

            &.app_graph_itm {
              & > p {
                font-size: 12px;
                font-weight: 700;
              }
            }

            &.app_week {
              & > p {
                font-size: 12px;
                font-weight: 600;
                color: ${({ theme }) => theme.colors.gray};
              }
            }

            &.app_today {
              & > span {
                width: 14px;
                height: 14px;

                & > svg {
                  width: 14px;
                  height: 14px;
                }
              }

              & > p {
                font-size: 12px;
                font-weight: 700;
              }
            }
          }

          &.upitem {
            color: #228a53;
          }

          &.downitem {
            color: #da2326;
          }
        }
      }
    }
  }

  .app_add_new_items {
    display: flex;
    width: 100%;
    margin-top: 20px;
    position: relative;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0px;
      width: 10px;
      height: 100%;
      background: #ffffff;
    }

    &:before {
      left: 0px;
      background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
      );
    }

    &:after {
      right: 0px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
      );
    }

    & > ul {
      display: flex;
      width: 100%;
      gap: 12px;
      justify-content: flex-start;
      flex: 1;
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;

      & > li {
        display: flex;
        width: auto;
        border-radius: 6px;
        padding: 6px 10px 6px 8px;
        align-items: center;
        transition: 0.5s;
        cursor: pointer;
        justify-content: space-between;
        background: ${({ theme }) => theme.colors.tablehead};
        border: 1px solid ${({ theme }) => theme.colors.tableborder};

        .front_item {
          display: flex;
          align-items: center;
          gap: 10px;

          & > span {
            width: 26px;
            height: 26px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;

            & > svg {
              width: 15px;
              height: 15px;
            }

            &:first-child {
              background: ${({ theme }) => theme.colors.tableborder};
            }

            &:last-child {
              margin-left: 16px;
              width: 12px;
              height: 12px;

              & > svg {
                width: 12px;
                height: 12px;
              }
            }
          }

          & > p {
            font-size: 14px;
            font-weight: 600;
          }
        }

        &:hover {
          transition: 0.5s;
          background: ${({ theme }) => theme.colors.infobg};
          border: 1px solid ${({ theme }) => theme.colors.blue};
          color: ${({ theme }) => theme.colors.blue};
        }
      }
    }
  }

  .app_full_width_graph {
    display: flex;
    width: 100%;
    border-radius: 8px;
    padding: 10px 16px;
    margin-top: 40px;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.tableborder};

    .app_graph_headfing {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      & > h2 {
        font-size: 16px;
        font-weight: 600;
      }

      .graph_btn_group {
        display: flex;
        gap: 6px;

        button {
          font-size: 13px;
          font-weight: 600;
          padding: 4px 14px 3px;
          border-radius: 6px;
          background: ${({ theme }) => theme.colors.tablehead};
          border: 1px solid ${({ theme }) => theme.colors.tablehead};

          &.active {
            color: ${({ theme }) => theme.colors.btnbg};
            background: ${({ theme }) => theme.colors.infobg};
            border: 1px solid ${({ theme }) => theme.colors.btnbg};
          }
        }
      }
    }
  }
`;
