import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {


	public data : any;
  constructor(
  public navCtrl: NavController,
	public http: Http

  ) {

  	this.listarPosts();

  }
  	listarPosts(){
	  	this.http.get("http://cesar.pe/wp-json/wp/v2/posts")
	  	.map(res=>res.json())
	  	.subscribe(data => {
	  	this.data= data;
	  	console.log(data);

  	})
  }
}
