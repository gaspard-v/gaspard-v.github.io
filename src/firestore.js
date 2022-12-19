// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, getDocs, collection } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export class firestoreData {
	constructor(firebaseConfig = undefined) {
		// Your web app's Firebase configuration
		// For Firebase JS SDK v7.20.0 and later, measurementId is optional
		this.firebaseConfig = {
			apiKey: 'AIzaSyDJLtmFqxggqQ4S6cHzXgJy_dfsCCEmFmQ',
			authDomain: 'github-io-6896a.firebaseapp.com',
			databaseURL: 'https://github-io-6896a-default-rtdb.firebaseio.com',
			projectId: 'github-io-6896a',
			storageBucket: 'github-io-6896a.appspot.com',
			messagingSenderId: '706438356383',
			appId: '1:706438356383:web:adb5f33271b328f58c71aa',
			measurementId: 'G-7TVN7BPR0L',
		};
		if (firebaseConfig) {
			this.firebaseConfig = firebaseConfig;
		}
		// Initialize Firebase
		this.app = initializeApp(this.firebaseConfig);
		this.analytics = getAnalytics(this.app);
		this.db = getFirestore(this.app);
		this.articlesCol = collection(this.db, 'articles');
	}

	async getLanguage() {
		const languageSnapshot = await getDocs(this.articlesCol);
	}
}
