import { User } from './user.model';
import { Comment } from './comment.model';

export interface Post {
  _id?: string;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  author?: User;
  comments?: Comment[];
}
