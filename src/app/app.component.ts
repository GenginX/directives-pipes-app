import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public LoremValue = 'LoremIpsum';
  public zupa = 'EXAMPLE';
  public JsonObject = {
    properties: 'lorem'
  };
  public birthday = Date.now();
  public isAuthenticated = false;
  public people: string[] = ['Adam Kowalski', 'Marcin Janiak', 'Robert Lewandowski'];
  public kebabCase = 'lore-ipsum-blablabla';
}
