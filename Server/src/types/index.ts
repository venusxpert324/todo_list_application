import { UserEntity } from "../entities";

export type PayloadType = {
  uuid: string;
};

export type CreateTitleType = {
  title: string;
  user_id: UserEntity;
};
