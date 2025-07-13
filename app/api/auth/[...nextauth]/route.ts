import NextAuth, { type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs" // Import bcrypt directly

// Mock user storage (for demonstration only - will reset on server restart)
const mockUsers: { id: string; email: string; passwordHash: string; name: string }[] = []

// Initialize mock users with hashed passwords on startup
async function initializeMockUsers() {
  if (mockUsers.length === 0) {
    mockUsers.push({
      id: "1",
      email: "user@example.com",
      passwordHash: await bcrypt.hash("password123", 10),
      name: "Demo User",
    })
    mockUsers.push({
      id: "2",
      email: "admin@example.com",
      passwordHash: await bcrypt.hash("admin123", 10),
      name: "Admin User",
    })
    mockUsers.push({
      id: "3",
      email: "ubaidraza@gmail.com",
      passwordHash: await bcrypt.hash("ubaidraza", 9),
      name: "Ubaid",
    })
    mockUsers.push({
      id: "4",
      email: "canonyousuf@gmail.com",
      passwordHash: await bcrypt.hash("canonyousuf", 9),
      name: "Canon",
    })
    console.log("Mock users initialized.")
  }
}

// Call initialization once
initializeMockUsers()

// authOptions should NOT be exported directly
const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }

        // Find user by email from mock storage
        const user = mockUsers.find((u) => u.email === credentials.email)

        if (!user) {
          return null // User not found
        }

        // Compare provided password with stored hashed password
        const isValidPassword = await bcrypt.compare(credentials.password, user.passwordHash)

        if (isValidPassword) {
          // Return a user object if authentication is successful
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          }
        }

        return null // Invalid credentials
      },
    }),
  ],
  pages: {
    signIn: "/login", // Ensure this matches your actual login page path
    signOut: "/logout", // Ensure this matches your actual logout page path (if you have one)
    error: "/login", // Redirect to login page on error
  },
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the user ID, email, and name in the JWT
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like user ID, email, and name from the JWT
      if (session.user) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = token.name as string
      }
      return session
    },
  },
  // You MUST set AUTH_SECRET in your environment variables for production.
  // It's used to sign and encrypt session tokens.
  // Generate a strong secret: openssl rand -base64 32
  secret: process.env.AUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
