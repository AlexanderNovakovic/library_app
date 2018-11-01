export interface IBook {
    id: number;
    name: string;
    author: string;
    about: string;
    numberOfPages: number;
    row: number;
    shelf: number;
    bookGenre: {
        genre: string;
    };
    added: Date;
    image: string;
}

