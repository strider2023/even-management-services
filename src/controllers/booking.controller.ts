import { Request, Response } from "express";
import { Connection } from "typeorm";

export class BookingController {

    connection: Connection;

    constructor(app: any, conn: Connection) {
        this.connection = conn;
        // Configure routes
        app.get("/api/event/:eventId/bookings", this.getBookings);
        app.get("/api/event/:eventId/booking/:bookingId", this.getBooking);
        app.post("/api/event/:eventId/booking/create", this.createBooking);
        app.patch("/api/event/:eventId/booking/:bookingId/update", this.updateBooking);
        app.delete("/api/event/:eventId/booking/:bookingId/remove", this.deleteBooking);
    }

    getBookings(req: Request, res: Response) {
        res.send("Hello world!");
    };

    getBooking(req: Request, res: Response) {
        res.send("Hello world!");
    };

    createBooking(req: Request, res: Response) {
        res.send("Hello world!");
    };

    updateBooking(req: Request, res: Response) {
        res.send("Hello world!");
    };

    deleteBooking(req: Request, res: Response) {
        res.send("Hello world!");
    };
}