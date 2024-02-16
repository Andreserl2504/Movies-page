export type carruselInfo = {
  info:carruselElementInfo[]
  genres: genres
}

export type carruselElementInfo = {
  title: string
  poster: string
}

export type genres = "Fantasy" | "Suspence"