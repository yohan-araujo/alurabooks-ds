import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbBotao } from '../components/AbBotao';

export default {
  title: 'Componentes/AbBotao',
  component: AbBotao,
} as ComponentMeta<typeof AbBotao>;

const Template: ComponentStory<typeof AbBotao> = () => <AbBotao />;

export const Primario = Template.bind({});
