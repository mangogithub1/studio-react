import { useState } from 'react';
import c from './ListForm.module.css';
import { Heading1 } from '../ui/Heading';

const ListForm = (props) => {
	const [inputName, setInputName] = useState('');
	const [inputThumb, setInputThumb] = useState('');
	const [inputEmail, setInputEmail] = useState('');
	const nameChangeHandler = (e) => {
		setInputName(e.target.value);
	};
	const thumbChangeHandler = (e) => {
		setInputThumb(e.target.value);
	};
	const emailChangeHandler = (e) => {
		setInputEmail(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		const newDB = { name: inputName, thumb: inputThumb, email: inputEmail };
		props.addDB(newDB);
		setInputName('');
		setInputThumb('');
		setInputEmail('');
	};

	return (
		<div className={c.listform}>
			<Heading1 content="등록하기" />
			<form onSubmit={submitHandler}>
				<div className={c.input_group}>
					<label>이름</label>
					<input type="text" onChange={nameChangeHandler} value={inputName} />
				</div>
				<div className={c.input_group}>
					<label>사진</label>
					<input type="text" onChange={thumbChangeHandler} value={inputThumb} />
				</div>
				<div className={c.input_group}>
					<label>이메일</label>
					<input type="email" onChange={emailChangeHandler} value={inputEmail} />
				</div>
				<div className={c.input_group}>
					<button type="submit">전송</button>
				</div>
			</form>
		</div>
	);
};
export default ListForm;
