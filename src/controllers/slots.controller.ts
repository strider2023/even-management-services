import { Request, Response } from "express";
import { Connection } from "typeorm";

export class SlotsController {

    connection: Connection;

    constructor(app: any, conn: Connection) {
        this.connection = conn;
        // Configure routes
        app.get("/api/event/:eventId/slots", this.getSlots);
        app.get("/api/event/:eventId/slot/:slotId", this.getSlot);
        app.post("/api/event/:eventId/slot/create", this.createSlot);
        app.patch("/api/event/:eventId/slot/:slotId/update", this.updateSlot);
        app.delete("/api/event/:eventId/slot/:slotId/remove", this.deleteSlot);
    }

    getSlots(req: Request, res: Response) {
        res.send("Hello world!");
    };

    getSlot(req: Request, res: Response) {
        res.send("Hello world!");
    };

    createSlot(req: Request, res: Response) {
        res.send("Hello world!");
    };

    updateSlot(req: Request, res: Response) {
        res.send("Hello world!");
    };

    deleteSlot(req: Request, res: Response) {
        res.send("Hello world!");
    };
}