import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import Fonts from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';

const FlexContainer = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const MeetupText = styled.Text`
  color: ${Colors.redColor};
  fontSize: 18;
  fontFamily: montserratBold;
`;

const BottomButtonWrapper = styled.View`
  flex: 0.2;
  flexDirection: row;
`;

const Button = styled.TouchableOpacity`
  justifyContent: center;
  alignItems: center;
  flex: 1;
  backgroundColor: ${({ color }) => color};
`;

export default class LoginScreen extends Component {
  state = { }
  render() {
    return (
      <FlexContainer>
        <FlexContainer>
          <Text style={Fonts.authTitle}>Meetup Me</Text>
        </FlexContainer>
        <FlexContainer>
          <FlexContainer>
            <FlexContainer>
              <Text style={Fonts.authWelcomeTitle}>Welcome!</Text>
            </FlexContainer>
            <FlexContainer>
              <Text style={Fonts.authWelcomeText}>
                Start managing your <MeetupText>Meetups</MeetupText> quickly and efficently
              </Text>
            </FlexContainer>
          </FlexContainer>
          <BottomButtonWrapper>
            <Button color={Colors.signupButtonBackgroundColor}>
              <Text style={Fonts.buttonAuth}>Sign-Up</Text>
            </Button>
            <Button color={Colors.signinButtonBackgroundColor}>
              <Text style={Fonts.buttonAuth}>Sign-In</Text>
            </Button>
          </BottomButtonWrapper>
        </FlexContainer>
      </FlexContainer>
    );
  }
}
