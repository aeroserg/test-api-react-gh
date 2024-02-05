import styled from "styled-components"
import CategoryLabel from "../atoms/CategoryLabel"

const Card = styled.div`
    border-radius: 10px;
    display: flex;
    padding: 1rem;
    font-family: Inter;
    font-size: 12px;
    line-height: 22px;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
`
const CardInfo = styled.div`
    font-size: 12px;
`

const CardTitle = styled.div`
    font-family: Inter;
    font-weight: 500;
    text-align: left;
`

const CardPrice = styled.div`
    font-family: Inter;
    font-weight: 600;
    text-align: right;
`

const CardDate = styled.div`
    font-family: Inter;
    font-weight: 300;
    text-align: center;
`


export default function SingleOperationCard({...props}) {
    const color = props.color;
    const name = props.name;
    const main = props.main;
    return (
        <>
            <Card >
                <CardInfo>
                    <CardTitle>
                        Tire repairment expence
                    </CardTitle>
                    <CategoryLabel color={color} name={name} main={main}/>
                </CardInfo>
                <CardInfo>
                    <CardPrice>
                        -300$
                    </CardPrice>
                    <CardDate>
                        23 Dec
                    </CardDate>
                </CardInfo>
            </Card>
        </>
    )
}