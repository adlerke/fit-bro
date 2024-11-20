import 'styled-components';

import { ThemeType } from '~/config/theme/types';

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}