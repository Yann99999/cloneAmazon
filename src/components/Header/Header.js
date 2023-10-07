import SuperiorHeader from "./SuperiorHeader/SuperiorHeader"
import MidHeader from "./MidHeader/MidHeader"
import InferiorHeader from "./InferiorHeader/InferiorHeader"

const Header = () => {
  return (
    <header>
        <div className="grid text-white bg-black">
           <SuperiorHeader/>
           <MidHeader/>
           <InferiorHeader/>
        </div>
    </header>
  )
}

export default Header