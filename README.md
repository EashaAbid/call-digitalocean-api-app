# DigitalOcean API Call

This is a simple React application that demonstrates making an HTTP call to the DigitalOcean API and handling the response.

## Features

- Makes an HTTP GET request to the DigitalOcean API's `/account` endpoint.
- Logs any non-200 status codes (for demonstration purposes).
- Displays the response message if the HTTP request is successful.
- Displays an error message if the HTTP request fails.

## Usage

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/http-call-example.git
```

Navigate to the project directory:

```bash
cd http-call-example
```

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm start
```

Open your web browser and visit http://localhost:3000 to view the app. The page will reload when you make changes.
Click the "Call Sammy" button to initiate the HTTP call to the DigitalOcean API. You may also see any lint errors in the console.

To start testing the application, run:

```bash
npm test
```

This launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Run the following command to build the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

```bash
npm run build
```

When you execute this command, build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Installation

If you want to use this component in your own React project, you need to install Axios (the HTTP client library used in this example) by running:

```bash
npm install axios
```

or,

```bash
yarn add axios
```

## References

This application is referenced in the following articles:

- [Use DataDog to monitor applications on App Platform]()
   In this article, we use this application to demonstrate a simple case of logging. This app is uploaded on DigitalOcean App Platform and the logs App Platform collects of this app are forwarded to DataDog for monitoring.
