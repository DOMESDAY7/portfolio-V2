import React, { Component } from "react";


class TextBuble extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        pageText: [],
      });
  }

  componentDidMount() {
    fetch("./apiCV/?q=cv")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ pageText: data })
        console.log(data)
    });
  }

  render() {
    const textBubles = this.state.pageText.map((buble) => {
      let classes = buble.titre.replace(" ", "-");
      classes = classes.replace("é", "e");
      classes = classes.replace("ê", "e");
      if (buble.titre == "Compétences") {
        let typeSkills = buble.text.split("#");

        return (
          <section
            className={"textBuble dark:bg-slate-700/50 container  " + classes}
          >
            <h5 className="text-center">{buble.titre}</h5>
            <p className="grid grid-cols-3 w-full">
              {typeSkills.map((typeSkill) => {
                return (
                  <div className="text-center ">
                    {typeSkill.split("/").map((skill) => {
                      return (
                        <span>
                          {skill}
                          <br />
                        </span>
                      );
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
          src={"/img/mathieu.png"}
          alt="image de mathieu andriamiraho"
          className=" mathieuPP"
        />
        {textBubles}
      </div>
    );
  }
}

export default TextBuble;
