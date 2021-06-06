import UI from './classes/ui.js';

const ui = new UI();
const search = {
	coin: '',
	cryptocurrencie: '',
};

function getCryptocurrencies() {
	const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

	fetch(url)
		.then((res) => res.json())
		.then(({ Data }) => ui.printCryptocurrencies(Data));
}

function submitForm(e) {
	e.preventDefault();
	const { coin, cryptocurrencie } = search;
	if (coin === '' || cryptocurrencie === '') {
		ui.printMessage('All fields are required');
	} else {
		ui.showSpinner();
		getPurchase();
	}
}

function setCoin(e) {
	search[e.target.name] = e.target.value;
	console.log(search);
}

function setCryptocurrencie(e) {
	search[e.target.name] = e.target.value;
	console.log(search);
}

function getPurchase() {
	const { coin, cryptocurrencie } = search;
	const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrencie}&tsyms=${coin}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => ui.printPurchase(data.DISPLAY[cryptocurrencie][coin]));
}

export { getCryptocurrencies, submitForm, setCoin, setCryptocurrencie };
