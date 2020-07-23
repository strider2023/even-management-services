import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { BaseEntity } from './base.model';
import { Event } from './event.model';

@Entity()
export class Booking extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Event)
    @JoinColumn()
    event: Event;

    @Column({ type: "int", nullable: true })
    slotId: string;

    @Column({ type: "int", nullable: false })
    userId: string;

    @Column({ type: "int", default: -1, nullable: false })
    adultCount: number;

    @Column({ type: "int", default: -1, nullable: false })
    childCount: number;

    @Column({ type: "text", nullable: false })
    comment: string;
}