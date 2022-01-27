import React, { Component } from "react";
import axios from "axios";
import mathieu from "../img/mathieu.png";
import { stringify } from "postcss";
class TextBuble extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        pageText: [
          {
            0: "1",
            1: "Profil",
            2: "\"Fais le vide dans ton esprit, sois sans formes, sans contours, comme l’eau.\r\n    L’eau qu’on verse  dans une tasse devient la tasse ”\r\nCette citation illustre parfaitement ma personnalité, car je suis une personne avec de la présence d’esprit tout en ayant des capacités d'adaptation.\r\nAinsi, je suis une personne ayant des qualifications dans le sens de vos recherches.\r\n",
            id: "1",
            titre: "Profil",
            text: "Fais le vide dans ton esprit, sois sans formes, sans contours, comme l’eau.\r\n    L’eau qu’on verse  dans une tasse devient la tasse ”\r\nCette citation illustre parfaitement ma personnalité, car je suis une personne avec de la présence d’esprit tout en ayant des capacités d'adaptation.\r\nAinsi, je suis une personne ayant des qualifications dans le sens de vos recherches.\r\n",
          },
          {
            0: "2",
            1: "Centres d’intérêts",
            2: "•Je possède quelques titres \r\nde tennis de table qui garantissent\r\n une exécution rapide et efficace de\r\n mes actions.\r\n•Digital painting\r\n",
            id: "2",
            titre: "Centres d’intérêts",
            text: "•Je possède quelques titres \r\nde tennis de table qui garantissent\r\n une exécution rapide et efficace de\r\n mes actions.\r\n•Digital painting\r\n",
          },
          {
            0: "3",
            1: "chrono",
            2: "-2021-\r\n Université de technologie - Université Gustave Eiffel\r\nDiplôme universitaire et technologique des métiers du\r\n multimédia et de l'internet.\r\n\r\n\t•Projet tutoré de Première année, rôle: Chef de projet \r\net graphiste\r\n",
            id: "3",
            titre: "chrono",
            text: "-2021-\r\n Université de technologie - Université Gustave Eiffel\r\nDiplôme universitaire et technologique des métiers du\r\n multimédia et de l'internet.\r\n\r\n\t•Projet tutoré de Première année, rôle: Chef de projet \r\net graphiste\r\n",
          },
          {
            0: "4",
            1: "Coordonnées",
            2: "adresse d’habitation: \r\n92 rue de Malnoue\r\n Noisy-le-Grand-93160\r\n\r\ne-maill:\r\nm.andriamiraho@gmail.com\r\n\r\ntéléphone: \r\n07 64 23 29 48",
            id: "4",
            titre: "Coordonnées",
            text: "adresse d’habitation: \r\n92 rue de Malnoue\r\n Noisy-le-Grand-93160\r\n\r\ne-maill:\r\nm.andriamiraho@gmail.com\r\n\r\ntéléphone: \r\n07 64 23 29 48",
          },
          {
            0: "5",
            1: "Compétences",
            2: "Adobe Première Pro /Pack office /Adobe Illustrator /Adobe Indesign /Adobe Photoshop # Javascript /CSS /HTML /PHP # Français - C2 /Anglais - B1 / Malgache - des notions",
            id: "5",
            titre: "Compétences",
            text: "Adobe Première Pro /Pack office /Adobe Illustrator /Adobe Indesign /Adobe Photoshop # Javascript /CSS /HTML /PHP # Français - C2 /Anglais - B1 / Malgache - des notions",
          },
        ],
      });
  }

  // componentDidMount(){

  //     // fetch("https://api.domesday.fr/CV").then(resp=>resp.json())
  //     //  // .then(resp=>{
  //     //     //     this.setState({
  //     //     //         pageText:resp
  //     //     //     })
  //     //     // })
  //     //     .then(data=>console.log(data))
  //     axios.get("https://api.domesday.fr/CV",{headers:{
  //         "Access-Control-Allow-Origin":" *",
  //         "'Access-Control-Allow-Methods":" GET"
  //     }}) .then(data=>console.log(data))
  // }

  render() {
    const textBubles = this.state.pageText.map((buble) => {
      let classes = buble.titre.replace(" ", "-");
      classes = classes.replace("é", "e");
      classes = classes.replace("ê", "e");
      if (buble.titre == "Compétences") {
        let typeSkills = buble.text.split("#");

        return (
          <section className={"textBuble dark:bg-slate-700/50 container  " +classes}>
            <h5 className="text-center">{buble.titre}</h5>
            <p className="grid grid-cols-3 w-full">
              {typeSkills.map((typeSkill) => {
                return (
                  <div className="text-center ">
                    {typeSkill.split("/").map((skill) => {
                      return <span>{skill}<br/></span>;
                    })}
                  </div>
                );
              })}
            </p>
          </section>
        );
      } else {
        return (
          <section
            className={"textBuble container dark:bg-slate-700/50 " + classes}
          >
            <h5 className="text-center">{buble.titre.replace("chrono", "")}</h5>
            <p className="whitespace-pre-line">{buble.text}</p>
          </section>
        );
      }
    });
    return (
      <div className="content">
        <img
          src={mathieu}
          alt="image de mathieu andriamiraho"
          className=" mathieuPP"
          
        />
        {textBubles}
      </div>
    );
  }
}

export default TextBuble;
