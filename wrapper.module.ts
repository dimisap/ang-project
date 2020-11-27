import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { WrapperComponent } from './wrapper/wrapper.component';



@NgModule({
  declarations: [HeaderComponent, ContentComponent, NavComponent, FooterComponent, WrapperComponent],
  imports: [
    CommonModule
  ],
  exports:[WrapperComponent]
})
export class WrapperModule { }
