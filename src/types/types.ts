type Fejezet = {
  cim: string
  szoveg: string[]
}

export type CsoportEntry = {
  sorszam: number
  id: string
  nev: string
  vezetoKep?: string
  csoportKepek?: string[]
  osszefoglalo: string
  tartalom: Fejezet[]
}

export type PhotoEntry = {
  src: string
  alt: string
  width: number
  height: number
}

export type PhotoAlbumEntry = {
  id: string
  title: string
  coverPhoto: string
  photos: PhotoEntry[]
}
