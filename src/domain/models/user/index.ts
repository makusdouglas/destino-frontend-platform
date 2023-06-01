export enum UserInterest {
  DISCARD = "discard",
  COLLECT = "collect",
  BOTH = "both",
}

export type UserModel = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  photo: string;
  pontuation: 0;
  type: string;
  interest: UserInterest;
  attendedAds: [];
  createdAt: string;
  updatedAt: string;
};
