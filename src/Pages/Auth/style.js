import styled from "styled-components";
import { textColor } from "../../styles/mixins";

export const AppSignin = styled.div`
  display: flex;
  width: 48%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const AppInsideSignin = styled.div`
  width: 460px;
  display: flex;
  padding: 30px 54px;
  border-radius: 14px;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 3px 16px rgba(0, 0, 0, 0.16);

  & > span {
    width: 130px;
    margin-bottom: 30px;

    & > img {
      width: 100%;
    }
  }
`;

export const AppHeadingSignin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;

  h1 {
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 1px;
    text-align: center;
  }

  & > p {
    font-size: 14px;
    text-align: center;
    ${textColor("bodytext")};
  }
`;

export const AppFormSignin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AppCheckField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > a {
    font-size: 14px;
    font-weight: 600;
    text-decoration: underline;
    ${textColor("green")};
  }
`;

export const AppBtnField = styled.div`
  margin: 16px 0 36px;
  display: flex;
  justify-content: center;
`;

export const AppLinkCover = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;

  & > p {
    font-size: 14px;
    font-weight: 500;
  }

  & > a {
    font-size: 14px;
    font-weight: 600;
    text-decoration: underline;
    ${textColor("green")};
  }
`;

export const AppOtpField = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  input {
    width: 44px;
    padding: 0px;
    text-align: center;
  }
`;

export const AppOtpErrorMessage = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-top: 0px;
  display: block;
  text-align: center;
  ${textColor("error")};
`;
