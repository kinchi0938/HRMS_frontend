export interface IComment {
  userid: string;
  text: string;
  createdAt: string;
  author: string;
}

export interface CommentDTO {
  username: string;
  text: string;
  author: string;
}

interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}
