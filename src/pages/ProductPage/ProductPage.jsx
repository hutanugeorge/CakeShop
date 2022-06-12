import { useParams } from "react-router-dom";

import NavBar from '../../components/NavBar'

export default () => {

    const {productCategory} = useParams()

    return (
        <div> Hello </div>
    )
}