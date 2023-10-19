import { useDispatch, useSelector } from "react-redux";
import { deleteAlbum, setFormMode } from "./albumItemsSlice";

const DeleteAlbumForm = () => {
    const selectedAlbum = useSelector(state => state.albums.selectedAlbum)
    const dispatch = useDispatch()

    const deleteFormHandler = async (event) => {
        event.preventDefault()

        dispatch(deleteAlbum(selectedAlbum))
        dispatch(setFormMode("delete"))
    }

    return ( 
        <>
            <h3>Delete album</h3>
            <hr />
            <form onSubmit={deleteFormHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" disabled defaultValue={selectedAlbum.title}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="releaseDate" className="form-label">Release date:</label>
                    <input type="date" className="form-control" disabled defaultValue={selectedAlbum.releaseDate}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="artist" className="form-label">Artist:</label>
                    <input type="text" className="form-control" disabled defaultValue={selectedAlbum.artist}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="score" className="form-label">Score:</label>
                    <input type="number" className="form-control" disabled min={1}  defaultValue={selectedAlbum.score}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price:</label>
                    <input type="number" className="form-control" disabled min={1} defaultValue={selectedAlbum.price}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="coverAlbumUrl" className="form-label">Cover album:</label>
                    <input type="text" className="form-control" disabled defaultValue={selectedAlbum.coverAlbumUrl}/>
                </div>
                <div className="text-end">
                    <button className="btn btn-danger">Confirm removal</button>
                </div>
            </form>
        </>
     );
}
 
export default DeleteAlbumForm;