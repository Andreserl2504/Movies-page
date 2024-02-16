export type MoviesFetch = {
    Search:       Search[];
    totalResults: string;
    Response:     string;
}

export type Search = {
    Title:  string;
    Year:   string;
    imdbID: string;
    Type:   Type;
    Poster: string;
}

export enum Type {
    Movie = "movie",
    Series = "series",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toMoviesFetch(json: string): MoviesFetch {
        return JSON.parse(json);
    }

    public static moviesFetchToJson(value: MoviesFetch): string {
        return JSON.stringify(value);
    }
}