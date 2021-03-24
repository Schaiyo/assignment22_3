import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  @Input() groupName: String;
  @Input() configName: String;
  @Input() remark: String;
  @Input() detail: String;
  @Input() value: String;
  @Input() listValue: String[] = ['Off', 'afterDelay', 'onFocusChange', 'onWindowChange'];

  constructor() { }

  ngOnInit(): void {
  }
  
}
