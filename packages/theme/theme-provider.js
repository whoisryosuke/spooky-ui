import { component } from 'haunted';
import { ThemeProvider } from './src/theme-provider.js';

customElements.define('spooky-theme', component(ThemeProvider));
