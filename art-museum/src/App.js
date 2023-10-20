import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route, Switch } from "react-router-dom";
function App() {
  //console.log(harvardArt.records)
  return (
    <div className="page-wrapper">
<GalleryNavigation galleries={harvardArt.records} />
<Switch>
<Route path="/galleries/:galleryId(\d+)">
  <GalleryView galleries={harvardArt.records} />
</Route>
<Route exact path="/">
<h2>Harvard Art Museum</h2>
<p>Look,but Don't touch.Please select a Gallery in the navigation bar.</p>
</Route>
<Route>
<h2>Page Not Found</h2>
</Route>
</Switch>
</div>
  );

}

export default App;
