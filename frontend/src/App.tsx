import { Container, CssBaseline } from '@mui/material';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Register from './features/users/Register';
import Artists from './features/artists/Artists.tsx';

const App = () => {

  return (
    <>
     <CssBaseline/>
        <main>
            <Container maxWidth="xl">
                <Routes>
                    <Route path="/" element={<Artists />} />
                    <Route path="/register" element={<Register/>} />
                </Routes>
            </Container>
        </main>
    </>
  );
};

export default App;
