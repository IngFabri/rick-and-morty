import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards({ characters, onClose}) {
   return <div className={style.Container}>{characters.map(({ id, name, status, species, gender, origin, image }) => {
      return <Card onClose={onClose} id={id} key={id} name={name} status={status} origin={origin.name} gender={gender} species={species} image={image} ></Card>
   })}</div>;
}
