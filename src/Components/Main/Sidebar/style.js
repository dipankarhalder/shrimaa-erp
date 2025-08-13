import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import {
  backgroundColor,
  textColor,
  borderStyleColor,
  fontFamily,
} from "../../../styles/mixins";

export const AppSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 100vh;
  padding: 16px 20px;
  overflow-y: auto;
  position: fixed;
  top: 0px;
  ${backgroundColor("sidebar")};
  border-right: 1px solid ${({ theme }) => theme.colors.tableborder};
`;

export const AppSidebarInside = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > span {
    display: flex;
    width: 100px;
    margin-bottom: 30px;

    & > img {
      width: 100%;
    }
  }
`;

export const AppSidebarLinkCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SidebarItem = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const SidebarTitle = styled.h4`
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 2px;
  text-transform: uppercase;
  ${textColor("sidehead")};
  ${fontFamily};
`;

export const SidebarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const SidebarListItem = styled.li`
  margin: 0;
  position: relative;
  ${borderStyleColor(1, "transparent")};

  ${({ $active }) =>
    $active &&
    css`
      ${backgroundColor("navbg")};
      border-radius: 4px;

      &:after {
        content: "";
        position: absolute;
        top: 10%;
        left: -7px;
        width: 3px;
        height: 80%;
        border-radius: 5px;
        ${backgroundColor("blue")};
      }

      a > p {
        ${textColor("black")};
        font-weight: 600;
      }
    `}
`;

export const SidebarLinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 5px 7px;
  text-decoration: none;
  border-radius: 4px;
  ${textColor("text")};
  ${fontFamily};

  & > span {
    width: 14px;
    height: 14px;
    ${textColor("navText")};

    & > svg {
      width: 14px;
      height: 14px;
    }
  }

  p {
    margin: 0;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    ${textColor("navText")};
    ${fontFamily};
  }
`;
