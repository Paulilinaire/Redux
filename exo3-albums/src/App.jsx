import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Modal from './components/shared/Modal'
import NavBar from './components/shared/Navbar'
import AlbumDisplay from './components/albums/AlbumDisplay'
import AddAlbumForm from './components/albums/AddAlbumForm'
import { setFormMode } from './components/albums/albumItemsSlice'



function App() {
  const user = useSelector(state => state.auth.user)
  const formMode = useSelector(state => state.albums.formMode)
  const albums = useSelector(state => state.albums.albums)
  const dispatch = useDispatch()


  return (
    <>
      {formMode === "add" && <Modal onClose={() => dispatch(setFormMode(""))}><AddAlbumForm/></Modal>}
      <header>
        <NavBar />
      </header>
      <main className='container'>
        <div className='row my-3'>
          <div className='col-10 offset-1 bg-dark rounded text-light p-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <h3>Albums List</h3>
              {user && <button className='btn btn-success' onClick={() => dispatch(setFormMode("add"))}>Add</button>}
            </div>
            <hr />
            {
              albums.length === 0 ? (
                <p>Il n'y a pas de recettes</p>
              ) : albums.map(album => <AlbumDisplay key={album.id} album={album} />)
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default App
