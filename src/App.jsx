import { useContext } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";


function App() {
  
  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
        <Count />
    </div>
  )
}

function Count({setCount}) {
  return <div>
    <RecoilRoot>
    <CountRenderer />
    <Buttons />
    </RecoilRoot>
  </div>
}


function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>
    <b>
    {count}
    </b>
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer(){
  const count = useRecoilValue(countAtom);
  if(count %2 ==0){
    return <div>
      It is Even
    </div>
  }
}

function Buttons() {
  //const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
