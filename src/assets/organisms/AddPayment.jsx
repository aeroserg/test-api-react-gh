import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Calendar } from 'primereact/calendar';
import { Categories } from "../templates/fixedCategoryLables";
import CategoryLabel from "../atoms/CategoryLabel";

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

const SelectPaymentType = styled.div`
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    position: relative;
`


const DatePicker = styled.div`
    background: url('Icon_calendar.svg');
    background-repeat: no-repeat;
    display: inline-block;
    width: 16px;
    height: 18px;
    padding-left:1.5rem;


`
const DatePickerWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 33%;
    height: 18px;
`

const SelectLabel = styled.div``

const Textarea = styled.textarea`
    width: 100%;
    height: 70px;
    border-radius: 10px;
    background-color: #EAEAEA;
    outline: none;
    border: none;
    font-size: 10px;
    font-weight: 300;
    line-height: 10px;
    color: #000000;
    font-family: Inter;
    margin: 1rem auto 0 auto;
    padding: .5rem;
    position: relative;

    &:hover,&:focus, &:focus-visible {
        outline: none;
        border: none;

    }
    &::placeholder{
        font-size: 10px;
        font-weight: 300;
        line-height: 10px;
        font-family: Inter;
        color: #7F7F7F;
    }

`

export default function AddPaymentCard({...props}) {

    const paymentTypes = {
        options: [
            {
                option: 'Income'
            },
            {
                option: 'Expense'
            },
        ]
    }

    const dispatch = useDispatch();
    const inputVal = useSelector(state => state.options.inputVal)
    const areaVal = useSelector(state => state.options.areaVal)
    const selectedDate = useSelector(state => state.date.currentDate)
    const isHidden = useSelector(state => state.date.hidden)

    const id = useSelector(state => state.category.id);

    return (
        <Card>
            <CardHeader>
                <DropDownMenu options={paymentTypes} />
                <div className="inputPaymentWrapper">
                    <InputPayment type="number" min={"0"} pattern="\d*" onChange={(e) => {dispatch({type: "CHANGE_INPUT_VALUE", payload: e.target.value})}} value={inputVal}/>
                    <>
                        <img src="Rouble.svg" alt="" />
                    </>
                </div>
            </CardHeader>
            <DatePickerWrapper onClick={() => {dispatch({type: "SET_DATE_HIDDEN", payload: !isHidden})}}>
                    <DatePicker />
                     <div style={{fontFamily: "Inter",fontSize: "12px", fontWeight: "300", lineHeight: "22px", color: "#7F7F7F", textDecoration: "underline"}}>
                         {selectedDate}
                     </div>   
                 
                        
                </DatePickerWrapper>
                <Calendar value={selectedDate} dateFormat="dd/mm/yyyy"
                onChange={(e) => {dispatch({type: "SET_DATE", payload: `${e.value?.getDate()}.${e.value?.getMonth()+1}.${e.value?.getFullYear() }`}); dispatch({type: "SET_DATE_HIDDEN", payload: !isHidden})}} 
                
                inline style={{opacity: `${isHidden ? 0 : 1}`, display: `${isHidden ? 'none' : 'block'}`}} />

                { Categories.categories.map((elem) => (
                
                        <CategoryLabel key={elem.id} name={elem.name} color={elem.color} id={elem.id} main={elem.id === id} 
                        />
                
                ))}
                
                <Textarea onChange={(e) => {dispatch({type: "CHANGE_TEXTAREAINPUT_VALUE", payload: e.target.text})}} placeholder="Comment text." id={'commentForPayment'} name="commentForPayment"></Textarea>            
               

        </Card>
    )
}

const DropDownOption = styled.div`

`
export function DropDownMenu({...props}) {
    const propsOption = props.options

    const dispatch = useDispatch();
    const option = useSelector(state => state.options.option)
    const isHidden = useSelector(state => state.options.hidden)

    const DropDownMenuStyled = styled.div`
        display: block;
        position: absolute;
        margin-top: 1rem;
        background-color: #ffffff;
        padding: 1rem 1rem;
        border-radius: 20px;
        opacity: ${isHidden ? 0 : 1};
        z-index: 100;
        display: ${isHidden ? 'none' : 'block'};
        box-shadow: 0px 0 10px -4px;

    `

    return (
        <>
        <SelectPaymentType onClick={() => {dispatch({type: "SET_HIDDEN", payload: !isHidden})}}>
    
                {option}
       
            <DropDownMenuStyled>
                {
                    propsOption.options.map((item,index) => (
                        <> 
                            <div onClick={() => {dispatch({type: "SET_TYPE_PAYMENT", payload: item.option}); dispatch({type: "SET_HIDDEN", payload: true})}} className="dropdownItem" key={index} id={item.option}>{ item.option}</div>
                        </>
                    ))
                }
            </DropDownMenuStyled>
        </SelectPaymentType>
         
        </>
    )
}