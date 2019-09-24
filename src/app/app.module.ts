import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DraggableDirective } from './draggable.directive';
import { DroppableDirective } from './droppable.directive';
import { DragService } from './drag.service';
import { MaterialModule } from './material';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MapContainerComponent,
    DraggableDirective,
    DroppableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    DragDropModule
  ],
  providers: [
    DragService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
