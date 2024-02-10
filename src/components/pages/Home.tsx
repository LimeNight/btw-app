import { toast } from "react-toastify";
import Rating from "../shared/Rating";
import { toastOption } from "../../constants/toastOption";

function Home() {
  return (
    <>
    <div>
      <p>Hello ez a főoldal!</p>
      <button onClick={() => toast.success("🦄 Wow so easy!", toastOption)}>TOAST</button>
      <Rating rate={3} outOf={5}/>
    </div>
    </>
  )
}

export default Home