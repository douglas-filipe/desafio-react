import toast from "react-hot-toast";
import { useMusic } from "../../contexts/music";
import { Container } from "./styles";
import { FaSave } from 'react-icons/fa'

export const SearchResults = () => {
  const {
    listMusics,
    musicDate,
    musicTemp,
    musicCity,
    musicStyle,
    setNumber
  } = useMusic();

  const addToLocalStorage = () => {
    const playlist = listMusics.map((m) => {
      return m.title;
    });

    const listAfter = { 
      date: musicDate, 
      playlist: playlist,
      temp: musicTemp,
      city: musicCity,
      style: musicStyle
    };

    const listBefore = JSON.parse(localStorage.getItem("@music")) || [];
    
    if(!listBefore.map(e=>e.style).includes(listAfter.style)){
      const newList = [...listBefore, listAfter];
      localStorage.setItem("@music", JSON.stringify(newList));
      setNumber((JSON.parse(localStorage.getItem("@music")) || []).length)
      toast.success("Playlist salva")
    }else{
      toast.error("Playlist já foi salva")
    }

  };

  return (
    <Container>
      {listMusics.length === 0 ?
      <></>
      :
      <h1>Principais musicas de {musicCity}:</h1>
      }
      {listMusics &&
        listMusics.map((music) => {
          return (
            <>
              <p className="Musics">{music.title}</p>
            </>
          );
        })}
      {listMusics.length === 0 ? (
        <p>Pesquise sua cidade acima</p>
      ) : (
        <button onClick={addToLocalStorage}><FaSave></FaSave>Salvar playlist</button>
      )}
    </Container>
  );
};
