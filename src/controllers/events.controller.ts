import { Request, Response } from "express";
import { Event } from "../entity/event.model";
import { Audience } from "../entity/audience.enum";
import { EventsRepository } from "../repositories/event.repository";

export class EventsController {

    constructor(app: any) {
        app.get("/api/events", this.getEvents);
        app.post("/api/event", this.createEvent);
        app.get("/api/event/:eventId", this.getEvent);
        app.patch("/api/event/:eventId", this.updateEvent);
        app.delete("/api/event/:eventId", this.deleteEvent);
    }

    getEvents(req: Request, res: Response) {
        const eventsRepository = new EventsRepository();
        eventsRepository.getEvents(req.query).then(resp => {
            res.send(resp);
        });
    };

    getEvent(req: Request, res: Response) {
        const eventsRepository = new EventsRepository();
        eventsRepository.getEventById(Number(req.params.eventId)).then(resp => {
            res.send(resp);
        });
    };

    createEvent(req: Request, res: Response) {
        const event = new Event();
        event.eventName = req.body.eventName;
        event.eventDescription = req.body.eventDescription;
        event.audience = Audience.OPEN;
        event.maxAudience = req.body.maxAudience;
        event.eventStart = req.body.eventStart;
        event.eventEnd = req.body.eventEnd;
        event.eventType = req.body.eventType;
        event.eventLiveURL = req.body.eventLiveURL;
        const eventsRepository = new EventsRepository();
        eventsRepository.createEvent(event).then((resp: any) => {
            res.send(resp.id);
        });
    };

    updateEvent(req: Request, res: Response) {
        res.send("Hello world!");
    };

    deleteEvent(req: Request, res: Response) {
        res.send("Hello world!");
    };
}