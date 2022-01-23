import React, { Component } from 'react';
import axios from 'axios';
import mathieu from "../img/mathieu.png"
class TextBuble extends Component {
    constructor(props){
        super(props),
        this.state={
            pageText:
            [
                {
                  "0": "Profil",
                  "1": "Fais le vide dans ton esprit, sois sans formes, sans contours, comme l’eau.\r\n    L’eau qu’on verse  dans une tasse devient la tasse ”\r\nCette citation illustre parfaitement ma personnalité, car je suis une personne avec de la présence d’esprit tout en ayant des capacités d'adaptation.\r\nAinsi, je suis une personne ayant des qualifications dans le sens de vos recherches.\r\n",
                  "2": "0",
                  "titre": "Profil",
                  "text": "Fais le vide dans ton esprit, sois sans formes, sans contours, comme l’eau.\r\n    L’eau qu’on verse  dans une tasse devient la tasse ”\r\nCette citation illustre parfaitement ma personnalité, car je suis une personne avec de la présence d’esprit tout en ayant des capacités d'adaptation.\r\nAinsi, je suis une personne ayant des qualifications dans le sens de vos recherches.\r\n",
                  "id": "0"
                },
                {
                  "0": "Centres d’intérêts",
                  "1": "•Je possède quelques titres \r\nde tennis de table qui garantissent\r\n une exécution rapide et efficace de\r\n mes actions.\r\n•Digital painting\r\n",
                  "2": "0",
                  "titre": "Centres d’intérêts",
                  "text": "•Je possède quelques titres \r\nde tennis de table qui garantissent\r\n une exécution rapide et efficace de\r\n mes actions.\r\n•Digital painting\r\n",
                  "id": "0"
                },
                {
                  "0": "chrono",
                  "1": "-2021-\r\n Université de technologie - Université Gustave Eiffel\r\nDiplôme universitaire et technologique des métiers du\r\n multimédia et de l'internet.\r\n\r\n\t•Projet tutoré de Première année, rôle: Chef de projet \r\net graphiste\r\n",
                  "2": "0",
                  "titre": "chrono",
                  "text": "-2021-\r\n Université de technologie - Université Gustave Eiffel\r\nDiplôme universitaire et technologique des métiers du\r\n multimédia et de l'internet.\r\n\r\n\t•Projet tutoré de Première année, rôle: Chef de projet \r\net graphiste\r\n",
                  "id": "0"
                },
                {
                  "0": "Coordonnées",
                  "1": "adresse d’habitation: \r\n92 rue de Malnoue\r\n Noisy-le-Grand-93160\r\n\r\ne-maill:\r\nm.andriamiraho@gmail.com\r\n\r\ntéléphone: \r\n07 64 23 29 48",
                  "2": "0",
                  "titre": "Coordonnées",
                  "text": "adresse d’habitation: \r\n92 rue de Malnoue\r\n Noisy-le-Grand-93160\r\n\r\ne-maill:\r\nm.andriamiraho@gmail.com\r\n\r\ntéléphone: \r\n07 64 23 29 48",
                  "id": "0"
                },
                {
                  "0": "Compétences",
                  "1": "Logiciel\r\nAdobe Première Pro\r\nPack office\r\nAdobe Illustrator\r\nAdobe Indesign\r\nAdobe Photoshop\r\nLanguages de programmation\r\nJavascript\r\nCSS\r\nHTML\r\nPHP\r\nLangues parlées\r\nFrançais - C2\r\nAnglais - B1\r\nMalgache - des notions",
                  "2": "0",
                  "titre": "Compétences",
                  "text": "Logiciel\r\nAdobe Première Pro\r\nPack office\r\nAdobe Illustrator\r\nAdobe Indesign\r\nAdobe Photoshop\r\nLanguages de programmation\r\nJavascript\r\nCSS\r\nHTML\r\nPHP\r\nLangues parlées\r\nFrançais - C2\r\nAnglais - B1\r\nMalgache - des notions",
                  "id": "0"
                }
              ]
        }
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
        const textBubles =this.state.pageText.map((buble)=>{
            let brElement = document.createElement("br")
            let classes = buble.titre.replace(" ", "-")
            classes = classes.replace("é","e")
            classes = classes.replace("ê","e")
            let text =buble.text.replace(" \r\n", brElement )
            return <section className= {"textBuble container "+ classes}>
                <h5 className='text-center'>{buble.titre.replace("chrono","")}</h5>
                <p>{text}</p> 
            </section>
        })
        return (
           <div className='content'>
                <img src={mathieu} alt="image de mathieu andriamiraho"  className=' mathieuPP'/>
               {textBubles}
           </div>
        );
    }
}

export default TextBuble;