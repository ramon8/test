import { Component, OnInit } from '@angular/core';
import { OverviewService } from '../../services/overview.service';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
})
export class FooterMenuComponent implements OnInit {

  constructor(
    public overviewService: OverviewService
  ) { }

  ngOnInit() {
    //TODO: Arreglar el estilo de este componente no esta del todo muy bien y no es responsive
  }
}
