import { useDispatch, useSelector } from "react-redux";
import { setFormMode, setSelectedAlbum } from "./albumItemsSlice";


const AlbumDisplay = (props) => {
    const album = props.album
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)

    const editAlbumHandler = () => {
        dispatch(setSelectedAlbum(album))
        dispatch(setFormMode("edit"))
    }

    const deleteAlbumHandler = () => {
        dispatch(setSelectedAlbum(album))
        dispatch(setFormMode("delete"))
    }
    
    return ( 
        <>
            <div className="col-3 bg-dark rounded border border-secondary text-light p-2 m-2">
                <h5 className="card-title">{album.title}</h5>
                <hr />
                    <img src={album.coverAlbumUrl} alt="" />
                <ul className="text-center">
                    <li><strong>Release date:</strong> {album.releaseDate}</li>
                    <hr />
                    <li><strong>Artist:</strong> {album.artist}</li>
                    <hr />
                    <li><strong>Score:</strong> {album.score}</li>
                    <hr />
                    <li><strong>Price:</strong> {album.price}$</li>
                    <hr />
                </ul>
                {
                user &&
                    <div className="text-end">
                        <button className="btn btn-warning me-2" onClick={() => editAlbumHandler()}>Edit</button>
                        <button className="btn btn-danger" onClick={() => deleteAlbumHandler()}>Delete</button>
                    </div>
                }
            </div>
        </>
     );
}
 
export default AlbumDisplay;