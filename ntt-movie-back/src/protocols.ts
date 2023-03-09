export type ApplicationError = {
    name: string,
    message: string,
  };

export type RequestError = {
    status: number,
    data: object | null,
    statusText: string,
    name: string,
    message: string,
};

export type IncomingMovie = {
    title: string,
};

export type ResponseMovie = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
    Rated?: string,
    Released?: string | Date,
    Runtime?: string,
    Genre?: string,
    Director?: string,
    Writer?: string,
    Actors?: string,
    Plot?: string,
    Language?: string,
    Country?: string,
    Awards?: string,
    Ratings?: Rating[],
    Metascore?: string,
    imdbRating?: string,
    imdbVotes?: string,
    DVD?: string | Date,
    BoxOffice?: string,
    Production?: string,
    Website?: string,
    Response?: string | boolean,
}

export type ResponseMovies = {
    search: ResponseMovie[],
    totalResults: string,
    Response: string,
}

type Rating = {
    Source: string,
    Value: string,
}