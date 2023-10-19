import { useSelector } from "react-redux";

const FilteredAlbums = () => {
    const albums = useSelector(state => state.albums.albums)
    const filterBy = useSelector(state => state.albumFilter.filter)

    return ( 
        <>
            <div>
      {albums
        .filter((album) =>
          filterBy ? album.title.includes(filterBy) : true
        )
        .map((album) => (
          <div key={album.title}>
            {album.title}
          </div>
        ))}
    </div>
        </>
     );
}
 
export default FilteredAlbums;