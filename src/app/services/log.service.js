import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";


function init(){Sentry.init({
  dsn: "https://b15ec8e750df4244b74ec866301f3cde@o4504853691432960.ingest.sentry.io/4504853811625984",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});}
function log(error){
  Sentry.captureException(error)
}

const logger={
  init,log
}
export default logger