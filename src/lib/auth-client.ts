import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  // You can pass client configuration here
})

export const {
  signIn,
  signUp,
  signOut,
  useSession,
} = authClient
