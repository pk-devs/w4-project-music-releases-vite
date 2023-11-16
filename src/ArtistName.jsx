import "./App.css"

// console.log(data.albums.items[0].artists[0].name)
// console.log (data)
// console.log(data.albums.items[0].images[0].url)

export const ArtistName = ({ name, url }) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">{name}</a>
    )
}

ArtistName.defaultProps = {
    name: "Missing information"
}

