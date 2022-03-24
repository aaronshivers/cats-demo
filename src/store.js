import create from 'zustand';

const useStore = create((set) => ({
  users: [],
  posts: [],
  fetchUsers: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    set((state) => ({ ...state, users }));
  },
  fetchPosts: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    set((state) => ({ ...state, posts }));
  },
}))

export default useStore;
