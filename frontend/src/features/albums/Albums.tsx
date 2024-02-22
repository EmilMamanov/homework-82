import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchAlbums } from './albumsThunk';
import {selectAlbums} from "./albumsSlice";
import AlbumItem from "./AlbumItem.tsx";

const Albums: React.FC = () => {
    const { artistId } = useParams<{ artistId?: string }>();
    const dispatch = useAppDispatch();
    const albums = useAppSelector(selectAlbums);

    useEffect(() => {
        if (artistId) {
            dispatch(fetchAlbums(artistId));
        }
    }, [dispatch, artistId]);

    return (
        <Grid container spacing={2} style={{ margin: '16px', justifyContent: 'center' }}>
            {albums.map((album) => (
                <Grid item key={album._id} xs={12} sm={6} md={4} lg={3}>
                    <AlbumItem
                        albumId={album._id}
                        title={album.title}
                        coverImage={album.coverImage || null}
                        year={album.year}
                        artistId={artistId || ''}
                    />
                </Grid>
            ))}
            {albums.length === 0 && (
                <Typography variant="subtitle1" color="textSecondary">
                    No albums available.
                </Typography>
            )}
        </Grid>
    );
};

export default Albums;