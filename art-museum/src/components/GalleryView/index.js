import "./GalleryView.css";
import { useParams, Route } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import ArtDescription from "../ArtDescription";
const GalleryView=({galleries})=>{
    const { galleryId }=useParams();
    //console.log(useParams());
const selectedGallery=galleries.find(gallery=>gallery.id===parseInt(galleryId))
    return(
        <div>
        <h1>{selectedGallery.name}</h1>
        <Route exact path="/galleries/:galleryId">
        {selectedGallery.objects.map(art=>(
<ArtImageTile key={art.id} art={art} />

        ))}
        </Route>
        <Route path="/galleries/:galleryId/art/:artId">
            <ArtDescription gallery={selectedGallery}/>
        </Route>
        </div>
    );
};
export default GalleryView;
