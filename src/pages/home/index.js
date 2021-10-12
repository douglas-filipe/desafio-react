import { useForm } from "react-hook-form";
import { useMusic } from "../../contexts/music";
import { Container } from "./styles";
import { SearchResults } from "../../components/searchResults";
import { Link } from "react-router-dom";
import { MdQueueMusic } from 'react-icons/md'
import { useState } from "react";


export const Home = () => {

  const { searchCity, number, setNumber } = useMusic();
  
  setNumber((JSON.parse(localStorage.getItem("@music")) || []).length)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ city }) => {
    searchCity(city);
  };

  return (
    <Container>
      <Link to="/playlist" className="Playlist">
        <MdQueueMusic/>
        <h3>Playlist</h3>
        <span className="Number">{number}</span>
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("city", { required: true })}
          placeholder={errors.city && "*Campo obrigatório"}
        />
        <button type="submit">Pesquisar</button>
      </form>
      <SearchResults/>
    </Container>
  );
};
