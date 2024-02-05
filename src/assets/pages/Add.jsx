import AddPaymentCard from "../organisms/AddPayment";
import Header from "../organisms/Header";
import Navbar from "../organisms/navbar";

export default function Add({...props}) {
    return (
        <>
            <Header />
            <div className="container">
                <AddPaymentCard />
            </div>  
            <Navbar activeLink={'AddNew'}/>
        </>
    )
}