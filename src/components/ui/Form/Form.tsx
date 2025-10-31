import { useState } from "react";
import { Input } from "./Input";
import { Button } from "../Button/Button";
import "./Form.scss";

export function Form() {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] =useState("");
  const [addres , setAddres] = useState({
    addres: "",
    city: "",
    postCode: "",
    state: "",
    numberPhone: ""
  });

  return (
    <form className="containerForm">
        <h2>Fakturační adresa</h2>
        <Input
            type="text"
            placeholder="Křestní jméno"
            name="name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required= {true}
        />

        <Input
            type="text"
            placeholder="Příjmení"
            name="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required= {true}
        />

        <Input
            type="text"
            placeholder="Ulice, č.p."
            name="addres"
            value={addres.addres}
            onChange={(e) => setAddres({...addres, addres: e.target.value})}
            required= {true}
        />

        <Input
            type="number"
            placeholder="PSČ"
            name="postcode"
            value={addres.postCode}
            onChange={(e) => setAddres({...addres, postCode: e.target.value})}
            required= {true}
        />

        <Input
            type="text"
            placeholder="Město"
            name="city"
            value={addres.city}
            onChange={(e) => setAddres({...addres, city: e.target.value})}
            required= {true}
        />

        <Input
            type="text"
            placeholder="Stát"
            name="state"
            value={addres.state}
            onChange={(e) => setAddres({...addres, state: e.target.value})}
            required= {true}
        />

        <Input
            type="numberPhonr"
            placeholder="Telefonní číslo"
            name="numberPhone"
            value={addres.numberPhone}
            onChange={(e) => setAddres({...addres, numberPhone: e.target.value})}
            required= {true}
        />

        <Button text="Odeslat"/>
    </form>
  );
}