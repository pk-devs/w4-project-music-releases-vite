export const AlbumName = ({ name, url }) => {
  // const AlbumName = data.albums.items[0].name
  // const albumURL = data.albums.items[0].external_urls.spotify
   
      return (
       <a href={url} target="_blank" rel="noreferrer">{name}</a> 
  )
}

AlbumName.defaultProps = {
    name: "Missing information"
}