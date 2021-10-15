import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraGateComponent } from './camera/camera-gate/camera-gate.component';
import { CameraPremiseComponent } from './camera/camera-premise/camera-premise.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "report", component: ReportComponent },
  { path: "gate", component: CameraGateComponent },
  { path: "premise", component: CameraPremiseComponent },
  { path: "", redirectTo: "dashboard" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
