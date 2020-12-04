import React from "react";
import { FormattedPlural, FormattedNumber, FormattedMessage} from "react-intl";


export default function PokemonesList(props) {

  /*const rowEventHandlersChild = (pokemonDesc, pokemonCast, pokemonImg, e) => {
    var sendInfo = [pokemonDesc, pokemonCast, pokemonImg, props.pokemon.name]
    props.setPokemonSelected(sendInfo);
  }*/
  
  return (
    <tr >
      <th scope="row">{props.pokemon.id}</th>
      <td><img src={props.pokemon.ThumbnailImage} alt={"Image_" + props.pokemon.name}></img></td>
      <td>{props.pokemon.name}</td>
      <td>{props.pokemon.description}</td>
      <td>{props.pokemon.height}</td>
      <td>{props.pokemon.weight}</td>
      <td>
      {props.pokemon.type.map((ma) => {
              return (
                <div class="col-12">
                  <span class="badge badge-secondary">{ma}</span>
                </div>
              );
            })}
      </td>
    </tr>
  );
}
