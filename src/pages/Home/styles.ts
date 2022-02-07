import styled from "styled-components";

export const Container = styled.main`
  background: #1e1e1e;
  grid-area: main;
  overflow-y: auto;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3)
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3)
  }

  > h1 {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  background: green;
  border-radius: 1rem;
`;