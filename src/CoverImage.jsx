import "./App.css"
import heartIcon from './assets/icons/heart.svg';
import playIcon from './assets/icons/play.svg';
import dotsIcon from './assets/icons/dots.svg';


// console.log (data)
// console.log(data.albums.items[0].images[0].url)

export const CoverImage = ( { image }) => {
   return (
    <div className="album-cover">
      <img src={image} alt="Album Cover" />
      <div className="overlay">
            <img src={heartIcon} alt="heart" /> 
            <img src={playIcon} alt="play" />
            <img src={dotsIcon} alt="dots" />
      </div>
    </div>
  )
}



CoverImage.defaultProps = {
  name: "Missing information"
}

