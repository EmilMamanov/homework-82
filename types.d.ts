import { Model } from 'mongoose';

export interface Artist {
    name: string;
    photo?: string | null;
    information?: string;
}

export interface Album {
    title: string;
    artist: string;
    year: number;
    coverImage?: string | null;
}

export interface Track {
    title: string;
    album: string;
    duration: string;
    number: number;
}

export interface UserFields {
    username: string;
    password: string;
    token: string;
}

interface UserMethods {
    checkPassword(password: string): Promise<boolean>;
    generateToken(): void;
}

export interface TrackHistory {
    user: string;
    track: string;
    datetime: Date;
}

type UserModel = Model<UserFields, {}, UserMethods>;