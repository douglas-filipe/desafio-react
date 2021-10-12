import toast from "react-hot-toast";
import { useMusic } from "../../contexts/music";

export const SearchResults = () => {
  const {
    listMusics,
    musicDate,
    musicTemp,
    musicCity,
    musicStyle,
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
      toast.success("Playlist salva")
    }else{
      toast.error("Playlist já foi salva")
    }


  };

  return (
    <div>
      {listMusics &&
        listMusics.map((music) => {
          return (
            <>
              <p>{music.title}</p>
            </>
          );
        })}
      {listMusics.length === 0 ? (
        <p>Pesquise sua cidade acima</p>
      ) : (
        <button onClick={addToLocalStorage}>Salvar playlist</button>
      )}
    </div>
  );
};
