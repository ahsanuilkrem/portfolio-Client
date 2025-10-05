
export interface Project {
  id: number;
  title: string;
  description: string;
  gitFrontend: string;
  gitBackend: string;
  liveUrl: string;
  thumbnail: string;
  features: string[];
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface Blog {
  id: number;
  title: string;
  content: string;
  thumbnail?: string;
  isFeatured: boolean;
  tags: string[];
  views: number;
  authorId: number;
  createdAt: string; 
  updatedAt: string; 
};
