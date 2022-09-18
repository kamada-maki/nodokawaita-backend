import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  accountName: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  icon: string;
}
