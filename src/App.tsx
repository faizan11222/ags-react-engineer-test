import { FC } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import Topbar from './components/Topbar';
import Add from './components/Add';
import Find from './components/Find';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = styled.main`
  display: grid;
  grid-template-columns: 80px 1fr;
  
  > article {
    padding: ${({ theme }) => theme.size24} ${({ theme }) => theme.size40};
  }
`;

const App: FC = () => {
  return (
  
     <Router>
      <GlobalStyle />
      <Main>
        <Navbar />
        <article>
          <Topbar />
          <Routes>
              <Route path="/find" element={<Find />} />
              <Route path="/add" element={<Add />} />
          </Routes>
        </article>
      </Main>
      </Router>
  );
}

export default App;
