const repo = "https://raw.githubusercontent.com/yumy-wang/loon-clash-rules/main";

const policy = {
  proxy: "Proxies",
  direct: "DIRECT",
  reject: "REJECT"
};

const providerDefaults = {
  type: "http",
  behavior: "classical",
  format: "text",
  interval: 3600
};

function provider(path) {
  return {
    ...providerDefaults,
    url: `${repo}/${path}`,
    path: `./ruleset/my/${path.split("/").pop()}`
  };
}

function main(config) {
  config["rule-providers"] = {
    ...(config["rule-providers"] || {}),
    my_reject: provider("rules/reject.list"),
    my_direct: provider("rules/direct.list"),
    my_proxy: provider("rules/proxy.list")
  };

  config.rules = [
    `RULE-SET,my_reject,${policy.reject}`,
    `RULE-SET,my_direct,${policy.direct}`,
    `RULE-SET,my_proxy,${policy.proxy}`,
    ...(config.rules || [])
  ];

  return config;
}
