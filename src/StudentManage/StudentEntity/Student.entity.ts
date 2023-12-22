
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("StudentDatas")
export class StudentDatas {

    @Column({ type: 'bigint', })
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ type: 'varchar', nullable: false })
    Name: string;

    @Column({ type: 'varchar', nullable: false })
    Class: string;

    @Column({ type: 'varchar' })
    EmailId: string;

    @Column({ type: 'varchar', nullable: true })
    Password: string;


}