export function getHealth() {
  return { status: "ok", service: "tcc-backend", timestamp: new Date().toISOString() };
}
