import { useMusic } from "../../contexts/music";

export const SearchResults = () => {
  
  const { listMusics, musicDate } = useMusic();
  
  const addToLocalStorage = () => {

    const playlist = listMusics.map((m) => {
        return m.title
    })

    const listAfter = [musicDate, playlist]

    const listBefore = JSON.parse(localStorage.getItem("@music")) || []

    const newList = [...listBefore, listAfter]

    localStorage.setItem("@music", JSON.stringify(newList))
  }

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
        {listMusics.length === 0 ?
        <p>Pesquise sua cidade acima</p>
        :
        <button onClick={addToLocalStorage}>Salvar playlist</button>
        }
    </div>
  );
};
