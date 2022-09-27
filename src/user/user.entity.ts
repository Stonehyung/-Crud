import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: number;





}