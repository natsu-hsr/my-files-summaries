import {Routes, Route, BrowserRouter} from 'react-router-dom';
import MainPage from './pages/main-page/main-page'
import Header from './components/header/header';

import './App.css'
import {MantineProvider} from '@mantine/core';

const App = () => (
  <BrowserRouter>
    <MantineProvider>
      <Header />
      <div className='wrapper'>
        <Routes>
          <Route
            path={'/'}
            element={<MainPage />}
          />
        </Routes>
      </div>
    </MantineProvider>
  </BrowserRouter>
)

export default App;
