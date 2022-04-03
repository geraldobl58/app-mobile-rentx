import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import { useTheme } from 'styled-components/native';

import { Feather } from '@expo/vector-icons'

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';

export function SchedulingDetails(){
  const theme  = useTheme()

  return (
    <Container>
      <Header>
        <BackButton 
          onPress={() => {}}
        />
      </Header>

      <CarImages>
        <ImageSlider 
          imageUrl={['data:image/jpeg;base64,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']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Honda</Brand>
            <Name>Civic</Name>
          </Description>

          <Rent>
            <Period>Ao Dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasoline" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="4 pessoas" icon={peopleSvg} />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather 
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>03/04/2022</DateValue>
          </DateInfo>

          <Feather 
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>05/04/2022</DateValue>
          </DateInfo>

        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}