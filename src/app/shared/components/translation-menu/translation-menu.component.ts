import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
    selector: 'app-translation-menu',
    templateUrl: './translation-menu.component.html',
    styleUrls: ['./translation-menu.component.scss'],
})
export class TranslationMenuComponent implements OnInit {

  
  public languages: { label: string, value: string, selected?: boolean, command: (event: any) => void }[] = [];
   
  // public languages = [
    //     { label: 'languages.ca', value: 'ca', selected: false, command: ()=>{} },
    //     { label: 'languages.en', value: 'en', selected: true, command: ()=>{} },
    //     { label: 'languages.es', value: 'es', selected: false, command: ()=>{} },
    // ]

    /** Stores the current selected language. */
    public selectedLanguage: string;

    constructor(
        private translateService: TranslateService
    ) { }

    ngOnInit() {
        this.translateService.onLangChange.subscribe((result: LangChangeEvent) => {
            this.selectedLanguage = result.lang;
            this.markItemAsSelected();
        });

        // Gets the languages translation group and mounts the language selection menu.
        this.translateService.get('languages').subscribe(result => {
            for (const key of Object.keys(result)) {
                this.languages.push({
                    label: result[key],
                    value: key,
                    command: (value: any) => {
                        // event.originalEvent: Browser event
                        // event.item: menuitem metadata
                        this.translateService.use(value);
                    }
                });
            }

            this.markItemAsSelected();
        });

    }

    public changeLenguage(language?: string): void {
        this.translateService.use(language);
    }

    /**
    * Marks as selected the chosen language.
    * @param itemValue The value of the selected language item.
    */
    private markItemAsSelected() {

        for (const item of this.languages) {
            item.selected = this.selectedLanguage === item.value ? true: false;
        }

    } // markItemAsSelected



}
