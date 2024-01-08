import 

export default function Header({props}) {

    return (
        <header className="secondary_header">
            <div className="back_link">
                <a className="back_link_a" href="/">Back</a>
            </div>
            <div className="settings">
                <a href="/settings">
                    <img src="/Settings.svg" alt="settings" />
                </a> 
            </div>
        </header>
    );
}