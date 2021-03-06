import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 126px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px;
  margin-bottom: 16px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Details = styled.View``

export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_details};
  font-family: ${({ theme }) => theme.fonts.secondary_500};

  text-transform: uppercase;
`

export const Name = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 16px;
`

export const Rent = styled.View`
  margin-right: 24px;
`

export const Period = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_details};
  font-family: ${({ theme }) => theme.fonts.secondary_500};

  text-transform: uppercase;
`

export const Price = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`

export const Type = styled.View``

export const CarImage = styled.Image`
  width: 167px;
  height: 85px;
`