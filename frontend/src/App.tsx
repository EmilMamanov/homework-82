import { Container, CssBaseline } from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import Register from './features/users/Register';
import Artists from './features/artists/Artists.tsx';
import Albums from "./features/albums/Albums.tsx";
import Tracks from './features/tracks/Tracks.tsx';
import Login from "./features/users/Login.tsx";
import AppToolbar from "./components/UI/AppToolBar.tsx";
import TrackHistory from "./features/trackHistory/TrackHistory.tsx";

const App = () => {

  return (
    <>
     <CssBaseline/>
        <header>
            <AppToolbar/>
        </header>
        <main>
            <Container maxWidth="xl">
                <Routes>
                    <Route path="/" element={<Artists />} />
                    <Route path="/artists/:artistId/albums/:albumId/tracks" element={<Tracks />} />
                    <Route path="/artists/:artistId/albums" element={<Albums />} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/track_history" element={<TrackHistory/>} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </Container>
        </main>
    </>
  );
};

export default App;
