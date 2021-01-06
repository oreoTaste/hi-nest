import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { Episode } from '../entities/episode.entity';
import { CoreOutput } from './core/core.dto';

@InputType()
export class CreateEpisodeInput extends PickType(
  Episode,
  ['story', 'title'],
  InputType,
) {
  @Field(() => Int)
  podcastId: number;
}

@ObjectType()
export class CreateEpisodeOutput extends CoreOutput {}
