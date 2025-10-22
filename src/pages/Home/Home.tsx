import { Img } from "../../components/ui/Img/Img";
import { Button } from "../../components/ui/Button/Button";
import Book from "../../assets/images/ebook.png";
import "./Home.scss"


export default function Home(){
    return (
        <div>
            <div className="containerEbook">
                <Img src={Book} alt={"Obal knihy Na rovinu o penězich"}/>
            </div>
            <div className="containerEbookText">
                <h1>Na rovinu<br></br>o penězich</h1>
                <h3>Tohle vám nikdo neřekne.</h3>
                <p className="ebookText">Upřímná a klidná kniha o tom, jak přemýšlet o penězích jinak. Ale také o rovnováze mezi jistotou a životem.</p>
                <Button text="Stáhnout ukázku zdarma"/>
                <Button text="Koupit ebook"/>
            </div>
        </div>
    )
}