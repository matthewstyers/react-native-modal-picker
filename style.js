

import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const PADDING = 8;
const BORDER_RADIUS = 2;
const FONT_SIZE = 16;
const HIGHLIGHT_COLOR = 'rgba(0,118,255,0.9)';
const OPTION_CONTAINER_HEIGHT = 200;

export default StyleSheet.create({
  overlayStyle: {
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },

  optionContainer: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: BORDER_RADIUS,
    bottom: 70,
    height: OPTION_CONTAINER_HEIGHT,
    left: width * 0.1,
    position: 'absolute',
    width: width * 0.8
  },

  cancelContainer: {
    borderRadius: BORDER_RADIUS,
    bottom: 20,
    left: width * 0.1,
    position: 'absolute',
    width: width * 0.8
  },

  selectStyle: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    borderRadius: BORDER_RADIUS
  },

  selectTextStyle: {
    textAlign: 'center',
    color: '#333',
    fontSize: FONT_SIZE
  },

  cancelStyle: {
    borderRadius: BORDER_RADIUS,
    width: width * 0.8,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: PADDING
  },

  cancelTextStyle: {
    textAlign: 'center',
    color: '#333',
    fontSize: FONT_SIZE
  },

  optionStyle: {
    padding: PADDING,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },

  optionTextStyle: {
    textAlign: 'center',
    fontSize: FONT_SIZE,
    color: HIGHLIGHT_COLOR
  },

  sectionStyle: {
    padding: PADDING * 2,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },

  sectionTextStyle: {
    textAlign: 'center',
    fontSize: FONT_SIZE
  }
});
