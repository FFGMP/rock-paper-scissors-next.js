import { create } from "zustand";

// Define the type of the store
type StoreGameValues = {
  playerScore: number;
  increasePlayerScore: () => void;
  reducePlayerScore: () => void;
};

// Create a store with the initial values
export const useStoreGameValues = create<StoreGameValues>((set) => ({
  playerScore: 0,
  reducePlayerScore: () =>
    set((state) => ({ playerScore: state.playerScore - 1 })),
  increasePlayerScore: () =>
    set((state) => ({ playerScore: state.playerScore + 1 })),
}));
