import React, { createContext } from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';
import State from './components/State';
import Context from './components/Context';


type TextOrNull = string | null;
type fixed = "Isso" | "aquilo" | "aquele";

interface IAppContenxt {
  language: string,
  frameworks: string,
  projects: number
}


export const AppContext = createContext<IAppContenxt | null>(null)


function App() {

  const name: string = "Gabriel";
  const age: number = 30;
  const isWorking: boolean = true;

  const userGreeting = (name: string): string => {
    return `Ola, ${name}`
  }


  const myText: TextOrNull = "Ola";
  const secondTxt: TextOrNull = null;

  const testandoFixed: fixed = "Isso";

  const contextValue: IAppContenxt = {
    language: "Js",
    frameworks: "Express",
    projects: 5
  };

  return (
    <AppContext.Provider value ={ contextValue}>
      <div className="App">
        <h1>React & Typescript</h1>
        <h2>Nome: {name}</h2>
        <p>Age: {age}</p>

        {isWorking && (
          <div>
            <p>Is working</p>
          </div>
        )}

        <h3>{userGreeting(name)}</h3>

        <FirstComponent />
        <SecondComponent
          name="Rafael"
        />

        <Destructuring
          title="Primeiro post"
          content="Conteudo do post"
          commentsQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
        />

        <Destructuring
          title="Segundo post"
          content="Conteudo do post 2"
          commentsQty={20}
          tags={["py", "thon"]}
          category={Category.PY}
        />

        <State />

        {myText && (
          <p>Possui texto</p>
        )}
        {!secondTxt && (
          <p>Não possui texto</p>
        )}
        {testandoFixed}
      </div>

      <Context />

      
    </AppContext.Provider>
  );
}

export default App;

