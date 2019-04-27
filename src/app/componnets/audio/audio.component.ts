import {Component, ElementRef, Input, OnInit, Renderer, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {
  @Input() musicSrc;
  @ViewChild('audio') audio: ElementRef;
  public audiox: HTMLAudioElement
  duration: string;
  public playMediaFlag: boolean = false;
  constructor(private el: ElementRef,
              private renderer: Renderer) {
  }

  ngOnInit() {
    this.audiox = this.audio.nativeElement as HTMLAudioElement;
    this.audiox.oncanplay = () => {
      this.duration = this.audioDuration;
    };
    this.audiox.onended = () => {
      this.duration = this.audioDuration;
      this.playMediaFlag = false;
    };
    this.audiox.ontimeupdate = () => {
      this.duration = this.audioCurretTime;
    };
    this.audiox.onplaying = () => {
      this.playMediaFlag = true;
    };
    this.audiox.onpause = () => {
      this.playMediaFlag = false;
    };
  }

  get audioDuration() {
    return parseFloat(this.audiox.duration.toString()).toFixed(2);
  }

  get audioCurretTime() {
    return parseFloat((this.audiox.duration - this.audiox.currentTime).toString()).toFixed(2);
  }

  togglePlay() {
    if (this.audiox !== null) {
      /** 重新播放
      * this.audiox.currentTime = 0;
        this.audiox.play();
      */
      if (this.audiox.paused) {
        this.audiox.play();
      } else {
        this.audiox.pause();
      }
    }
  }

}
