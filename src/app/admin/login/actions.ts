"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type LoginState = { error?: string } | undefined;

export async function signIn(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "ایمیل و رمز عبور را وارد کنید." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    if (error.code === "email_not_confirmed") {
      return {
        error:
          "ایمیل هنوز تایید نشده. لینک تاییدیه‌ای که Supabase فرستاده را در ایمیلت بزن، بعد دوباره وارد شو.",
      };
    }
    return { error: `ورود ناموفق: ${error.message}` };
  }

  redirect("/admin");
}
