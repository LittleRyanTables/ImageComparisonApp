import React from 'react';
import {Button, Text, View} from 'react-native';

class CameraPage extends React.Component {
  render() {
    return (
      <View>
        <Text> CAMERA PAGE </Text>
        <Button
          title="Back"
          onPress={this.props.onBack}
        >
        </Button>
      </View>
    );
  }
}



export default CameraPage;
