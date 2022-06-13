import { BaseEntity, Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public thing: string;

    @CreateDateColumn()
    public createdAt: Date;

    @Column()
    public isFinish: boolean;
}