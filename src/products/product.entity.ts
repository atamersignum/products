import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => Property, property => property.products,{
        cascade: ["insert","update"]
    })

    @JoinTable({
        name: "product_properties", // table name for the junction table of this relation
        joinColumn: {
            name: "product",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "property",
            referencedColumnName: "id"
        }
    })
    properties: Property[];
     
}