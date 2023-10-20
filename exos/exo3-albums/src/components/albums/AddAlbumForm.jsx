import { useRef } from "react";
import { useDispatch } from "react-redux";
import { postAlbum } from "./albumItemsSlice";
import { setFormMode } from "./albumItemsSlice";

const AddAlbumForm = () => {
    const dispatch = useDispatch()

    const titleRef = useRef()
    const releaseDateRef = useRef()
    const artistRef = useRef()
    const scoreRef = useRef()
    const priceRef = useRef()
    const coverAlbumUrlRef = useRef()

    const addFormHandler = (event) => {
        event.preventDefault()

        const newAlbum = {
            title: titleRef.current.value,
            releaseDate: releaseDateRef.current.value,
            artist: artistRef.current.value,
            score: +scoreRef.current.value,
            price: +priceRef.current.value,
            coverAlbumUrl: coverAlbumUrlRef.current.value
        }
        dispatch(postAlbum(newAlbum))
        dispatch(setFormMode("add"))
    }

    return ( 
        <>
            <h3>Add album</h3>
            <hr />
            <form onSubmit={addFormHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" required ref={titleRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="releaseDate" className="form-label">Release date:</label>
                    <input type="date" className="form-control" required ref={releaseDateRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="artist" className="form-label">Artist:</label>
                    <input type="text" className="form-control" required ref={artistRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="score" className="form-label">Score(/5):</label>
                    <input type="number" className="form-control" required min={1} ref={scoreRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price:</label>
                    <input type="number" className="form-control" required min={1} ref={priceRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="coverAlbumUrl" className="form-label">Cover album:</label>
                    <input type="text" className="form-control" ref={coverAlbumUrlRef}/>
                </div>
                <div className="text-end">
                    <button className="btn btn-success">Add</button>
                </div>
            </form>
        </>
     );
}
 
export default AddAlbumForm;