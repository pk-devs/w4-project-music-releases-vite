import "./App.css"
import { Header } from "./Header"
import { ArtistName } from "./ArtistName"
import { AlbumName } from "./AlbumName"
import { CoverImage } from "./CoverImage"
import data from "./data.json"

export const App = () => {
    return (
    <div className="all">
      <div className="header"><Header /></div>
      <div  className="album-container">
        {data.albums.items.map((album) => (
            <div key={album.id} className="album">
            <span className="album-cover"><CoverImage image={album.images[0].url} /></span>
            <p className="album-name"><AlbumName name={album.name} url={album.external_urls.spotify} /></p>
            <p className="artist-name"><ArtistName name={album.artists[0].name} url={album.artists[0].external_urls.spotify} /></p>
            </div> 
        ))}
      </div>
    </div>
  )
}
