import { useState } from "react";
import "./Contacts.css";
import Tallinn from "./locations/Tallinn";
import Tartu from "./locations/Tartu";
import Parnu from "./locations/Parnu";
import Viljandi from "./locations/Viljandi";

const Contacts = () => {
  const [openTallinn, setOpenTallinn] = useState(false);
  const [openTartu, setOpenTartu] = useState(false);
  const [openParnu, setOpenParnu] = useState(false);
  const [openViljandi, setOpenViljandi] = useState(false);

  return (
    <div>
      <div className="intro">
        <h2>Feel free to check out our stores all over the country</h2>
      </div>
      <div className="contacts">
        <button className="button1" onClick={() => setOpenTallinn(true)}>
          Tallinn
        </button>
        <button className="button2" onClick={() => setOpenTartu(true)}>
          Tartu
        </button>
        <button className="button3" onClick={() => setOpenParnu(true)}>
          Pärnu
        </button>
        <button className="button4" onClick={() => setOpenViljandi(true)}>
          Viljandi
        </button>
      </div>
      <Tallinn openTallinn={openTallinn} onClose={() => setOpenTallinn(false)}>
        Tallinn
      </Tallinn>
      <Tartu openTartu={openTartu} onClose={() => setOpenTartu(false)}>
        Tallinn
      </Tartu>
      <Parnu openParnu={openParnu} onClose={() => setOpenParnu(false)}>
        Tallinn
      </Parnu>
      <Viljandi openViljandi={openViljandi} onClose={() => setOpenViljandi(false)}>
        Tallinn
      </Viljandi>
    </div>
  );
};

export default Contacts;
