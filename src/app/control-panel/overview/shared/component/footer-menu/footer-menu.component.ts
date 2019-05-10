import { Component, OnInit, ViewChild } from '@angular/core';
import { OverviewService } from '../../services/overview.service';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
})
export class FooterMenuComponent implements OnInit {

  @ViewChild('footer') footer;
  showFooter: boolean;

  constructor(
    public overviewService: OverviewService
  ) { }

  ngOnInit() {
    this.showFooter = false;
    this.setFooterMenuPosition();
  }

  public onClickFooter(): void {
    if (this.showFooter) this.footer.nativeElement.className = 'footer-menu-container goDown';
    else this.footer.nativeElement.className = 'footer-menu-container goUp';
    this.showFooter = !this.showFooter;
  }


  private setFooterMenuPosition(): void {
    if (this.showFooter) this.footer.nativeElement.style.bottom = '0rem';
    else this.footer.nativeElement.style.bottom = '-9rem';
  }
}
