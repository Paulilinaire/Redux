import { useRef } from "react";
import { useDispatch } from "react-redux";
import { postAlbum } from "./albumItemsSlice";

const AddAlbumForm = () => {
    const dispatch = useDispatch()
    const titleRef = useRef()
    const releaseDateRef = useRef()
    const artistRef = useRef()
    const albumCoverUrlRef = useRef()
    const scoreRef = useRef()

    const addAlbum = (event) => {
        event.preventDefault()

        const newAlbum = {
            title: titleRef.current.value,
            releaseDate: releaseDateRef.current.value,
            artist: artistRef.current.value,
            albumCoverUrl: albumCoverUrlRef.current.value,
            score: scoreRef.current.value
        }
        dispatch(postAlbum(newAlbum))
    }

    return ( 
        <>
            <h1>Add Album</h1>
            <hr />
            <form onSubmit={addAlbum}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" required ref={titleRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="releaseDate" className="form-label">Release date:</label>
                    <input type="number" className="form-control" required min={1} ref={releaseDateRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="artist" className="form-label">Artist:</label>
                    <input type="number" className="form-control" required min={1} ref={artistRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="score" className="form-label">Score:</label>
                    <input type="number" className="form-control" required min={1} ref={scoreRef}/>
                </div>
                <div className="text-end">
                    <button className="btn btn-success">Add</button>
                </div>
            </form>
        </>
     );
}
 
export default AddAlbumForm;