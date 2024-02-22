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

export interface User {
    _id: string;
    username: string;
    token: string;

}