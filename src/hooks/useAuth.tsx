import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { Session } from '@supabase/supabase-js';
import supabase from '../lib/supabase';

type AuthContextType = {
  signIn: (email: string, password: string) => Promise<any>;
  signUp: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<any>;
  getUser: () => Promise<any>;
  session: Session | null;
  loading: boolean;
};

export const SessionContext = createContext<AuthContextType | null>(null);

export default function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInitialSession = async () => {
      const {
        data: { session: initialSession },
      } = await supabase.auth.getSession();
      setSession(initialSession);
      setLoading(false);
    };

    getInitialSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        setSession(null);
        setLoading(false);
      } else if (session) {
        setSession(session);
        console.log(session);
        setLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string) => {
    return supabase.auth.signUp({ email, password });
  };

  const signIn = async (email: string, password: string) => {
    return supabase.auth.signInWithPassword({ email, password });
  };

  const signOut = async () => {
    return supabase.auth.signOut();
  };

  const getUser = () => {
    const user = supabase.auth.getUser();
    return user;
  };

  const auth: AuthContextType = {
    signIn,
    signUp,
    signOut,
    getUser,
    session,
    loading,
  };

  return (
    <SessionContext.Provider value={auth}>{children}</SessionContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useAuth has no session!');
  }

  return context;
}
