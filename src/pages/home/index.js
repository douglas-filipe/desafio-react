import { useForm } from "react-hook-form";
import { useMusic } from "../../contexts/music";
import { Container } from "./styles";
import { SearchResults } from "../../components/searchResults";

export const Home = () => {

  const { searchCity } = useMusic();

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("city", { required: true })}
          placeholder={errors.city && "*Campo obrigatório"}
        />
        <button type="submit">Enviar</button>
      </form>

      <SearchResults/>
    </Container>
  );
};
