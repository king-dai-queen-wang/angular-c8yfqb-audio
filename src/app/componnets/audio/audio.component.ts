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
  }

  get audioDuration() {
    return parseFloat(this.audiox.duration.toString()).toFixed(2);
  }

  get audioCurretTime() {
    return parseFloat((this.audiox.duration - this.audiox.currentTime).toString()).toFixed(2);
  }

  togglePlay() {
    if (this.audiox !== null) {
      if (this.audiox.paused) {
        this.audiox.play();
        this.playMediaFlag = true;
      } else {
        this.audiox.pause();
        this.playMediaFlag = false;
      }
    }
  }

}
