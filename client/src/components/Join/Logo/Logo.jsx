import src from "../../../img/logo-out.png";
import "./Logo.css";

function Header() {
	return (
		<div className="header-universal">
			<div id="header-logo">
				<img src={src} id="logo-out" />
				<h1>Chatrooms</h1>
			</div>
			<div id="header-main">
				<h1 id="header-name">Chatrooms</h1>
				<h2 id="header-description">
					Easiest way of communicating <br /> Sign in, create a room and chat!
				</h2>
			</div>
		</div>
	);
}

export default Header;
