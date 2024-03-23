import Link from "next/link";
import { FunctionComponent } from "react";
import { FaGoogle } from "react-icons/fa";
import { GoogleAlbum } from "types/google";

import styles from "./album.module.scss";

export interface AlbumProps {
  album: GoogleAlbum;
}

const Album: FunctionComponent<AlbumProps> = ({ album }) => {
  let titleDescription = album.title
    .replace("art-", "")
    .replace("painting-", "")
    .replace("illustration-", "")
    .replace("collection-", "")
    .split(":");
  return (
    <article className={styles.item}>
      <Link
        href={`album/${album.id}`}
        aria-label={titleDescription[0]}
        title={titleDescription[0]}
      >
        <div
          className={styles.cover}
          style={{
            backgroundImage: `url(${album.coverPhotoBaseUrl})`,
          }}
        >
          <h3 className={styles.title}>{titleDescription[0]}</h3>
          {titleDescription[1]!=undefined && 
          <h4 className={styles.description}>{titleDescription[1]}</h4>
          }
          <div style={{ padding: ".5rem", float: "left" }}>
            {/* <a
            href={album.productUrl}
            title={'Open Google Photos'}
            aria-label={'Open Google Photos'}
            target="_blank"
            rel="noreferrer"
          >
            <FaGoogle role="img" aria-hidden="true" />
          </a> */}
          </div>

          <div className={styles.count}>
            <small>{album.mediaItemsCount} items</small>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Album;
