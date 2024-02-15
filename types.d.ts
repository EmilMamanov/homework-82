export interface Artist {
    name: string;
    photo?: string | null;
    information?: string;
}

export interface Album {
    title: string;
    artist: string;
    year: string;
    coverImage?: string | null;
}

export interface Track {
    title: string;
    album: string;
    duration: string;
}

export interface UserFields {
    username: string;
    password: string;
}