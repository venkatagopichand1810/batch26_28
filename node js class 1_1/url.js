// const url = require("url");

// const googleUrl = "https://www.google.com/search?q=images&sca_esv=4a5c3741dee32086&sxsrf=AE3TifPuRMhu74aIXDG---u6mujq_EyDaA%3A1762095776470&source=hp&ei=oHIHadePGvWY4-EP5_bEyAU&iflsig=AOw8s4IAAAAAaQeAsM61FMmn7C";

// // parse the url
// const parsedURL = url.parse(googleUrl, true);

// console.log("Host", parsedURL.host);
// console.log("Hostname", parsedURL.hostname);
// console.log("port", parsedURL.port);
// console.log("Pathname", parsedURL.pathname);
// console.log("query", parsedURL.query);
// console.log("hash", parsedURL.hash);
// console.log("protocol", parsedURL.protocol)


const url = require("url");
const urlObject = {
    protocol: "https",
    hostname: "venkat.com",
    port: 4001, 
    pathname: "/mentor",
    query: {
        id: 123, 
        name: "venkat"
    }
}

// format url object
const formattedURL = url.format(urlObject);
console.log("formatted url", formattedURL)