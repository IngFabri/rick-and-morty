import Card from './Card';

export default function Cards({ characters, onClose}) {
   return <div>{characters.map(({ id, name, status, species, gender, origin, image }) => {
      return <Card onClose={onClose} id={id} key={id} name={name} status={status} origin={origin.name} gender={gender} species={species} image={image} ></Card>
   })}</div>;
}
