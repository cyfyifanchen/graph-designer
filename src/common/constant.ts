const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost"
const PORT = process.env.NEXT_PUBLIC_SERVER_PORT || 49483
const PREFIX = "/api/dev-server/v1"

export const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === "true"
export const DEFAULT_APP = "localhost"
export const DEFAULT_EXTENTION_GROUP = "default"
export const API_URL = `${BASE_URL}:${PORT}${PREFIX}`
export const DEFAULT_HANDLE_HEIGHT = 40
export const DEFAULT_NODE_WIDTH = 220

