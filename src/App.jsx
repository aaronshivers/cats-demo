import React, {useState} from 'react';
import Users from "./components/Users"
import Posts from "./components/Posts"
import useFetch from './hooks/useFetch';

const USERS = 0
const POSTS = 1

const App = () => {
  const [view, setView] = useState(null)

  const {data: users} = useFetch("https://jsonplaceholder.typicode.com/users")
  const {data: posts} = useFetch("https://jsonplaceholder.typicode.com/posts")

  const handleUsersButtonClick = () => setView(USERS)
  const handlePostsButtonClick = () => setView(POSTS)

  return (
    <main>
      <button onClick={handleUsersButtonClick}>Users</button>
      <button onClick={handlePostsButtonClick}>Posts</button>
      {
        view === USERS ? <Users users={users} /> : null
      }
      {
        view === POSTS ? <Posts posts={posts} /> : null
      }
    </main>
  );
}

export default App;
