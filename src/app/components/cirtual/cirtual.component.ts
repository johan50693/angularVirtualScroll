import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cirtual',
  templateUrl: './cirtual.component.html',
  styleUrls: ['./cirtual.component.css']
})
export class CirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport,{static: false} ) viewPort: CdkVirtualScrollViewport;

  personas = Array(500).fill(0);

  constructor() { 
    console.log(this.personas);
  }

  ngOnInit() {
  }

  irFinal(){
    this.viewPort.scrollToIndex(this.personas.length);
  }
  
  irInicio(){
    this.viewPort.scrollToIndex(0);
  }

  irMitad(){
    this.viewPort.scrollToIndex(this.personas.length/2);
  }

}
