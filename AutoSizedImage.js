import React, {PureComponent} from 'react';
import {
  Image,
  Text,
  View,
  Dimensions,
} from 'react-native';

export default class AutoSizedImage extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { width, height } = this.props.style;
    const finalSize = {};
    const screenWidth = Dimensions.get('window').width;

    if (width > screenWidth) {
      finalSize.width = screenWidth - 36;
      const ratio = screenWidth / width;
      finalSize.height = height * ratio;
    }
    const style = Object.assign(
      { backgroundColor: 'transparent', resizeMode: 'contain' },
      this.props.style,
      finalSize
    );

    let source = Object.assign({}, this.props.source, finalSize);

    return (
      <Text>
        <Image style={style} source={source} />
      </Text>
    );
  }
}
