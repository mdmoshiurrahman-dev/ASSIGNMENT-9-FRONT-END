export interface EventJoin {
  events: string[];
  participant_email: string;
  _id: string;
}

export interface EventJoinNeeds {
  events: string[];
  participant_email: string;
  _id: string;
  event_id: string;
}
