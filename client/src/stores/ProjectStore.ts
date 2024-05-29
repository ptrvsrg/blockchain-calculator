export type ProjectConfig = {
  backendUrl: string
  mode: string
}

export const projectConfig: ProjectConfig = {
  backendUrl: import.meta.env.VITE_BACKEND_URL,
  mode: import.meta.env.MODE,
}
