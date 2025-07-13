import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const mockUsers: { id: string; email: string; passwordHash: string; name: string }[] = [];

async function initializeMockUsers() {
  if (mockUsers.length === 0) {
    mockUsers.push({
      id: "1",
      email: "user@example.com",
      passwordHash: await bcrypt.hash("password123", 10),
      name: "Demo User",
    });
    mockUsers.push({
      id: "2",
      email: "admin@example.com",
      passwordHash: await bcrypt.hash("admin123", 10),
      name: "Admin User",
    });
    mockUsers.push({
      id: "3",
      email: "ubaidraza@gmail.com",
      passwordHash: await bcrypt.hash("ubaidraza", 9),
      name: "Ubaid",
    });
    mockUsers.push({
      id: "4",
      email: "canonyousuf@gmail.com",
      passwordHash: await bcrypt.hash("canonyousuf", 9),
      name: "Canon",
    });
    console.log("Mock users initialized.");
  }
}

initializeMockUsers();

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
          return null;
        }

        const user = mockUsers.find((u) => u.email === credentials.email);

        if (!user) {
          return null;
        }

        const isValidPassword = await bcrypt.compare(credentials.password, user.passwordHash);

        if (isValidPassword) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to home page after login
      const callbackUrl = new URL(url).searchParams.get("callbackUrl");
      return callbackUrl || `${baseUrl}/home`; // Use /home as default
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };