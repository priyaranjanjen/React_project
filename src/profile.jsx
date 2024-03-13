import React from "react";
import "./index.css";
import axios from "axios";

class Component extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonNumber: 1,
      api: null,
    };
  }

  number = (event) => {
    const buttonText = event.target.textContent;
    this.setState({ buttonNumber: buttonText }, () => {
      this.apiData();
    });
  };

  apiData = async () => {
    try {
      let finalApiData = await axios.get(
        `https://reqres.in/api/users/${this.state.buttonNumber}`
      );
      this.setState({ api: finalApiData.data });
    } catch (error) {
      alert("Failed to retrieve data from api");
    }
  };

  render() {
    return (
      <div>
        <div id="buttons">
          <button className="button" type="button" onClick={this.number}>
            1
          </button>
          <button className="button" type="button" onClick={this.number}>
            2
          </button>
          <button className="button" type="button" onClick={this.number}>
            3
          </button>
          <button className="button" type="button" onClick={this.number}>
            100
          </button>
        </div>
        <div id="content">
          {this.state.api && (
            <ul>
              <li>Email: {this.state.api.data.email}</li>
              <li>
                Name: {this.state.api.data.first_name}{" "}
                {this.state.api.data.last_name}
              </li>
            </ul>
          )}
        </div>
        {this.state.api && (
          <img src={this.state.api.data.avatar} alt={this.state.api.data.id} />
        )}
      </div>
    );
  }
}

export default Component;