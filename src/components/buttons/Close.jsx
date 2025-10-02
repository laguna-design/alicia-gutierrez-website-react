const CloseBtn = ({ overlay = 'hi' }) => {
	return(
		<button
				className="laguna__close_btn lagunahover-container"
				data-overlay={overlay}
			>
				<svg
				className="laguna__close_btn_arrow"
				width="31"
				height="36"
				viewBox="0 0 31 36"
				fill="none"
				>
				<path
					d="M15.334 0L15.334 33.0001"
					stroke="#B9282F"
					strokeWidth="4"
				/>
				<path
					d="M1.99994 18.8569L15.334 32.1909L28.668 18.8569"
					stroke="#B9282F"
					strokeWidth="4"
				/>
				</svg>
				Close
		</button>
	);
};

export default CloseBtn;