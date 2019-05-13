import { externalAPI, callFMScript, initialProps } from "fm-webviewer-bridge";
const api = externalAPI();
api.start();

const start = api.start;
const stop = api.stop;
const addMethods = api.addMethods;

export { start, stop, callFMScript, initialProps, addMethods };
