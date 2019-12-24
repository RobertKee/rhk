import React from "react";
import {Link} from "react-router-native";


export default class SideBarContents extends React.Component {
    render() {
        return (
            <div>
                <header className="sidebar-header">
                    Robert Hayes Kee
                    <br />
                    <a href="mailto:robert@roberthayeskee.com">robert@roberthayeskee.com</a>
                </header>
                <ul>
                    <li>
                        <Link to="/bio">Bio</Link>
                    </li>
                    <li>
                        <Link to="/src/CloudMusic/CloudMusic.js">Code</Link>
                    </li>
                    <li>
                        Audio
                    </li>
                    <li>
                        Video
                    </li>
                    <li>
                        Invent Room Pop
                    </li>
                    <li>
                        Practicing Etiquette
                    </li>
                </ul>
                {/* put socials here? */}
            </div>
        )
    }
}