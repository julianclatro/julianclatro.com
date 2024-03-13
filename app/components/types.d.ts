interface Project {
  name: string;
  description: string;
  image_url: string;
  website: string;
  tags: string[];
  path?: string;
  gallery?: string[]
}

interface ProjectCard {
  data: Project;
}

interface Library {
  name: string;
  description: string;
  image_url: string;
  website: string;
  tags: string[];
}

interface LibraryCard {
  data: Library;
}