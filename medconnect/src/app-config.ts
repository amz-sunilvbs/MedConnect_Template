import type { AppConfig } from './lib/types';

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'MedConnect',
  pageTitle: 'AI Medical Assistant',
  pageDescription: 'An AI-powered medical assistant to help with your healthcare needs',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,

  logo: '/lk-logo.svg',
  accent: '#002cf2',
  logoDark: '/lk-logo-dark.svg',
  accentDark: '#1fd5f9',
  startButtonText: 'Start Medical Consultation',
};
