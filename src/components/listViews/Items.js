import c from './Items.module.css';
import { ItemEl } from './ItemEl';
import Row from '../ui/Row';
const Items = ({ id, name, thumb, email }) => {
	return (
		<div className={c.items}>
			<Row className={`${c.list_group} ${c.col}`}>
				<img src={thumb} alt={name} className={`${c.img} ${c.item_1}`} />
				<Row className={`${c.col}`}>
					<ItemEl title="이 름" content={name} />
					<ItemEl title="이메일" content={email} />
				</Row>
			</Row>
		</div>
	);
};
export default Items;
