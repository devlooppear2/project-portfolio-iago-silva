// src/components/i18n/static/static.tsx

import { FC } from 'react';
import * as Flags from 'country-flag-icons/react/3x2';
import { FlagProps } from '../../../types';

// FLAGS

export const BrazilFlag: FC<FlagProps> = ({ height, width }) => (
  <Flags.BR
    className="mx-2 mb-1"
    title="Brazil Flag"
    style={{ height, width }}
  />
);

export const UsaFlag: FC<FlagProps> = ({ height, width }) => (
  <Flags.US className="mx-2 mb-1" title="USA Flag" style={{ height, width }} />
);

export const SpainFlag: FC<FlagProps> = ({ height, width }) => (
  <Flags.ES
    className="mx-2 mb-1"
    title="Mexico Flag"
    style={{ height, width }}
  />
);
