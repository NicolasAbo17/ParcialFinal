import React, { useState, useEffect } from "react";
import PokemonesList from "./PokemonesList";
import { FormattedMessage } from "react-intl";
import PokemonesGraphic from "./PokemonesGraphic";
import "./Pokemones.css";

export default function Pokemones(props) {
    const urlEspaniol = "https://gist.githubusercontent.com/jhonatan89/e379fadf8ed0f5381a2d8f8f3dea90c3/raw/e2bc20df02828d297f99558551e37959ac97a6f8/pokemon-es.json";
    const urlIngles = "https://gist.githubusercontent.com/jhonatan89/2089276d3ce0faceff8e55fc3459b818/raw/30ee1a77b3e328108faaaa9aaac6f2ddaa3d3711/pokemons-en.json ";

    const [locale, setLocale] = useState(props.lang);
    const [messages, setMessages] = useState([]);
    const [click, setClick] = useState(false);
    const [firstclick, setFirstClick] = useState(0);
    const [value, setValue] = useState([]);

    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("pokemones") === "") {
                setMessages("Loading...");
            } else {
                setMessages(JSON.parse(localStorage.getItem("pokemones")));
            }
        } else {
            fetchData();
        }
    }, []);

    const fetchData = async () => {
        let url = "";
        if (locale === "es") {
            url = urlEspaniol;
        }
        else {
            url = urlIngles
        }
        const resp = await fetch(url);
        const data = await resp.json();

        setMessages(data);
        localStorage.setItem("pokemones", JSON.stringify(data));
    };

    /*const setPokemonSelected = (pokemonInfo) => {
        setValue(pokemonInfo);
        setFirstClick(!firstclick);
        setClick(!click);
    };*/

    return (
        <main>
            <section className="container-pokemones-table max-w__table">
                <div className="bd-grid__table">
                    <table className="table table-striped">
                        <thead class="thead-dark" >
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">
                                    <FormattedMessage
                                        id="table.image"
                                        defaultMessage="image"
                                        description="Image of the pokemon"
                                        values={{ what: "react-intl" }}
                                    />
                                </th>
                                <th scope="col">
                                    <FormattedMessage
                                        id="table.name"
                                        defaultMessage="name"
                                        description="Name of the pokemon"
                                        values={{ what: "react-intl" }}
                                    />
                                </th>
                                <th scope="col">
                                    <FormattedMessage
                                        id="table.description"
                                        defaultMessage="Description"
                                        description="Description of the pokemon"
                                        values={{ what: "react-intl" }}
                                    />
                                </th>
                                <th scope="col">
                                    <FormattedMessage
                                        id="table.height"
                                        defaultMessage="Height"
                                        description="Height of the pokemon"
                                        values={{ what: "react-intl" }}
                                    />
                                </th>
                                <th scope="col">
                                    <FormattedMessage
                                        id="table.Weight"
                                        defaultMessage="Weight"
                                        description="Weight of the pokemon"
                                        values={{ what: "react-intl" }}
                                    />
                                </th>
                                <th scope="col">
                                    <FormattedMessage
                                        id="table.Type"
                                        defaultMessage="Type"
                                        description="Type of the pokemon"
                                        values={{ what: "react-intl" }}
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((ma) => {
                                return (
                                    <PokemonesList
                                        /*setPokemonSelected={setPokemonSelected}*/
                                        pokemon={ma}
                                        key={ma.id}
                                    />
                                );
                            })}
                        </tbody>
                    </table>

                </div>
                {/*<div className={firstclick === 0 ? "display__pokemones" : ""}>
                    <div className="card width__card_pa">
                        <img className="card-img-top" src={value[2]} alt={value[2]} />
                        <div className="card-body">
                            <h3>{value[3]}</h3>
                            <p className="card-text">{value[0]}</p>
                            <h4>Cast: {value[1]}</h4>
                        </div>
                    </div>
                </div>*/}
            </section>
            <section>
                <PokemonesGraphic
                    pokemones={messages}
                    firstclick={firstclick}
                />
            </section>
        </main>
    );
}
