import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from 'src/app/shared/services';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnDestroy {

  constructor(
    private stateService: StateService
  ) { }

  ngOnInit() {
    setTimeout(()=> {
      this.stateService.setState('showFooter', true);
    });
  }

  ngOnDestroy(){
    this.stateService.setState('showFooter', false);
  }

}
