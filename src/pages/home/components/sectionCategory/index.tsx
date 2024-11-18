import { CircleCategory, Container, ContainerCategorys } from "./style";
import { categorys } from "../../../../mocks/categorys";
import { useNavigate } from "react-router-dom";
import { Subtitle } from "../../../../components/subtitle";

interface SectionProps {
    Title: string;
}

export function Category({Title}: SectionProps){
    const navigate = useNavigate();

    return(
        <Container>
            <Subtitle Text={Title}/>

            <ContainerCategorys>
                {
                    categorys.map((category) => {
                        return(
                            <CircleCategory title={category.name} onClick={() => navigate(`${category.link}`)}>
                                {category.icon}
                            </CircleCategory>
                        )
                    })
                }
            </ContainerCategorys>
        </Container>
    )
}