import Items from './Items';
import './lists.css';
import Row from '../ui/Row';
import ListForm from '../listForm/ListForm';

const Lists = (props) => {
	const addDBHandler = (db) => {
		let id = Math.random().toString(36).substring(2, 5);
		const newdb = { ...db, id };
		props.addlist(newdb);
	};
	return (
		<>
			<ListForm addDB={addDBHandler} />
			<Row className="lists">
				{props.data.map((item) => {
					return <Items key={item.id} id={item.id} name={item.name} thumb={item.thumb} email={item.email} />;
				})}
			</Row>
		</>
	);
};
export default Lists;
