import { useDispatch, useSelector } from "react-redux";
import { patchAlbum } from "./albumItemsSlice";
import { setFormMode } from "./albumItemsSlice";
import { useRef } from "react";

const EditAlbumForm = () => {
    const selectedAlbum = useSelector(state => state.albums.selectedAlbum)
    const dispatch = useDispatch()
    console.log(selectedAlbum);
    
    const titleRef = useRef()
    const releaseDateRef = useRef()
    const artistRef = useRef()
    const scoreRef = useRef()
    const priceRef = useRef()
    const coverAlbumUrlRef = useRef()

    const editFormHandler = async (event) => {
        event.preventDefault()
        
        const newAlbum = {
            title: titleRef.current.value,
            releaseDate: releaseDateRef.current.value,
            artist: artistRef.current.value,
            score: +scoreRef.current.value,
            price: +priceRef.current.value,
            coverAlbumUrl: coverAlbumUrlRef.current.value
        }

        dispatch(patchAlbum({...newAlbum, id: selectedAlbum.id}))
        dispatch(setFormMode("edit"))
        console.log(newAlbum);

    }


    return ( 
        <>
            <h3>Edit album</h3>
            <hr />
            <form onSubmit={editFormHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" required ref={titleRef} defaultValue={selectedAlbum.title}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="releaseDate" className="form-label">Release date:</label>
                    <input type="date" className="form-control" required ref={releaseDateRef} defaultValue={selectedAlbum.releaseDate}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="artist" className="form-label">Artist:</label>
                    <input type="text" className="form-control" required ref={artistRef} defaultValue={selectedAlbum.artist}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="score" className="form-label">Score:</label>
                    <input type="number" className="form-control" required min={1} ref={scoreRef} defaultValue={selectedAlbum.score}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price:</label>
                    <input type="number" className="form-control" required min={1} ref={priceRef} defaultValue={selectedAlbum.price}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="coverAlbumUrl" className="form-label">Cover album:</label>
                    <input type="text" className="form-control" ref={coverAlbumUrlRef} defaultValue={selectedAlbum.coverAlbumUrl}/>
                </div>
                <div className="text-end">
                    <button className="btn btn-warning">Edit</button>
                </div>
            </form>
        </>
     );
}
 
export default EditAlbumForm;