import { Img, Card, Button } from "../../components/ui";
import imageBook from "../../assets/images/ebook.png";
import { iconLocation, iconLight, iconTimes } from "../../assets/images/icons";
import "./Home.scss"


export default function Home(){
    return (
        <>
            <div className="containerEbook">
                <Img src={imageBook} alt={"Obal knihy. Na rovinu o penězich"}/>
            </div>
            <div className="containerEbookText">
                <h1>Na rovinu<br></br>o penězich</h1>
                <h3>Tohle vám nikdo neřekne.</h3>
                <p className="ebookText">Upřímná a klidná kniha o tom, jak přemýšlet o penězích jinak. Ale také o rovnováze mezi jistotou a životem.</p>
                <Button text="Stáhnout ukázku zdarma"/>
                <Button text="Koupit e-book"/>
            </div>
            <div className="containerAboutBook">
                <h2>O knize</h2>
                <p className="aboutBook">,,Když jsem se začal zajímat o peníze, zjistil jsem, že většina rad je jen teorie o tom, jak rychle a pohádkově zbohatnout - ne o skutečném životě. Tahle kniha ale není o motivaci utrácet za další kurzy na štěstí. Je o skutečné práci s penězi.'' - S. Michael</p>
            </div>
            <div className="headerCards">
                <h2>Pro koho je kniha</h2>
                <div className="containerCards">
                    <Card src={iconLocation} alt="icona hvězdy" text="Pro ty, kdo chtějí konečně rozumět svým výdajům."/>
                    <Card src={iconLight} alt="icona svítící žárovky" text="Pro ty, kdo hledají smysl, ne jen chytají cíle."/>
                    <Card src={iconTimes} alt="icona přesýpacích hodin" text="Pro ty, kdo chtějí žít v klidu, ne ve stresu."/>
                </div>
            </div>
            <div className="containerAboutBook">
                <h2>Pár slov ode mě</h2>
                <p className="aboutBook">Kolem devatenácti jsem si začal víc všímat svých peněz – kam mizí, jak je vydělat, jak s nimi   
                    zacházet, a hlavně, jak o ně nepřijít. Postupně jsem se obklopoval lidmi, kteří to měli podobně. Bavili jsme se o podnikání, o investování, o tom, co funguje, i o tom, co ne. 
                </p>  
                <p className="aboutBook">
                    Někteří z těch lidí dnes vedou firmy, jiní cestují po světě nebo se naplno věnují rodině. A pár z nich to mělo těžší – zadlužili se, naletěli, nebo prostě zkusili štěstí a nevyšlo to.
                </p>
                <p className="aboutBook">
                    A právě o tom tahle kniha je. O skutečných příbězích, o zkušenostech, o tom, co peníze v našem životě opravdu znamenají. Nechci nic přikrášlovat. Chci o tom mluvit na rovinu – tak, jak bychom si o tom povídali mezi čtyřma očima po letech důvěry.
                </p>
                <Button text="Koupit e-book"/>
            </div>
        </>
    )
}