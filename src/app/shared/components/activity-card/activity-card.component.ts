import { Component, Input } from '@angular/core';
import { Activity } from '../../../core/models/activity.model';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent {
  @Input() activity!: Activity;

defaultAvatar = 'assets/avatars/default-avatar.png'; // make sure this file exists
  emptySlots(): undefined[] {
    const emptyCount = this.activity.maxParticipants - this.activity.participants.length;
    return Array(emptyCount);
  }
}