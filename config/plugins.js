module.exports = ({ env }) => {
  const allowedIPs = env('MCP_ALLOWED_IPS');
  const ipConfig = !allowedIPs
    ? '*'
    : allowedIPs === '*'
      ? '*'
      : allowedIPs.split(',').map(ip => ip.trim());

  return {
    mcp: {
      enabled: true,
      config: {
        session: {
          type: 'memory',
          max: 20,
          ttlMs: 600000,
          updateAgeOnGet: true
        },
        allowedIPs: ipConfig,
      }
    }
  };
};