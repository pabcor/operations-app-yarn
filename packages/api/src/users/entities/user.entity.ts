import { BaseEntity } from '@/common/base.entity';
import { Entity, Property } from '@mikro-orm/core';

@Entity()
export class User extends BaseEntity {
  @Property()
  email!: string;

  @Property()
  password!: string;

  @Property()
  refreshToken!: string;

  constructor(partial: Partial<User>) {
    super();
    Object.assign(partial);
  }
}
