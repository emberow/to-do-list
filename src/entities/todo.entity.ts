import { BaseEntity, Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import {Tag} from './tag.entity'

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

    @Column()
    public isDelete: boolean;

    @ManyToMany(() => Tag, tag => tag.name)
    @JoinTable()
    tags: Tag[];
}