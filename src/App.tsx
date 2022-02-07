import { AppRoutes } from "./AppRoutes"
import styled from "styled-components"
import GlobalStyle from "./styles/globalStyles"

function App() {
  const Grid = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: minmax(80px, max-content) auto;
    grid-auto-rows: minmax(80px, 10vh) auto;
    /* grid-template-columns: auto auto auto auto auto;
    grid-template-rows: 10vh 30vh 30vh 30vh; */
    grid-template-areas: "sideMenu header header header header"
                          "sideMenu main main main main"
                          "sideMenu main main main main"
                          "sideMenu main main main main";
  `;

  return (
    <Grid>
      <GlobalStyle/>
      <AppRoutes />
    </Grid>
    
  )
}

export default App
