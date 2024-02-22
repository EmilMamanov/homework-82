import { Container, CssBaseline } from '@mui/material';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Artists from './features/artists/Artists.tsx';

const App = () => {

  return (
    <>
     <CssBaseline/>
        <main>
            <Container maxWidth="xl">
                <Routes>
                    <Route path="/" element={<Artists />} />
                </Routes>
            </Container>
        </main>
    </>
  );
};

export default App;
