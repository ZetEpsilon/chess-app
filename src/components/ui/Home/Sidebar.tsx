import styled from "styled-components";
import sprite from "@/../public/assets/img/sprites.png";
import Link from "next/link";
import {Button, ButtonType} from "@/components/reusable/Button";
import {useLang} from "@/hooks/useLang";
import {useExternalCss} from "@/hooks/useExternalCss";
import {createMediaStyles} from "@/hooks/createMediaMap";
import {useMedia} from "@/hooks/useMedia";

const btnStyles = useExternalCss(`
    margin:5px 0;
`)
const mediaStyles = createMediaStyles({
    logo:{
        priority:"default",
        css:`
            backgroundPosition:'10.5rem 0'
        `
    }
})

export const Sidebar = ()=>{
    const getText = useLang("Home")
    const isMatched = useMedia('(min-width:1130px)');
    if(!isMatched) return null;
    return(
        <Container>
            {/*<MyLink $backgroundPosition={"10.8rem -6rem"} href = "/"></MyLink>*/}
            <SidebarLink href = "/" $position={'10.5rem 0'} $width = {"145px"} $marginLeft = {"0"}></SidebarLink>
            <SidebarLink href = "/" $position={'-2.1rem -6.2rem'} $width={"30px"}>Play</SidebarLink>
            <Group>
                <Button href={"/register"} css={btnStyles} width="120px" height='50px' type={ButtonType.Dark} fontSize={"14px"}>{getText("Sidebar", "login")}</Button>
                <Button css={btnStyles} width="120px" height='50px' type={ButtonType.Light} fontSize={"14px"}>{getText("Sidebar", "signup")}</Button>
            </Group>
        </Container>
    )
}

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  background-color:var(--primary-bg-color);
  height:100vh;
  width: 160px;
  padding: 5px 0;
`

const Group = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
`



interface ImgType{
    $position:string
    $width:string;
    $marginLeft?:string;
}


const SidebarLink = styled(Link)<ImgType>`
  width: 100%;
  height: 50px;
  background-color:transparent;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color:var(--primary-text-color);
  font-weight: 700;
  &:hover{
    background-color: rgba(0,0,10,.14);
  }
  &:before{
    margin-left: ${(props:ImgType)=>props.$marginLeft || '15px'};
    content:"";
    background-position: ${(props:ImgType) => props.$position};
    background-size: 12.8rem auto;
    background-image:url(${sprite.src});
    transform: scale(0.75);
    height: 3rem;
    width: ${props => props.$width};
  }
`




