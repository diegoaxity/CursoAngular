import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatProgressBarModule
];

@NgModule({
  declarations: [],
  imports: [
    MATERIAL_COMPONENTS
  ],
  exports: [
    MATERIAL_COMPONENTS
  ]
})
export class MaterialModule { }
