import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { CameraComponent } from './camera/camera.component';
import { MaterialModule } from '../material/material.module';
import { ChartsModule } from 'ng2-charts';
import { CameraGateComponent } from './camera/camera-gate/camera-gate.component';
import { CameraPremiseComponent } from './camera/camera-premise/camera-premise.component';


@NgModule({
  declarations: [DashboardComponent, ReportComponent, CameraComponent, CameraGateComponent, CameraPremiseComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ChartsModule
  ],
})
export class DashboardModule { }
