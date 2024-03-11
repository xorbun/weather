import { useDispatch } from "react-redux"
import { obtainews } from "./redux/actions";

const Backofficefetch=()=>{

    const dispatch=useDispatch();
    const news = dispatch(obtainews());
}
export default Backofficefetch