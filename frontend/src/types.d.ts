export interface Artist {
    _id: string;
    name: string;
    photo?: string | null;
    information?: string;
}

export interface Album {
    _id: string;
    title: string;
    artist: string;
    year: number;
    coverImage?: string | null;
}

export interface Track {
    _id: string;
    title: string;
    album: string;
    duration: string;
    number: number;

}


export interface RegisterMutation {
    username: string;
    password: string;
}

export interface LoginMutation {
    username: string;
    password: string;
}

export interface User {
    _id: string;
    username: string;
    token: string;

}

export interface ValidationError {
    errors: {
        [key: string]: {
            name: string;
            message: string;
        }
    },
    message: string;
    name: string;
    _message: string;
}

export interface RegisterResponse {
    message: string;
    user: User;
}

export interface GlobalError {
    error: string;
}

export interface TrackHistory {
    _id: string;
    user: {
        _id: string;
    };
    track: {
        _id: string;
        title: string;
    };
    datetime: string;
}