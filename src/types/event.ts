export type IEventRes = IEvent[]
export interface IEvent {
  _id: string;
  event_title: string;
  category: string;
  location: string;
  event_date: string; // Can be Date if you parse it later
  time: string;
  event_cover_image: string;
  event_description: string;
  event_create_date: string; // Can be Date if you parse it later
}