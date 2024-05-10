import type { TechStack } from '@/types/tech-stack';

const websiteStack: TechStack[] = [
  {
    name: 'Nuxt',
    icon: 'mdi:nuxt',
    color: '#14b8a6',
    darkModeOnly: false,
  },
  {
    name: 'Vuejs',
    icon: 'mdi:vuejs',
    color: '#41b883',
    darkModeOnly: false,
  },
  {
    name: 'Tailwind',
    icon: 'mdi:tailwind',
    color: '#0ea5e9',
    darkModeOnly: false,
  },
  {
    name: 'Vuetify',
    icon: 'mdi:vuetify',
    color: '#7dd3fc',
    darkModeOnly: true,
  },
  {
    name: 'Javascript',
    icon: 'mdi:language-javascript',
    color: '#eab308',
    darkModeOnly: false,
  },
  {
    name: 'i18n',
    icon: 'simple-icons:i18next',
    color: '#14b8a6',
    darkModeOnly: false,
  },
  {
    name: 'Netlify',
    icon: 'simple-icons:netlify',
    color: '#00c7b7',
    darkModeOnly: false,
  },
  {
    name: 'Bun',
    icon: 'devicon-plain:bun',
    color: '#fef3c7',
    darkModeOnly: true,
  },
  {
    name: 'GoogleFonts',
    icon: 'simple-icons:googlefonts',
    color: '#be185d',
    darkModeOnly: false,
  }
]

const pyPlotHeat: TechStack[] = [
  {
    name: 'Python',
    icon: 'mdi:language-python',
    color: '#06b6d4',
    darkModeOnly: false,
  },
  {
    name: 'Matplotlib',
    icon: 'devicon-plain:matplotlib',
    color: '#22d3ee',
    darkModeOnly: false,
  },
  {
    name: 'Numpy',
    icon: 'simple-icons:numpy',
    color: '#38bdf8',
    darkModeOnly: false,
  },
]

const pythonNeuralStack: TechStack[] = [
  {
    name: 'Python',
    icon: 'mdi:language-python',
    color: '#06b6d4',
    darkModeOnly: false,
  },
  {
    name: 'PyTorch',
    icon: 'simple-icons:pytorch',
    color: '#ea580c',
    darkModeOnly: false,
  },
  {
    name: 'Numpy',
    icon: 'simple-icons:numpy',
    color: '#38bdf8',
    darkModeOnly: false,
  },
  {
    name: 'Pandas',
    icon: 'simple-icons:geopandas',
    color: '#2563eb',
    darkModeOnly: false,
  }
]


export {
  websiteStack,
  pyPlotHeat,
  pythonNeuralStack
}