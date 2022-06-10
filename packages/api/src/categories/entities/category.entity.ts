import { BaseEntity } from '@/common/base.entity';
import { Operation } from '@/operations/entities/operation.entity';
import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';

@Entity()
export class Category extends BaseEntity {
  @Property()
  name!: string;
  
  @ManyToMany(() => Operation, (operation) => operation.categories, {
    nullable: true,
  })
  operations? = new Collection<Operation>(this);

  constructor(partial: Partial<Category>) {
    super();
    Object.assign(partial);
  }
}
