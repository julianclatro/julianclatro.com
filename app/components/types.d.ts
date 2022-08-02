interface Project {
  name: string;
  description: string;
  image_url: string;
  website: string;
  tags: string[];
}

interface ProjectCard {
  data: Project;
}