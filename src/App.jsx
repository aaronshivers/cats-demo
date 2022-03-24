import React, {useState} from 'react';
import Users from "./components/Users"
import Posts from "./components/Posts"


const USERS = 0
const POSTS = 1

const App = () => {
  const [view, setView] = useState(null)

  const handleUsersButtonClick = () => setView(USERS)
  const handlePostsButtonClick = () => setView(POSTS)

  return (
    <main>
      <button onClick={handleUsersButtonClick}>Users</button>
      <button onClick={handlePostsButtonClick}>Posts</button>
      {
        view === USERS ? <Users/> : null
      }
      {
        view === POSTS ? <Posts/> : null
      }
    </main>
  );
}

export default App;
