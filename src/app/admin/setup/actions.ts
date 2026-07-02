"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type SetupState = { error?: string; info?: string } | undefined;

export async function createFirstAdmin(
  _prevState: SetupState,
  formData: FormData,
): Promise<SetupState> {
  const code = String(formData.get("code") ?? "");
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm") ?? "");

  if (code !== process.env.ADMIN_SETUP_SECRET) {
    return { error: "کد راه‌اندازی نامعتبر است." };
  }

  if (!email || !password) {
    return { error: "ایمیل و رمز عبور را وارد کنید." };
  }

  if (password.length < 8) {
    return { error: "رمز عبور باید حداقل ۸ کاراکتر باشد." };
  }

  if (password !== confirm) {
    return { error: "تکرار رمز عبور مطابقت ندارد." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return { error: "ساخت حساب ناموفق بود: " + error.message };
  }

  if (data.session) {
    redirect("/admin");
  }

  return {
    info: "حساب ساخته شد. اگر تایید ایمیل در Supabase فعال است، لینک تاییدیه را در ایمیل خود بزنید و سپس از صفحه ورود وارد شوید.",
  };
}
