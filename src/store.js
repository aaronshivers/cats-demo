import create from 'zustand';

const useStore = create((set) => ({
  facts: null,
  breeds: null,
  fetchFacts: async () => {
    const response = await fetch('https://catfact.ninja/facts');
    const facts = await response.json();
    set((state) => ({ ...state, facts }));
  },
  fetchBreeds: async () => {
    const response = await fetch('https://catfact.ninja/breeds');
    const breeds = await response.json();
    set((state) => ({ ...state, breeds }));
  },
}));

export default useStore;
