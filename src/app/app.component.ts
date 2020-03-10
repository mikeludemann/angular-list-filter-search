import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-list-filter-search';

	datas = [
		{id: 1, name: "Apples"},
		{id: 2, name: "Broccoli"},
		{id: 3, name: "Tomatos"},
		{id: 4, name: "Milk"},
		{id: 5, name: "Eggs"},
		{id: 6, name: "Water"},
		{id: 7, name: "Granola"},
		{id: 8, name: "Bananas"},
		{id: 9, name: "Smoothie"},
		{id: 10, name: "Salat"},
		{id: 11, name: "Yogurt"}
	];
}
