import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import SampleStore from '../stores/sample-store';

import './app.scss';
import Image from '../assets/images/favicon.png';

@inject('sampleStore')
@observer
class App extends React.Component {
  componentDidMount() {
    const { sampleStore } = this.props;

    setInterval(() => sampleStore.tick(), 1000);
  }

  render() {
    const { classes, sampleStore } = this.props;

    return (
      <Card className={classes.root}>
        <Typography variant="display2">React App</Typography>
        <Typography variant="display1" className={classes.display2}>
          Boilerplate{' '}
        </Typography>
        <img src={Image} className={classes.image} />
        <Typography variant="subheading" className={classes.subheading}>
          Time Elapsed: {sampleStore.counter} (seconds)
        </Typography>
      </Card>
    );
  }
}

App.propTypes = {
  sampleStore: PropTypes.instanceOf(SampleStore)
};

export default withStyles({
  root: {
    width: '30%',
    minHeight: 600,
    margin: '40px auto',
    textAlign: 'center'
  },
  display2: {
    marginTop: '1rem'
  },
  subheading: {
    marginTop: '10rem'
  },
  image: {
    marginTop: '10rem'
  }
})(App);
