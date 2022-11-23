import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useModule } from "../hooks/useModule";

const Search = () => {
  const [listFetched, setListFetched] = useState(null);
  const [list, setList] = useState([]);
  const { register, handleSubmit } = useForm();
  const { getGifByWord } = useModule(null);
  const [word, setWord] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setList(listFetched);
    fetchData(word);
    console.log(listFetched);
    setIsLoading(false);
  }, [word]);

  const fetchData = async (data) => {
    console.log(data);
    const response = await getGifByWord(data);
    setListFetched(response);
  };
  const onSubmit = async (data) => {
    setWord(data.word);
    setIsLoading(true);
  };
  return (
    <div className="container">
      <main className="search">
        <form className="search_form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="search_form-text"
            {...register("word")}
          />
          <button className="search_form-button" id="button">
            Buscar
          </button>
        </form>
        <div className="separator" />
        {isLoading && <span>Loading....</span>}
        <section className="search_result">
          {listFetched &&
            listFetched.map((video, index) => {
              return (
                <div key={index} className="search_result_section">
                  <img
                    src={video.direccionGif}
                    alt={word}
                    className="search_result_section-video"
                  />
                </div>
              );
            })}
        </section>
      </main>
    </div>
  );
};

export default Search;
