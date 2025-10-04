
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