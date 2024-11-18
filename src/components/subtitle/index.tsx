import { TextSubtitle } from "./styles"

interface SubtitleProps {
    Text: string
}

export function Subtitle({Text}: SubtitleProps){
    return(
        <TextSubtitle>{Text}</TextSubtitle>
    )
}