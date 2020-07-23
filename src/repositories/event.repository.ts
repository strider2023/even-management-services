import { getRepository, Like } from "typeorm";
import { Event } from "../entity/event.model";

export class EventsRepository {

    eventRepository: any;

    constructor() {
        this.eventRepository = getRepository(Event);
    }

    async createEvent(event: Event) {
        const resp = await this.eventRepository.save(event);
        console.log(`Event, ${event.eventName} created successfully.`);
        return resp;
    }

    async getEventById(eventId: number) {
        const event = await this.eventRepository.findOne({ id: eventId });
        if (event) {
            console.log("getEventById", `Event Found: ${event.eventName}`);
        } else {
            console.log("getEventById", `Event not found for the id ${eventId}`);
        }
        return event;
    }

    async getEvents(query: any) {
        const count = query.count || 10;
        const offset = query.offset || 0;
        const filter = query.keyword || '';
        const orderBy = query.orderBy || 'DESC';
        const events = await this.eventRepository.findAndCount(
            {
                where: { eventName: Like('%' + filter + '%') },
                order: { eventName: orderBy },
                take: count,
                skip: offset
            }
        );
        if (events) {
            console.log("getEvents", `Events count: ${events.length}.`);
        } else {
            console.log("getEvents", `No events found.`);
        }
        return events;
    }
}