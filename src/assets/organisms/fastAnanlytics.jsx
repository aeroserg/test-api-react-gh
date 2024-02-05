import { Chart } from "chart.js"
import styled from "styled-components"
import DoubleBarChart from '../atoms/doubleBarChart';
import SectionTitle from "../atoms/sectionTitle";

const AnanlyticsCard = styled.div`
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
`

export default function FastAnalytics({...props}) {
    return (
        <>
        <div className="container">
            <SectionTitle text={'Fast analytics'}/>
            <AnanlyticsCard >
                <DoubleBarChart />
            </AnanlyticsCard>
        </div>
          
        </>
    )
}