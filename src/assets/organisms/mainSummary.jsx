import styled from "styled-components";


const MainCard = styled.div`
        background-color: #9048EC;
        padding: 1.5rem;
        border-radius: 20px;
        display: flex;
        align-items: center;
`
const TotalBalance = styled.div`
    width:70%;
`
const TotalBalanceAmount = styled.div`
    font-size: 30px;
    font-weight:800;
    font-family: 'Sora';
    color: #ffffff;
`
const RightSideTitle = styled.div`
    color: #ffffff;
    font-size: 12px;
    font-family:Roboto;
    font-weight: 300;
`
const DebtCredit = styled.div`
    width:30%;
`
const Debt = styled.div``
const Credit = styled.div``

const LeftTitle = styled.div`
    color: #ffffff;
    font-size: 12px;
    font-family:Roboto;
    font-weight: 300;
    line-hight:22px;
`
const LeftAmount = styled.div`
    color: #ffffff;
    font-size: 16px;
    font-family:Roboto;
    font-weight: 400;
    line-hight:22px;

    &::after {
        content: '';
    }
`


export default function MainSummary() {

    return (
       
        <div className="container">
            <MainCard >
                <TotalBalance >
                    <RightSideTitle >
                        Total balance:
                    </RightSideTitle>
                    <TotalBalanceAmount >
                        $ 4504.00
                    </TotalBalanceAmount>
                </TotalBalance>
                <DebtCredit>
                    <Debt >
                        <LeftTitle>Debt:</LeftTitle>
                        <LeftAmount>$ 322,00</LeftAmount>
                    </Debt>
                    <Credit >
                        <LeftTitle>Credit:</LeftTitle>
                        <LeftAmount>$ 322,00</LeftAmount>
                    </Credit>
                </DebtCredit>
            </MainCard>
        </div>
    )
}