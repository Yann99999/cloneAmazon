import InferiorFooter from "./InferiorFooter/InferiorFooter"
import MidFooter from "./MidFooter/MidFooter"
import SuperiorFooter from "./SuperiorFooter/SuperiorFooter"

const Footer = () => {
  return (
    <footer className="flex flex-col text-white">
      <SuperiorFooter/>
      <MidFooter/>
      <InferiorFooter/>
    </footer>
  )
}

export default Footer