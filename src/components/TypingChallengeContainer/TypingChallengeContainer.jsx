import React from 'react';
import './TypingChallengeContainer.css';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';

const TypingChallengeContainer = ({
	selectedParagraph,
	words,
	characters,
	wpm,
	timeRemaining,
	timeStarted,
	testInfo,
	onInputChange,
}) => {
	return (
		<div className="typing-chanllenge-container">
			{/* Details Section */}
			<div className="details-container">
				{/* Words Typed */}
				<ChallengeDetailsCard cardName="Words" cardValue={words} />

				{/* Characters Typed */}
				<ChallengeDetailsCard cardName="Characters" cardValue={characters} />

				{/* Speed (WPM) */}
				<ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
			</div>

			{/* Typing challenge */}
			<div className="typewriter-container">
				<TypingChallenge
					onInputChange={onInputChange}
					testInfo={testInfo}
					timeRemaining={timeRemaining}
					timeStarted={timeStarted}
					selectedParagraph={selectedParagraph}
				/>
			</div>
		</div>
	);
};

export default TypingChallengeContainer;
