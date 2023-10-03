import c from './Row.module.css';

const Row = (props) => {
	const addCls = props.className == 'undefined' ? '' : `${props.className}`;

	return <div className={`${c.row} ${addCls}`}>{props.children}</div>;
};
export default Row;
