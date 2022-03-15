interface Props {
	width: string;
	height: string;
}

function Spacer({ width, height }: Props) {
	return (
		<div
			style={{
				width,
				height
			}}
		></div>
	);
}

export default Spacer;
