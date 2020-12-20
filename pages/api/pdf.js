const token = "secret";
const repo = "resume";
const owner = "hsteinmueller";
const api = "api.github.com/repos";

export async function getPdfFromGithub() {
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization:
        "Basic " + Buffer.from(`${owner}:${token}`).toString("base64"),
    },
  };

  const info = await fetch(
    `https://${api}/${owner}/${repo}/releases/latest`,
    requestOptions
  );
  const json = await info.json();
  console.log(json);
  console.log("Asset url:", json.assets[0].url);

  // see: https://github.com/octokit/rest.js/issues/967
  let url = `https://${token}:@${api}/${owner}/${repo}/releases/assets/${json.assets[0].id}`;
  const pdf = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/octet-stream",
    },
  });
  const stream = await pdf.buffer();
  const b64 = await stream.toString("base64");

  // Combine the data with the slug and content
  return {
    b64,
  };
}
