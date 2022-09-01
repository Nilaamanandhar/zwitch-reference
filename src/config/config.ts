let dev = {
  // APP_BASE_URL: "https://dev.gallerist.biz",
  API_BASE_URL: "https://dev.api.gallerist.biz",

  // API_BASE_URL:
  // 	"https://v8s4i920w6.execute-api.eu-central-1.amazonaws.com/stage",
};

const qa = {
  APP_BASE_URL: "",
  API_BASE_URL: "https://api-qa.transfapay.com",
};

const uat = {
  APP_BASE_URL: "",
  API_BASE_URL: "https://api-uat.transfapay.com",
};

const production = {
  APP_BASE_URL: "",
  API_BASE_URL: "https://api.transfapay.com",
};

let config = null;
switch (process.env.NEXT_PUBLIC_APP_STAGE) {
  case "production":
    config = production;
    break;
  case "uat":
    config = uat;
    break;
  case "qa":
    config = qa;
    break;
  // Default to dev if not set
  default:
    console.log("dev");
    config = dev;
}

export default {
  // Include common config values here
  UPLOAD_PATH: "upload path",
  ...config,
};
