import { shirt } from "../../../../mocks/shirts";
import React, { useRef } from "react";
import { Card } from "../card";
import { ArrowButton, Container, ContainerCard } from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Subtitle } from "../../../../components/subtitle";

interface SectionProps {
    Title: string;
}

export function Carousel({Title}: SectionProps) {
    const containerCardRef = useRef<HTMLDivElement>(null);

    function scroll(scrollOffset: number) {
        if (containerCardRef.current) {
            containerCardRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    }

    return (
        <Container>
            <Subtitle Text={Title}/>

            <ArrowButton direction="left" onClick={() => scroll(-500)}>
                <IoIosArrowBack size={30} />
            </ArrowButton>

            <ContainerCard ref={containerCardRef}>
                {shirt?.map((shirt) => (
                    <React.Fragment key={shirt.id}>
                        <Card url={shirt.url} name={shirt.name} price={shirt.price} />
                    </React.Fragment>
                ))}
            </ContainerCard>

            <ArrowButton direction="right" onClick={() => scroll(500)}>
                <IoIosArrowForward size={30} />
            </ArrowButton>
        </Container>
    );
}
