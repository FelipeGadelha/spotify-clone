import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface SectionProps {
  active: Boolean;
};

export const Container = styled.div<SectionProps>`
  grid-area: sideMenu;
  width: ${({ active }) => (active ? "345px" : "80px")};
  background: #000000;
  transition: width .2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: 100%;
  width: 86%;
`;

export const TopSection = styled.div`
  position: relative;
  height: 6rem;
  width: 100%;
`;

export const Divider = styled.div`
  width: 96%;
  height: 2px;
  border-radius: 1px;
  background: #1e1e1e;
  margin: auto;
`;

const sharedIconStyle = css<SectionProps>`
  color: #FFF;
  font-size: 1.5rem;
  display: inline-block;
  position: absolute;
  right: ${p => p.active ? "0" : "-70%" };
  top: 50%;
  transform: translateY(-50%);
  transition: right .2s ease-in;
  cursor: pointer;
`;

export const Icon = styled.div<SectionProps>`
  ${sharedIconStyle}
`;