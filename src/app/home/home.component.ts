import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public combinations: Observable<any[]>;
	public words: Observable<any[]>;
	public index: number;
	public indexes: number[];
	public selectedCode:any;
	public allCodes:any;
	public allWords:any;
	public selectedWords:any[];

	ngOnInit() {
	}

	constructor(db: AngularFirestore) {
		this.combinations = db.collection('/combinations').valueChanges();
		this.combinations.subscribe(res=> this.allCodes = res);
		this.words = db.collection('/words').valueChanges();
		this.words.subscribe(res=> this.allWords = res);
		console.log("got all the words", this.allWords);
	};

	getWords(){
		this.indexes = [Math.floor(Math.random() * 717),Math.floor(Math.random() * 717),Math.floor(Math.random() * 717),Math.floor(Math.random() * 717)];
		this.selectedWords = [this.allWords[this.indexes[0]],this.allWords[this.indexes[1]],this.allWords[this.indexes[2]],this.allWords[this.indexes[3]]];
		console.log("the indexes", this.indexes);
		console.log("and the words", this.selectedWords);

}
	getCode(){
		this.index = Math.floor(Math.random() * 24);
		this.selectedCode = this.allCodes[this.index]

}
}