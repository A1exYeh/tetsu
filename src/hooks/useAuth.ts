import supabase from '../lib/supabase';

export default function useAuth() {
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

  return { signIn, signUp, signOut, getUser };
}
