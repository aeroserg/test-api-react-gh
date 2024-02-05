import SectionTitle from "../atoms/sectionTitle";
import SingleOperationCard from "../molecules/singleOperCard";

export default function HRecentOperations({...props}) {

    return (
        <>
            <div className="container">
                <SectionTitle text={'Recent'}/>
                <SingleOperationCard color={'#F6C954'} name={'Grocery'} main={true}/>
            </div>
        </>
      
    )
}