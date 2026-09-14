import { Query, Resolver } from '@nestjs/graphql';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private profileService: ProfileService) {}

  @Query(() => Profile, { nullable: true })
  profile() {
    return this.profileService.getProfile();
  }
}
