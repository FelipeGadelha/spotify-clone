import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  text-decoration: none;
  list-style: none;
  border-radius: 5px;
  display: block;
  color: var(--grey-50);
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: .2s ease-in;
  overflow: hidden;
  white-space: nowrap;
  padding: 10px 0;

  &:hover {
    background: #282828;
    color: #FFFFFF;
  }
  &:focus {
    background: #282828;
    color: #FFFFFF;
  }
  `;

export const IconMenu = styled.div`
  display: inline-block;
  width: 50px;
  height: 100%;
  font-size: 25px;
  line-height: 50px;
  align-items: center;
  vertical-align: sub;
  overflow: hidden;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
