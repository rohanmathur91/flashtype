import React from 'react';
import './TestContainer.css';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';

const TestContainer = ({
	selectedParagraph,
	words,
	characters,
	wpm,
	timeRemaining,
	timeStarted,
	testInfo,
	onInputChange,
	startAgain,
}) => {
	return (
		<div className="test-container">
			{timeRemaining > 0 ? (
				<div data-aos="fadeup" className="typing-challenge-cont">
					<TypingChallengeContainer
						timeRemaining={timeRemaining}
						timeStarted={timeStarted}
						selectedParagraph={selectedParagraph}
						words={words}
						characters={characters}
						wpm={wpm}
						testInfo={testInfo}
						onInputChange={onInputChange}
					/>
				</div>
			) : (
				<div className="try-again-cont">
					<TryAgain
						startAgain={startAgain}
						words={words}
						characters={characters}
						wpm={wpm}
					/>
				</div>
			)}
		</div>
	);
};

export default TestContainer;
