import {
  Component,
  AfterViewInit,
  ContentChildren,
  QueryList,
  ViewChildren,
  ElementRef,
  HostListener
} from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'rob-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterViewInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  @ViewChildren('tabButton') tabButtons: QueryList<
    ElementRef<HTMLButtonElement>
  >;

  public activeIndex = 0;

  /**
   * Set the first tab to active.
   */
  public ngAfterViewInit(): void {
    this.tabs.first.isActive = true;
  }

  @HostListener('keyup', ['$event'])
  public handleKeypress($event: KeyboardEvent) {
    const { key } = $event;
    if (key === 'ArrowRight') {
    }
  }

  /**
   * Handle the user's click on one of the titles and set that tab to active.
   */
  public setActiveTab(index: number) {
    this.activeIndex = index;
    this.deactivateAll();
    this.tabs.toArray()[index].isActive = true;
  }

  /**
   * Deactivate all the tabs
   */
  public deactivateAll() {
    this.tabs.forEach((tab) => {
      tab.isActive = false;
    });
  }
}
