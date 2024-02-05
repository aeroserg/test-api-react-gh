import styled from "styled-components";


export default function Header({...props}) {

const BackButtomSecondary = styled.a`
    margin-left: 1rem;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
`
const BackLink = styled.div`
    background: url('arrow_back.svg');
    background-repeat: no-repeat;
    background-position: left;
    
`

const SettingsButton = styled.a`
    background: url('Setting.svg');
    background-repeat: no-repeat;
    display: block;
    width: 25px;
    height: 25px;
`

const SecondaryHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const SecondaryHeader = styled.header`
    padding: 2rem 0;
`
    return (
        <SecondaryHeader>
            <div className="container">
                <SecondaryHeaderWrapper>
                    <BackLink>
                        <BackButtomSecondary href={"/test-api-react-gh/#/"}>Back</BackButtomSecondary>
                    </BackLink>
                    <div className="settings">
                        <SettingsButton href={'/test-api-react-gh/#/settings/'}/>
                    </div>
                </SecondaryHeaderWrapper>
            </div>
        </SecondaryHeader>
    );
}