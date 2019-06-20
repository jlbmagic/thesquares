import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import update from "react-addons-update";
import { CreateSquares } from "./CreateSquares";
import { addMethods, callFMScript, initialProps } from "../src/util/api";
import { SubHeading } from "./SubHeading";
import { UsedSection } from "./Used";
const realData = initialProps;
const fakeData = {
  complete: "21% Complete",
  data: [
    {
      color: "#8DCCAD",
      height: "55px",
      id: "5111660688047374564113853369165300245217632213206129791180",
      textColor: "#000",
      value: "Dogs",
      width: "200px"
    },
    {
      color: "#8DCCAD",
      height: "55px",
      id: "3623581401722931622176586406151386416150023246320027617950",
      textColor: "#000",
      value: "Dogs",
      width: "200px"
    },
    {
      color: "#8DCCAD",
      height: "55px",
      id: "3758067438001479510512316406169809920083518147661076573648",
      textColor: "#000",
      value: "Dogs",
      width: "200px"
    },
    {
      color: "#8DCCAD",
      height: "55px",
      id: "4047989876155750703185785675256883586399455461814661761587",
      textColor: "#000",
      value: "Dogs",
      width: "200px"
    },
    {
      color: "#988864",
      height: "55px",
      id: "5809067514885044777965997215630222093933682648693976870903",
      textColor: "#000",
      value: "Learn",
      width: "150px"
    },
    {
      color: "#988864",
      height: "55px",
      id: "4819270337167531721021340245316141310146869372401023521186",
      textColor: "#000",
      value: "Learn",
      width: "150px"
    },
    {
      color: "#FEA6A2",
      height: "55px",
      id: "3529335551940539730936260680439388755015460604109398634943",
      textColor: "#000",
      value: "Movies",
      width: "100px"
    },
    {
      color: "#FEA6A2",
      height: "55px",
      id: "1858431869395265419480569179366245267582616008330240528469",
      textColor: "#000",
      value: "Movies",
      width: "100px"
    },
    {
      color: "#F9D6AC",
      height: "55px",
      id: "6227203779462993774041950024598011567203924399896041323872",
      textColor: "#000",
      value: "Read",
      width: "125px"
    },
    {
      color: "#F9D6AC",
      height: "55px",
      id: "2209493141704993119442216382397440686157029275632534028858",
      textColor: "#000",
      value: "Read",
      width: "125px"
    },
    {
      color: "#F9D6AC",
      height: "55px",
      id: "5359937573193709181735451915133367647481815585446408691172",
      textColor: "#000",
      value: "Read",
      width: "125px"
    },
    {
      color: "#F9D6AC",
      height: "55px",
      id: "853709372218176662716332855143135073688953018129216626185",
      textColor: "#000",
      value: "Read",
      width: "125px"
    },
    {
      color: "#FFE9AF",
      height: "55px",
      id: "4095568822513833968917520528525271689960546683073533299192",
      textColor: "#000",
      value: "Workout",
      width: "200px"
    },
    {
      color: "#FFE9AF",
      height: "55px",
      id: "1701605126564998313395508854469606705857332739489915654146",
      textColor: "#000",
      value: "Workout",
      width: "200px"
    },
    {
      color: "#05703b",
      height: "55px",
      id: "3006274254679521430116963383166144966348360933452722209178",
      textColor: "#fff",
      value: "WIth Spouse",
      width: "125px"
    },
    {
      color: "#05703b",
      height: "55px",
      id: "2846850041514705139511104498469064722586540159062981313781",
      textColor: "#fff",
      value: "WIth Spouse",
      width: "125px"
    },
    {
      color: "#05703b",
      height: "55px",
      id: "1401208100157555324737100234574476816767912259411368852031",
      textColor: "#fff",
      value: "WIth Spouse",
      width: "125px"
    },
    {
      color: "#05703b",
      height: "55px",
      id: "6161902254732832614329065950999541980568225065800129972358",
      textColor: "#fff",
      value: "WIth Spouse",
      width: "125px"
    },
    {
      color: "#05703b",
      height: "55px",
      id: "2475146540387893402376002635968263946893439068582167557618",
      textColor: "#fff",
      value: "WIth Spouse",
      width: "125px"
    }
  ],
  eventHandler: {
    clickOn: "clickOn"
  },
  fileName: "TimeAllocations",
  finished: 5,
  total: 24,
  used: [
    {
      color: "#8DCCAD",
      height: "55px",
      id: "69402714994886781351813634796681532395079497546650420901",
      textColor: "#000",
      value: "Dogs",
      width: "200px"
    },
    {
      color: "#988864",
      height: "55px",
      id: "262032840531552445379285982225016730404543904557809665905",
      textColor: "#000",
      value: "Learn",
      width: "150px"
    },
    {
      color: "#F9D6AC",
      height: "55px",
      id: "3509234655577083177110982868037397545732116798218846935736",
      textColor: "#000",
      value: "Read",
      width: "125px"
    },
    {
      color: "#FFE9AF",
      height: "55px",
      id: "2796355656124018583570160957242098315860726804846633895394",
      textColor: "#000",
      value: "Workout",
      width: "200px"
    },
    {
      color: "#05703b",
      height: "55px",
      id: "1416732321692089760485714290327384731938247006363647130483",
      textColor: "#fff",
      value: "WIth Spouse",
      width: "125px"
    }
  ],
  weekOf: "6/16/2019 - 6/22/2019"
};

const useData = realData ? realData : fakeData;
const weekOf = useData.weekOf;
const finished = useData.finished;
const total = useData.total;
const complete = useData.complete;
const used = useData.used;
const things = useData.data;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: things,
      used: used,
      weekOf: weekOf,
      complete: complete,
      change: true,
      finished: finished,
      total: total
    };
    this.removeSquare = this.removeSquare.bind(this);
  }
  componentDidMount() {
    addMethods({
      updateData: parameter => {
        const theData = parameter.data;
        const complete = parameter.complete;
        const weekOf = parameter.weekOf;
        this.setState({
          data: theData,
          theme: null,
          used: [],
          weekOf: weekOf,
          complete: complete,
          change: true,
          otherText: this.state.otherText
        });
      },
      addOne: parameter => {
        const theRow = parameter.data;
        this.addTheRow(theRow);
      },
      addUsed: parameter => {
        const theRow = parameter.row;
        this.updateUsed(theRow);
      },
      updateComplete: parameter => {
        this.setState({
          complete: parameter.complete,
          finished: parameter.finished,
          total: parameter.total
        });
      }
    });
  }
  //Functions
  clickOn = id => {
    const returnValue = {
      id
    };
    callFMScript(
      useData.fileName,
      useData.eventHandler.clickOn,
      JSON.stringify(returnValue)
    );
  };

  addTheRow(row) {
    const newData = update(this.state.data, { $push: [row] });
    this.setState(prevState => ({
      data: newData
    }));
  }
  updateUsed(row) {
    const newData = update(this.state.used, { $push: [row] });
    this.setState(prevState => ({
      used: newData
    }));
  }
  removeSquare(square) {
    this.setState({
      data: this.state.data.filter(el => el.id !== square),
      change: false
    });
  }

  render() {
    return (
      <div>
        <h1>My Time Allocation</h1>
        <h2>To Do</h2>

        <div className="wrapper">
          <CreateSquares
            list={this.state.data}
            removeSquare={this.removeSquare}
            onClickSquare={this.clickOn}
            shuffle={this.state.change}
          />
        </div>
        <h2>Completed</h2>

        <SubHeading
          weekOf={this.state.weekOf}
          complete={this.state.complete}
          finished={this.state.finished}
          total={this.state.total}
        />

        <div className="wrapper">
          <div>
            <UsedSection list={this.state.used} />
          </div>
        </div>
      </div>
    );
  }
}

// class Done extends React.Component {
//   render() {
//     return <h1>You're DONE!!!</h1>;
//   }
// }

ReactDOM.render(<App />, document.getElementById("root"));
