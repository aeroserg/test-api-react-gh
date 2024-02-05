import styled from "styled-components";

const StyledSectionTitle = styled.div`
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    text-align: left;
    margin: 1.5rem 0 .7rem 0;
    
`

export default function SectionTitle({...props}) {
    const titleText = props.text;
    return (
        <>
            <StyledSectionTitle>
                {titleText.length ? titleText : ''}
            </StyledSectionTitle>
        </>
    )
}