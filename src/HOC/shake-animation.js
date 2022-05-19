import React, {Component} from 'react';
import {headShake} from 'react-animations';
import {StyleSheet, css} from 'aphrodite';
const styles = StyleSheet.create({
  headShake: {
    animationName: headShake,
    animationDuration: '1s'
  }
});
const makeValidationErrorAnimation = (Target) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {shouldShake: props.shouldShake};
    }

    // onClick = () => {
    //   this.setState({shouldShake: true}, () => {
    //     const self = this;
    //     setTimeout(() =>
    //       self.setState({shouldShake: false})
    //       , 1000);
    //   });
    // };

    componentWillReceiveProps(nextProps){
      this.setState({
        startShake: nextProps.shouldShake} ,() => {
          const self = this;
          setTimeout(() => self.setState({startShake: false}), 1000);
        });
    }

    render() {
      return (
        <Target
          {...this.props}
          // isOpen={true}
          //       onClick={this.onClick}
          //       additionalStyles={{text: {}, frame: {}}}
                frameClass={this.state.startShake ? css(styles.headShake) : ''}/>
      );
    }
  }
};
export default makeValidationErrorAnimation;
