import { Header } from "../components/Header";
import "./css/pageNotFound.css"

export function PageNotFound(){
    return(
        <>
            <div>
                <Header />
            </div>
            <div className="pageNotFound">
                Page Not Found!
            </div>
        </>
    )
}