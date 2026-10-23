import { z } from "zod";

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/**
 * Placeholder Web3Forms access key.
 * Replace this string with your real access key from https://web3forms.com
 * (it is passed in the form payload below, so there is a single place to swap it).
 */
export const WEB3FORMS_ACCESS_KEY = "af4f1d9c-4bb1-4493-9481-c4238959425a";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please tell me your name.")
    .max(100, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("That email address doesn't look right.")
    .max(255, "Email is too long."),
  phone: z.string().trim().max(30, "Phone number is too long.").optional(),
  topic: z.string().trim().min(1).max(60),
  message: z
    .string()
    .trim()
    .min(10, "A few more words, please — tell me a little about your concern.")
    .max(2000, "Message is too long."),
});

export type ContactInput = z.infer<typeof contactSchema>;

type MinimalResponse = { ok: boolean; json: () => Promise<{ success?: boolean; message?: string }> };

/**
 * Posts the contact form to Web3Forms from the browser — no backend required,
 * which keeps the site fully static (deployable to GitHub Pages).
 */
export async function sendToWeb3Forms(
  data: ContactInput,
  fetchImpl: (url: string, init?: RequestInit) => Promise<MinimalResponse> = fetch as never,
): Promise<{ success?: boolean; message?: string }> {
  const res = await fetchImpl(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: "Dr. Sehar Ikram — Website contact form",
      ...data,
    }),
  });
  const body = await res.json();
  if (!res.ok || !body.success) {
    throw new Error(body.message || "Submission failed");
  }
  return body;
}
