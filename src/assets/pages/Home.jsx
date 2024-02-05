import MainSummary from "../organisms/mainSummary";
import styled from "styled-components";
import FastAnalytics from "../organisms/fastAnanlytics";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import HRecentOperations from "../organisms/hRecentOperations";
import Navbar from "../organisms/navbar";
const SectionDefault = styled.section`
    padding: 1rem 0;
`

function getParamValue(urlString, param) {
    var url = new URL(urlString);
    var c = url.searchParams.get(param);
    return c;
}

const BASE_URL_NO_HASH = location.origin + location.pathname + location.search;    
 
const userDataParamVal = {
    tg_id: getParamValue(BASE_URL_NO_HASH, 'tg_id'),
    first_name: getParamValue(BASE_URL_NO_HASH, 'first_name'),
    last_name: getParamValue(BASE_URL_NO_HASH, 'last_name')
}

const cookies = new Cookies();

export default function Home({...props}) {
    const [mockData, setMockData] = useState({});

    //get access token and set to cookie
    useEffect( () => {
        async () => {
           const res = await fetch('http://142.93.230.144:9000/api/tg_auth', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify(userDataParamVal)
            })
            const data = await res.json();
            cookies.set('XTokenTG', data.access_token, { path: '/', maxAge: 1800})
        }
    }, [])

    //get data with XTokenTG
    useEffect(() => {
        async () => {
            const res = await fetch('http://142.93.230.144:9000/api/tg_auth', {
                headers: {
                    'Authorization': `Bearer ${cookies.get('XTokenTG')}`,
                },
                method: 'get',
            })
            const data = await res.json();
            setMockData(data);
        }
    })

    return (
      <>
          <main className="l-section">
            <header >
                <div className="container">
                    <div className="home_header">
                        <div className="img_profile">
                            <img src="icon_profile.svg" alt="" />
                        </div>
                        <div className="header_text">
                            <div className="header_greeting">
                                Hello,
                            </div>
                            <div className="header_name">
                                Sergey Gustavo
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            your token: {cookies.get('XTokenTG') ? cookies.get('XTokenTG') : 'is missing'}
            <SectionDefault className="main_section">
                <MainSummary />
                <FastAnalytics /> 
                <HRecentOperations />
            </SectionDefault>
        </main>
        <Navbar activeLink={'Home'}/>
      </>
    )
}