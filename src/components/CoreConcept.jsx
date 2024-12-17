
export default function CoreConcept({image='placeholder img',description='default desc',title='Title'}){
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}