import { useDispatch, useSelector } from "react-redux";
import { setFormMode, setSelectedAlbum } from "./albumItemsSlice";


const AlbumDisplay = (props) => {
    const album = props.album
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)


    const editAlbumHandler = () => {
        dispatch(setFormMode("edit"))
        dispatch(setSelectedAlbum(album))
    }

    const deleteAlbumHandler = () => {
        dispatch(setFormMode("delete"))
        dispatch(setSelectedAlbum(album))
    }
    
    return ( 
        <>
        
            <div className="col-3 bg-dark bg-gradient rounded border border-secondary text-light p-2">
                <h5 className="mb-2">{album.title}</h5>
                <div className="text-center">
                    <img className="card-image w-100 mb-3" src={album.coverAlbumUrl} alt="" />
                </div>
                <div className="text-center">
                    <span><strong>Release date:</strong> {album.releaseDate}</span>
                    <hr />
                    <span><strong>Artist:</strong> {album.artist}</span>
                    <hr />
                    <span><strong>Score:</strong> {album.score}/5</span>
                    <hr />
                    <span><strong>Price:</strong> {album.price}$</span>
                    <hr />
                </div>
                {
                user &&
                    <div className="text-end">
                        <button className="btn btn-warning me-2" onClick={() => editAlbumHandler()}><i class="bi bi-pencil-square me-1"></i>Edit</button>
                        <button className="btn btn-danger" onClick={() => deleteAlbumHandler()}><i class="bi bi-trash3 me-1"></i>Delete</button>
                    </div>
                }
            </div>
        </>
     );
}
 
export default AlbumDisplay;