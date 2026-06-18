# Loon and Clash Shared Rules

This repository stores shared rule lists for Loon, Clash Verge / Mihomo, and
Clash for Windows.

The intended setup is:

- Keep your airport subscription URL only inside Loon / Clash clients.
- Put only non-sensitive routing rules in this repository.
- Reference the raw GitHub rule files from each client.

Do not commit node information, subscription URLs, tokens, passwords, or API
keys.

## Files

- `rules/proxy.list`: domains that should use your proxy policy.
- `rules/direct.list`: domains that should connect directly.
- `rules/reject.list`: domains that should be blocked.
- `examples/loon.conf`: Loon remote rule example.
- `examples/clash-verge-script.js`: Clash Verge / Clash Verge Rev script example.
- `examples/clash-for-windows-parsers.yaml`: Clash for Windows parser example.

## Raw URLs

Use these raw URLs in Loon and Clash:

```text
https://raw.githubusercontent.com/yumy-wang/loon-clash-rules/main/rules/proxy.list
https://raw.githubusercontent.com/yumy-wang/loon-clash-rules/main/rules/direct.list
https://raw.githubusercontent.com/yumy-wang/loon-clash-rules/main/rules/reject.list
```

## Rule Format

Use rules that both Loon and Mihomo / Clash can understand:

```text
DOMAIN-SUFFIX,openai.com
DOMAIN-KEYWORD,anthropic
DOMAIN,example.com
IP-CIDR,1.1.1.1/32,no-resolve
```

Keep rules split by target policy. For example, do not put direct rules and
proxy rules in the same file.

## Update Workflow

1. Edit one of the files in `rules/`.
2. Commit and push to GitHub.
3. Refresh remote rules / providers in Loon and Clash.

GitHub raw URLs may have a short cache delay, so updates are not always visible
immediately.
