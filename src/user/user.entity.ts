import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { } from "@nestjs/typeorm";

@Entity()
export class UserEntity extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    email: string;
}