import { Category } from '@/categories/entities/category.entity';
import { BaseEntity } from '@/common/base.entity';
import { Cascade, Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';

@Entity()
export class Operation extends BaseEntity {
  @Property()
  concept!: string;

  @Property()
  amount!: number;

  @Property()
  type!: 'Entry' | 'Exit';

  @Property()
  date!: Date;

  @ManyToMany(() => Category, (category) => category.operations, {
    cascade: [Cascade.REMOVE],
    nullable: true,
    owner: true,
  })
  categories? = new Collection<Category>(this);

  constructor(partial: Partial<Operation>) {
    super();
    Object.assign(partial);
  }
}
