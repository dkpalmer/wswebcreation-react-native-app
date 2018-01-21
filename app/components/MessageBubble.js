import React, { PureComponent } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

class MessageBubble extends PureComponent {
  static defaultProps = {
    placeRight: false,
  };
  static propTypes = {
    placeRight: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
  };

  render() {
    const { placeRight, message } = this.props;
    return (
      <View style={styles[`${placeRight ? 'right' : 'left'}Message`]}>
        <Text>{message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  leftMessage: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginLeft: 15,
    marginBottom: 5,
    marginTop: 5,
    marginRight: 75,
    alignSelf: 'flex-start'
  },
  rightMessage: {
    backgroundColor: '#dbf8c6',
    padding: 10,
    borderRadius: 5,
    marginRight: 15,
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 75,
    alignSelf: 'flex-end'
  },
});

export { MessageBubble };
