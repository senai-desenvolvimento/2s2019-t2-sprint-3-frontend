import React, { Component } from "react";

export default class Buscar extends Component {
  constructor() {
    super();
    this.state = {
      id: 0
    };
  }

  componentDidMount() {
    const { match } = this.props;

    this.setState({ id: match.params.id });
  }

  render() {
    return <h3>Requested topic ID: {this.state.id} </h3>;
  }
}
