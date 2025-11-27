import { ProjectCards } from '@/lib/ProjectCard';
import { FocusCards } from '../ui/focus-cards';

const ProjectLists = () => {
  return (
    <div>
      <FocusCards cards={ProjectCards} />
    </div>
  );
};

export default ProjectLists;
