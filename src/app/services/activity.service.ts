import { Injectable } from '@angular/core';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  getActivities(): Activity[] {
    return [
      {
        id: 1,
        title: "Coffee Meetup",
        date: "March 12",
        time: "10:00 AM",
        location: "Stuttgart Center",
        participants: [
          { id: 1, name: "Alice", avatar: "assets/avatars/alice.jpg" },
          { id: 2, name: "Bob", avatar: "assets/avatars/bob.jpg" },
        ],
        maxParticipants: 5
      },
      {
        id: 2,
        title: "Evening Walk",
        date: "March 14",
        time: "6:30 PM",
        location: "City Park",
        participants: [
          { id: 3, name: "Charlie", avatar: "assets/avatars/charlie.jpg" }
        ],
        maxParticipants: 3
      },
      {
        id: 3,
        title: "Park Meetup",
        date: "March 15",
        time: "11:00 AM",
        location: "Aalen Center",
        participants: [
          { id: 1, name: "Alice", avatar: "assets/avatars/alice.jpg" },
          { id: 2, name: "Bob", avatar: "assets/avatars/bob.jpg" },
          { id: 3, name: "Charlie", avatar: "assets/avatars/charlie.jpg" }

        ],
        maxParticipants: 7
      },
      {
        id: 3,
        title: "Casino Meetup",
        date: "March 25",
        time: "11:00 PM",
        location: "Aalen Center",
        participants: [
          { id: 1, name: "Bob", avatar: "assets/avatars/bob.jpg" },
          { id: 2, name: "Charlie", avatar: "assets/avatars/charlie.jpg" },
          { id: 3, name: "Alice", avatar: "assets/avatars/alice.jpg" }


        ],
        maxParticipants: 10
      }
    ];


  }

}