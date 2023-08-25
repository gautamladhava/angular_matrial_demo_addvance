import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule, JsonPipe, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { ProgressSpinnerMode, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {
  MatSlideToggleModule,
  _MatSlideToggleRequiredValidatorModule,
} from '@angular/material/slide-toggle';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTreeModule} from '@angular/material/tree';
import {DragDropModule} from '@angular/cdk/drag-drop';
const module: any[] = [

  MatTreeModule,
  NgSwitch,
  DragDropModule,
  CdkAccordionModule,
  MatTooltipModule,
  NgSwitchCase,
  MatTabsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatButtonModule,
  AsyncPipe,
  MatTableModule,  
  MatMenuModule,
  MatRadioModule,
  MatStepperModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatInputModule,
  MatAutocompleteModule,
  NgFor,
  MatExpansionModule,
  MatNativeDateModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatListModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDividerModule,
  MatProgressBarModule,
  MatCheckboxModule,
  MatCheckboxModule,
  JsonPipe,
  MatChipsModule,
  MatDatepickerModule,
  MatCardModule,
  MatRadioModule,
  NgIf,
  MatDividerModule,
  MatProgressBarModule,
  MatSliderModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  FormsModule,
  _MatSlideToggleRequiredValidatorModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    module
  ],
  exports: [
    module
  ]
})
export class MatModule { }
