import { useState } from "react";
import * as ImIcons from "react-icons/im";
import { Note, CloseIcon, Meme, Text } from "../Styles/NoteStyles"


export default function NotePop() {
  const [hideNote, setHideNote] = useState(false);

  const handleHideNote = () => {
    setHideNote(true);
  };

  return (
    <>
      {!hideNote ? (
        <Note>
          <CloseIcon>
            <ImIcons.ImCross onClick={handleHideNote} />
          </CloseIcon>
          <Meme>
            <img alt='spongebob-meme' className="meme" src="/sponge.gif"></img>
          </Meme>
          <Text>
            <p>
              Hej, tu Ola! 🙋🏼‍♀️
              <br />
              Dzięki za możliwość wykonania zadania! Największą frajdę sprawił mi Redux, którego używałam
              pierwszy raz w życiu i bardzo się cieszę, że miałam możliwość
              nauczenia się czegoś nowego. Jednak z obawy o jakość końcowego
              produktu, resztę funkcjonalności napisałam w React. Niestety najbardziej wymęczył mnie Navbar (zresztą jak
              zawsze) i jego ustawienie żeby był na górze strony i miał
              wycentrowane elementy. Oprócz
              tego całe zadanie było świetne i miałam okazję przećwiczyć
              wszystko czego się do tej pory nauczyłam co dało mi kopa i
              motywację. Podsumowując: więcej plusów niż minusów.
              Mam nadzieję, że apka się spodoba i będziemy mieli okazję szerzej
              omówić to zadanie. 👋🏼
            </p>
          </Text>
        </Note>
      ) : null}
    </>
  );
}
