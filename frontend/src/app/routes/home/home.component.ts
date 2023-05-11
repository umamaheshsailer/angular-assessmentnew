import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserloginService } from 'src/app/services/userlogin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos!:any[]
  videourl!:string
  videoid!:string
  @ViewChild('myVideo') videoPlayer!: ElementRef;
  postForm!: FormGroup<{ name: FormControl<any>; url: FormControl<any>; }>;
constructor(private userservice:UserloginService){

}
 ngOnInit(): void {
    this.videos = this.userservice.getvideos();
    // this.videourl = this.videos[0]?.url
    this.postForm = new FormGroup({
      name: new FormControl(),
      url:new FormControl(),
    })
  }
  assignvideo(i:any){
this.videourl = i.value.url
this.videoid = i.value.id
  }


  seekToTime(time: number) {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    video.currentTime = time;
    video.play();
}
post(){
this.userservice.postVideos(this.postForm.value)
}
bookmark(){
  const video: HTMLVideoElement = this.videoPlayer.nativeElement;
  const timestamp = video.currentTime
  const timestring = String(timestamp)
  this.userservice.postBookmark(timestring,this.videoid)
}

}

