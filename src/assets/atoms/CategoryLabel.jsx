import styled from "styled-components"

export default function CategoryLabel({...props}) {
    const color = props.color;
    const name = props.name;
    const isHighlighted = props.main

    const Label = styled.div`
        border-radius: 5px;
        background-color: ${color};
        opacity: ${isHighlighted ? 1 : 0.6};
        padding: .2rem 1.5rem;
        color: #ffffff;
        text-align: center;
        display: inline-block;
    `
    return (
        <>
            <Label>
                {name}
            </Label>
        </>
    )
}