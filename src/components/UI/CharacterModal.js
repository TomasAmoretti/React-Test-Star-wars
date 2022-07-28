import React from "react";
import ReactDom from "react-dom";
import classes from "./CharacterModal.module.css";
import Card from "./Card";
import Button from "./Button";

const BackDrop = props => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

const ModalOverlay = props => {
  return <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.character.name}</h2>
    </header>
    <div className={classes.content}>
      <p className={classes.description}>Birth name: {props.character.birth_year}</p>
    </div>
    <div className={classes.content}>
      <p className={classes.description}>Eye color: {props.character.eye_color}</p>
    </div>
    <div className={classes.content}>
      <p className={classes.description}>Hair color: {props.character.hair_color}</p>
    </div>
    <div className={classes.content}>
      <p className={classes.description}>Gender: {props.character.gender}</p>
    </div>
    <div className={classes.content}>
      <p className={classes.description}>Height: {props.character.height}</p>
    </div>
    <div className={classes.content}>
      <p className={classes.description}>Mass: {props.character.mass}</p>
    </div>
    <div className={classes.content}>
      <p className={classes.description}>Skin color: {props.character.skin_color}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.onConfirm}>Ok</Button>
    </footer>
  </Card>
}

const CharacterModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<BackDrop onConfirm={props.onConfirm}/>, document.getElementById("backdrop-root"))}
      {ReactDom.createPortal(<ModalOverlay title={props.title} character={props.character} message={props.message} onConfirm={props.onConfirm} />, document.getElementById("overlay-root"))}
    </React.Fragment>
  );
};

export default CharacterModal;
