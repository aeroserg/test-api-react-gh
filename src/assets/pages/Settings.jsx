import Header from "../organisms/Header";
import Navbar from "../organisms/navbar";

export default function Settings({props}) {
    return (
        <> 
            <Header />
            <Navbar activeLink={'Settings'}/>
        </>
    )
}
