import { NgModule } from '@angular/core';
import { MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatToolbarModule,
         MatExpansionModule,
         MatProgressSpinnerModule,
         MatPaginatorModule,
         MatGridListModule,
         MatDialogModule
       } from '@angular/material';

@NgModule({
    exports: [
        MatInputModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatPaginatorModule
    ]
})
export class AngularMaterialModule {

}
