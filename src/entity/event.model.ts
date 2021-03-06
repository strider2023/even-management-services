import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from './base.model';
import { Audience } from './audience.enum';

@Entity()
export class Event extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", nullable: false })
    eventName: string;

    @Column({ type: "text", nullable: false })
    eventDescription: string;

    @Column({ type: "text", nullable: false })
    eventType: string;

    @Column({
        type: "enum",
        enum: Audience,
        default: Audience.OPEN,
        nullable: false
    })
    audience: Audience;

    @Column({ type: "int", default: -1, nullable: false })
    maxAudience: number;

    @Column({ type: "datetime", default: () => 'NOW()', nullable: false })
    eventStart: string;

    @Column({ type: "datetime", default: () => 'NOW()', nullable: false })
    eventEnd: string;

    @Column({ type: "text", nullable: true })
    eventLiveURL: string;
}