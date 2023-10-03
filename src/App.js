import { useState } from 'react';
import './App.css';

import Layout from './components/layout/Layout';
import Lists from './components/listViews/Lists';
import { Heading1 } from './components/ui/Heading';

const DB = [
	{
		id: 's1',
		name: '머리묶은 김망고',
		thumb: 'http://qwerew.cafe24.com/images/pet-1.jpg',
		email: 'abc@de.com',
		phone: '00-001-5168',
	},
	{
		id: 's2',
		name: '햇살받은 김망고',
		thumb: 'http://qwerew.cafe24.com/images/pet-3.jpg',
		email: 'abc@de.com',
		phone: '00-001-5168',
	},
];

export default function App() {
	const [addList, setaddList] = useState(DB);
	const addDBHandler = (db) => {
		setaddList((prev) => {
			return [db, ...prev];
		});
	};
	return (
		<div className="App">
			<Layout>
				<Heading1 content="망고네 회원명단" />
				<Lists data={addList} addlist={addDBHandler} />
			</Layout>
		</div>
	);
}
