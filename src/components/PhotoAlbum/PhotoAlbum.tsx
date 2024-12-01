import { FunctionComponent, useState } from "react"
import { RowsPhotoAlbum } from "react-photo-album"
import { PhotoEntry } from "src/types/types"
import Lightbox from "yet-another-react-lightbox"
import Counter from "yet-another-react-lightbox/plugins/counter"

import "react-photo-album/rows.css"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/counter.css"
import "./PhotoAlbum.scss"

interface Props {
  photos: PhotoEntry[]
}

const PhotoAlbum: FunctionComponent<Props> = ({ photos }) => {
  const [index, setIndex] = useState(-1)

  return (
    <div className="photo-album">
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Counter]}
        counter={{
          container: { style: { top: "unset", bottom: 0, left: "unset" } },
        }}
      />
    </div>
  )
}

export default PhotoAlbum
