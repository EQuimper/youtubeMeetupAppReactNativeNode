import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '$blackBlueColor',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.9,
  },
  iconAdd: {
    marginRight: '3%',
  },
});

export default styles;
