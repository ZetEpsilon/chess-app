import styled from "styled-components";
import sprite from "@/../public/assets/img/sprites.png";
import Link  from "next/link";
interface a{
    name:1
}
export const Sidebar = ()=>{
    return(
        <Container>
            {/*<MyLink $backgroundPosition={"10.8rem -6rem"} href = "/"></MyLink>*/}
            <SidebarLink href = "/" $position={'10.5rem 0'} $width = {"100%"} $marginLeft = {"0"}></SidebarLink>
            <SidebarLink href = "/" $position={'-2.1rem -6.2rem'} $width={"30px"}>Play</SidebarLink>
        </Container>
    )
}

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  background-color:var(--primary-bg-color);
  height:100vh;
  width: 145px;
  padding: 5px 0;
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




