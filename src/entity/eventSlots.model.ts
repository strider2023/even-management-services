import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { BaseEntity } from './base.model';
import { Event } from './event.model';

@Entity()
export class EventSlots extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Event)
    @JoinColumn()
    event: Event;

    @Column({ type: "text", nullable: false })
    slotName: string;

    @Column({ type: "text", nullable: false })
    slotDescription: string;

    @Column({ type: "int", default: -1, nullable: false })
    maxAudience: number;

    @Column({ type: "datetime", default: () => 'NOW()', nullable: false })
    slotStart: string;

    @Column({ type: "datetime", default: () => 'NOW()', nullable: false })
    slotEnd: string;
}