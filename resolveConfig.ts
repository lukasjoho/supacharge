import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from './tailwind.config';

type Colors = {
  [key: string]: string | Colors;
};

const fullConfig = resolveConfig(tailwindConfig);
const colors = fullConfig.theme?.colors as { [key: string]: string };
export default colors;
