import styled from "styled-components"
import { useDispatch, useSelector} from "react-redux"

export default function CategoryLabel({...props}) {
   
    const dispatch = useDispatch();
    // const idHighlighted = useSelector(state => state.category.id);
    const color = props.color;
    const name = props.name;
    const isHighlighted = props.main;
    const id = props.id

    const Label = styled.div`
        border-radius: 5px;
        background-color: ${color};
        opacity: ${isHighlighted ? 1 : 0.35};
        padding: .2rem 1.5rem;
        color: #ffffff;
        text-align: center;
        display: inline-block;
        margin: 0.09rem ;
        font-family: Inter;
        font-size: 8px;
        font-weight: 400;
        cursor: pointer;
        -webkit-filter: grayscale(${isHighlighted ? '00%' : '40%'});
        filter: grayscale(${isHighlighted ? '00%' : '4  0%'});
    `
    return (
        <>
            <Label onClick={() => {dispatch({type: "SET_ACTIVE", payload: id})}}>
                {name}
            </Label>
        </>
    )
}