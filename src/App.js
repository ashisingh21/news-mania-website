import MainNavbar from './MainNavbar'
import News from './News'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const pageSize = 6;
  return (
    <>
      <BrowserRouter>
        <MainNavbar></MainNavbar>
        <Routes>
          <Route exact path='/' element={<News key="general" pageSize={pageSize} country="in" category='general'></News>}></Route>
          <Route exact path='/science' element={<News key="science" pageSize={pageSize} country="in" category='science'></News>}></Route>
          <Route exact path='/business' element={<News key="business" pageSize={pageSize} country="in" category='business'></News>}></Route>

          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={pageSize} country="in" category='entertainment'></News>}></Route>
          <Route exact path='/general' element={<News key="general" pageSize={pageSize} country="in" category='general'></News>}></Route>
          <Route exact path='/health' element={<News key="health" pageSize={pageSize} country="in" category='health'></News>}></Route>
          <Route exact path='/science' element={<News key="science" pageSize={pageSize} country="in" category='science'></News>}></Route>
          <Route exact path='/sports' element={<News key="sports" pageSize={pageSize} country="in" category='sports'></News>}></Route>
          <Route exact path='/technology' element={<News key="technology" pageSize={pageSize} country="in" category='technology'></News>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
