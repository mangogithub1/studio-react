import c from './ItemEl.module.css';
import Row from '../ui/Row';

export const ItemEl = (props) => {
	const arrayValue = props.content;
	let newArray = [];
	if (Array.isArray(arrayValue)) {
		newArray = arrayValue;
	}

	return (
		<Row className={c.item_text}>
			<span className={c.title}>{props.title}</span>
			{Array.isArray(arrayValue) ? (
				<>
					{newArray.map((value, index) => (
						<span key={index} className={c.tag}>
							{value}
						</span>
					))}
				</>
			) : (
				<span className={c.content}>{props.content === true || props.content === false ? '구직중' : props.content}</span>
			)}
		</Row>
	);
};
