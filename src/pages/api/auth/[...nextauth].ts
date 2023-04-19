import NextAuth, { DefaultSession } from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { handleAuthApi } from "../handleSignUpApi";


export interface Session {
    id_token: string & DefaultSession["user"];
}

export interface UserType {
    accessToken: string;
    refreshToken: string;
    username: string;
}

export interface SessionType {
    data: {
        expires: string;
        jwt: string;
        user: UserType;
    };
    status: "loading" | "authenticated" | "unathenticated";
}

export default NextAuth({
    // debug: true, // Debug log
    providers: [
        // OAuth authentication providers...
        AppleProvider({
            clientId: `${process.env.APPLE_CLIENT_ID}`,
            clientSecret: `${process.env.APPLE_CLIENT_SECRET}`,
            authorization: {
                params: {
                    scope: "name email",
                    response_mode: "form_post",
                    response_type: "code",
                },
            },
        }),
        GoogleProvider({
            clientId: `${process.env.GOOGLE_CLIENT_ID}`,
            clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                    // scope: "openid"
                },
            },
        }),
        FacebookProvider({
            clientId: `${process.env.FACEBOOK_CLIENT_ID}`,
            clientSecret: `${process.env.FACEBOOK_CLIENT_SECRET}`,
        }),
    ],
    cookies: {
        callbackUrl: {
            name: `next-auth.callback-url`,
            options: {
            //   httpOnly: true,
              sameSite: "None",
              path: "/",
              secure: true,
            },
          },
        pkceCodeVerifier: {
            name: "next-auth.pkce.code_verifier",
            options: {
                httpOnly: true,
                sameSite: "none",
                path: "/",
                secure: true,
            },
        },
    },
    secret: process.env.JWT_SECRET,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({token, account, profile, user, trigger}: any) {
            console.log("trigger", trigger);
            // Trigger will be set to 'signIn' if the user is signing in or 'signUp' if the user is signing up. It's one time thing.
            if ((trigger === "signIn" || trigger === "signUp") && account !== null) {
                console.log("callback jwt - ", trigger, account.provider, account);

                let res = null;
                switch (account.provider) {
                    case "google":
                        res = await handleAuthApi(`${process.env.NEXT_PUBLIC_SP_API}api/user/gplus`, {
                            jwt: account.id_token,
                        });

                        break;
                    case "facebook":
                        res = await handleAuthApi(`${process.env.NEXT_PUBLIC_SP_API}api/user/fb`, {
                            accessToken: account.access_token,
                            userID: account.providerAccountId,
                            expiresIn: account.expires_at,
                        });
                        console.log("facebook:", res.data);
                        // Error { status: 400, text: 'invalid fb auth' }
                        // The accessToken is not valid, maybe Facebook key / secret is not in dev site?
                        break;
                    case "apple":
                        res = await handleAuthApi(`${process.env.NEXT_PUBLIC_SP_API}api/user/apple`, {
                            authorization: {
                                code: account.access_token,
                                id_token: account.id_token,
                            },
                            user: {
                                email: account.email,
                                firstName: account.first_name,
                                lastName: account.last_name,
                                provider: account.provider,
                            },
                        });

                        console.log("appleSignIn:", res.data);
                        break;
                }

                token.idToken = res?.data.apikey;
                token.firstName = res?.data.user.first_name;
                token.lastName = res?.data.user.last_name;
                token.provider = account.provider;
            }

            return token;
        },

        async session({session, token, user}: any) {
            session.idToken = token.idToken;
            session.firstName = token.firstName;
            session.lastName = token.lastName;
            session.provider = token.provider;

            return session;
        },

        // async redirect({url, baseUrl}) {
        //     // Allows relative callback URLs
        //     if (url.startsWith("/")) {
        //         return `${baseUrl}${url}`;
        //     }

        //     // TODO: Below is how redirect works by default. Comment it out and fix it.
        //     // // Allows callback URLs on the same origin
        //     // else if (new URL(url).origin === baseUrl) return url

        //     // return baseUrl
        //     return url; // Just pass the url
        // },
    },
});
