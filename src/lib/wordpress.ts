import { WordPressPost } from "@/types/wordpress";

/**
 * Mengambil daftar artikel terbit terbaru dari WordPress REST API.
 *
 * @param limit Jumlah artikel yang diambil (default: 5)
 * @returns Array dari WordPressPost
 */
export async function getLatestPosts(limit: number = 5): Promise<WordPressPost[]> {
  const baseUrl = process.env.WORDPRESS_API_URL;

  if (!baseUrl) {
    throw new Error(
      "Konfigurasi WORDPRESS_API_URL belum disetel di file environment (.env.local)."
    );
  }

  const cleanBaseUrl = baseUrl.replace(/\/+$/, "");
  const params = new URLSearchParams({
    per_page: limit.toString(),
    status: "publish",
    _embed: "true",
  });

  const url = `${cleanBaseUrl}/posts?${params.toString()}`;

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Gagal mengambil data artikel dari WordPress API (${response.status} ${response.statusText}): ${url}`
      );
    }

    const posts: WordPressPost[] = await response.json();
    return posts;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Koneksi ke WordPress REST API gagal: ${error.message}`);
    }
    throw new Error(
      "Terjadi kesalahan yang tidak diketahui saat menghubungi WordPress REST API."
    );
  }
}
