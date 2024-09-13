import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Prayer from './components/Prayer';
import React, { useState, useEffect } from 'react';
import Home from "./components/Home";


export function App() {
	const [totalCount, setTotalCount] = useState(0);

	const [response, setResponse] = useState('');
	const [param, setParam] = useState('');

	useEffect(() => {
		// Call the Apps Script function to get the initial value  
		if (typeof google !== 'undefined' && google.script) {
			google
				.script
				.run
				.withSuccessHandler(setTotalCount)
				.getTotal();
		} else {
			console.error('Google script is not loaded yet');
		}
	}, []); // Empty dependency array ensures this runs only once on mount  

	const callAppsScript = (x) => {
		if (typeof google !== 'undefined' && google.script) {
			google
				.script
				.run
				.withSuccessHandler()
				.setTotal(x);
		} else {
			console.error('Google script is not loaded yet');
		}
	};

	return (
		<div className="container">
			<h1>حملة الصلاة على النبي</h1>
			<Routes >
				<Route path="/" element={<Home />} />
				<Route path="/prayer" element={<Prayer onClick={(x) => {
					setTotalCount(totalCount + x);
					callAppsScript(totalCount + x);
				}} />} />
				<Route path="*" element={<Home />} />
			</Routes>
			<span className="main-counter">{totalCount}</span>
		</div>
	);
}