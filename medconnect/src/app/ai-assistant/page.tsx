import { headers } from 'next/headers';
import { App } from '@/components/app';
import { getAppConfig, getOrigin } from '@/lib/utils';

export default async function AIAssistantPage() {
  const hdrs = await headers();
  const origin = getOrigin(hdrs);
  const appConfig = await getAppConfig(origin);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              AI Medical Assistant
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Connect with our AI-powered medical assistant for instant support and guidance.
            </p>
            <App appConfig={appConfig} />
          </div>
        </div>
      </div>
    </div>
  );
}
