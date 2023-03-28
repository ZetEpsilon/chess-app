import styled from "styled-components";
import chessDeck from "@/../public/assets/img/chess-deck.png"
import Image from "next/image";
import {Button, ButtonType} from "@/components/reusable/Button";
import {getLang} from "@/hooks/getText";

export const Hero = ()=>{
    const getText = getLang("Home")

    return (
        <Container>
            <Intro>
                <ChessDeck src={chessDeck} priority width = {500} height = {500}/>
                <IntroGroup>
                    <Header>
                       <HeaderItem>{getText("Header")}</HeaderItem>
                       <HeaderItem>Online</HeaderItem>
                       <HeaderItem>on the #1 Site!</HeaderItem>
                        <StatContainer>
                            <StatisticItem>10,652,630 <StatisticText>Games Today</StatisticText></StatisticItem>
                            <StatisticItem>10,652,630 <StatisticText>Games Today</StatisticText></StatisticItem>
                        </StatContainer>
                        <Button type={ButtonType.Light} width='450px' height='70px' is3D>Play Online</Button>
                        <Button type={ButtonType.Dark} width='450px' height='70px' is3D>Play Computer</Button>
                    </Header>
                </IntroGroup>
            </Intro>
        </Container>
    )
}


const Container = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
`

const ChessDeck = styled(Image)`
    border-radius: 5px;
`

const Intro = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

const IntroGroup = styled.div`
    margin: 10px 20px;
`
const Header = styled.h1`
  display: block;
    font-weight: 900;
    font-size: 48px;
    text-align: center;
    width: 450px;
`

const HeaderItem = styled.div`
    padding: 5px;
`

const StatContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const StatisticItem = styled.span`
    font-size: 16px;
  color:#fff;
`

const StatisticText = styled.span`
    color:hsla(0,0%,100%,.5);
`

