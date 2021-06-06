import { cryptocurrencies, form, result } from '../selectors.js';

class UI {
	printCryptocurrencies(coinsList) {
		for (const {
			CoinInfo: { Name, FullName },
		} of coinsList) {
			const option = document.createElement('option');
			option.value = Name;
			option.innerText = FullName;
			cryptocurrencies.appendChild(option);
		}
	}

	printMessage(message) {
		const msgExists = document.querySelector('.error');

		if (!msgExists) {
			const divMessage = document.createElement('div');
			divMessage.classList.add('error');
			divMessage.textContent = message;
			form.appendChild(divMessage);

			setTimeout(() => {
				divMessage.remove();
			}, 1300);
		}
	}

	showSpinner() {
		this.cleanResult();

		const spinner = document.createElement('div');
		spinner.classList.add('sk-cube-grid');
		spinner.innerHTML = `
			<div class="sk-cube sk-cube1"></div>
			<div class="sk-cube sk-cube2"></div>
			<div class="sk-cube sk-cube3"></div>
			<div class="sk-cube sk-cube4"></div>
			<div class="sk-cube sk-cube5"></div>
			<div class="sk-cube sk-cube6"></div>
			<div class="sk-cube sk-cube7"></div>
			<div class="sk-cube sk-cube8"></div>
			<div class="sk-cube sk-cube9"></div>
		`;
		result.appendChild(spinner);
	}

	printPurchase(purchase) {
		this.cleanResult();

		const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = purchase;

		const price = document.createElement('p');
		price.classList.add('precio');
		price.innerHTML = `Price: <span>${PRICE}</span>`;

		const highPrice = document.createElement('p');
		highPrice.innerHTML = `<p>Highest price of the day: <span>${HIGHDAY}</span></p>`;

		const lowPrice = document.createElement('p');
		lowPrice.innerHTML = `<p>Lowest price of the day: <span>${LOWDAY}</span></p>`;

		const changePrice = document.createElement('p');
		changePrice.innerHTML = `<p>Changes in the last hours: <span>${CHANGEPCT24HOUR}%</span></p>`;

		const lastUpdate = document.createElement('p');
		lastUpdate.innerHTML = `<p>Last update: <span>${LASTUPDATE}</span></p>`;

		result.appendChild(price);
		result.appendChild(highPrice);
		result.appendChild(lowPrice);
		result.appendChild(changePrice);
		result.appendChild(lastUpdate);
	}

	cleanResult() {
		while (result.firstChild) {
			result.firstChild.remove();
		}
	}
}

export default UI;
