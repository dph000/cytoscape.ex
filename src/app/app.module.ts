import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CytoscapeModule } from 'ngx-cytoscape';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CytoscapeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
