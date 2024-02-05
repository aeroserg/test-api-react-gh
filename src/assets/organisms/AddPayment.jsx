import styled from "styled-components"


export default function AddPaymentCard({...props}) {

    const Card = styled.div`
        background-color: #ffffff;
        padding: 1.5rem;
        border-radius: 20px;
    `

    const CardHeader = styled.div`
        display: flex;
        justify-content: space-between;
     
    `

    const InputPayment = styled.input`
        font-family: Inter;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        border-width: 0;
        border-style: none;
        border-color:transparent;
        border-image: initial;
        border-radius: 0px;
        border-bottom: 1px solid #000000;

        max-width: 100px;

        &:hover, &:focus, &:focus-visible {
            border-width: 0;
            border-style: none;
            border-color:transparent;
            border-image: initial;
            border-radius: 0px;
            outline: transparent auto 0;

            border-bottom: 1px solid #000000;
        }
    `

    const SelcetPaymentType = styled.select`
        background-color: transparent;
        font-family: Inter;
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
        border-width: 0;
        border-style: none;
        border-color:transparent;
        border-image: initial;
        border-radius: 0px;
        outline: transparent auto 0;

        &:hover, &:focus, &:focus-visible {
            border-width: 0;
            border-style: none;
            border-color:transparent;
            border-image: initial;
            border-radius: 0px;
            outline: transparent auto 0;

            
        }
    `

 
    const DatePicker = styled.input`

    `
    const DatePickerWrapper = styled.div`
        background: url('Icon_calendar.svg');
        background-repeat: no-repeat;
        display: inline-block;
        width: 16px;
        height: 18px;
    `

    return (
        <Card>
            <CardHeader>
                <SelcetPaymentType>
                    <option value="0">Income</option>
                    <option value="1">Expense</option>
                </SelcetPaymentType>
                <div className="inputPaymentWrapper">
                    <InputPayment type="number" min={"0"}/>
                    <img src="/" alt="" />
                </div>
            </CardHeader>
        </Card>
    )
}