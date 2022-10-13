import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)

  useEffect(() => {
    getUsersData()
  }, [])

  const getUsersData = () => {
    setLoading(true)
    fetch(`https://reqres.in/api/users?page=${page % 2 + 1}`)
    .then(response => response.json())
    .then(responseAsJSON => {
      console.log(responseAsJSON.data)
      setUsers(responseAsJSON.data)
      setTimeout(()=>{
        setLoading(false)
        setPage(page + 1)
      }, 2000)
    })
  }

  return (
    <>
      <nav>
        <h1>Users List</h1>
        <button onClick={getUsersData}>Get Users</button>
      </nav>
      {loading ? <>
        <div className='loading-container'>
          <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>
        </div>
      </> : <>
        <div className='users-container'>
          {users.map(user => {
            return <div key={user.id} className='user-card'>
              <div className='img-container'>
                <img src={user.avatar} alt={user.first_name} />
              </div>
              <div className='text-container'>
                <h3>{user.first_name} {user.last_name}</h3>
                <p>{user.email}</p>
              </div>
            </div>
          })}
        </div>
      </>}
    </>
  );
}

export default App;
