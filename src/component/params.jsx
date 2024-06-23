
import { useParams } from "react-router-dom";

function Params() {
    let param = useParams()
    let { Id } = param
    console.log(param)

    return (
        <>
            <h2>This is a page of.....{Id}</h2>
        </>
    )
}

export default Params;