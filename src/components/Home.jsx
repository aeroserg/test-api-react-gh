export default function Home({props}) {
    return (
        <main className="l-section">
            <header >
                <div className="container">
                    <div className="home_header">
                        <div className="img_profile">
                            <img src="/icon_profile.svg" alt="" />
                        </div>
                        <div className="header_text">
                            <div className="header_greeting">
                                Good morning
                            </div>
                            <div className="header_name">
                                Sergey Gustavo
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </main>
    )
}