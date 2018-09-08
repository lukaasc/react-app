import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import SampleStore from '../stores/sample-store';

import './app.scss';

@inject('sampleStore')
@observer
class App extends React.Component {
  componentDidMount() {
    const { sampleStore } = this.props;

    setInterval(() => sampleStore.tick(), 1000);
  }

  render() {
    const { sampleStore } = this.props;

    return (
      <div>
        <h1>React App - {sampleStore.counter}</h1>
        <h2>Boilerplate </h2>
      </div>
    );
  }
}

App.propTypes = {
  sampleStore: PropTypes.instanceOf(SampleStore)
};

export default App;
