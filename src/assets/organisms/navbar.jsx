import styled from "styled-components"

    const NavBar = styled.footer`
        background-color: #ffffff;
        padding: 1rem;
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        box-shadow:0px 20px 9px 14px;
    `
    const ImageContainer = styled.div``
    const MenuWrapper = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
    `
   
export default function Navbar({...props}) {

    const activeLink = props.activeLink;

    const AddNewButton = styled.div`
    background-color: #9048EC;
    padding: ${activeLink === 'AddNew' ? '1rem 10%' : '1rem' };
    color: #ffffff;
    border-radius: 20px;
    position: absolute;
    top: -25px;
    text-align: center;
    font-family: Sora;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 800;
    line-height: 1.375rem; /* 122.222% */
    letter-spacing: -0.02688rem;
`

    return (
        <>
            <NavBar>
                <div className="container">
                    <MenuWrapper>
                   <a style={{width: '30%', textAlign: 'left'}} href={ activeLink !== 'Home' ? '/test-api-react-gh/#/' : 'javascript:void(0)'}>
                        <ImageContainer >
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" fill="none">
                                <path d="M0.722168 8.31502V16.8889C0.722168 17.4412 1.16988 17.8889 1.72217 17.8889H19.2777C19.83 17.8889 20.2777 17.4412 20.2777 16.8889V8.31501C20.2777 8.00897 20.1376 7.71977 19.8974 7.53013L11.1196 0.600307C10.7563 0.313484 10.2436 0.313484 9.8803 0.600307L1.10252 7.53013C0.862313 7.71977 0.722168 8.00897 0.722168 8.31502Z" fill={activeLink == 'Home' ? '#9048EC': '#CDCDCD' }/>
                            </svg>
                        </ImageContainer>
                    </a>
                   
                    <AddNewButton >
                        <a style={{color: '#ffffff', textDecoration:'none'}} href={ activeLink !== 'AddNew' ? '/test-api-react-gh/#/add/' : 'javascript:void(0)'}>
                            {activeLink === 'AddNew' ? 'Add new' : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M13.492 3.61441L13.4909 3.59753L13.4886 3.58076C13.4056 2.97008 12.8829 2.5 12.2498 2.5C11.5593 2.5 10.9999 3.05998 11 3.75024C11 3.75024 11 3.75025 11 3.75025L11.0011 10.5H4.2522H4.2354L4.21864 10.5011L4.11687 10.508L4.09998 10.5091L4.08321 10.5114C3.4726 10.5942 3.0022 11.1168 3.0022 11.75C3.0022 12.4404 3.56184 13 4.2522 13H11.0013L11.0032 19.7496L11.0032 19.7663L11.0044 19.7831L11.0112 19.8848L11.0124 19.9017L11.0147 19.9185C11.0976 20.5292 11.6203 20.9993 12.2534 20.9993C12.9439 20.9993 13.5034 20.4393 13.5032 19.749V19.749L13.5013 13H20.2543H20.2711L20.2878 12.9989L20.3896 12.992L20.4065 12.9909L20.4233 12.9886C21.0339 12.9058 21.5043 12.3832 21.5043 11.75C21.5043 11.0596 20.9446 10.5 20.2543 10.5H13.5011L13.5 3.74976L13.5 3.73296L13.4989 3.71618L13.492 3.61441Z" fill="#F5F5F5" stroke="#F5F5F5"/>
                            </svg>}
                        </a>
                    </AddNewButton>
                    
                    <a style={{width: '30%', textAlign: 'right'}} href={ activeLink !== 'Analytics' ? '/test-api-react-gh/#/analytics/' : 'javascript:void(0)'}>
                        <ImageContainer >
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                                <rect x="0.783081" y="11.4286" width="6.30409" height="8.57143" rx="1" fill={activeLink == 'Analytics' ? '#9048EC': '#CDCDCD' }/>
                                <rect x="8.3479" width="6.30409" height="20" rx="1" fill={activeLink == 'Analytics' ? '#9048EC': '#CDCDCD' }/>
                                <rect x="15.9129" y="4.28571" width="6.30409" height="15.7143" rx="1" fill={activeLink == 'Analytics' ? '#9048EC': '#CDCDCD' }/>
                            </svg>
                        </ImageContainer>
                    </a>
                    </MenuWrapper>
                </div>
            </NavBar>
        </>
    )
}