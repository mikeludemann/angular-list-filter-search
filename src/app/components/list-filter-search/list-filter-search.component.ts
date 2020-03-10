import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'list-filter-search',
	templateUrl: './list-filter-search.component.html',
	styleUrls: ['./list-filter-search.component.css']
})
export class ListFilterSearchComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	//@Input() id: string;

	@ViewChild('lfs', {static: false}) el: ElementRef;

	constructor() { }

	ngOnInit() {
	}

	ngAfterViewInit(){

		var textfield = document.getElementById("searchlist");

    console.log(textfield);

		function filterList(event){

			var input, filter, list, li, a, i, txtValue;

			input = document.getElementById("searchlist");

			filter = input.value.toUpperCase();

			list = input.parentElement.children[1];

			li = list.getElementsByTagName("li");

			for (i = 0; i < li.length; i++) {

				txtValue = li[i].textContent || a.innerText;

				if (txtValue.toUpperCase().indexOf(filter) > -1) {

					li[i].style.display = "";

				} else {

					li[i].style.display = "none";

				}

			}

		}

		textfield.addEventListener("keyup", function(){
			filterList(event);
		});

	}

}
