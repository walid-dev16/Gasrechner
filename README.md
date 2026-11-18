# Gasrechner

Gasrechner is a small React app that estimates a gas bill from consumption in kilowatt-hours. Enter the kWh in the input field and the total updates as you type. The example rate is fixed at €0.26 per kWh, so 100 kWh gives an estimate of €26.

## Run locally

With Node.js and npm installed, run the following commands from the project directory.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Use `npm run build` to produce the production build.

## How the calculation works

The [input form](src/components/InputForm.jsx) dispatches each change to the [Redux Toolkit slice](src/slice/gasSlice.js). The slice multiplies consumption by the fixed rate and the form displays the result in euros.
