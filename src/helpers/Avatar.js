import { createAvatar } from '@dicebear/core';
import { personas } from '@dicebear/collection';

export const generateUniqueAvatar = seed => {
  const avatar = createAvatar(personas, {
    seed: seed.toString(),
    radius: 50,
    size: 44,
    backgroundColor: [
      'b6e3f4',
      'c0aede',
      'd1d4f9',
      'ffd5dc',
      '9FBAAE',
      'CBDED3',
      'FFC531',
      'ffdfbf',
    ],
    backgroundType: ['gradientLinear', 'solid'],
    clothingColor: ['6dbb58', '54d7c7', '456dff'],
    hair: ['bald', 'beanie'],
    eyes: ['glasses', 'open'],
  });

  return avatar.toString();
};
