import { Component } from '@angular/core';
import { UserChartComponent } from './components/user-chart/user-chart.component';
import { PostChartComponent } from './components/post-chart/post-chart.component';
import { CategoryChartComponent } from './components/category-chart/category-chart.component';
import { ReportedPostChartComponent } from './components/reported-post-chart/reported-post-chart.component';
import { UniqueVisitorChartComponent } from './components/unique-visitor-chart/unique-visitor-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    UserChartComponent,
    PostChartComponent,
    CategoryChartComponent,
    ReportedPostChartComponent,
    UniqueVisitorChartComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
