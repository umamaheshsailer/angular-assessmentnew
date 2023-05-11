import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { Router } from '@angular/router';
interface Video {
  id: string;
  name: string;
  url: string;
}
@Injectable({
  providedIn: 'root'
})

export class UserloginService {

videos!:Video[];

  constructor(private http:HttpClient,private router:Router) { }
login(user:user){
  this.http.post<any>('http://localhost:3000/login', user).subscribe(
    (response) => {

      const token = response.token;

      localStorage.setItem('token', token);
      if(response)
      this.router.navigateByUrl('/home')

    },
    error => {
      console.log(error)
    });}
signup(user:user){
      this.http.post<any>('http://localhost:3000/signup', user).subscribe(
        (response) => {
          if(response)
          this.router.navigateByUrl('')

        },
        error => {
          console.log(error)
        });}
getvideos(){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  this.http.get<{ videos: Video[] }>('http://localhost:3000/api/videos', { headers }).subscribe(
    response => {
      this.videos = response.videos
    },
    error => {
      console.log(error)
    }

  );
  return this.videos
}
postVideos(data:any){
  console.log(data)
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  this.http.post('http://localhost:3000/api/videos',data,{headers}).subscribe(resp=>{
    console.log(resp)
  })
}
postBookmark(timestamp: string,videoid:string) {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  this.http.post<{ videos: Video[] }>('http://localhost:3000/api/videos/bookmarks',videoid, { headers }).subscribe(resp=>{
    console.log(resp)
  }
)}
}

