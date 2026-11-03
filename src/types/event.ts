export type IEvents = Event[];
export interface Event {
  _id: string;
  creator_name: string;
  creator_email: string;
  creator_image: string;
  event_title: string;
  category: string;
  location: string;
  event_date: string; // 
  time: string; 
  event_cover_image: string;
  event_description: string;
  event_create_date: string; 
}

