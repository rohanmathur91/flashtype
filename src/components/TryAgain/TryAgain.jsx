import React from 'react';
import './TryAgain.css';

const TryAgain = ({ words, characters, wpm }) => {
	return (
		<div className="try-again-container">
			<h1>Test Results</h1>
			<div className="result-container">
				<p>
					<b>Characters:</b> {characters}
				</p>
				<p>
					<b>Words:</b> {words}
				</p>
				<p>
					<b>Speed:</b> {wpm}
				</p>
			</div>
			<div>
				<button className="end-buttons start-again-btn">Re-try</button>
				<button
					onClick={() => {
						window.open(
							'https://www.facebook.com/sharer/sharer.php?u=github.com/rohan-04',
							'facebook-share-dialog',
							'width=800,height=600'
						);
					}}
					className="end-buttons share-btn"
				>
					Share
				</button>
				<button
					onClick={() => {
						window.open(
							'https://twitter.com/intent/tweet?text=Kuch bhi??',
							'Twitter',
							'width=800,height=600'
						);
					}}
					className="end-buttons tweet-btn"
				>
					Tweet
				</button>
				<button
					onClick={() => {
						window.open(
							'https://www.linkedin.com/sharing/share-offsite/?url=github.com/rohan-04',
							'LinkedIn',
							'width=800,height=600'
						);
					}}
					className="end-buttons linkedin-btn"
				>
					LinkedIn
				</button>
			</div>
		</div>
	);
};

export default TryAgain;
