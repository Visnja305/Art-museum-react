import "./ArtImageTile.css";
import {useParams, Link} from "react-router-dom";

const ArtImageTile=({art})=>{
    const {galleryId}=usePrams();

    return (
        <Link to={`/galleries/${galleryId}/art/${art.id}`}>
        <img src={art.images[0].baseimageurl} alt="art" />
        </Link>
    )
}
export default ArtImageTile
