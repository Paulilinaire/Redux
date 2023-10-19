import { useDispatch, useSelector } from 'react-redux'
import Modal from './components/shared/Modal'
import NavBar from './components/shared/Navbar'
import AddAlbumForm from './components/albums/AddAlbumForm'
import { fetchAlbums, setFormMode } from './components/albums/albumItemsSlice'
import AlbumDisplay from './components/albums/AlbumDisplay'
import { BASE_DB_URL } from './fireBaseConfig'
import { useEffect } from 'react'
import EditAlbumForm from './components/albums/EditAlbumForm'
import DeleteAlbumForm from './components/albums/DeleteAlbumForm'



function App() {
  const user = useSelector(state => state.auth.user)
  const formMode = useSelector(state => state.albums.formMode)
  const albums = useSelector(state => state.albums.albums)
  const dispatch = useDispatch()
  
  const refreshAlbums = async () => {
    try {
      const response = await fetch(`${BASE_DB_URL}/Albums.json`)

      if(!response.ok){
        throw new Error("Something went wrong during the GET request")
      }

      const data = await response.json()

      const tmpAlbums = []
      for (const key in data) {
        tmpAlbums.push({id: key, ...data[key]})
      }

      dispatch(fetchAlbums(tmpAlbums))
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    refreshAlbums()
  }, [])




  return (
    <>
      {formMode === "add" && <Modal onClose={() => dispatch(setFormMode(""))}><AddAlbumForm/></Modal>}
      {formMode === "delete" && <Modal onClose={() => dispatch(setFormMode(""))}><DeleteAlbumForm/></Modal>}
      {formMode === "edit" && <Modal onClose={() => dispatch(setFormMode(""))}><EditAlbumForm/></Modal>}
      <header>
        <NavBar />
      </header>
      <main className='container'>
        <div className='row my-3'>
          <div className='col-12 offset-1 bg-dark rounded text-light p-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <h3>Albums</h3>
              {user && <button className='btn btn-success' onClick={() => dispatch(setFormMode("add"))}><i class="bi bi-plus-circle me-2"></i>Add</button>}
            </div>
              <div className= "col-3">
                <label htmlFor="filter">filtered by:</label>
                <select className="form-select">
                  <option selected>Select a filter</option>
                  <option value="title">Title</option>
                  <option value="artist">Artist</option>
                  <option value="score">Score</option>
                </select>
              </div>
            <hr />
            <div className="d-flex align-items-center">
            {
              albums.length === 0 ? (
                <p>There is no album...</p>
              ) : albums.map(album => <AlbumDisplay key={album.id} album={album} />)
            }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
