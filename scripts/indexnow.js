/**
 * IndexNow automated submitter for 77 Review
 * Submits all pages to Bing & IndexNow search engines
 */

import https from 'node:https';

const HOST = '77-review.vercel.app';
const KEY = 'b52a5a5e712e405d802997ad0f5579a7';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/review/phytomem-one-brain-memory-review`,
  `https://${HOST}/review/prodentim-advanced-oral-probiotics-review`,
  `https://${HOST}/review/audisoothe-ear-health-tinnitus-drops-review`,
  `https://${HOST}/review/prostavive-prostate-health-vitality-review`,
  `https://${HOST}/review/neuroserge-memory-focus-brain-health-review`,
  `https://${HOST}/review/igenics-vision-breakthrough-eye-health-review`,
  `https://${HOST}/article/brain-glucose-metabolism-saffron-berberine-cognitive-health`,
  `https://${HOST}/article/oral-microbiome-probiotics-periodontal-health-science`,
  `https://${HOST}/article/auditory-nerve-hyperactivity-cochlear-microcirculation-tinnitus`,
  `https://${HOST}/article/prostate-cellular-health-nocturia-urinary-flow-science`,
  `https://${HOST}/article/neuro-immune-microglia-synaptic-plasticity-science`,
  `https://${HOST}/article/macular-carotenoids-retinal-photoreceptor-science`,
  `https://${HOST}/category/health-wellness`,
  `https://${HOST}/category/fitness-sports`,
  `https://${HOST}/category/supplements-nutrition`,
  `https://${HOST}/category/product-reviews-comparisons`,
  `https://${HOST}/comparisons`,
  `https://${HOST}/ingredients`,
  `https://${HOST}/about`,
  `https://${HOST}/editorial-policy`,
  `https://${HOST}/methodology`,
  `https://${HOST}/medical-review`,
  `https://${HOST}/affiliate-disclosure`,
  `https://${HOST}/corrections`,
  `https://${HOST}/contact`,
  `https://${HOST}/privacy`,
  `https://${HOST}/terms`
];

async function submitToIndexNow(endpointHost, endpointPath = '/indexnow') {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: URL_LIST
    });

    const options = {
      hostname: endpointHost,
      port: 443,
      path: endpointPath,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
        'User-Agent': '77Review-IndexNow-Client/1.0'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        resolve({
          endpoint: endpointHost,
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          responseBody: data
        });
      });
    });

    req.on('error', (e) => {
      reject({ endpoint: endpointHost, error: e.message });
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  console.log(`Submitting ${URL_LIST.length} URLs to IndexNow for host ${HOST}...`);
  console.log(`Key location: ${KEY_LOCATION}`);

  const endpoints = ['api.indexnow.org', 'www.bing.com'];

  for (const ep of endpoints) {
    try {
      const res = await submitToIndexNow(ep);
      console.log(`[${ep}] Status: ${res.statusCode} ${res.statusMessage}`);
      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log(`  -> Successfully submitted to ${ep}! (HTTP ${res.statusCode})`);
      } else {
        console.log(`  -> Response: ${res.responseBody || 'No body'}`);
      }
    } catch (err) {
      console.error(`[${ep}] Failed:`, err);
    }
  }
}

main();
