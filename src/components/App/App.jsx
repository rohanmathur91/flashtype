import React from 'react';

import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import { SAMPLE_PARAGRAPHS } from '../../data/sampleParagraphs';
import './App.css';

const TotalTime = 60;
// const ServiceUrl = 'https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text';

const DefaultState = {
	selectedParagraph: '',
	testInfo: [],
	timeStarted: false,
	timeRemaining: TotalTime,
	words: 0,
	characters: 0,
	wpm: 0,
};

class App extends React.Component {
	state = DefaultState;

	fetchNewParagraphFallback = () => {
		const data =
			SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];
		const selectedParagraphArray = data.split('');
		const testInfo = selectedParagraphArray.map((selectedLetter) => {
			return {
				testLetter: selectedLetter,
				status: 'notAttempted',
			};
		});

		this.setState({ ...DefaultState, testInfo, selectedParagraph: data });
	};

	// fetchNewParagraph = () => {
	// 	fetch(ServiceUrl)
	// 		.then((response) => response.text())
	// 		.then((data) => {
	// 			const selectedParagraphArray = data.split('');
	// 			const testInfo = selectedParagraphArray.map((selectedLetter) => {
	// 				return {
	// 					testLetter: selectedLetter,
	// 					status: 'notAttempted',
	// 				};
	// 			});

	// 			this.setState({ ...DefaultState, testInfo, selectedParagraph: data });
	// 		});
	// };

	componentDidMount() {
		this.fetchNewParagraphFallback();
	}

	startTimer = () => {
		this.setState({ timeStarted: true });

		const timer = setInterval(() => {
			if (this.state.timeRemaining > 0) {
				// Change the WPM
				const timeSpent = TotalTime - this.state.timeRemaining;
				const wpm =
					timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;

				this.setState({
					timeRemaining: this.state.timeRemaining - 1,
					wpm: parseInt(wpm),
				});
			} else {
				clearInterval(timer);
			}
		}, 1000);
	};

	// Try Again
	startAgain = () => this.fetchNewParagraphFallback();

	handleUserInput = (inputValue) => {
		if (!this.state.timeStarted) this.startTimer();

		/**
		 * 1. Handle the initial case - all characters should be shown as not-attempted
		 * 2. Handle the overflow case - early exit
		 * 3. Handle the backspace case
		 *      - Mark the [index+1] element as notAttempted
		 *        (irrespective of whether the index is less than zero)
		 *      - But, don't forget to check for the overflow here
		 *        (index + 1 -> out of bound, when index === length-1)
		 * 4. Update the status in testInfo
		 *      1. Find out the last character in the inputValue and it's index
		 *      2. Check if the character at same index in testInfo (state) matches
		 *      3. Yes -> Correct
		 *         No  -> Incorrect (Mistake++)
		 * 5. Irrespective of the case, characters, words and wpm can be updated
		 */

		const characters = inputValue.length;
		const words = inputValue.split(' ').length;
		const index = characters - 1;

		// Initial Case
		if (index < 0) {
			this.setState({
				testInfo: [
					{
						testLetter: this.state.testInfo[0].testLetter,
						status: 'notAttempted',
					},
					...this.state.testInfo.slice(1),
				],
				characters,
				words,
			});
			return;
		}

		// Overflow case - if user continue to type after paragraph is completed
		if (index >= this.state.selectedParagraph.length) {
			this.setState({ characters, words });
			return;
		}

		// Backspace logic
		// copy of testInfo
		const testInfo = this.state.testInfo;
		if (!(index === this.state.selectedParagraph.length - 1)) {
			testInfo[index + 1].status = 'notAttempted';
		}

		// Check for correct typed letter
		const isCorrect = inputValue[index] === testInfo[index].testLetter;

		// Update the status of testletter in testInfo
		testInfo[index].status = isCorrect ? 'correct' : 'incorrect';

		this.setState({
			testInfo,
			words,
			characters,
		});
	};

	render() {
		return (
			<div className="app">
				{/* Nav Section */}
				<Nav />

				{/* Landing Page */}
				<Landing />

				{/* Challenge Section */}
				<ChallengeSection
					selectedParagraph={this.state.selectedParagraph}
					words={this.state.words}
					characters={this.state.characters}
					wpm={this.state.wpm}
					timeRemaining={this.state.timeRemaining}
					timeStarted={this.state.timeStarted}
					testInfo={this.state.testInfo}
					onInputChange={this.handleUserInput}
					startAgain={this.startAgain}
				/>

				{/* Footer */}
				<Footer />
			</div>
		);
	}
}

export default App;
