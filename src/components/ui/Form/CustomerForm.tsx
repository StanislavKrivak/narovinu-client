import { useState } from "react";
import { Input, Button, Checkbox} from "../index";
import "./CustomerForm.scss";

export function CustomerForm() {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] =useState("");
  const [address , setAddress] = useState({
    address: "",
    city: "",
    postCode: "",
    state: "",
    numberPhone: ""
  });

  return (
    <form className="containerForm">
        <h2>Fakturační údaje</h2>
        
        <Input
            type="text"
            placeholder="Křestní jméno"
            name="name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
        />

        <Input
            type="text"
            placeholder="Příjmení"
            name="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
        />

        <Input
            type="text"
            placeholder="Ulice, č.p."
            name="address"
            value={address.address}
            onChange={(e) => setAddress({...address, address: e.target.value})}
            required
        />

        <Input
            type="text"
            placeholder="PSČ"
            name="postcode"
            value={address.postCode}
            onChange={(e) => setAddress({...address, postCode: e.target.value})}
            required
        />

        <Input
            type="text"
            placeholder="Město"
            name="city"
            value={address.city}
            onChange={(e) => setAddress({...address, city: e.target.value})}
            required
        />

        <Input
            type="text"
            placeholder="Stát"
            name="state"
            value={address.state}
            onChange={(e) => setAddress({...address, state: e.target.value})}
            required
        />

        <Input
            type="tel"
            placeholder="Telefonní číslo"
            name="numberPhone"
            value={address.numberPhone}
            onChange={(e) => setAddress({...address, numberPhone: e.target.value})}
            required
        />
        
        <Checkbox 
            label="Souhlasím s " 
            href="https://www.google.com" 
            link="obchodními podmínkami" 
            required 
        />

        <Checkbox 
            label="Souhlasím s podmínkami " 
            href="https://www.google.com" 
            link="GDPR" 
            required />

        <Button text="Odeslat"/>
    </form>
  );
}