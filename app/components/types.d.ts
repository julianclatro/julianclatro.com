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