import { Component } from '@angular/core';
import { ActivityService } from '../../../services/activity.service';
import { Activity } from '../../../core/models/activity.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html'
})
export class ActivitiesComponent {

  activities: Activity[] = [];

  constructor(private activityService: ActivityService) {
    this.activities = this.activityService.getActivities();
  }

}