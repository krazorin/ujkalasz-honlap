import { Route } from "react-router-dom"
import GaleriaPhotoAlbum from "src/pages/Galeria/GaleriaPhotoAlbum"
import { PhotoAlbumEntry } from "src/types/types"

const GALERIA_ASSETS = "/assets/images/galeria"

const createPhotoSrc = (album: string, kep: string) =>
  `${GALERIA_ASSETS}/${album}/${kep}`

const photoAlbums: PhotoAlbumEntry[] = [
  {
    id: "2006-pannonhalmiak-egerben",
    title: "2006 Pannonhalmiak Egerben",
    coverPhoto: createPhotoSrc(
      "2006-pannonhalmiak-egerben",
      "2006-Pannonhalmiak_Eger_-_a_bastyanal.jpg",
    ),
    photos: [
      {
        src: createPhotoSrc(
          "2006-pannonhalmiak-egerben",
          "2006-Pannonhalmiak_Eger_-_a_bastyanal.jpg",
        ),
        alt: "2006-Pannonhalmiak_Eger_-_a_bastyanal.jpg",
        width: 1600,
        height: 1200,
      },
    ],
  },
  {
    id: "2006-wucwo",
    title: "2006 WUCWO - Katolikus Női Szervezetek Világtalálkozója",
    coverPhoto: createPhotoSrc("2006-wucwo", "2006._WUCWO_PICT0095.jpg"),
    photos: [
      {
        src: createPhotoSrc("2006-wucwo", "2006._WUCWO_PICT0084.jpg"),
        alt: "2006._WUCWO_PICT0084.jpg",
        width: 1280,
        height: 960,
      },
      {
        src: createPhotoSrc("2006-wucwo", "2006._WUCWO_PICT0095.jpg"),
        alt: "2006._WUCWO_PICT0095.jpg",
        width: 960,
        height: 1280,
      },
    ],
  },
  {
    id: "2007-bp-nyari-tabor",
    title: "2007-es budapesti nyári tábor",
    coverPhoto: createPhotoSrc("2007-bp-nyari-tabor", "Bp-i_tábor_1.jpg"),
    photos: [
      {
        src: createPhotoSrc("2007-bp-nyari-tabor", "Bp-i_tábor_1.jpg"),
        alt: "Bp-i_tábor_1.jpg",
        width: 1536,
        height: 1152,
      },
      {
        src: createPhotoSrc("2007-bp-nyari-tabor", "Bp-i_tábor_2.jpg"),
        alt: "Bp-i_tábor_2.jpg",
        width: 1229,
        height: 1639,
      },
      {
        src: createPhotoSrc("2007-bp-nyari-tabor", "Bp-i_tábor_11.jpg"),
        alt: "Bp-i_tábor_11.jpg",
        width: 1818,
        height: 1364,
      },
      {
        src: createPhotoSrc("2007-bp-nyari-tabor", "Bp-i_tábor_12.jpg"),
        alt: "Bp-i_tábor_12.jpg",
        width: 1639,
        height: 1229,
      },
    ],
  },
  {
    id: "2008-kerepes",
    title: "2008 Kerepes",
    coverPhoto: createPhotoSrc("2008-kerepes", "P1130150.jpg"),
    photos: [
      {
        src: createPhotoSrc("2008-kerepes", "P1130150.jpg"),
        alt: "P1130150.jpg",
        width: 2048,
        height: 1360,
      },
      {
        src: createPhotoSrc("2008-kerepes", "P1130151.jpg"),
        alt: "P1130151.jpg",
        width: 2048,
        height: 1360,
      },
      {
        src: createPhotoSrc("2008-kerepes", "P1130175.jpg"),
        alt: "P1130175.jpg",
        width: 2048,
        height: 1360,
      },
      {
        src: createPhotoSrc("2008-kerepes", "P1130179.jpg"),
        alt: "P1130179.jpg",
        width: 2048,
        height: 1360,
      },
    ],
  },
]

export const galeriaRoutes = photoAlbums.map((photoAlbum) => (
  <Route
    key={photoAlbum.id}
    path={`/galeria/${photoAlbum.id}`}
    element={<GaleriaPhotoAlbum photoAlbum={photoAlbum} />}
  />
))

export default photoAlbums
