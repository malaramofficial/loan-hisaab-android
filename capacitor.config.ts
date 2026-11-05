import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.malaramofficial.loanhisaab',
  appName: 'लोन हिसाब',
  webDir: 'www',
  server: {
    url: 'https://app-cudzoy.v2.appdeploy.ai/',
    cleartext: false,
    androidScheme: 'https'
  },
  android: {
    allowMixedContent: false
  }
};

export default config;
