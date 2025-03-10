import Main from "./main/Main";
import Typewriter from "typewriter-effect"

export default function App() {
  return (
    <div className="flex flex-col items-center m-10">
      <Typewriter options={{
        strings: "Tenzies", 
        autoStart: true, 
        wrapperClassName: "text-theme-light text-3xl font-theme",
        cursorClassName: "text-theme-light text-3xl font-theme Typewriter__cursor",
        cursor: "_",
      }}
      />
      {/* <h1 className="">Tenzies</h1> */}
      <Main/>
    </div>
  )
}
