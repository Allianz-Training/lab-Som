import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:any[];
  form:FormGroup;

  constructor(private httpClient:HttpClient,private fb:FormBuilder) {
    this.form=this.fb.group({
      userId:'',
      title:'',
      body:''
    });
   }

  ngOnInit(): void {
    // this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe(
    //   (result)=> (this.users=result as any)
    // );
    this.loadPost();
  }
  loadPost(){
    this.users=[];
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe(result=> this.users=result as any[]);

  }
  addPost(){
    const newPost=this.form.value;
    this.httpClient.post('https://jsonplaceholder.typicode.com/posts',newPost).subscribe(result=>{
      this.form.reset();
      alert('Add Post Success !');
      console.log(JSON.stringify(newPost));
      this.loadPost();
    })
  }

}
