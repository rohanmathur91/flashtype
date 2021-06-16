import React from 'react';
import './TestContainer.css';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';

const TestContainer = ({ words, characters, wpm }) => {
	const timeRemaining = 0;

	return (
		<div className="test-container">
			{timeRemaining > 0 ? (
				<div data-aos="fadeup" className="typing-challenge-cont">
					<TypingChallengeContainer
						words={words}
						characters={characters}
						wpm={wpm}
					/>
				</div>
			) : (
				<div className="try-again-cont">
					<TryAgain words={words} characters={characters} wpm={wpm} />
				</div>
			)}
		</div>
	);
};

export default TestContainer;
