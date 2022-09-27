import { Column, CreateDateColumn, PrimaryColumn } from "typeorm";

export class BaseEntity {

    @PrimaryColumn()
    id?: number;

    @CreateDateColumn({ nullable: true })
    createAt?: Date;

    @CreateDateColumn({ nullable: true })
    updateAt?: Date;


}