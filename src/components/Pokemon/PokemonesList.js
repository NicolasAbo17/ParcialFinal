import React from "react";

export default function PokemonesList(props) {
  return (
    <tr >
      <th scope="row">{props.pokemon.id}</th>
      <td><img src={props.pokemon.ThumbnailImage} alt={"Image_" + props.pokemon.name}></img></td>
      <td>{props.pokemon.name}</td>
      <td>{props.pokemon.description}</td>
      <td>{props.pokemon.height}</td>
      <td>{props.pokemon.weight}</td>
      <td>
        {props.pokemon.type.map((actualType) => {
          return (
            <div className="col-12">
              <span className="badge badge-secondary">{actualType}</span>
            </div>
          );
        })}
      </td>
    </tr>
  );
}
