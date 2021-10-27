import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService, cardRepository }) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [cards, setCards] = useState({  });
  const [userId, setuserId] = useState(historyState && historyState.id);

  const onLogout = () => {
    authService.logout();
  };

useEffect(()=>{
  if(!userId){
    return;
  }const stopSync = cardRepository.syncCard(userId, cards => {
    setCards(cards);
  })
  return () => stopSync();
}, [userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {setuserId(user.uid);

      }else {history.push("/");}
    });
  });
  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });cardRepository.saveCard(userId, cards)
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });cardRepository.removeCard(userId,cards)
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
        FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
