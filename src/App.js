import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  
    const [word,setWord] = useState()
    const [result,setResult] = useState()

     const getLang = async () =>{
      if(word)
      {
        axios.post("https://libretranslate.de/translate",{
          "q":word,
          "source":"tr",
          "target":"en"
        }).then(response =>{
          setResult(response.data.translatedText)
        })
      }
      else
      {
        setResult("")
      }
      
    }

    return (
      <div>
          <div className='text-4xl my-20 text-center'>Turkish to English Word Translator</div>

              <input type="text" className="p-3 block mx-auto my-10 bg-slate-600" value={word} onChange={(e) =>setWord(e.target.value)}/> 
              <button onClick={getLang} className="block mx-auto  p-3 bg-slate-400 rounded-lg hover:bg-slate-600 duration-200 hover:cursor-pointer active:bg-slate-700 active:scale-90">Translate</button>
              <p className="text-3xl my-10 text-center">{result}</p>
      </div>
  );
}

export default App;
