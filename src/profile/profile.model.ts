import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Employment, LinkType, Location } from '@prisma/client';

registerEnumType(LinkType, { name: 'LinkType' });
registerEnumType(Location, { name: 'Location' });
registerEnumType(Employment, { name: 'Employment' });

@ObjectType()
export class Link {
  @Field(() => Int) id: number;
  @Field(() => LinkType) type: LinkType;
  @Field() url: string;
}

@ObjectType()
export class Skill {
  @Field(() => Int) id: number;
  @Field() title: string;
}

@ObjectType()
export class Experience {
  @Field(() => Int) id: number;
  @Field() company: string;
  @Field() position: string;
  @Field(() => Location) location: Location;
  @Field(() => Employment) employment_type: Employment;
  @Field({ nullable: true }) highlights?: string;
  @Field() startDate: Date;
  @Field({ nullable: true }) endDate?: Date;
}

@ObjectType()
export class Project {
  @Field(() => Int) id: number;
  @Field() title: string;
  @Field({ nullable: true }) description?: string;
  @Field({ nullable: true }) url?: string;
}

@ObjectType()
export class Profile {
  @Field(() => Int) id: number;
  @Field() name: string;
  @Field() about: string;
  @Field(() => [Link]) links: Link[];
  @Field(() => [Skill]) skills: Skill[];
  @Field(() => [Experience]) experience: Experience[];
  @Field(() => [Project]) projects: Project[];
}
