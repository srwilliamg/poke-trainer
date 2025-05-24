import { createSlice } from '@reduxjs/toolkit';

interface ITrainer {
  name: string | null;
  pokemonIds: number[];
}

const trainerSlice = createSlice({
  name: 'trainer',
  initialState: {
    name: '',
    pokemonIds: [],
  } as ITrainer,
  reducers: {
    setName: (state, action) => {
      console.log('🚀 ~ state:', state, action);
      state.name = action.payload;
    },
    addPokemon: (state, action) => {
      state.pokemonIds.push(action.payload);
    },
  },
});

export const { addPokemon, setName } = trainerSlice.actions;
export default trainerSlice.reducer;
