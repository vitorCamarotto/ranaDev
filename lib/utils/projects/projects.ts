import type { Project } from '@/types/project';
import { websiteStack, pyPlotHeat, pythonNeuralStack } from '../tech-stack';

const projects: Project[] = [
  {
    title: 'PersonalWebsite',
    repoLink: 'https://github.com/vitorCamarotto/ranaDev',
    demoLink: 'https://rana-dev.com/',
    techStack: websiteStack,
  },
  {
    title: 'Cedotte',
    repoLink: 'https://github.com/vitorCamarotto/C.',
    demoLink: 'https://cedotte.netlify.app/',
    techStack: websiteStack,
  },
  {
    title: 'Obragest',
    repoLink: 'https://github.com/vitorCamarotto/obragest',
    demoLink: 'https://obragest.netlify.app/',
    techStack: websiteStack,
  },
  {
    title: 'PyPlot',
    repoLink: 'https://github.com/vitorCamarotto/OrdinaryDifferentialEquations-pyPlot',
    demoLink: '',
    techStack: pyPlotHeat,
  },
  {
    title: 'PythonNeural',
    repoLink: 'https://github.com/vitorCamarotto/PyArtificialNeuralNetworks',
    demoLink: '',
    techStack: pythonNeuralStack,
  }
]

export default projects;
