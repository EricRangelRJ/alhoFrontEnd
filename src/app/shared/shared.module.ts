import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';
import { DataPipe } from './pipes/data.pipe';

@NgModule({
  declarations: [
    DataPipe,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    DataPipe, AppMaterialModule, ReactiveFormsModule
  ]
})
export class SharedModule { }
