import {Sidebar} from "@/components/ui/Home/Sidebar";
import {Hero} from "@/components/ui/Home/Hero";
import styled from "styled-components";

export default function Home(){
    return (
        <Container>
            <Sidebar/>
            <Hero/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`
