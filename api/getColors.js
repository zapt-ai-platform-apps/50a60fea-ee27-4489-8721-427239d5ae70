import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.PROJECT_ID
    }
  }
});

export default async function handler(req, res) {
  try {
    const response = await fetch('http://www.colr.org/json/colors/random/66');
    if (!response.ok) {
      throw new Error('Failed to fetch colors');
    }
    const data = await response.json();
    const colors = data.colors.filter(color => color.hex).map(color => ({
      hex: color.hex
    }));
    res.status(200).json(colors);
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error fetching colors:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}