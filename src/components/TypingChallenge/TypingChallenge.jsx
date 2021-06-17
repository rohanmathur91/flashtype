import React from 'react';
import './TypingChallenge.css';
import TestLetter from '../TestLetter/TestLetter';

const TypingChallenge = ({
	timeRemaining,
	timeStarted,
	testInfo,
	onInputChange,
}) => {
	return (
		<div className="typing-challenge">
			<div className="timer-container">
				<p className="timer">
					00:
					{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
				</p>
				<p className="timer-info">
					{!timeStarted && 'Start typing to start the test'}
				</p>
			</div>

			<div className="textarea-container">
				<div className="textarea-left">
					<div className="textarea test-paragraph">
						{/* {selectedParagraph} */}
						{testInfo.map((individualLetterInfo, idx) => {
							return (
								<TestLetter
									key={idx}
									individualLetterInfo={individualLetterInfo}
								/>
							);
						})}
					</div>
				</div>

				<div className="textarea-right">
					<textarea
						onChange={(e) => onInputChange(e.target.value)}
						className="textarea"
						placeholder="Start typing here"
					></textarea>
				</div>
			</div>
		</div>
	);
};

export default TypingChallenge;
