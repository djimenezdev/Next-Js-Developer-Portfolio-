import { IVariant } from '@utils/types';
export const variant: { hidden: IVariant; visible: IVariant } = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};
