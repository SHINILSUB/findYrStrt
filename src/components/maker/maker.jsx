import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "sean",
      type: "crossfit",
      gym: "alright",
      location: "yongin",
      squat1rm: "205lb",
      benchpress: "155lb",
      deadlift: "205lb",
      fileName: "sean",
      fileUrl: "sean.png",
    },
    2: {
      id: "2",
      name: "sean1",
      type: "crossfit",
      gym: "alright",
      location: "yongin",
      squat1rm: "205lb",
      benchpress: "155lb",
      deadlift: "205lb",
      fileName: "sean",
      fileUrl: "sean.png",
    },
    3: {
      id: "3",
      name: "sean2",
      type: "crossfit",
      gym: "alright",
      location: "yongin",
      squat1rm: "205lb",
      benchpress: "155lb",
      deadlift: "205lb",
      fileName: "sean",
      fileUrl: "null",
    },
  });
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
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
