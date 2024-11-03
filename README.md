# 66 Color Trending

## Description

66 Color Trending is a web application that showcases 66 trending colors fetched from an external API. The app displays these colors in a responsive grid layout, allowing users to explore the latest color trends easily.

## User Journey

1. **Landing on the App**

   - When the user opens the app, they are presented with a visually appealing interface showing a grid of colors.
   - Each grid item displays a color swatch representing one of the trending colors.

2. **Exploring Colors**

   - Users can scroll through the grid to view all 66 trending colors.
   - Hovering over a color swatch displays the HEX code of the color.

3. **Responsive Design**

   - The app is fully responsive and adjusts seamlessly across different screen sizes, ensuring a consistent experience on desktops, tablets, and mobile devices.

## External API

The app uses the [Colr API](http://www.colr.org) to fetch random colors.

No API keys or environment variables are required for the Colr API.

## Environment Variables

The following environment variables are required for Sentry error logging:

- `VITE_PUBLIC_SENTRY_DSN`: Your Sentry DSN.
- `VITE_PUBLIC_APP_ENV`: The app environment (e.g., `development` or `production`).
- `VITE_PUBLIC_APP_ID`: Your app ID.
- `PROJECT_ID`: Your project ID.

Please set these variables in a `.env` file at the root of the project.