import React from 'react';
import './TestLetter.css';

const TestLetter = ({ individualLetterInfo }) => {
	const { testLetter, status } = individualLetterInfo;

	const statusClass = {
		correct: 'test-letter-correct',
		incorrect: 'test-letter-incorrect',
		notAttempted: 'test-letter-not-attempted',
	}[status];

	return <span className={`test-letter ${statusClass}`}>{testLetter}</span>;
};

export default TestLetter;
