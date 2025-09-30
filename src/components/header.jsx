	import { Link } from 'react-router-dom';

	const Header = () => {
	return (
		<header className="laguna__header">
		<div className="laguna__header-nav">
			<svg
			className="lagunahover-container"
			id="laguna_light_mode--btn"
			width="20px"
			height="20px"
			viewBox="0 0 25 25"
			fill="none"
			>
			<circle
				id="laguna_light_mode--btn--sun"
				cx="12.9307"
				cy="12.5"
				r="11"
				fill="#F0D4C0"
				stroke="#F0D4C0"
				strokeWidth="2"
			/>
			</svg>

			<ul className="laguna__main_menu">
			
	<li>
	<Link className="lagunahover-container" to="/">
		<div>H</div>
		<div>o</div>
		<div>m</div>
		<div>e</div>
	</Link>
	</li>

			<li>/</li>
			<li>
				<a className="lagunahover-container" href="../#laguna_work">
				<div>W</div>
				<div>o</div>
				<div>r</div>
				<div>k</div>
				</a>
			</li>
			<li>/</li>
			<li>
				<div
				className="laguna__button__light laguna__trigger_btn lagunahover-container"
				id="contact-link"
				data-overlay="hi"
				>
				<div>H</div>
				<div>i</div>
				<div>!</div>
				</div>
			</li>
			</ul>

			<svg
			className="lagunahover-container"
			id="laguna_dark_mode--btn"
			width="20px"
			height="20px"
			viewBox="0 0 19.4 25"
			>
			<path
				id="laguna_dark_mode--btn--moon"
				d="M11.9,2.3c1.5-.2,2.9,0,4.2.3s1.1,1.6.1,2c-3.3,1.3-5.6,4.5-5.6,8.2s2.4,6.9,5.6,8.2.8,1.7-.1,2-2.8.5-4.2.3h0c-5.5-.4-9.8-4.9-9.8-10.5S6.4,2.7,11.9,2.3h0Z"
			/>
			</svg>
		</div>
		</header>
	);
	};

	export default Header;