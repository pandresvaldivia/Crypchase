import { form, cryptocurrencies, coins } from './selectors.js';
import {
	getCryptocurrencies,
	submitForm,
	setCoin,
	setCryptocurrencie,
} from './functions.js';

document.addEventListener('DOMContentLoaded', () => {
	getCryptocurrencies();
	form.addEventListener('submit', submitForm);
	coins.addEventListener('change', setCoin);
	cryptocurrencies.addEventListener('change', setCryptocurrencie);
});
