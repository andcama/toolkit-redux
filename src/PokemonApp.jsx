import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemons, pokemonSlice } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  const {isLoading,page,pokemons} = useSelector(state=>state.pokemons);

  useEffect(() => {
    dispatch(GetPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading :{isLoading ? 'True':'False'} </span>
      <ul>
        {
          pokemons.map(({name})=>(
            <li key={name}>{name}</li>
          ))
        }
      </ul>
      <button disabled={isLoading} onClick={()=>dispatch(GetPokemons(page))}>Next Page</button>
    </>
  );
};
