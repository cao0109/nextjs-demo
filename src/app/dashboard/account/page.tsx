import { createClient } from "@/lib/supabase/server";

export async function generateMetadata() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  return {
    title: `${user?.user?.email} - Account`,
    description: `Account for ${user?.user?.email}`,
  };
}

export default async function AccountPage() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  return (
    <div className="flex flex-col gap-4">
      <h1>Account</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
