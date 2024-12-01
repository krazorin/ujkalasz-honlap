import { FunctionComponent } from "react"
import PageLayout from "src/components/PageLayout/PageLayout"
import PhotoAlbum from "src/components/PhotoAlbum/PhotoAlbum"
import { PhotoEntry } from "src/types/types"

const photos: PhotoEntry[] = [
  {
    src: "/assets/images/vaci_haz/1.KALÁSZ HÁZ.jpg",
    width: 1068,
    height: 712,
    alt: "KALÁSZ HÁZ",
  },
  {
    src: "/assets/images/vaci_haz/2.KALÁSZ HÁZ kert.jpg",
    width: 1068,
    height: 712,
    alt: "KALÁSZ HÁZ kert",
  },
  {
    src: "/assets/images/vaci_haz/3.Kert tűzrakó.jpg",
    width: 1040,
    height: 780,
    alt: "3.Kert tűzrakó.jpg",
  },
  {
    src: "/assets/images/vaci_haz/4.Konyha.jpg",
    width: 1068,
    height: 712,
    alt: "4.Konyha.jpg",
  },
  {
    src: "/assets/images/vaci_haz/5.Nagyszoba.jpg",
    width: 1300,
    height: 730,
    alt: "5.Nagyszoba.jpg",
  },
  {
    src: "/assets/images/vaci_haz/6.Nagyszoba.jpg",
    width: 1300,
    height: 730,
    alt: "6.Nagyszoba.jpg",
  },
  {
    src: "/assets/images/vaci_haz/7.Háló.jpg",
    width: 1460,
    height: 2600,
    alt: "7.Háló.jpg",
  },
  {
    src: "/assets/images/vaci_haz/8.Háló.jpg",
    width: 1460,
    height: 2600,
    alt: "8.Háló.jpg",
  },
  {
    src: "/assets/images/vaci_haz/9.Fűrdőszoba.jpg",
    width: 1068,
    height: 712,
    alt: "9.Fűrdőszoba.jpg",
  },
  {
    src: "/assets/images/vaci_haz/10.Fürdőszoba Mosógép.jpg",
    width: 1500,
    height: 2000,
    alt: "10.Fürdőszoba Mosógép.jpg",
  },
  {
    src: "/assets/images/vaci_haz/11.Műhely.jpg",
    width: 1300,
    height: 730,
    alt: "11.Műhely.jpg",
  },
  {
    src: "/assets/images/vaci_haz/12.Műhely.jpg",
    width: 1300,
    height: 730,
    alt: "12.Műhely.jpg",
  },
  {
    src: "/assets/images/vaci_haz/13.Műhely Új székek.jpg",
    width: 1500,
    height: 2000,
    alt: "13.Műhely Új székek.jpg ",
  },
  {
    src: "/assets/images/vaci_haz/14.Műhely Sörpad készletek.jpg",
    width: 1500,
    height: 2000,
    alt: "14.Műhely Sörpad készletek.jpg",
  },
]

const VaciKalaszHazKepek: FunctionComponent = () => {
  return (
    <PageLayout>
      <PhotoAlbum photos={photos} />
    </PageLayout>
  )
}

export default VaciKalaszHazKepek
