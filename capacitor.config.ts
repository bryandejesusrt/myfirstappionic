import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myfirstapp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
