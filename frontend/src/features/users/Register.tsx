import React, { useState } from 'react';
import { RegisterMutation } from '../../types';
import {Link as RouterLink } from 'react-router-dom';
import {Alert, Avatar, Box, Button, Container, Grid, Link, TextField, Typography} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {selectorRegisterLoading} from "./usersSlice.ts";
import {register} from "./usersThunk.ts";

const Register = () => {
    const dispatch = useAppDispatch();
    const error = useAppSelector(selectorRegisterLoading);
    // const navigate = useNavigate();



    const [state, setState] = useState<RegisterMutation>({
        username: '',
        password: ''
    });

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const submitFormHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
        await dispatch(register(state)).unwrap();
        } catch (e) {
            // error
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>

                {
                    error && (<Alert variant="filled" severity="error">error</Alert>)
                }
                <Box component="form" noValidate onSubmit={submitFormHandler} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                label="Username"
                                name="username"
                                value={state.username}
                                onChange={inputChangeHandler}
                                autoComplete="new-username"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                name="password"
                                value={state.password}
                                onChange={inputChangeHandler}
                                label="Password"
                                type="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link component={RouterLink} to="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}



export default Register;