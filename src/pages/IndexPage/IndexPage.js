import React, { Component } from "react";
import "./IndexPage.sass";
class IndexPage extends Component {
  render() {
    return (
      <div className="IndexPage">
        <h1> h1 - Text. </h1>
        <h2> h2 - Text. </h2>
        <h3> h3 - Text. </h3>
        <h4> h4 - Text. </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          cupiditate eaque earum, error eum eveniet in ipsa itaque laboriosam
          nisi numquam odit officiis praesentium repellat rerum sed temporibus
          ullam vel?
        </p>

        <p className="muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          cupiditate eaque earum, error eum eveniet in ipsa itaque laboriosam
          nisi numquam odit officiis praesentium repellat rerum sed temporibus
          ullam vel?
        </p>
        <div className="row">
          <button className="button">Button</button>
          <button className="button button-primary">Button Primary </button>
          <button className="button button-secondary">Button Secondary</button>
          <button className="button button-danger">Button Danger </button>
          <button className="button button-success">Button Success</button>
        </div>
        <div className="row">
          <button className="button-sm">Button Small </button>
          <button className="button-sm button-primary">
            Button Small Primary
          </button>
          <button className="button-sm button-secondary">
            Button Small Secondary
          </button>
          <button className="button-sm button-danger">Button Danger</button>
          <button className="button-sm button-success"> Button Success </button>
        </div>
        <div className="card">
          <h2> Login </h2>
          <p> This is a paragraph inside a card. </p>
          <form className="form" action="">
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
            <button className="button button-primary"> Login </button>
          </form>
        </div>
      </div>
    );
  }
}

export default IndexPage;
