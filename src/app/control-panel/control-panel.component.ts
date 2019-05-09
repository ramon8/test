import { Component, OnInit } from '@angular/core';
import { ControlPanelService } from './shared/services';
import { StateService } from '../shared/services';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {

  public showFooter: boolean = false;

  constructor(
    public controlPanelService: ControlPanelService,
    private stateService: StateService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initializeSubscriptions();
    this.initializeComponent();
  }

  /** Initialize all the local variables of the component */
  private initializeComponent(): void {
    this.stateService.setState('showFooter', this.showFooter);
  }

  /** Initialize all subscriptions of this comopnent */
  private initializeSubscriptions(): void {
    this.stateService.stateChanges('showFooter').subscribe(
      value => {
        this.showFooter = value;
      }
    );
  }

}
