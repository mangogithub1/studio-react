import c from './Heading.module.css';
export const Heading1 = (props) => {
	return (
			<h2 className={c.h2}>{props.content}</h2>
	);
};
