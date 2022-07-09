interface NamebaleAwareInterface {
  id: string;
  name: string;
}

export interface IPublication {
  assignedExtensions: string[];
  authorId: number;
  category: NamebaleAwareInterface;
  cover: string;
  createdDate: string;
  description: string;
  id: number;
  isFree: boolean;
  keywords: string[];
  likeCount: number;
  mood: NamebaleAwareInterface;
  name: string;
  pack: NamebaleAwareInterface;
  status: 3;
  type: NamebaleAwareInterface;
}
