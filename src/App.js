import './assets/css/main.css';
import Card from "./components/block/Card";
import Avatar from "./components/block/Avatar";
import UserDetails from "./components/block/UserDetails";
import Button from "./components/naviguation/Button";

function App() {
    const links = [
        {
            link: "https://github.com",
            text: "Github"
        },
        {
            link: "https://www.frontendmentor.io",
            text: "Frontend Mentor"
        },
        {
            link: "https://linkedin.com",
            text: "LinkedIn"
        },
        {
            link: "https://twitter.com",
            text: "Twitter"
        },
        {
            link: "https://instagram.com",
            text: "Instagram"
        }
    ]
    return (
        <div className="App">
            <main>
                <section id="container-card-profile">
                    <Card>
                        <UserDetails name="Jessica Randall" city="London, United Kingdom" bio="Front-end developer and avid reader." picture="/assets/images/avatar-jessica.jpeg" />
                        <div className="card-links-container">
                        {/* Links */}
                            {links.map((link) => <Button key={link.text} link={link.link} text={link.text}/>)}
                        </div>
                    </Card>
                </section>
            </main>
        </div>
    );
}

export default App;
