import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { CgraficoComponent } from './../components/cgrafico/cgrafico.component';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { InvrementadorComponent } from '../components/invrementador/invrementador.component';

@NgModule
({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        InvrementadorComponent,
        CgraficoComponent

    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        CgraficoComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
     
    ]

})

export class PagesModule { }
