import styled, { css } from "styled-components";
//import { Link } from "react-router-dom";

interface SectionProps {
  active: Boolean;
};

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 1;
  padding: 1rem;
  -webkit-box-shadow: 0.2rem 0.4rem 1rem 0.1rem rgba(0, 0, 0, 0.47);
  box-shadow: 0.2rem 0.4rem 1rem 0.1rem rgba(201, 201, 201, 0.47);
  border-radius: 1rem;
  height: 9rem;
  min-width: 14rem;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
  color: rgb(160, 160, 160);
`;

export const Counter = styled.div`
  font-size: 2.8rem;
  font-weight: 300;
`;

const sharedDirectionStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Left = styled.div`
  ${sharedDirectionStyle}
`;

export const Right = styled.div`
  ${sharedDirectionStyle}
`;


  