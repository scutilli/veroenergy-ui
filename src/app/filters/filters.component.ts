import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MenuItemModel, ContextMenu } from '@syncfusion/ej2-navigations';
import { getInstance } from '@syncfusion/ej2-base';
import { Browser } from '@syncfusion/ej2-base';
import { ContextMenuComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @ViewChild('contextmenu')
  public contextmenu: ContextMenuComponent;

  public data: string[] = ['Snooker', 'Tennis', 'Cricket', 'Football', 'Rugby'];
  public content: string = '';

  constructor() {}

  public menuItems: MenuItemModel[] = [
    {
      text: 'Cut'
    },
    {
      text: 'Copy'
    },
    {
      text: 'Paste'
    },
    {
      separator: true
    },
    {
      text: 'Link'
    },
    {
      text: 'New Comment'
    }
  ];

  ngOnInit() {}

  btnClick(event: any) {
    var clientRect = (event.target as Element).getBoundingClientRect();
    this.contextmenu.open(
      clientRect.bottom,
      clientRect.left + clientRect.width
    );
  }
}
